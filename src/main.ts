import { createApp } from "vue";
import { createPinia } from "pinia";
import { createStore } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import RootState from "@/store/vuex";
import Main from "@/Main.vue";
import router from "@/router";

library.add(faCheck, faTimes);

const pinia = createPinia();
const vuex = createStore(RootState);

createApp(Main)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(vuex)
  .use(router)
  .mount("#app");
