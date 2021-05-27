import MutationsEnum from "~/store/modules/keyboardevents/MutationsEnum";
import ResolutionControlEnum from "./ResolutionControlEnum";

const KeysObject = {
    // k: {
    //     //Placeholder for help.
    // },

    m: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.MOBILE,
        description: "Press CTRL + m to change resolution to mobile."
    },

    d: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.DESKTOP,
        description: "Press CTRL + d to change resolution to desktop."
    },

    q: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.TABLET,
        description: "Press CTRL + t to change resolution to tablet."
    }
};

export default Object.freeze(KeysObject);
