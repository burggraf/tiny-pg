import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, f as each, g as null_to_empty, v as validate_component } from "../../chunks/index.js";
import { d as derived, r as readable, w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { isPlatform } from "@ionic/core";
import "../../chunks/platform.js";
import * as allIonicIcons from "ionicons/icons";
import { initialize } from "@ionic/core/components";
import { IonAccordion } from "@ionic/core/components/ion-accordion.js";
import { IonAccordionGroup } from "@ionic/core/components/ion-accordion-group.js";
import { IonApp } from "@ionic/core/components/ion-app.js";
import { IonAvatar } from "@ionic/core/components/ion-avatar.js";
import { IonBackdrop } from "@ionic/core/components/ion-backdrop.js";
import { IonBackButton } from "@ionic/core/components/ion-back-button.js";
import { IonBadge } from "@ionic/core/components/ion-badge.js";
import { IonBreadcrumb } from "@ionic/core/components/ion-breadcrumb.js";
import { IonBreadcrumbs } from "@ionic/core/components/ion-breadcrumbs.js";
import { IonButton } from "@ionic/core/components/ion-button.js";
import { IonButtons } from "@ionic/core/components/ion-buttons.js";
import { IonCard } from "@ionic/core/components/ion-card.js";
import { IonCardContent } from "@ionic/core/components/ion-card-content.js";
import { IonCardHeader } from "@ionic/core/components/ion-card-header.js";
import { IonCardSubtitle } from "@ionic/core/components/ion-card-subtitle.js";
import { IonCardTitle } from "@ionic/core/components/ion-card-title.js";
import { IonCheckbox } from "@ionic/core/components/ion-checkbox.js";
import { IonChip } from "@ionic/core/components/ion-chip.js";
import { IonCol } from "@ionic/core/components/ion-col.js";
import { IonContent } from "@ionic/core/components/ion-content.js";
import { IonDatetime } from "@ionic/core/components/ion-datetime.js";
import { IonFab } from "@ionic/core/components/ion-fab.js";
import { IonFabButton } from "@ionic/core/components/ion-fab-button.js";
import { IonFabList } from "@ionic/core/components/ion-fab-list.js";
import { IonFooter } from "@ionic/core/components/ion-footer.js";
import { IonGrid } from "@ionic/core/components/ion-grid.js";
import { IonHeader } from "@ionic/core/components/ion-header.js";
import { IonIcon } from "@ionic/core/components/ion-icon.js";
import { IonImg } from "@ionic/core/components/ion-img.js";
import { IonInfiniteScroll } from "@ionic/core/components/ion-infinite-scroll.js";
import { IonInfiniteScrollContent } from "@ionic/core/components/ion-infinite-scroll-content.js";
import { IonInput } from "@ionic/core/components/ion-input.js";
import { IonItem } from "@ionic/core/components/ion-item.js";
import { IonItemDivider } from "@ionic/core/components/ion-item-divider.js";
import { IonItemGroup } from "@ionic/core/components/ion-item-group.js";
import { IonItemOption } from "@ionic/core/components/ion-item-option.js";
import { IonItemOptions } from "@ionic/core/components/ion-item-options.js";
import { IonItemSliding } from "@ionic/core/components/ion-item-sliding.js";
import { IonLabel } from "@ionic/core/components/ion-label.js";
import { IonList } from "@ionic/core/components/ion-list.js";
import { IonListHeader } from "@ionic/core/components/ion-list-header.js";
import { IonMenu } from "@ionic/core/components/ion-menu.js";
import { IonMenuButton } from "@ionic/core/components/ion-menu-button.js";
import { IonMenuToggle } from "@ionic/core/components/ion-menu-toggle.js";
import { IonNav } from "@ionic/core/components/ion-nav.js";
import { IonNavLink } from "@ionic/core/components/ion-nav-link.js";
import { IonNote } from "@ionic/core/components/ion-note.js";
import { IonProgressBar } from "@ionic/core/components/ion-progress-bar.js";
import { IonRadio } from "@ionic/core/components/ion-radio.js";
import { IonRadioGroup } from "@ionic/core/components/ion-radio-group.js";
import { IonRange } from "@ionic/core/components/ion-range.js";
import { IonRefresher } from "@ionic/core/components/ion-refresher.js";
import { IonRefresherContent } from "@ionic/core/components/ion-refresher-content.js";
import { IonReorder } from "@ionic/core/components/ion-reorder.js";
import { IonReorderGroup } from "@ionic/core/components/ion-reorder-group.js";
import { IonRippleEffect } from "@ionic/core/components/ion-ripple-effect.js";
import { IonRow } from "@ionic/core/components/ion-row.js";
import { IonSearchbar } from "@ionic/core/components/ion-searchbar.js";
import { IonSegment } from "@ionic/core/components/ion-segment.js";
import { IonSegmentButton } from "@ionic/core/components/ion-segment-button.js";
import { IonSelect } from "@ionic/core/components/ion-select.js";
import { IonSelectOption } from "@ionic/core/components/ion-select-option.js";
import { IonSkeletonText } from "@ionic/core/components/ion-skeleton-text.js";
import { IonSlide } from "@ionic/core/components/ion-slide.js";
import { IonSlides } from "@ionic/core/components/ion-slides.js";
import { IonSpinner } from "@ionic/core/components/ion-spinner.js";
import { IonSplitPane } from "@ionic/core/components/ion-split-pane.js";
import { IonTab } from "@ionic/core/components/ion-tab.js";
import { IonTabs } from "@ionic/core/components/ion-tabs.js";
import { IonTabBar } from "@ionic/core/components/ion-tab-bar.js";
import { IonTabButton } from "@ionic/core/components/ion-tab-button.js";
import { IonText } from "@ionic/core/components/ion-text.js";
import { IonTextarea } from "@ionic/core/components/ion-textarea.js";
import { IonThumbnail } from "@ionic/core/components/ion-thumbnail.js";
import { IonTitle } from "@ionic/core/components/ion-title.js";
import { IonToggle } from "@ionic/core/components/ion-toggle.js";
import { IonToolbar } from "@ionic/core/components/ion-toolbar.js";
import { IonVirtualScroll } from "@ionic/core/components/ion-virtual-scroll.js";
import { IonActionSheet } from "@ionic/core/components/ion-action-sheet.js";
import { IonAlert } from "@ionic/core/components/ion-alert.js";
import { IonLoading } from "@ionic/core/components/ion-loading.js";
import { IonModal } from "@ionic/core/components/ion-modal.js";
import { IonPicker } from "@ionic/core/components/ion-picker.js";
import { IonPickerColumn } from "@ionic/core/components/ion-picker-column.js";
import { IonPickerColumnInternal } from "@ionic/core/components/ion-picker-column-internal.js";
import { IonPickerInternal } from "@ionic/core/components/ion-picker-internal.js";
import { IonPopover } from "@ionic/core/components/ion-popover.js";
import { IonSelectPopover } from "@ionic/core/components/ion-select-popover.js";
import { IonToast } from "@ionic/core/components/ion-toast.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const preloadCode = guard("preloadCode");
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registration;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (reloadPage = true) => {
    await registerPromise;
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox, messageSW } = await import("../../chunks/workbox-window.prod.es5.js");
      sendSkipWaitingMessage = async () => {
        if (registration && registration.waiting) {
          await messageSW(registration.waiting, { type: "SKIP_WAITING" });
        }
      };
      wb = new Workbox("/sw.js", { scope: "/", type: "classic" });
      wb.addEventListener("activated", (event) => {
        if (event.isUpdate)
          ;
        else
          onOfflineReady == null ? void 0 : onOfflineReady();
      });
      {
        const showSkipWaitingPrompt = () => {
          onNeedRefresh == null ? void 0 : onNeedRefresh();
        };
        wb.addEventListener("waiting", showSkipWaitingPrompt);
        wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
      }
      wb.register({ immediate }).then((r) => {
        registration = r;
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
const emptyStatus = {
  needRefresh: false,
  offlineReady: false,
  registerError: void 0,
  registration: void 0,
  beforeInstallPrompt: void 0,
  canInstall: false,
  updateFunction: void 0
};
const pwaStatusStream = readable(emptyStatus, (set) => {
  const status = emptyStatus;
  if (typeof navigator !== "undefined") {
    const updateSWObject = registerSW({
      onNeedRefresh() {
        status.needRefresh = true;
        status.updateFunction = updateSWObject;
        set(status);
      },
      onOfflineReady() {
        status.offlineReady = true;
        set(status);
      },
      onRegisterError(error) {
        status.registerError = error;
        set(status);
      },
      onRegistered(registration) {
        status.registration = registration;
        set(status);
      }
    });
  }
  const beforeinstallpromptHandler = (e) => {
    status.beforeInstallPrompt = e;
    status.canInstall = true;
    set(status);
  };
  if (typeof window !== "undefined")
    window.addEventListener("beforeinstallprompt", beforeinstallpromptHandler);
  return () => {
    if (typeof window !== "undefined")
      window.removeEventListener("beforeinstallprompt", beforeinstallpromptHandler);
  };
});
derived(pwaStatusStream, (updateObject) => updateObject.needRefresh);
derived(pwaStatusStream, (updateObject) => updateObject.offlineReady);
derived(pwaStatusStream, (updateObject) => updateObject.registerError);
derived(pwaStatusStream, (updateObject) => updateObject.registration);
const pwaBeforeInstallPrompt = derived(pwaStatusStream, (updateObject) => updateObject.beforeInstallPrompt);
const canInstall = derived(pwaStatusStream, (updateObject) => updateObject.canInstall);
derived(pwaStatusStream, (updateObject) => updateObject.updateFunction);
derived(pwaStatusStream, (updateObject) => updateObject.updateFunction !== void 0);
const defineComponent = (tagName, customElement) => {
  if (typeof customElements === "undefined")
    return;
  if (!customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};
const defineIonComponents = () => {
  defineComponent("ion-accordion", IonAccordion);
  defineComponent("ion-accordion-group", IonAccordionGroup);
  defineComponent("ion-app", IonApp);
  defineComponent("ion-avatar", IonAvatar);
  defineComponent("ion-backdrop", IonBackdrop);
  defineComponent("ion-back-button", IonBackButton);
  defineComponent("ion-badge", IonBadge);
  defineComponent("ion-breadcrumb", IonBreadcrumb);
  defineComponent("ion-breadcrumbs", IonBreadcrumbs);
  defineComponent("ion-button", IonButton);
  defineComponent("ion-buttons", IonButtons);
  defineComponent("ion-card", IonCard);
  defineComponent("ion-card-content", IonCardContent);
  defineComponent("ion-card-header", IonCardHeader);
  defineComponent("ion-card-subtitle", IonCardSubtitle);
  defineComponent("ion-card-title", IonCardTitle);
  defineComponent("ion-checkbox", IonCheckbox);
  defineComponent("ion-chip", IonChip);
  defineComponent("ion-col", IonCol);
  defineComponent("ion-content", IonContent);
  defineComponent("ion-datetime", IonDatetime);
  defineComponent("ion-fab", IonFab);
  defineComponent("ion-fab-button", IonFabButton);
  defineComponent("ion-fab-list", IonFabList);
  defineComponent("ion-footer", IonFooter);
  defineComponent("ion-grid", IonGrid);
  defineComponent("ion-header", IonHeader);
  defineComponent("ion-icon", IonIcon);
  defineComponent("ion-img", IonImg);
  defineComponent("ion-infinite-scroll", IonInfiniteScroll);
  defineComponent("ion-infinite-scroll-content", IonInfiniteScrollContent);
  defineComponent("ion-input", IonInput);
  defineComponent("ion-item", IonItem);
  defineComponent("ion-item-divider", IonItemDivider);
  defineComponent("ion-item-group", IonItemGroup);
  defineComponent("ion-item-option", IonItemOption);
  defineComponent("ion-item-options", IonItemOptions);
  defineComponent("ion-item-sliding", IonItemSliding);
  defineComponent("ion-label", IonLabel);
  defineComponent("ion-list", IonList);
  defineComponent("ion-list-header", IonListHeader);
  defineComponent("ion-menu", IonMenu);
  defineComponent("ion-menu-button", IonMenuButton);
  defineComponent("ion-menu-toggle", IonMenuToggle);
  defineComponent("ion-nav", IonNav);
  defineComponent("ion-nav-link", IonNavLink);
  defineComponent("ion-note", IonNote);
  defineComponent("ion-progress-bar", IonProgressBar);
  defineComponent("ion-popover", IonPopover);
  defineComponent("ion-radio", IonRadio);
  defineComponent("ion-radio-group", IonRadioGroup);
  defineComponent("ion-range", IonRange);
  defineComponent("ion-refresher", IonRefresher);
  defineComponent("ion-refresher-content", IonRefresherContent);
  defineComponent("ion-reorder", IonReorder);
  defineComponent("ion-reorder-group", IonReorderGroup);
  defineComponent("ion-ripple-effect", IonRippleEffect);
  defineComponent("ion-row", IonRow);
  defineComponent("ion-searchbar", IonSearchbar);
  defineComponent("ion-segment", IonSegment);
  defineComponent("ion-segment-button", IonSegmentButton);
  defineComponent("ion-select", IonSelect);
  defineComponent("ion-select-option", IonSelectOption);
  defineComponent("ion-select-popover", IonSelectPopover);
  defineComponent("ion-skeleton-text", IonSkeletonText);
  defineComponent("ion-slide", IonSlide);
  defineComponent("ion-slides", IonSlides);
  defineComponent("ion-spinner", IonSpinner);
  defineComponent("ion-split-pane", IonSplitPane);
  defineComponent("ion-tab", IonTab);
  defineComponent("ion-tabs", IonTabs);
  defineComponent("ion-tab-bar", IonTabBar);
  defineComponent("ion-tab-button", IonTabButton);
  defineComponent("ion-text", IonText);
  defineComponent("ion-textarea", IonTextarea);
  defineComponent("ion-thumbnail", IonThumbnail);
  defineComponent("ion-title", IonTitle);
  defineComponent("ion-toggle", IonToggle);
  defineComponent("ion-toolbar", IonToolbar);
  defineComponent("ion-virtual-scroll", IonVirtualScroll);
  defineComponent("ion-action-sheet", IonActionSheet);
  defineComponent("ion-alert", IonAlert);
  defineComponent("ion-loading", IonLoading);
  defineComponent("ion-modal", IonModal);
  defineComponent("ion-picker", IonPicker);
  defineComponent("ion-picker-column", IonPickerColumn);
  defineComponent("ion-picker-column-internal", IonPickerColumnInternal);
  defineComponent("ion-picker-internal", IonPickerInternal);
  defineComponent("ion-toast", IonToast);
};
const setupIonicSvelte = async (config) => {
  initialize(config);
  defineIonComponents();
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("ion-ce");
  }
};
const IOSInstall_svelte_svelte_type_style_lang = "";
let isOnline = writable(navigator.onLine);
window.addEventListener("offline", function(e) {
  console.log("window event: offline");
  isOnline.set(false);
});
window.addEventListener("online", function(e) {
  console.log("window event: online");
  isOnline.set(true);
});
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: "ion-item.svelte-yyl7vi.svelte-yyl7vi{cursor:pointer}.active-item.svelte-yyl7vi.svelte-yyl7vi{font-weight:bold}.menuhide.svelte-yyl7vi.svelte-yyl7vi{display:none}.hidden.svelte-yyl7vi.svelte-yyl7vi{display:none}.pointer.svelte-yyl7vi.svelte-yyl7vi{cursor:pointer}.span-on-right.svelte-yyl7vi.svelte-yyl7vi{text-align:right;float:right;padding-right:5px}.centered.svelte-yyl7vi.svelte-yyl7vi{text-align:center}ion-menu.svelte-yyl7vi ion-content.svelte-yyl7vi{--background:var(--ion-item-background, var(--ion-background-color, #fff))}ion-item.svelte-yyl7vi.svelte-yyl7vi:hover{--background:var(--ion-color-light);font-weight:bold;color:var(--ion-color-primary)}.menu_subtitle.svelte-yyl7vi.svelte-yyl7vi{margin-left:8px;margin-right:8px;text-align:center;color:var(--ion-color-medium)		\n	}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOnline, $$unsubscribe_isOnline;
  let $page, $$unsubscribe_page;
  let $canInstall, $$unsubscribe_canInstall;
  let $$unsubscribe_pwaBeforeInstallPrompt;
  $$unsubscribe_isOnline = subscribe(isOnline, (value) => $isOnline = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_canInstall = subscribe(canInstall, (value) => $canInstall = value);
  $$unsubscribe_pwaBeforeInstallPrompt = subscribe(pwaBeforeInstallPrompt, (value) => value);
  let hideMenu = true;
  let { side = "start" } = $$props;
  const app_version = "0.2.1";
  const app_menu_title = "tiny-pg";
  const app_menu_subtitle = "Tiny PostgreSQL";
  const appPages = [
    {
      title: "Profile",
      url: "/profile",
      icon: allIonicIcons.personOutline,
      requireLogin: true
    },
    {
      title: "Settings",
      url: "/settings",
      icon: allIonicIcons.settingsOutline,
      requireLogin: false
    },
    {
      title: "Info",
      url: "/info",
      icon: allIonicIcons.informationCircleOutline,
      requireLogin: false
    }
  ];
  setTimeout(
    () => {
      hideMenu = false;
    },
    100
  );
  let iosInstall = isPlatform("ios") && !isPlatform("pwa");
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  $$result.css.add(css);
  $$unsubscribe_isOnline();
  $$unsubscribe_page();
  $$unsubscribe_canInstall();
  $$unsubscribe_pwaBeforeInstallPrompt();
  return `<ion-menu${add_attribute("side", side, 0)} content-id="${"main"}" menu-id="${"mainmenu"}" class="${["svelte-yyl7vi", hideMenu ? "menuhide" : ""].join(" ").trim()}"><ion-header><ion-toolbar translucent="${"true"}"><ion-title>${escape(app_menu_title)}</ion-title></ion-toolbar></ion-header>
		<ion-content class="${" svelte-yyl7vi"}"><p class="${"menu_subtitle svelte-yyl7vi"}">${escape(app_menu_subtitle)}</p>
			<ion-list>${each(appPages, (p, i) => {
    return `${!p.requireLogin ? `<ion-menu-toggle auto-hide="${"false"}"><ion-item routerdirection="${"root"}" lines="${"none"}" detail="${"false"}" class="${escape(null_to_empty($page.route?.id === p.url ? "active-item" : ""), true) + " svelte-yyl7vi"}">
								<ion-icon slot="${"start"}"${add_attribute("icon", p.icon, 0)}></ion-icon>
								<ion-label>${escape(p.title)}</ion-label></ion-item>
						</ion-menu-toggle>` : ``}`;
  })}

				<ion-item lines="${"none"}" class="${"svelte-yyl7vi"}"></ion-item>
				${iosInstall ? `<ion-item lines="${"none"}" class="${"svelte-yyl7vi"}"><ion-icon${add_attribute("icon", allIonicIcons["download"], 0)} slot="${"start"}"></ion-icon>
						<ion-label>Install this app as PWA</ion-label></ion-item>
					<ion-item lines="${"none"}" class="${"svelte-yyl7vi"}"></ion-item>` : ``}
				${$canInstall ? `<ion-item lines="${"none"}" class="${"svelte-yyl7vi"}"><ion-icon${add_attribute("icon", allIonicIcons["download"], 0)} slot="${"start"}"></ion-icon>
						<ion-label>Install this app as PWA</ion-label></ion-item>
					<ion-item lines="${"none"}" class="${"svelte-yyl7vi"}"></ion-item>` : ``}</ion-list></ion-content>
		<ion-footer class="${"ion-padding"}"><div class="${"pointer centered svelte-yyl7vi"}">v.${escape(app_version)}</div>
			<div id="${"debugger"}" class="${"hidden svelte-yyl7vi"}"><span class="${"pointer svelte-yyl7vi"}">clear cache</span>
			<span class="${"pointer span-on-right svelte-yyl7vi"}"><ion-label${add_attribute("color", $isOnline ? "success" : "danger", 0)}><b>${escape($isOnline ? "Online" : "Offline")}</b></ion-label></span></div></ion-footer>
	</ion-menu>`;
});
const variables = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setupIonicSvelte({ mode: "ios" });
  pwaStatusStream.subscribe((status) => {
    if (status.updateFunction) {
      console.log("PWA updating itself in 4 secs......");
      setTimeout(
        () => {
          status.updateFunction();
        },
        4e3
      );
    }
  });
  {
    preloadCode();
  }
  return `<ion-app><ion-split-pane content-id="${"main"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
		<div class="${"ion-page"}" id="${"main"}">${slots.default ? slots.default({}) : ``}</div></ion-split-pane></ion-app>`;
});
export {
  Layout as default
};
