import { MutationTree, ActionTree } from "vuex";
import { RootState } from "~/types";

export const state = (): RootState => ({
})

export const mutations: MutationTree<RootState> = {
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
  }
}
