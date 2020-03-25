export default {
    methods: {
        moveTaskOrColumn(data) {
            if(data.type === 'task') {
                this.moveTask(data)
            } else {
                this.moveColumn(data)
            }
        }
    }
}