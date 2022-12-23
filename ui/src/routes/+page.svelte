<script lang="ts">
	// import { goto } from '$app/navigation';
  import { loadingBox } from '$services/loadingMessage';
  import { onMount } from 'svelte'
  import extensions_list from './extensions.json';
  import * as allIonicIcons from 'ionicons/icons';
 
// create an interface for the extensions.json file
	interface Extension {
		name?: string;
		package?: string;
		size?: number;
		desc?: string;
		installed?: string;
		enabled?: boolean;
	}
  const extensions: Extension[] = extensions_list;

	// goto('/components/Splash');
	let installed_packages: any = [];
	let total_size: number = 0;
	let installed_extensions: any = [];
	let pg_version: string = '';
	let extension_search_text: string = '';
	// read extensions from extensions.json

	const get_info = async (script: string) => {
		const response = await fetch(`/cgi-bin/${script}.sh`);
  		const data = await response.text(); // .json();
		return data;		
	}
	const run_script = async (script: string, message: string) => {
		const loader = await loadingBox(message)
		const response = await fetch(script);
  		const data = await response.text(); // .json();
		const output = document.getElementById('output');
		if (output) {
			output.innerHTML = data;
		}
		loader.dismiss();
		try {
			installed_packages = (await get_info('get_installed_packages')).split('\n');
			total_size = parseInt((await get_info('get_installed_packages_total_size')).trim());			
			// set_installed_extensions();
		} catch (err) {
			installed_packages = [];
			total_size = 0;
		}
		reload();
	}
	const set_installed_extensions = (installed_extensions: any[]) => {
		for (let i = 0; i < installed_extensions.length; i++) {
			const e = installed_extensions[i];
			/* e:
				default_version: "2.1"
				installed_version: null
				name: "adminpack"
			*/
			const index = extensions.findIndex((ext: any) => ext.name === e.name);
			if (index > -1) {
				extensions[index].installed = e.default_version;
				extensions[index].enabled = (e.installed_version !== null);
			} else {
				console.error('set_installed_extensions could not find extension', e);
			}
		}
	}
	const reload = async () => {
		try {
			const installed_extensions_output = await get_info('get_extensions');
			try {
				installed_extensions = JSON.parse(installed_extensions_output)
				set_installed_extensions(installed_extensions);
			} catch (err) {
				console.error('error parsing installed extensions', err);
			}
		} catch (err) {
			console.error('reload error', err);
		}

	}
	const install_postgres = async (version: string) => {
		await run_script(`/cgi-bin/postgresql.sh?${version}`,`Installing PostgreSQL ${version}...`);
		pg_version = (await get_info('get_pg_version')).trim();
	}

	onMount(async () => {
		installed_packages = (await get_info('get_installed_packages')).split('\n');
		total_size = parseInt((await get_info('get_installed_packages_total_size')).trim());
		pg_version = (await get_info('get_pg_version')).trim();
		if (pg_version > '') {
			const installed_extensions_output = await get_info('get_extensions');
			try {
				installed_extensions = JSON.parse(installed_extensions_output)
			} catch (err) {
				console.error('error parsing installed extensions', err);
			}
			reload();
		}
	});
</script>
<ion-header>
	<ion-toolbar translucent="true">
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-title>Main Page</ion-title>
	</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">

	<h3>PostgreSQL: {pg_version || "Not installed"}</h3>

	{#if pg_version === ''}
		<ion-button expand="block" size="small" fill="outline" 
		on:click={() => {install_postgres("15")}}>Install PostgreSQL 15</ion-button>

		<ion-button expand="block" size="small" fill="outline" 
		on:click={() => {install_postgres("14")}}>Install PostgreSQL 14</ion-button>

		<ion-button expand="block" size="small" fill="outline" 
		on:click={() => {install_postgres("13")}}>Install PostgreSQL 13</ion-button>

		<ion-button expand="block" size="small" fill="outline" 
		on:click={() => {install_postgres("12")}}>Install PostgreSQL 12</ion-button>
	{/if}

	{#if pg_version > ''}

		<ion-searchbar 
			placeholder="Search extensions"
			debounce="500"
			on:ionChange={e => {
				extension_search_text = e.detail.value.trim();
			}}
		></ion-searchbar>

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
				{#if extension_search_text === '' 
					|| extension?.name?.toLowerCase().includes(extension_search_text.toLowerCase())
					|| extension?.package?.toLowerCase().includes(extension_search_text.toLowerCase())
					|| extension?.desc?.toLowerCase().includes(extension_search_text.toLowerCase())
				}
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
									on:click={() => { console.log('uninstall extensions not implemented')}} 
									size="small" fill="outline">{extension.installed}</ion-button>
								{:else}
								<ion-button 
									on:click={() => {run_script(`/cgi-bin/add.sh?${extension.package}`,`Installing package ${extension.package}...`)}} 
									size="small" fill="outline">Install</ion-button>
							{/if}
						</ion-col>
						<ion-col size="2" class="ion-text-center">					
							{#if extension.installed}
								<!-- {#if extension.enabled} -->
								<ion-toggle color="primary" 
								on:ionChange={() => {
									if (extension.enabled) 
									run_script(`/cgi-bin/disable_extension.sh?${extension.name}`,`Disabling extension ${extension.name}...`)
									else 
									run_script(`/cgi-bin/enable_extension.sh?${extension.name}`,`Enabling extension ${extension.name}...`)
								}}
								checked={extension.enabled}></ion-toggle>
									<!-- <ion-button 
									on:click={() => {run_script(`/cgi-bin/disable_extension.sh?${extension.name}`,`Disabling extension ${extension.name}...`)}} 
									size="small" fill="outline">Disable</ion-button>
								{:else}
									<ion-button 
									on:click={() => {run_script(`/cgi-bin/enable_extension.sh?${extension.name}`,`Enabling extension ${extension.name}...`)}} 
									size="small" fill="outline">Enable</ion-button>
								{/if} -->
							{:else}
								&nbsp;
							{/if}
						</ion-col>
						<!-- <ion-col>{extension.size}</ion-col> -->
					</ion-row>
					<ion-row>
						<ion-col size="12">&nbsp;</ion-col>
					</ion-row>
				{/if}
			{/each}		
		</ion-grid>
	{/if}

	<!-- <ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15-contrib-jit')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-contrib-jit',"Installing postgresql15-contrib-jit...")}}>
	postgresql15-contrib-jit</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgis')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgis',"Installing postgis...")}}>
	postgis</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15-plperl-contrib')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plperl-contrib',"Installing postgresql15-plperl-contrib...")}}>
	postgresql15-plperl-contrib</ion-button>
	
	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15-pltcl')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-pltcl',"Installing postgresql15-pltcl...")}}>
	postgresql15-pltcl</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15-plpython3')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plpython3',"Installing postgresql15-plpython3...")}}>
	postgresql15-plpython3</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15-plpython3-contrib')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plpython3-contrib',"Installing postgresql15-plpython3-contrib...")}}>
	postgresql15-plpython3-contrib</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-mysql_fdw')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-mysql_fdw',"Installing postgresql-mysql_fdw...")}}>
	postgresql-mysql_fdw</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-temporal_tables')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-temporal_tables',"Installing postgresql-temporal_tables...")}}>
	postgresql-temporal_tables</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-plpgsql_check')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-plpgsql_check',"Installing postgresql-plpgsql_check...")}}>
	postgresql-plpgsql_check</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-url_encode')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-url_encode',"Installing postgresql-url_encode...")}}>
	postgresql-url_encode</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-uint')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-uint',"Installing postgresql-uint...")}}>
	postgresql-uint</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-orafce')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-orafce',"Installing postgresql-orafce...")}}>
	postgresql-orafce</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-rum')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-rum',"Installing postgresql-rum...")}}>
	postgresql-rum</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-bdr-extension')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-bdr-extension',"Installing postgresql-bdr-extension...")}}>
	postgresql-bdr-extension</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-hypopg')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-hypopg',"Installing postgresql-hypopg...")}}>
	postgresql-hypopg</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-pllua')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-pllua',"Installing postgresql-pllua...")}}>
	postgresql-pllua</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-sequential-uuids')}
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-sequential-uuids',"Installing postgresql-sequential-uuids...")}}>
	postgresql-sequential-uuids</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-citus-bitcode')}
	on:click={() => {run_script('/cgi-bin/citus.sh',"Installing citus...")}}>
	citus**</ion-button> -->

	<!-- <ion-button expand="block" size="small" fill="outline" 
	on:click={() => {run_script('/cgi-bin/shared_ispell.sh',"Installing shared_ispell...")}}>
	shared_ispell**</ion-button> -->

	<!-- <ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-pg_cron')}
	on:click={() => {run_script('/cgi-bin/pg_cron.sh',"Installing pg_cron...")}}>
	pg_cron**</ion-button> -->

	<br/>** = requires PostgreSQL restart<br/>

	<pre id="output"></pre>

	Installed: 
	<div>{JSON.stringify(installed_packages)}</div>
	<div>Total size: {total_size.toLocaleString()} bytes</div>
	<div>Extensions: {JSON.stringify(extensions)}</div>
	<div>Installed Extensions: {JSON.stringify(installed_extensions)}</div>
	
</ion-content>

<style>
	.header_col {
		font-weight: bold;
	}
</style>