import "@ionic/core/dist/collection/global/config.js";
import { w as writable, r as readable } from "./index2.js";
const core = "";
const normalize = "";
const structure = "";
const typography = "";
const padding = "";
const floatElements = "";
const textAlignment = "";
const textTransformation = "";
const flexUtils = "";
const display = "";
readable(
  typeof window !== "undefined" ? (window.navigator.onLine ? "on" : "off") + "line" : "",
  (set) => {
    const eventFunction = () => {
      if (typeof window !== "undefined")
        set((window.navigator.onLine ? "on" : "off") + "line");
    };
    if (typeof window !== "undefined") {
      window.addEventListener("offline", eventFunction);
      window.addEventListener("online", eventFunction);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("offline", eventFunction);
        window.removeEventListener("online", eventFunction);
      }
    };
  }
);
const readableEventFactory = (args) => {
  const { defaultvalue, event, eventAttr, listenerComponent } = args;
  return readable(
    defaultvalue,
    (set) => {
      const eventFunction = (event2) => {
        if (eventAttr)
          set(event2[eventAttr]);
        else
          set(event2);
      };
      listenerComponent.addEventListener(event, eventFunction);
      return () => {
        listenerComponent.removeEventListener(event, eventFunction);
      };
    }
  );
};
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
if (typeof window !== "undefined") {
  readableEventFactory({ defaultvalue: "", event: "resize", eventAttr: "timeStamp", listenerComponent: window });
  readableEventFactory({ defaultvalue: "", event: "ionKeyboardDidShow", eventAttr: void 0, listenerComponent: window });
  readableEventFactory({ defaultvalue: "", event: "ionKeyboardDidHide", eventAttr: void 0, listenerComponent: window });
}
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
readable("", (set) => {
  return () => {
  };
});
if (typeof document !== "undefined") {
  readableEventFactory({ defaultvalue: "", event: "resume", eventAttr: void 0, listenerComponent: document });
  readableEventFactory({ defaultvalue: "", event: "pause", eventAttr: void 0, listenerComponent: document });
  readableEventFactory({ defaultvalue: "", event: "ionBackButton", eventAttr: void 0, listenerComponent: document });
  readableEventFactory({ defaultvalue: "", event: "keydown", eventAttr: "key", listenerComponent: document });
}
const prefersDark = writable(
  typeof window !== "undefined" ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches : ""
);
if (typeof window !== "undefined")
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    prefersDark.set(e.matches ? true : false);
  });
