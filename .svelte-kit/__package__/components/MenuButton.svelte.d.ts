/** @typedef {typeof __propDef.props}  MenuButtonProps */
/** @typedef {typeof __propDef.events}  MenuButtonEvents */
/** @typedef {typeof __propDef.slots}  MenuButtonSlots */
export default class MenuButton extends SvelteComponent<{
    link?: string;
    label?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MenuButtonProps = typeof __propDef.props;
export type MenuButtonEvents = typeof __propDef.events;
export type MenuButtonSlots = typeof __propDef.slots;
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
