import { has } from "lodash";
import KeyboardKeysEnum from "~/js/enums/KeyboardKeysEnum";
import { mapActions } from "vuex";
import MutationsEnum from "~/store/modules/keyboardevents/MutationsEnum";

export default {
    mounted() {
        window.addEventListener("keydown", event => {
            if (event.ctrlKey && has(KeyboardKeysEnum, event.key)) {
                event.preventDefault();

                const keyData = KeyboardKeysEnum[event.key];

                this[keyData.method](keyData.params);
            }
        });
    },

    methods: {
        ...mapActions("KeyboardEvents", [MutationsEnum.CHANGE_RESOLUTION])
    }
};
