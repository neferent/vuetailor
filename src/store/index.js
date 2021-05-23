import Vuex from "vuex";

import TestModule from "./modules/test";

export default function(vueInstance) {
    vueInstance.use(Vuex);

    return new Vuex.Store({
        modules: {
            TestModule
        },
        strict: process.env.NODE_ENV !== "production"
    });
}
