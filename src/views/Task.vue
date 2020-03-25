<template>
  <div class="task__overview">
    <span>Editable fields</span>
    <input
      type="text"
      :value="currentTask.name"
      @change="updateTaskProp($event, 'name')">
    <textarea
      :value="currentTask.description"
      @change="updateTaskProp($event, 'description')"></textarea>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['board']),
    bgActive() {
            return this.$route.name === 'task'
    },
    currentTask() {
      const { taskname, id } = this.$route.params;
      const task = this.board.columns
              .find(el => el.name == taskname)
              .tasks
              .find(el => el.id == id);
      return task ? task : 'Unable to find the task';
    }
  },
  methods: {
    closeTask() {
      this.$router.push({ name: 'board' })
    },
    updateTaskProp(evt, prop) {
      this.$store.dispatch('updateTask', {
        task: this.currentTask,
        prop,
        val: evt.target.value
      })
    }
  }
}
</script>

<style>
    .task__overview {
        width: 360px;
        height: 440px;
        background-color: lightseagreen;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        padding: 6px;
        border-radius: 4px;
    }
    .task__overview > span {
      display: block;
      margin-bottom: 4px;
    }
    .task__overview > input {
        display: block;
        width: 100%;
        padding: 4px;
        font-size: 1.4rem;
        border: none;
        margin-bottom: 8px;
        background-color: #ccc;
        border-radius: 4px;
    }
    .task__overview > textarea {
        resize: vertical;
        width: 100%;
        border: none;
        background-color: #ccc;
        border-radius: 4px;
        min-height: 180px;
        max-height: 60%;
    }
</style>>