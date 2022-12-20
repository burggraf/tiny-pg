import { c as create_ssr_component } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>Main Page</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><ion-button expand="${"block"}" fill="${"outline"}">Install PostgreSQL 15.1</ion-button>
	<ion-button expand="${"block"}" fill="${"outline"}">Test Script</ion-button>

	<h3>Extension Packs:</h3>
	<ion-button expand="${"block"}" fill="${"outline"}">postgresql15-contrib-jit</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgis</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql15-plperl-contrib</ion-button>
	
	<ion-button expand="${"block"}" fill="${"outline"}">postgresql15-pltcl</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql15-plpython3</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql15-plpython3-contrib</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-mysql_fdw</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-temporal_tables</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-plpgsql_check</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-url_encode</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-uint</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-orafce</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-rum</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-bdr-extension</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-hypopg</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-pllua</ion-button>

	<ion-button expand="${"block"}" fill="${"outline"}">postgresql-sequential-uuids</ion-button>

	<pre id="${"output"}"></pre></ion-content>`;
});
export {
  Page as default
};
