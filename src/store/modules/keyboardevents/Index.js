import Actions from "./Actions";
import Getters from "./Getters";
import Mutations from "./Mutations";
import State from "./State";
import { cloneDeep } from "lodash";

export default {
    namespaced: true,
    state: cloneDeep(State),
    actions: Actions,
    getters: Getters,
    mutations: Mutations
};
