<<<<<<< HEAD
import './assets/main.css';
// import 'vue-awesome-paginate/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import VueAwesomePaginate from 'vue-awesome-paginate';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

app.mount('#app');
=======
import './assets/main.css'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
>>>>>>> ffc77c7 (create board)
