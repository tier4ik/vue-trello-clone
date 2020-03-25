<template>
    <base-drop @drop="moveTaskOrColumn">
        <base-drag 
            class="task"
            :transferData='{
                type: "task",
                fromTaskIndex: taskIndex,
                fromColumnIndex: columnIndex
            }'
            @click="observeTask(column.name, task.id)">
                <span class="name">{{ task.name }} </span>
                <p v-if="task.description" class="description">{{ task.description }}</p>
        </base-drag>
    </base-drop>
</template>

<script>
// base components
import BaseDrag from '../components/BaseDrag'
import BaseDrop from '../components/BaseDrop'

import moveTask from '../mixins/moveTask'
import moveTaskOrColumn from '../mixins/moveTaskOrColumn'


export default {
    components: {
        BaseDrag,
        BaseDrop
    },
    mixins: [moveTask, moveTaskOrColumn],
    props: {
        board: {
            required: true,
            type: Object
        },
        column: {
            type: Object
        },
        task: {
            type: Object
        },
        taskIndex: {
            type: Number
        },
        columnIndex: {
            type: Number
        }
    },
    methods: {
        observeTask(name, id) {
            this.$router.push({ name: 'task', params: { taskname: name, id: id }})
        }
    }
}
</script>

<style>
    .task {
        min-height: 80px;
        margin-bottom: 0.5rem;
        padding: 4px;
        background-color: #eee;
        border-radius: 4px;
        cursor: pointer;
    }
    .name {
        font-size: 18px;
        font-family: Arial, sans-serif;
    }
    .description {
        font-size: 14px;
        color: #555;
    }
</style>