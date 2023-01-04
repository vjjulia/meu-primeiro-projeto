import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'animate.css';

createApp(App).use(router).use(Quasar, quasarUserOptions).mount('#app')