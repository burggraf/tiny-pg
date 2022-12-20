// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import { VitePWA } from "vite-plugin-pwa";

// pwa-configuration.ts
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
var file = fileURLToPath(new URL("package.json", "file:///Users/markb/dev/tiny-pg/ui/pwa-configuration.ts"));
var json = readFileSync(file, "utf8");
var pkg = JSON.parse(json);
var pwaManifest = {
  name: JSON.stringify(pkg.name).replace(/^"/g, "").replace(/"$/g, ""),
  short_name: JSON.stringify(pkg.menu_title).replace(/^"/g, "").replace(/"$/g, ""),
  description: JSON.stringify(pkg.description).replace(/"/g, "").replace(/^"/g, "").replace(/"$/g, ""),
  theme_color: JSON.stringify(pkg.theme_color).replace(/"/g, "").replace(/^"/g, "").replace(/"$/g, ""),
  icons: [
    {
      "src": "assets/icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};
var ionicSvelteDirectories = [
  "assets/json/*",
  "assets/img/*",
  "assets/img/slides/*",
  "assets/img/ionic/*"
];
var pwaConfiguration = {
  srcDir: "./build",
  outDir: "./build",
  includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png", "assets/*", ...ionicSvelteDirectories],
  base: "/",
  scope: "/",
  manifest: pwaManifest
};

// vite.config.ts
import { readFileSync as readFileSync2 } from "fs";
import { fileURLToPath as fileURLToPath2 } from "url";
var file2 = fileURLToPath2(new URL("package.json", "file:///Users/markb/dev/tiny-pg/ui/vite.config.ts"));
var json2 = readFileSync2(file2, "utf8");
var pkg2 = JSON.parse(json2);
var config = {
  plugins: [
    VitePWA(pwaConfiguration),
    sveltekit()
  ],
  define: {
    "__APP_VERSION__": JSON.stringify(pkg2.version),
    "__APP_NAME__": JSON.stringify(pkg2.name),
    "__APP_HOMEPAGE__": JSON.stringify(pkg2.homepage),
    "__APP_DESCRIPTION__": JSON.stringify(pkg2.description),
    "__APP_MENU_TITLE__": JSON.stringify(pkg2.menu_title),
    "__APP_MENU_SUBTITLE__": JSON.stringify(pkg2.menu_subtitle),
    "__APP_PROFILE_TABLE__": JSON.stringify(pkg2.profileTable),
    "__APP_PROFILE_KEY__": JSON.stringify(pkg2.profileKey),
    "__APP_THEME_COLOR__": JSON.stringify(pkg2.theme_color),
    "__APP_BACKGROUND_COLOR__": JSON.stringify(pkg2.background_color)
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicHdhLWNvbmZpZ3VyYXRpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBwd2FDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9wd2EtY29uZmlndXJhdGlvbi5qcyc7XG5cblxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuLyoqKiBnZXQgaW5mbyBmcm9tIHBhY2thZ2UuanNvbiAqKiovXG5jb25zdCBmaWxlID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCdwYWNrYWdlLmpzb24nLCBcImZpbGU6Ly8vVXNlcnMvbWFya2IvZGV2L3RpbnktcGcvdWkvdml0ZS5jb25maWcudHNcIikpO1xuY29uc3QganNvbiA9IHJlYWRGaWxlU3luYyhmaWxlLCAndXRmOCcpO1xuY29uc3QgcGtnID0gSlNPTi5wYXJzZShqc29uKTtcblxuY29uc3QgY29uZmlnOiBVc2VyQ29uZmlnID0ge1xuXHRwbHVnaW5zOiBbXG5cdFx0Vml0ZVBXQShwd2FDb25maWd1cmF0aW9uKSxcblx0XHRzdmVsdGVraXQoKVxuXHRdLFxuXHRkZWZpbmU6IHtcblx0XHQnX19BUFBfVkVSU0lPTl9fJzogSlNPTi5zdHJpbmdpZnkocGtnLnZlcnNpb24pLFxuXHRcdCdfX0FQUF9OQU1FX18nOiBKU09OLnN0cmluZ2lmeShwa2cubmFtZSksXG5cdFx0J19fQVBQX0hPTUVQQUdFX18nOiBKU09OLnN0cmluZ2lmeShwa2cuaG9tZXBhZ2UpLFxuXHRcdCdfX0FQUF9ERVNDUklQVElPTl9fJzogSlNPTi5zdHJpbmdpZnkocGtnLmRlc2NyaXB0aW9uKSxcblx0XHQnX19BUFBfTUVOVV9USVRMRV9fJzogSlNPTi5zdHJpbmdpZnkocGtnLm1lbnVfdGl0bGUpLFxuXHRcdCdfX0FQUF9NRU5VX1NVQlRJVExFX18nOiBKU09OLnN0cmluZ2lmeShwa2cubWVudV9zdWJ0aXRsZSksXG5cdFx0J19fQVBQX1BST0ZJTEVfVEFCTEVfXyc6IEpTT04uc3RyaW5naWZ5KHBrZy5wcm9maWxlVGFibGUpLFxuXHRcdCdfX0FQUF9QUk9GSUxFX0tFWV9fJzogSlNPTi5zdHJpbmdpZnkocGtnLnByb2ZpbGVLZXkpLFxuXHRcdCdfX0FQUF9USEVNRV9DT0xPUl9fJzogSlNPTi5zdHJpbmdpZnkocGtnLnRoZW1lX2NvbG9yKSxcblx0XHQnX19BUFBfQkFDS0dST1VORF9DT0xPUl9fJzogSlNPTi5zdHJpbmdpZnkocGtnLmJhY2tncm91bmRfY29sb3IpLFx0ICBcblx0fVx0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCAiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuLyoqKiBnZXQgaW5mbyBmcm9tIHBhY2thZ2UuanNvbiAqKiovXG5jb25zdCBmaWxlID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCdwYWNrYWdlLmpzb24nLCBcImZpbGU6Ly8vVXNlcnMvbWFya2IvZGV2L3RpbnktcGcvdWkvcHdhLWNvbmZpZ3VyYXRpb24udHNcIikpO1xuY29uc3QganNvbiA9IHJlYWRGaWxlU3luYyhmaWxlLCAndXRmOCcpO1xuY29uc3QgcGtnID0gSlNPTi5wYXJzZShqc29uKTtcblxuY29uc3QgcHdhTWFuaWZlc3QgPSB7XG4gICAgbmFtZTogSlNPTi5zdHJpbmdpZnkocGtnLm5hbWUpLnJlcGxhY2UoL15cIi9nLCAnJykucmVwbGFjZSgvXCIkL2csICcnKSxcbiAgICBzaG9ydF9uYW1lOiBKU09OLnN0cmluZ2lmeShwa2cubWVudV90aXRsZSkucmVwbGFjZSgvXlwiL2csICcnKS5yZXBsYWNlKC9cIiQvZywgJycpLFxuICAgIGRlc2NyaXB0aW9uOiBKU09OLnN0cmluZ2lmeShwa2cuZGVzY3JpcHRpb24pLnJlcGxhY2UoL1wiL2csICcnKS5yZXBsYWNlKC9eXCIvZywgJycpLnJlcGxhY2UoL1wiJC9nLCAnJyksXG4gICAgdGhlbWVfY29sb3I6IEpTT04uc3RyaW5naWZ5KHBrZy50aGVtZV9jb2xvcikucmVwbGFjZSgvXCIvZywgJycpLnJlcGxhY2UoL15cIi9nLCAnJykucmVwbGFjZSgvXCIkL2csICcnKSxcbiAgICBpY29uczogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0zMi5wbmdcIixcbiAgICAgICAgICBcInNpemVzXCI6IFwiMzJ4MzJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi02NC5wbmdcIixcbiAgICAgICAgICBcInNpemVzXCI6IFwiNjR4NjRcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi05Ni5wbmdcIixcbiAgICAgICAgICBcInNpemVzXCI6IFwiOTZ4OTZcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0xMjgucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjEyOHgxMjhcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0xNTIucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjE1MngxNTJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0xNjgucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjE2OHgxNjhcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0xOTIucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0yNTYucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi0zODQucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjM4NHgzODRcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaWNvbnMvaWNvbi01MTIucG5nXCIsXG4gICAgICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxuICAgICAgICB9XVxuICAgIH1cblxuY29uc3QgaW9uaWNTdmVsdGVEaXJlY3RvcmllcyA9IFtcbiAgICAvLyB0aGVzZSBhcmUgb2Jzb2xldGUsIGV2ZXJ5dGhpbmcgaXMgaW4gL3N0YXRpYyBub3dcbiAgICAnYXNzZXRzL2pzb24vKicsICdhc3NldHMvaW1nLyonLCAnYXNzZXRzL2ltZy9zbGlkZXMvKicsXG4gICAgJ2Fzc2V0cy9pbWcvaW9uaWMvKidcbl1cblxuY29uc3QgcHdhQ29uZmlndXJhdGlvbiA9IHtcbiAgICBzcmNEaXI6ICcuL2J1aWxkJyxcbiAgICBvdXREaXI6ICcuL2J1aWxkJywgLy8gdG8gZW5zdXJlIHN3LmpzIGFuZCB3b3JrYm94IGFyZSBpbiBidWlsZCAtIG5vdCBhY2NvcmRpbmcgdG8gZG9jcywgYnV0IHdvcmtzIG5ldmVydGhlbGVzcz8gXG4gICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdmYXZpY29uLmljbycsICdyb2JvdHMudHh0JywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJywgJ2Fzc2V0cy8qJywgLi4uaW9uaWNTdmVsdGVEaXJlY3Rvcmllc10sXG4gICAgYmFzZTogJy8nLFxuICAgIHNjb3BlOiAnLycsXG4gICAgbWFuaWZlc3Q6IHB3YU1hbmlmZXN0XG59XG5cbmV4cG9ydCB7IHB3YUNvbmZpZ3VyYXRpb24gfVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFHQSxJQUFNLE9BQU8sY0FBYyxJQUFJLElBQUksZ0JBQWdCLHlEQUF5RCxDQUFDO0FBQzdHLElBQU0sT0FBTyxhQUFhLE1BQU0sTUFBTTtBQUN0QyxJQUFNLE1BQU0sS0FBSyxNQUFNLElBQUk7QUFFM0IsSUFBTSxjQUFjO0FBQUEsRUFDaEIsTUFBTSxLQUFLLFVBQVUsSUFBSSxJQUFJLEVBQUUsUUFBUSxPQUFPLEVBQUUsRUFBRSxRQUFRLE9BQU8sRUFBRTtBQUFBLEVBQ25FLFlBQVksS0FBSyxVQUFVLElBQUksVUFBVSxFQUFFLFFBQVEsT0FBTyxFQUFFLEVBQUUsUUFBUSxPQUFPLEVBQUU7QUFBQSxFQUMvRSxhQUFhLEtBQUssVUFBVSxJQUFJLFdBQVcsRUFBRSxRQUFRLE1BQU0sRUFBRSxFQUFFLFFBQVEsT0FBTyxFQUFFLEVBQUUsUUFBUSxPQUFP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