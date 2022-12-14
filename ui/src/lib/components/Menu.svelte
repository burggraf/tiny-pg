<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { pwaBeforeInstallPrompt, canInstall } from '$lib/services/pwa';

	import { menuController, modalController, registerMenu } from '$ionic/svelte';
	import { isPlatform } from '@ionic/core';
	import * as allIonicIcons from 'ionicons/icons';

	import IOSInstall from '$lib/components/IOSInstall.svelte';

	let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)
	export let side = 'start';
	import { showConfirm } from '$services/alert'
	import { servers, set_active_server } from '$stores/servers.store'

	// ** get package info
	const app_version = __APP_VERSION__;
	const app_name = __APP_NAME__;
	const app_homepage = __APP_HOMEPAGE__;
	const app_description = __APP_DESCRIPTION__;
	const app_menu_title = __APP_MENU_TITLE__;
	const app_menu_subtitle = __APP_MENU_SUBTITLE__;
	const app_theme_color = __APP_THEME_COLOR__;
	const app_background_color = __APP_BACKGROUND_COLOR__;
	// *******************

	import { toast } from '$services/toast'
	import { isOnline } from '$services/network.service'

	// this is unfortunately needed in order to have the menuController API function properly

	onMount(() => {
		registerMenu('mainmenu')
	})


	const appPages: Array<{ title: string, url: string; requireLogin: boolean; icon: any }> = [
		{ title: 'Profile', url: '/profile', icon: allIonicIcons.personOutline, requireLogin: true },
		{ title: 'Settings', url: '/settings', icon: allIonicIcons.settingsOutline, requireLogin: false },
		{ title: 'Info', url: '/info', icon: allIonicIcons.informationCircleOutline, requireLogin: false },
	]

	const closeAndNavigate = async (url: string) => {
		console.log('Navigate url', url);
		goto(url);

		menuController.close('mainmenu');
	};

	// hack because of visibility of menu in Chrome/Windows
	setTimeout(() => {
		hideMenu = false;
	}, 100);

	let iosInstall = isPlatform('ios') && !isPlatform('pwa');

	const showIOSinstall = async () => {
		const modal = await modalController.create({
			component: IOSInstall,
			componentProps: {},
			showBackdrop: true,
			backdropDismiss: false
		});

		modal.onDidDismiss().then((value) => {
			console.log('Dismissed the modal', value);
			if (value.role === 'backdrop') console.log('Backdrop clicked');
		});

		await modal.present();
	};
	const toggleOnlineStatus = async (e: any) => {
				await showConfirm({
					header: 'Manually set online status',
					message: `Force online status to <b>${$isOnline ? 'Offline' : 'Online'}</b>?`,
					okHander: async () => {
						isOnline.set(!$isOnline);
						toast(
							`Online status set to: <b>${$isOnline ? 'Online' : 'Offline'}</b>`,
							$isOnline ? 'success' : 'danger'
						)
					},
				})
		}
	const toggleDebugger = () => {
		const el = document.getElementById('debugger');
		if (el) {
			if (el.classList.contains('hidden')) {
				el.classList.remove('hidden')
			} else {
				el.classList.add('hidden')
			}
		}
	}
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>
		<ion-header>
			<ion-toolbar translucent="true">
				<ion-title>{app_menu_title}</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="">
			<p class="menu_subtitle">
				{app_menu_subtitle}
			</p>
			<ion-list>

				{#each $servers as server, i}
					<ion-menu-toggle auto-hide="false">
						<ion-item
							routerDirection="root"
							on:click={() => {
								set_active_server(server);
							}}
							lines="none"
							detail="false"
							class={''}
						>
							<ion-icon slot="start" icon={allIonicIcons.serverOutline}></ion-icon>
							<ion-label>{server.title}</ion-label>
						</ion-item>
					</ion-menu-toggle>
				{/each}

				{#each appPages as p, i}
					{#if !p.requireLogin }
						<ion-menu-toggle auto-hide="false">
							<ion-item
								routerDirection="root"
								on:click={() => {
									closeAndNavigate(p.url)
								}}
								lines="none"
								detail="false"
								class={$page.route?.id === p.url ? 'active-item' : ''}
							>
							<!--$page.path.includes(href) ? 'active-item' : ''-->
								<ion-icon slot="start" icon={p.icon} />
								<ion-label>{p.title}</ion-label>
							</ion-item>
						</ion-menu-toggle>
					{/if}
				{/each}

				<ion-item lines="none" />
				{#if iosInstall}
					<ion-item on:click={showIOSinstall} lines="none">
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item lines="none" />
				{/if}
				{#if $canInstall}
					<ion-item lines="none"
						on:click={() => {
							const prompt = $pwaBeforeInstallPrompt;
							prompt.prompt();
						}}
					>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item lines="none" />
				{/if}
			</ion-list>
		</ion-content>
		<ion-footer class="ion-padding">	  
	
			<div class="pointer centered" on:click={toggleDebugger}>v.{app_version}</div>
			<div id="debugger" class="hidden">			
			<span class="pointer"
				on:click={() => {localStorage.clear()}}>clear cache</span>
			<span class="pointer span-on-right"
				on:click={toggleOnlineStatus}
			>
				<ion-label color={$isOnline ? 'success' : 'danger'}
					><b>{$isOnline ? 'Online' : 'Offline'}</b></ion-label
				>
			</span>
		</div>
		</ion-footer>
	</ion-menu>

<style>
	ion-item {
		cursor: pointer;
	}
	.active-item {
		font-weight: bold;
	}

	.menuhide {
		display: none;
	}

	.hidden {
		display: none;
	}
	.pointer {
		cursor: pointer;
	}
	.span-on-right{
		text-align:right;
		float:right;
		padding-right:5px;
	}
	.centered {
		text-align: center;
	}
	ion-menu ion-content {
		--background: var(--ion-item-background, var(--ion-background-color, #fff));
	}

	ion-item:hover {
		--background: var(--ion-color-light);
		font-weight: bold;
		color: var(--ion-color-primary);
	}
	.menu_subtitle {
		margin-left:8px;
		margin-right:8px;
		text-align:center;
		color:var(--ion-color-medium)		
	}
	.login {
		margin-left: 10px;
		margin-right: 10px;
	}

</style>
