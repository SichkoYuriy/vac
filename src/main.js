import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/font.css'

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


createApp(App).use(VueAwesomePaginate).component('v-select', vSelect).use(store).use(router).mount('#app');
