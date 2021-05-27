import Vuex from "vuex";

import KeyboardEvents from "./modules/keyboardevents/Index";

export default function(vueInstance) {
    vueInstance.use(Vuex);

    return new Vuex.Store({
        modules: {
            KeyboardEvents
        },
        strict: process.env.NODE_ENV !== "production"
    });
}
