import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let installed_packages = [];
  let total_size = 0;
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>Main Page</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15") ? "disabled" : ""}>Install PostgreSQL 15</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql14") ? "disabled" : ""}>Install PostgreSQL 14</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql13") ? "disabled" : ""}>Install PostgreSQL 13</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql12") ? "disabled" : ""}>Install PostgreSQL 12</ion-button>

	<h3>Extension Packs:</h3>
	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15-contrib-jit") ? "disabled" : ""}>postgresql15-contrib-jit</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgis") ? "disabled" : ""}>postgis</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15-plperl-contrib") ? "disabled" : ""}>postgresql15-plperl-contrib</ion-button>
	
	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15-pltcl") ? "disabled" : ""}>postgresql15-pltcl</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15-plpython3") ? "disabled" : ""}>postgresql15-plpython3</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15-plpython3-contrib") ? "disabled" : ""}>postgresql15-plpython3-contrib</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-mysql_fdw") ? "disabled" : ""}>postgresql-mysql_fdw</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-temporal_tables") ? "disabled" : ""}>postgresql-temporal_tables</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-plpgsql_check") ? "disabled" : ""}>postgresql-plpgsql_check</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-url_encode") ? "disabled" : ""}>postgresql-url_encode</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-uint") ? "disabled" : ""}>postgresql-uint</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-orafce") ? "disabled" : ""}>postgresql-orafce</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-rum") ? "disabled" : ""}>postgresql-rum</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-bdr-extension") ? "disabled" : ""}>postgresql-bdr-extension</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-hypopg") ? "disabled" : ""}>postgresql-hypopg</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-pllua") ? "disabled" : ""}>postgresql-pllua</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-sequential-uuids") ? "disabled" : ""}>postgresql-sequential-uuids</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-citus-bitcode") ? "disabled" : ""}>citus**</ion-button>

	

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql-pg_cron") ? "disabled" : ""}>pg_cron**</ion-button>

	<br>** = requires PostgreSQL restart<br>

	<pre id="${"output"}"></pre>

	Installed: 
	<div>${escape(JSON.stringify(installed_packages))}</div>
	Total size: ${escape(total_size.toLocaleString())} bytes
</ion-content>`;
});
export {
  Page as default
};
