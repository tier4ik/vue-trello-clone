import Vue from 'vue'
import Vuex from 'vuex'

import { localStoragePlugin, setID } from '../../utils/utils'
import defaultBoard from './../db/default-board'

Vue.use(Vuex)

// const board = defaultBoard
const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  state: {
    board
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        description: '',
        id: setID(tasks),
      })
    },
    UPDATE_TASK(state, { task, prop, val }) {
      task[prop] = val
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      // toTasks.push(taskToMove)
      if (!toTaskIndex) {
        toTasks.push(taskToMove)
      } else {
        toTasks.splice(toTaskIndex, 0, taskToMove)
      }
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnsList = state.board.columns
      // pick the whole column we want to move ... 
      const columnToMove = columnsList.splice(fromColumnIndex, 1)[0]
      // ... and insert it to the other column
      columnsList.splice(toColumnIndex, 0, columnToMove)
    },
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      })
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('CREATE_TASK', task)
    },
    updateTask({ commit }, task) {
      commit('UPDATE_TASK', task)
    },
    moveTask({ commit }, task) {
      commit('MOVE_TASK', task)
    },
    moveColumn({ commit }, column) {
      commit('MOVE_COLUMN', column)
    },
    createColumn({ commit }, newColumn) {
      commit('CREATE_COLUMN', newColumn)
    }
  },
  modules: {
  },
  plugins: [localStoragePlugin]
})
