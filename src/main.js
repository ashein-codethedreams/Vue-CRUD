import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import UserList from './components/pages/UserList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserList },
   
  ],
});

createApp(App).use(router).mount('#app');
