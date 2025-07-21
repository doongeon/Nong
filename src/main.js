import './assets/main.css';
// import 'vue-awesome-paginate/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import VueAwesomePaginate from 'vue-awesome-paginate';

import App from './App.vue';
import router from './router';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App);

// app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

app.component('QuillEditor', QuillEditor);

app.mount('#app');
