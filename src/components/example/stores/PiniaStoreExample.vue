<script setup lang="ts">
import { computed } from "vue";
import { useQueueState } from "@/store/pinia/queue";

const store = useQueueState();

const count = computed(() => store.queue.length);

const queue = computed(() => store.queue);

const advanceQueue = () => store.advance();

const leaveQueue = () => store.leave();

const addToQueue = () => {
  store.addItem(`QueueItem_${Date.now()}`);
};

const jumpQueue = () => {
  store.appendToQueue(`QueueItem_${Date.now()}`);
};

const removeFromQueue = (index: number) => {
  store.removeItem(index);
};
</script>

<template>
  <div class="actions">
    <button class="actions__btn" @click="advanceQueue">
      Avançar Fila
    </button>
    <button class="actions__btn" @click="addToQueue">
      Adicionar Item
    </button>
    <button class="actions__btn" @click="jumpQueue">
      Furar Fila
    </button>
    <button class="actions__btn" @click="leaveQueue">
      Abandonar Fila
    </button>
  </div>
  <ul class="list" v-if="count > 0">
    <li class="list__item" v-for="(item, key) in queue" :key="key">
      <span class="list__name">{{item}}</span>
      <button class="list__btn" @click="removeFromQueue(key)">
        <font-awesome-icon icon="times" />
      </button>
    </li>
  </ul>
  <p v-else class="list__none">
    Nenhum item na fila.
  </p>
</template>

<style lang="scss" scoped>
.list__none {
  color: #909090;
  border: 1px solid #aaa;
  text-align: center;
  margin: 0 0 1rem;
  padding: 1rem;
  @include last-child-margin-bottom(0);
}

.list__name {
  color: #808080;
  font-weight: 600;
  padding: 0.5rem 1rem;
  display: block;
  flex: 1;
}

.list__btn {
  min-width: 3rem;
  color: #fff;
  background: #ef2929;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: lighten(#ef2929, 10);
  }

  &:active {
    background: darken(#ef2929, 20);
  }
}

.list__item {
  background: #e0e0e0;
  width: 100%;
  line-height: 2;
  display: flex;
}

.list {
  list-style: none;
  list-style-position: outside;
  margin: 0 0 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  @include last-child-margin-bottom(0);
}

.actions__btn {
  color: #fff;
  background: #909090;
  border: 0;
  width: 100%;
  line-height: 2;
  padding: 0 1rem;
  display: block;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: #a0a0a0;
  }

  &:active {
    background: #707070;
  }
}

.actions {
  width: 100%;
  margin: 0 0 1rem;
  display: flex;
  gap: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  @include last-child-margin-bottom(0);
}
</style>
