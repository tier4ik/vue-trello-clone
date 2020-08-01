import Vue from 'vue'
import VueRouter from 'vue-router'

import Board from '../views/Board'
import Task from '../views/Task'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'name/:taskname/task/:id',
        name: 'task',
        component: Task
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router