// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");

import DefaultLayout from "~/layouts/Default.vue";
import getStore from "~/store";

import VTooltip from "v-tooltip";

export default function(Vue, { appOptions, head }) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);

    appOptions.store = getStore(Vue);

    head.link.push({
        rel: "stylesheet",
        href: "https://fonts.gstatic.com"
    });

    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    });

    Vue.use(VTooltip);

    head.htmlAttrs = { class: ["h-screen"] };

    head.bodyAttrs = { class: ["bg-gray-700", "h-screen"] };
}
