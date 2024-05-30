

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ZjtK1y6Z.js","_app/immutable/chunks/scheduler.C0r85OrY.js","_app/immutable/chunks/index.DB2TnKJG.js","_app/immutable/chunks/paths.DNTEOWw1.js"];
export const stylesheets = ["_app/immutable/assets/3.BARgamDa.css"];
export const fonts = [];
