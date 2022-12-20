<script lang="ts">
	// import { goto } from '$app/navigation';
	import { loadingBox } from '$services/loadingMessage';
  import { onMount } from 'svelte'
	// goto('/components/Splash');
	let installed_packages: any = [];
	const get_installed_pacakges = async () => {
		const response = await fetch('/cgi-bin/get_installed_packages.sh');
  		const data = await response.text(); // .json();
		installed_packages = data.split('\n');
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
		get_installed_pacakges();
	}
	onMount(() => {
		get_installed_pacakges();
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

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql15')}
	on:click={() => {run_script('/cgi-bin/postgresql.sh',"Installing PostgreSQL 15...")}}>Install PostgreSQL 15</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql14')}
	on:click={() => {run_script('/cgi-bin/postgresql.sh?14',"Installing PostgreSQL 14...")}}>Install PostgreSQL 14</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql13')}
	on:click={() => {run_script('/cgi-bin/postgresql.sh?13',"Installing PostgreSQL 13...")}}>Install PostgreSQL 13</ion-button>

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql12')}
	on:click={() => {run_script('/cgi-bin/postgresql.sh?12',"Installing PostgreSQL 12...")}}>Install PostgreSQL 12</ion-button>

	<h3>Extension Packs:</h3>
	<ion-button expand="block" size="small" fill="outline" 
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
	citus**</ion-button>

	<!-- <ion-button expand="block" size="small" fill="outline" 
	on:click={() => {run_script('/cgi-bin/shared_ispell.sh',"Installing shared_ispell...")}}>
	shared_ispell**</ion-button> -->

	<ion-button expand="block" size="small" fill="outline" 
	disabled={installed_packages.includes('postgresql-pg_cron')}
	on:click={() => {run_script('/cgi-bin/pg_cron.sh',"Installing pg_cron...")}}>
	pg_cron**</ion-button>

	<br/>** = requires PostgreSQL restart<br/>

	<pre id="output"></pre>

	Installed: 
	<div>{JSON.stringify(installed_packages)}</div>
</ion-content>
