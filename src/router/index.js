import { createRouter, createWebHistory } from 'vue-router'
import displayTask from '../components/displayTask.vue'
import HomeView from '../views/HomeView.vue'
import addNewTask from '../components/addNewTask.vue' 
import displayCompleted from '../components/displayCompleted.vue'
import editTask from '../components/editTask.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/displayPages',
    name: 'displayTask',
    component: displayTask,
  },
  {
    path: '/addTask',
    name: 'addNewTask',
    component: addNewTask,
  },
  {
    path: '/displayCompletedTask',
    name: 'displayCompleted',
    component: displayCompleted,
  },
  {
    path: '/editTask/:id',
    name: 'editTask',
    component: editTask,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
