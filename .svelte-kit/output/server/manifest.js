export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png","fonts/Input Mono Narrow/InputMonoNarrow-Black.ttf","fonts/Input Mono Narrow/InputMonoNarrow-BlackItalic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Bold.ttf","fonts/Input Mono Narrow/InputMonoNarrow-BoldItalic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-ExtraLight.ttf","fonts/Input Mono Narrow/InputMonoNarrow-ExtraLightItalic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Italic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Light.ttf","fonts/Input Mono Narrow/InputMonoNarrow-LightItalic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Medium.ttf","fonts/Input Mono Narrow/InputMonoNarrow-MediumItalic.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Regular.ttf","fonts/Input Mono Narrow/InputMonoNarrow-Thin.ttf","fonts/Input Mono Narrow/InputMonoNarrow-ThinItalic.ttf","fonts/steinbeck/SteinbeckItalic.otf","fonts/steinbeck/SteinbeckItalic.woff","logos/R2.png","logos/cc.png","logos/erc.png","logos/europe.png","svg/ST2404-trame-SML.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf",".woff":"font/woff",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BMNf7Ghc.js","app":"_app/immutable/entry/app.BoT7g0Ce.js","imports":["_app/immutable/entry/start.BMNf7Ghc.js","_app/immutable/chunks/entry.PHhY7OGv.js","_app/immutable/chunks/scheduler.C0r85OrY.js","_app/immutable/chunks/paths.DNTEOWw1.js","_app/immutable/entry/app.BoT7g0Ce.js","_app/immutable/chunks/scheduler.C0r85OrY.js","_app/immutable/chunks/index.DB2TnKJG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
