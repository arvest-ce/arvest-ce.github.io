/** @typedef {typeof __propDef.props}  TopMenuButtonProps */
/** @typedef {typeof __propDef.events}  TopMenuButtonEvents */
/** @typedef {typeof __propDef.slots}  TopMenuButtonSlots */
export default class TopMenuButton extends SvelteComponent<{
    link?: string;
    label?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TopMenuButtonProps = typeof __propDef.props;
export type TopMenuButtonEvents = typeof __propDef.events;
export type TopMenuButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        link?: string;
        label?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
