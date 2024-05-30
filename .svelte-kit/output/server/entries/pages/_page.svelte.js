import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                                    */
const css$1 = {
  code: "a.svelte-1fsnfzo{font-size:2em;color:black}a.svelte-1fsnfzo:hover{color:grey}.container.svelte-1fsnfzo{padding-bottom:0.5em;padding-top:0.5em}@media(min-width: 1200px){a.svelte-1fsnfzo{font-size:2em}}@media(max-width: 1200px){a.svelte-1fsnfzo{font-size:1.5em}}",
  map: '{"version":3,"file":"MenuButton.svelte","sources":["MenuButton.svelte"],"sourcesContent":["<script>\\n    export let label = \\"\\";\\n    export let link = \\"\\";\\n<\/script>\\n\\n<div class=\\"container\\">\\n    <a href={link}>{label}</a>\\n</div>\\n\\n<style>\\n    a{\\n        font-size: 2em;\\n        color: black;\\n    }\\n\\n    a:hover{\\n        color: grey;\\n    }\\n\\n    .container{\\n        padding-bottom: 0.5em;\\n        padding-top: 0.5em;\\n    }\\n\\n    @media (min-width: 1200px) {\\n        a{\\n            font-size: 2em;\\n        }\\n    }\\n\\n    @media (max-width: 1200px) {\\n        a{\\n            font-size: 1.5em;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAUI,gBAAC,CACG,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,KACX,CAEA,gBAAC,MAAM,CACH,KAAK,CAAE,IACX,CAEA,yBAAU,CACN,cAAc,CAAE,KAAK,CACrB,WAAW,CAAE,KACjB,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,gBAAC,CACG,SAAS,CAAE,GACf,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,gBAAC,CACG,SAAS,CAAE,KACf,CACJ"}'
};
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { link = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<div class="container svelte-1fsnfzo"><a${add_attribute("href", link, 0)} class="svelte-1fsnfzo">${escape(label)}</a> </div>`;
});
const css = {
  code: ".title_container.svelte-zvqntn{background-color:white;padding-top:1em;padding-bottom:1em;padding-left:1em;padding-right:1em;border-top:solid 1px black;margin:2em}.menu_container.svelte-zvqntn{background-color:white;padding:1em;border-bottom:solid 1px black;margin:2em}h1.svelte-zvqntn{font-family:'Input-Mono-Narrow', monospace;font-size:7em;padding-bottom:0.2em}p.svelte-zvqntn{font-size:3em}@media(min-width: 1200px){.container.svelte-zvqntn{width:auto}h1.svelte-zvqntn{font-size:7em}p.svelte-zvqntn{font-size:3em}}@media(max-width: 1200px){.container.svelte-zvqntn{width:100%}h1.svelte-zvqntn{font-size:3em}p.svelte-zvqntn{font-size:1.5em}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { base } from '$app/paths';\\n    import MenuButton from '$lib/components/MenuButton.svelte';\\n<\/script>\\n\\n<div class=\\"container\\">\\n    <div class=\\"inner_container\\">\\n        <div class=\\"title_container\\">\\n            <h1>Arvest</h1>\\n            <p>Data in context</p>\\n        </div>\\n\\n        <div class=\\"menu_container\\">\\n            <MenuButton \\n                label = \\"ABOUT\\"\\n                link = \\"{base}/about\\"\\n            />\\n            <MenuButton \\n                label = \\"SANDBOX\\"\\n                link = \\"https://scene.tetras-libre.fr/\\"\\n            />\\n            \\n            <MenuButton \\n                label = \\"DISCUSS\\"\\n                link = \\"{base}/anotherpage\\"\\n            />\\n        </div>\\n    </div>\\n    \\n</div>\\n\\n<style>\\n    .title_container{\\n        background-color: white;\\n        padding-top: 1em;\\n        padding-bottom: 1em;\\n        padding-left: 1em;\\n        padding-right: 1em;\\n        border-top: solid 1px black;\\n        margin: 2em;\\n    }\\n\\n    .menu_container{\\n        background-color: white;\\n        padding: 1em;\\n        border-bottom: solid 1px black;\\n        margin: 2em;\\n    }\\n\\n    h1{\\n        font-family: 'Input-Mono-Narrow', monospace;\\n        font-size: 7em;\\n        padding-bottom: 0.2em;\\n    }\\n\\n    p{\\n        font-size: 3em;\\n    }\\n\\n    @media (min-width: 1200px) {\\n        .container{\\n            width: auto;\\n        }\\n\\n        h1{\\n            font-size: 7em;\\n        }\\n\\n        p{\\n            font-size: 3em;\\n        }\\n    }\\n\\n    @media (max-width: 1200px) {\\n        .container{\\n            width: 100%;\\n        }\\n\\n        h1{\\n            font-size: 3em;\\n        }\\n\\n        p{\\n            font-size: 1.5em;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAgCI,8BAAgB,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,GAAG,CACnB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAC3B,MAAM,CAAE,GACZ,CAEA,6BAAe,CACX,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAC9B,MAAM,CAAE,GACZ,CAEA,gBAAE,CACE,WAAW,CAAE,mBAAmB,CAAC,CAAC,SAAS,CAC3C,SAAS,CAAE,GAAG,CACd,cAAc,CAAE,KACpB,CAEA,eAAC,CACG,SAAS,CAAE,GACf,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,wBAAU,CACN,KAAK,CAAE,IACX,CAEA,gBAAE,CACE,SAAS,CAAE,GACf,CAEA,eAAC,CACG,SAAS,CAAE,GACf,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,wBAAU,CACN,KAAK,CAAE,IACX,CAEA,gBAAE,CACE,SAAS,CAAE,GACf,CAEA,eAAC,CACG,SAAS,CAAE,KACf,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-zvqntn"><div class="inner_container"><div class="title_container svelte-zvqntn" data-svelte-h="svelte-1a34b5m"><h1 class="svelte-zvqntn">Arvest</h1> <p class="svelte-zvqntn">Data in context</p></div> <div class="menu_container svelte-zvqntn">${validate_component(MenuButton, "MenuButton").$$render($$result, { label: "ABOUT", link: base + "/about" }, {}, {})} ${validate_component(MenuButton, "MenuButton").$$render(
    $$result,
    {
      label: "SANDBOX",
      link: "https://scene.tetras-libre.fr/"
    },
    {},
    {}
  )} ${validate_component(MenuButton, "MenuButton").$$render(
    $$result,
    {
      label: "DISCUSS",
      link: base + "/anotherpage"
    },
    {},
    {}
  )}</div></div> </div>`;
});
export {
  Page as default
};
