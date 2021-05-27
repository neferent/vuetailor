import MutationsEnum from "./MutationsEnum";

export default {
    [MutationsEnum.CHANGE_RESOLUTION](state, data) {
        state.topBar.currentlyActiveResolutionControl = data;
    }
};
