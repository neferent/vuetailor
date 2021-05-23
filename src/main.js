// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";

import DefaultLayout from "~/layouts/Default.vue";
import getStore from "~/store";

export default function(Vue, { appOptions }) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);

    appOptions.store = getStore(Vue);
}
