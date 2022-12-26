export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","avatar.svg","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icon-1024.png","icon-120.png","icon-128.png","icon-150.png","icon-152.png","icon-16.png","icon-167.png","icon-168.png","icon-180.png","icon-192.png","icon-24.png","icon-256.png","icon-32.png","icon-384.png","icon-512.png","icon-64.png","icon-96.png","logo-512.png","manifest.webmanifest","notion.svg","pwa-download.png","robots.txt","safari-bar.png","safari-pinned-tab.svg","safari-share-options.png","spotify.svg","zoom.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-786e8bc3.js","imports":["_app/immutable/start-786e8bc3.js","_app/immutable/chunks/index-e4e98b6a.js","_app/immutable/chunks/singletons-27ab4993.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
