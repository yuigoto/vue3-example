import { IRootState, VuexStateModule } from "@/store/vuex";

export interface IQueueState {
  queue: Array<string>;
}

const QueueState: VuexStateModule<IQueueState, IRootState> = {
  namespaced: true
};

QueueState.state = (() => {
  return {
    queue: []
  };
});

/**
 * Utilize getters para obter acesso a dados na store, assim como
 */
QueueState.getters = {
  getQueue: (state) => state.queue,
  getCount: (state) => state.queue.length
};

/**
 * Dentro de mutations, podemos mudar o `state` diretamente.
 * 
 * Note que estamos executando operações diretamente em `state.queue`, sem 
 * exatamente retorná-lo.
 * 
 * Mutações são sempre chamadas por `commit` dentro de um componente.
 * 
 * Ex.:
 * store.commit('prefixo/nome-da-mutation', payload_opcional);
 */
QueueState.mutations = {
  append: (state, payload: string) => {
    state.queue.unshift(payload);
  },
  moveLeft: (state) => state.queue.shift(),
  moveRight: (state) => state.queue.pop(),
  push: (state, payload: string) => {
    state.queue.push(payload);
  },
  remove: (state, payload: number) => {
    state.queue.splice(payload, 1);
  }
};

/**
 * Dentro de actions podemos executar operações assíncronas para, depois,
 * comitar em uma action.
 * 
 * Actions tem acesso ao state, mas NÃO podem alterá-lo diretamente.
 * 
 * Mutações são sempre chamadas por `dispatch` dentro de um componente.
 * 
 * Ex.:
 * store.dispatch('prefixo/nome-da-action', payload_opcional);
 * 
 * Obs.:
 * Dentro da store, podemos chamar `commit` sem prefixo!
 */
QueueState.actions = {
  addItem: (context, payload: string) => {
    context.commit("push", payload);
  },
  appendToQueue: (context, payload: string) => {
    context.commit("append", payload);
  },
  removeItem: (context, payload: number) => {
    context.commit("remove", payload);
  }
};

export default QueueState;
