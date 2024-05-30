import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DOYdGjub.js","_app/immutable/chunks/scheduler.C0r85OrY.js","_app/immutable/chunks/index.DB2TnKJG.js","_app/immutable/chunks/paths.DNTEOWw1.js"];
export const stylesheets = ["_app/immutable/assets/0.B9U4fVHd.css"];
export const fonts = [];
