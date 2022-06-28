import { defineStore } from "pinia";

interface IPiniaQueueState {
  queue: Array<string>;
}

export const useQueueState = defineStore(
  // Importante que cada store do Pinia tenha um ID único
  "$app:queue", 
  {
    state(): IPiniaQueueState {
      return {
        queue: []
      };
    },

    // Getters recebem o state como primeiro parâmetro
    getters: {
      getCount(state) {
        return state.queue.length
      }
    },

    /**
     * Não temos mutations no Pinia, ao invés disso utilizamos actions que 
     * possuem acesso à store no contexto do `this`, por isso é importante 
     * que NÃO se utilize arrow functions para definir actions!
     */
    actions: {
      advance() {
        // Podemos operar diretamente no state aqui, cuidado! ;)
        this.queue.shift()
      },
      addItem(payload: string) {
        this.queue.push(payload);
      },
      appendToQueue(payload: string) {
        this.queue.unshift(payload);
      },
      leave() {
        this.queue.pop()
      },
      removeItem(index: number) {
        this.queue.splice(index, 1);
      }
    }
  }
);
