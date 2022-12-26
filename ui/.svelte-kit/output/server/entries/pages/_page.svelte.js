import { c as create_ssr_component, e as escape, d as add_attribute } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
import * as allIonicIcons from "ionicons/icons";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid375.svelte-1vmm8g4{max-width:375px}.header_col.svelte-1vmm8g4{font-weight:bold}.inputItemWithIcon.svelte-1vmm8g4{height:50px;border:1px solid rgb(212, 212, 212);background-color:var(--ion-background-color) !important;border-radius:5px}.inputIcon.svelte-1vmm8g4{padding-right:10px}.gridItem.svelte-1vmm8g4{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let base = "";
  $$result.css.add(css);
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>${escape(
    "Install PostgreSQL"
  )}</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><ion-grid class="${"ion-padding grid375 svelte-1vmm8g4"}"><ion-row><ion-col>Host URL</ion-col></ion-row>
		<ion-row><ion-col><ion-input class="${"inputItemWithIcon svelte-1vmm8g4"}" type="${"text"}"${add_attribute("value", base, 0)} placeholder="${"URL of database server"}"><ion-icon class="${"inputIcon svelte-1vmm8g4"}"${add_attribute("icon", allIonicIcons.globeOutline, 0)} slot="${"start"}" size="${"large"}" color="${"medium"}"></ion-icon></ion-input></ion-col></ion-row>
		<ion-row><ion-col><ion-button expand="${"block"}" size="${"large"}" fill="${"solid"}">Load Server</ion-button></ion-col></ion-row></ion-grid>

	
	${``}
	
</ion-content>`;
});
export {
  Page as default
};
