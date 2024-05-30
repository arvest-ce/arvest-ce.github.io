/** @typedef {typeof __propDef.props}  LogoImageProps */
/** @typedef {typeof __propDef.events}  LogoImageEvents */
/** @typedef {typeof __propDef.slots}  LogoImageSlots */
export default class LogoImage extends SvelteComponent<{
    src: any;
    link: any;
    alt?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LogoImageProps = typeof __propDef.props;
export type LogoImageEvents = typeof __propDef.events;
export type LogoImageSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        src: any;
        link: any;
        alt?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
