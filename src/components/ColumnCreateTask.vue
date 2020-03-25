<template>
  <input 
        type="text"
        placeholder="+ Enter new task (and push enter)"
        @keyup.enter="createTask($event, tasks)" />
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            requires: true
        }
    },
    methods: {
        createTask(e, tasks) {
            this.$store.dispatch('createTask', {tasks: tasks, name: e.target.value})
            e.target.value = ''
        }
    }
}
</script>

<style>

</style>