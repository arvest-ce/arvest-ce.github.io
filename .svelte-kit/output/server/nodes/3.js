

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BrIW16hi.js","_app/immutable/chunks/scheduler.C0r85OrY.js","_app/immutable/chunks/index.DB2TnKJG.js","_app/immutable/chunks/paths.DNTEOWw1.js"];
export const stylesheets = ["_app/immutable/assets/3.BARgamDa.css"];
export const fonts = [];
