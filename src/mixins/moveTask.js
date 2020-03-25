export default {
    methods: {
        moveTask({ fromColumnIndex, fromTaskIndex }) {
            const fromTasks = this.board.columns[fromColumnIndex].tasks
            
            this.$store.dispatch('moveTask', {
                fromTasks,
                toTasks: this.column.tasks,
                fromTaskIndex,
                toTaskIndex: this.taskIndex
            })
        }
    }
}