<template>
    <base-drop @drop="moveTaskOrColumn">
        <base-drag
            class="column"
            :transferData='{ type: "column", fromColumnIndex: columnIndex }'>
                
                <h2>{{ column.name }}</h2>

                <!-- render tasks for each column -->
                
                <column-task
                    v-for="(task, taskInd) in column.tasks"
                    :key="taskInd"
                    :board="board"
                    :column="column"
                    :task="task"
                    :columnIndex="columnIndex"
                    :taskIndex="taskInd" />
                    
                <!-- render element for creating new column -->
                <column-create-task
                    :tasks="column.tasks"/>
                
        </base-drag>
    </base-drop>
</template>

<script>
// base components
import BaseDrag from '../components/BaseDrag'
import BaseDrop from '../components/BaseDrop'
// components
import ColumnTask from '../components/ColumnTask'
import ColumnCreateTask from '../components/ColumnCreateTask'
// mixins
import moveTask from '../mixins/moveTask'
import moveTaskOrColumn from '../mixins/moveTaskOrColumn'

export default {
    name: 'Column',
    mixins: [moveTask, moveTaskOrColumn],
    props: {
        board: {
            required: true,
            type: Object
        },
        column: {
            required: true,
            type: Object
        },
        columnIndex: {
            required: true,
            type: Number
        }
    },
    components: {
        BaseDrag,
        BaseDrop,
        ColumnTask,
        ColumnCreateTask
    },
    methods: {
        pickupColumn(evt, columnInd) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.setData('from-column-index', columnInd)
            // define type
            evt.dataTransfer.setData('type', 'column')
        },
        moveColumn({ fromColumnIndex }) {
            this.$store.dispatch('moveColumn', {
                fromColumnIndex,
                toColumnIndex: this.columnIndex
            })
        }
    }
}
</script>

<style>
    .column {
        display: flex;
        flex-direction: column;
        padding: 4px;
        margin-right: 4px;
        border-radius: 4px;
        width: 30%;
        min-width: 350px;
        max-width: 450px;
        background-color: #ccc;
        margin-bottom: 20px;
    }
    .column > input {
        height: 40px;
        padding: 4px;
        border-radius: 4px;
        border: none;
    }
</style>