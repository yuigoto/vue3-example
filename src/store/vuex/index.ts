import { ActionTree, GetterTree, ModuleTree, MutationTree } from "vuex";
import QueueState, { IQueueState } from "@/store/vuex/queue";

export interface VuexStateModule<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, R>;
  modules?: ModuleTree<R>;
}

export interface IRootState {
  queue: IQueueState;
}

const RootState: VuexStateModule<IRootState, IRootState> = {
  modules: {
    queue: QueueState
  },
};

export default RootState;
