import MutationsEnum from "~/store/modules/keyboardevents/MutationsEnum";
import ResolutionControlEnum from "./ResolutionControlEnum";

// The description is auto generated and uses the format
// Press CTRL + KEY to DESCRIPTION so please make sure to follow this pattern
// while writing the description

const KeysObject = {
    // k: {
    //     //Placeholder for help.
    // },

    m: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.MOBILE,
        description: "Change resolution to mobile."
    },

    d: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.DESKTOP,
        description: "Change resolution to desktop."
    },

    q: {
        method: MutationsEnum.CHANGE_RESOLUTION,
        params: ResolutionControlEnum.TABLET,
        description: "Change resolution to tablet."
    }
};

export default Object.freeze(KeysObject);
