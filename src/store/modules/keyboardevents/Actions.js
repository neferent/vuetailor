import MutationsEnum from "./MutationsEnum";

export default {
    [MutationsEnum.CHANGE_RESOLUTION]({ commit }, data) {
        commit(MutationsEnum.CHANGE_RESOLUTION, data);
    }
};
