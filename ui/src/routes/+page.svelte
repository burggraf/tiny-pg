<script lang="ts">
	// import { goto } from '$app/navigation';
	import { loadingBox } from '$services/loadingMessage'
	import { onMount } from 'svelte'
	import extensions_list from './extensions.json'
	import * as allIonicIcons from 'ionicons/icons'
	import { servers, server, add_server, remove_server, update_server, set_active_server, get_active_server } from '$stores/servers.store'
	import type { Server } from '$stores/servers.store'

	// create an interface for the extensions.json file
	interface Extension {
		name?: string
		package?: string
		size?: number
		desc?: string
		installed?: string
		enabled?: boolean
	}
	const extensions: Extension[] = extensions_list
	let local_server: Server | undefined;
	let server_address = ''
	let server_title = ''
	// goto('/components/Splash');
	let installed_packages: any = []
	let total_size: number = 0
	let installed_extensions: any = []
	let pg_version: string = ''
	let server_type: string = ''
	let extension_search_text: string = ''
	let display_section = 'log'
	let output = ''
	// read extensions from extensions.json
	let repuser_password = ''
	let primary_host = ''
	let primary_port = ''
	let show_password = false
	let new_server_type = 'STANDALONE'

	const get_info = async (script: string) => {
		const response = await fetch(`${$server.url}/cgi-bin/${script}.sh`)
		const data = await response.text() // .json();
		return data
	}

	const post_test = async () => {
		console.log('post_test...')
		const response = await fetch(`${$server.url}/cgi-bin/post_test.sh`, {
			method: 'POST',
			headers: {
				//'Content-Type': 'application/json'
				'Content-Type': 'text/plain',
			},
			// body: 'aaa=aaa&bbb=1&ccc=true'
			body: JSON.stringify({
				aaa: 'aaa',
				bbb: 1,
				ccc: true,
				ddd: { thing: 'abc' },
			}),
		})
		const data = await response.text() // .json();
		output = data + '\n\n' + output
	}

	const run_script = async (script: string, payload: string, message: string) => {
		const loader = await loadingBox(message)

		const response = await fetch(script, {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: payload,
		})
		//const response = await fetch(script)
		const data = await response.text() // .json();
		output = message + '\n\n' + data + '\n\n' + output
		loader.dismiss()
		try {
			installed_packages = (await get_info('get_installed_packages')).split('\n')
			total_size = parseInt((await get_info('get_installed_packages_total_size')).trim())
			server_type = (await get_info('get_server_type')).trim()
			// set_installed_extensions();
		} catch (err) {
			installed_packages = []
			total_size = 0
		}
		reload()
	}
	const set_installed_extensions = (installed_extensions: any[]) => {
		for (let i = 0; i < installed_extensions.length; i++) {
			const e = installed_extensions[i]
			/* e:
				default_version: "2.1"
				installed_version: null
				name: "adminpack"
			*/
			const index = extensions.findIndex((ext: any) => ext.name === e.name)
			if (index > -1) {
				extensions[index].installed = e.default_version
				extensions[index].enabled = e.installed_version !== null
			} else {
				console.error('set_installed_extensions could not find extension', e)
			}
		}
	}
	const reload = async () => {
		try {
			const installed_extensions_output = await get_info('get_extensions')
			try {
				installed_extensions = JSON.parse(installed_extensions_output)
				set_installed_extensions(installed_extensions)
			} catch (err) {
				console.error('error parsing installed extensions', err)
			}
		} catch (err) {
			console.error('reload error', err)
		}
	}
	const install_postgres = async (version: string) => {
		await run_script(
			`${$server.url}/cgi-bin/postgresql.sh`,
			`${version}`,
			`Installing PostgreSQL ${version}...`
		)
		pg_version = (await get_info('get_pg_version')).trim()
	}

	$: $server, load_server();

	onMount(() => {
		// if ($server.url) {
		// 	load_server();
		// }
	})
	const load_server = async () => {
		console.log('load_server', $server)
		installed_packages = (await get_info('get_installed_packages')).split('\n')
		total_size = parseInt((await get_info('get_installed_packages_total_size')).trim())
		pg_version = (await get_info('get_pg_version')).trim()
		server_type = (await get_info('get_server_type')).trim()
		if (pg_version > '') {
			const installed_extensions_output = await get_info('get_extensions')
			try {
				installed_extensions = JSON.parse(installed_extensions_output)
			} catch (err) {
				console.error('error parsing installed extensions', err)
			}
			reload()
		}
	}
	const new_server = () => {
		local_server = { url:'', title: '', active: false }
	}
	const save_new_server = () => {
		if (local_server && local_server.url !== '' && local_server.title !== '') {
			add_server(local_server);
			set_active_server(local_server);
			load_server();
			local_server = undefined;
		}

	}
	const delete_server = () => {
		if ($server) {
			remove_server($server);
			if ($servers.length > 0) {
				set_active_server($servers[0]);
			} else {
				new_server();
			}
		}
	}
</script>

<ion-header>
	<ion-toolbar translucent="true">
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-title>{local_server? 'Add New Server' : ($server.title === '' ? 'Server' : $server.title)}</ion-title>
		<ion-buttons slot="end">
			{#if local_server}
				<ion-button fill="clear" size="large" on:click={() => {
					local_server = undefined;
				}}>
					<ion-icon slot="icon-only" icon={allIonicIcons.closeOutline} />
				</ion-button>
			{:else}
				<ion-button fill="clear" size="large" on:click={delete_server} >
					<ion-icon slot="icon-only" icon={allIonicIcons.trashOutline} />
				</ion-button>
				<ion-button fill="clear" size="large" on:click={new_server} >
					<ion-icon slot="icon-only" icon={allIonicIcons.addOutline} />
				</ion-button>
			{/if}
		</ion-buttons>
	</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
	{#if local_server}
	<ion-grid class="ion-padding grid375">
		<ion-row>
			<ion-col>Host URL</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>
				<ion-input
					on:ionChange={(e) => {
						if (local_server)
							local_server.url = e.detail.value
					}}
					class="inputItemWithIcon"
					type="text"
					value={local_server.url}
					placeholder="URL of database server"
				>
					<ion-icon
						class="inputIcon"
						icon={allIonicIcons.globeOutline}
						slot="start"
						size="large"
						color="medium"
					/>
				</ion-input>
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>Server Title</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>
				<ion-input
					on:ionChange={(e) => {
						if (local_server)
							local_server.title = e.detail.value
					}}
					class="inputItemWithIcon"
					type="text"
					value={local_server.title}
					placeholder="name of database server"
				>
					<ion-icon
						class="inputIcon"
						icon={allIonicIcons.textOutline}
						slot="start"
						size="large"
						color="medium"
					/>
				</ion-input>
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>
				<ion-button
					expand="block"
					size="large"
					fill="solid"
					on:click={() => {
						save_new_server();
					}}>Load Server</ion-button
				>
			</ion-col>
		</ion-row>
	</ion-grid>
	{/if}

	<!-- SERVER START -->
	{#if $server.url !== '' && !local_server} 
		<h3>PostgreSQL: {pg_version ? `${pg_version} ${server_type}` : 'Not installed'}</h3>

		<ion-button on:click={post_test}>post_test</ion-button>
		<br />

		{#if pg_version === ''}
			<ion-button
				expand="block"
				size="large"
				fill="solid"
				on:click={() => {
					install_postgres('15')
				}}>Install PostgreSQL 15</ion-button
			>

			<ion-button
				expand="block"
				size="large"
				fill="solid"
				on:click={() => {
					install_postgres('14')
				}}>Install PostgreSQL 14</ion-button
			>

			<ion-button
				expand="block"
				size="large"
				fill="solid"
				on:click={() => {
					install_postgres('13')
				}}>Install PostgreSQL 13</ion-button
			>

			<ion-button
				expand="block"
				size="large"
				fill="solid"
				on:click={() => {
					install_postgres('12')
				}}>Install PostgreSQL 12</ion-button
			>
		{:else}
			<ion-segment
				value={display_section}
				on:ionChange={(e) => {
					display_section = e.detail.value
				}}
			>
				<ion-segment-button value="log">
					<ion-label>Log</ion-label>
				</ion-segment-button>
				<ion-segment-button value="config">
					<ion-label>Configuration</ion-label>
				</ion-segment-button>
				<ion-segment-button value="extensions">
					<ion-label>Extensions</ion-label>
				</ion-segment-button>
			</ion-segment>
		{/if}

		{#if pg_version > '' && display_section === 'extensions'}
			<ion-searchbar
				placeholder="Search extensions"
				debounce="500"
				on:ionChange={(e) => {
					extension_search_text = e.detail.value.trim()
				}}
			/>

			<ion-grid>
				<ion-row>
					<ion-col size="8" class="header_col">
						<ion-grid>
							<ion-row>
								<ion-col size="6">Extension</ion-col>
								<ion-col size="6" class="ion-text-right">Package</ion-col>
							</ion-row>
						</ion-grid>
					</ion-col>
					<ion-col size="2" class="header_col">
						<ion-grid>
							<ion-row>
								<ion-col class="ion-text-center" size="12">Installed</ion-col>
							</ion-row>
						</ion-grid>
					</ion-col>
					<ion-col size="2" class="header_col">
						<ion-grid>
							<ion-row>
								<ion-col class="ion-text-center" size="12">Enabled</ion-col>
							</ion-row>
						</ion-grid>
					</ion-col>
				</ion-row>
				{#each extensions as extension}
					{#if extension_search_text === '' || extension?.name
							?.toLowerCase()
							.includes(extension_search_text.toLowerCase()) || extension?.package
							?.toLowerCase()
							.includes(extension_search_text.toLowerCase()) || extension?.desc
							?.toLowerCase()
							.includes(extension_search_text.toLowerCase())}
						<ion-row>
							<ion-col size="8">
								<ion-grid style="background-color: var(--ion-color-light); border: 1px solid;">
									<ion-row>
										<ion-col size="6"><b>{extension.name}</b></ion-col>
										<ion-col size="6" class="ion-text-right">{extension.package}</ion-col>
									</ion-row>
									<ion-row>
										<ion-col size="12">{extension.desc}</ion-col>
									</ion-row>
								</ion-grid>
							</ion-col>
							<ion-col size="2" class="ion-text-center">
								{#if extension.installed}
									<ion-button
										on:click={() => {
											console.log('uninstall extensions not implemented')
										}}
										size="small"
										fill="outline">{extension.installed}</ion-button
									>
								{:else}
									<ion-button
										on:click={() => {
											run_script(
												`${$server.url}/cgi-bin/add.sh`,
												`${extension.package}`,
												`Installing package ${extension.package}...`
											)
										}}
										size="small"
										fill="outline">Install</ion-button
									>
								{/if}
							</ion-col>
							<ion-col size="2" class="ion-text-center">
								{#if extension.installed}
									<ion-toggle
										color="primary"
										on:ionChange={() => {
											if (extension.enabled)
												run_script(
													`${$server.url}/cgi-bin/disable_extension.sh`,
													`${extension.name}`,
													`Disabling extension ${extension.name}...`
												)
											else
												run_script(
													`${$server.url}/cgi-bin/enable_extension.sh`,
													`${extension.name}`,
													`Enabling extension ${extension.name}...`
												)
										}}
										checked={extension.enabled}
									/>
								{:else}
									&nbsp;
								{/if}
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col size="12">&nbsp;</ion-col>
						</ion-row>
					{/if}
				{/each}
			</ion-grid>
		{/if}

		{#if display_section === 'log'}
			<pre>{output}</pre>
		{/if}

		{#if pg_version > '' && display_section === 'config'}
			<br />
			This {server_type} is currently running PostgreSQL {pg_version}<br />
			<br />
			Change it to:<br />
			<ion-segment
				value={new_server_type}
				on:ionChange={(e) => {
					new_server_type = e.detail.value
				}}
			>
				<ion-segment-button value="STANDALONE">
					<ion-label>STANDALONE</ion-label>
				</ion-segment-button>
				<ion-segment-button value="PRIMARY">
					<ion-label>PRIMARY</ion-label>
				</ion-segment-button>
				<ion-segment-button value="SECONDARY">
					<ion-label>SECONDARY</ion-label>
				</ion-segment-button>
			</ion-segment>

			<ion-grid class="ion-padding grid375">
				{#if new_server_type === 'SECONDARY'}
					<ion-row>
						<ion-col>
							<ion-label>Primary Server: IP or Domain</ion-label>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item class="gridItem" lines="none">
								<ion-input
									on:ionChange={(e) => {
										primary_host = e.detail.value
									}}
									class="inputItemWithIcon"
									type="text"
									placeholder="ip address or domain name"
								>
									<ion-icon
										class="inputIcon"
										icon={allIonicIcons.globeOutline}
										slot="start"
										size="large"
										color="medium"
									/>
								</ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-label>Primary Server Port</ion-label>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item class="gridItem" lines="none">
								<ion-input
									on:ionChange={(e) => {
										primary_port = e.detail.value
									}}
									class="inputItemWithIcon"
									type="text"
									placeholder="port number, i.e. 5432"
								>
									<ion-icon
										class="inputIcon"
										icon={allIonicIcons.gitNetworkOutline}
										slot="start"
										size="large"
										color="medium"
									/>
								</ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
				{/if}

				{#if new_server_type === 'PRIMARY' || new_server_type === 'SECONDARY'}
					<ion-row>
						<ion-col>
							<ion-label>Replication User (REPUSER) Password</ion-label>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item class="gridItem" lines="none">
								<ion-input
									on:ionChange={(e) => {
										repuser_password = e.detail.value
									}}
									class="inputItemWithIcon"
									type={show_password ? 'text' : 'password'}
									placeholder="repuser password"
								>
									<ion-icon
										class="inputIcon"
										icon={allIonicIcons.lockClosedOutline}
										slot="start"
										size="large"
										color="medium"
									/>
								</ion-input>
							</ion-item>
							<div class="ion-text-center" style="padding-top: 5px;">
								Show password?
								<ion-checkbox
									style="--size: 20px;;margin-left: 5px; --border-radius: 5px;"
									size="small"
									color="primary"
									on:ionChange={() => {
										show_password = !show_password
									}}
								/>
							</div>
						</ion-col>
					</ion-row>
				{/if}
			</ion-grid>

			{#if new_server_type === 'PRIMARY'}
				<ion-button
					expand="block"
					size="small"
					fill="outline"
					on:click={() => {
						run_script(
							`${$server.url}/cgi-bin/set_as_physical_primary.sh`,
							`${repuser_password}`,
							'Setting up server as physical PRIMARY'
						)
					}}
				>
					Set as physical PRIMARY
				</ion-button>
			{/if}

			{#if new_server_type === 'SECONDARY'}
				<ion-button
					expand="block"
					size="small"
					fill="outline"
					on:click={() => {
						run_script(
							`${$server.url}/cgi-bin/set_as_physical_secondary.sh`,
							`${repuser_password}&${primary_host}&${primary_port}`,
							'Setting up server as physical SECONDARY'
						)
					}}
				>
					Set as physical SECONDARY
				</ion-button>
			{/if}

			{#if new_server_type === 'STANDALONE'}
				<ion-button
					expand="block"
					size="small"
					fill="outline"
					on:click={() => {
						console.log('NOT IMPLEMENTED YET')
					}}
				>
					Set as STANDALONE server
				</ion-button>
			{/if}
		{/if}
	{/if}
	<!-- SERVER END -->
</ion-content>

<style>
	.grid375 {
		max-width: 375px;
	}
	.header_col {
		font-weight: bold;
	}
	.inputItemWithIcon {
		height: 50px;
		border: 1px solid rgb(212, 212, 212);
		background-color: var(--ion-background-color) !important;
		border-radius: 5px;
	}
	.inputIcon {
		padding-right: 10px;
	}
	.gridItem {
		--padding-start: 0px;
		--padding-end: 0px;
		--inner-padding-end: 0px;
	}
</style>
