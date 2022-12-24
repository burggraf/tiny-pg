import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
import "ionicons/icons";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid375.svelte-tje6jk{max-width:375px}.header_col.svelte-tje6jk{font-weight:bold}.inputItemWithIcon.svelte-tje6jk{height:50px;border:1px solid rgb(212, 212, 212);background-color:var(--ion-background-color) !important;border-radius:5px}.inputIcon.svelte-tje6jk{padding-right:10px}.gridItem.svelte-tje6jk{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let output = "";
  $$result.css.add(css);
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>${escape(
    "Install PostgreSQL"
  )}</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><h3>PostgreSQL: ${escape("Not installed")}</h3>

	${`<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 15</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 14</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 13</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 12</ion-button>`}

	${``}

	${`<pre>${escape(output)}</pre>`}

	${``}


</ion-content>`;
});
export {
  Page as default
};
