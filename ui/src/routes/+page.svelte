<script lang="ts">
	import { goto } from '$app/navigation';
	import { loadingBox } from '$services/loadingMessage';
	// goto('/components/Splash');
	const run_script = async (script: string, message: string) => {
		const loader = await loadingBox(message)
		const response = await fetch(script);
  		const data = await response.text(); // .json();
		const output = document.getElementById('output');
		if (output) {
			output.innerHTML = data;
		}
		loader.dismiss();
	}
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

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/script-pg15.sh',"Installing PostgreSQL 15...")}}>Install PostgreSQL 15.1</ion-button>
	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/script-test.sh',"Testing...")}}>Test Script</ion-button>

	<h3>Extension Packs:</h3>
	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-contrib-jit',"Installing postgresql15-contrib-jit...")}}>
	postgresql15-contrib-jit</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgis',"Installing postgis...")}}>
	postgis</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plperl-contrib',"Installing postgresql15-plperl-contrib...")}}>
	postgresql15-plperl-contrib</ion-button>
	
	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-pltcl',"Installing postgresql15-pltcl...")}}>
	postgresql15-pltcl</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plpython3',"Installing postgresql15-plpython3...")}}>
	postgresql15-plpython3</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql15-plpython3-contrib',"Installing postgresql15-plpython3-contrib...")}}>
	postgresql15-plpython3-contrib</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-mysql_fdw',"Installing postgresql-mysql_fdw...")}}>
	postgresql-mysql_fdw</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-temporal_tables',"Installing postgresql-temporal_tables...")}}>
	postgresql-temporal_tables</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-plpgsql_check',"Installing postgresql-plpgsql_check...")}}>
	postgresql-plpgsql_check</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-url_encode',"Installing postgresql-url_encode...")}}>
	postgresql-url_encode</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-uint',"Installing postgresql-uint...")}}>
	postgresql-uint</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-orafce',"Installing postgresql-orafce...")}}>
	postgresql-orafce</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-rum',"Installing postgresql-rum...")}}>
	postgresql-rum</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-bdr-extension',"Installing postgresql-bdr-extension...")}}>
	postgresql-bdr-extension</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-hypopg',"Installing postgresql-hypopg...")}}>
	postgresql-hypopg</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-pllua',"Installing postgresql-pllua...")}}>
	postgresql-pllua</ion-button>

	<ion-button expand="block" fill="outline" 
	on:click={() => {run_script('/cgi-bin/add.sh?postgresql-sequential-uuids',"Installing postgresql-sequential-uuids...")}}>
	postgresql-sequential-uuids</ion-button>

	<pre id="output"></pre>
</ion-content>
