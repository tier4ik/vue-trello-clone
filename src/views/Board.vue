<template>
    <div class="board">
        <!-- render columns -->
        <board-column
            v-for="(column, colInd) in board.columns"
            :key="colInd"
            :board="board"
            :column="column"
            :columnIndex="colInd"
        />
        <!-- render element for creating new column -->
        <board-create-column />

        <!-- render task details if any task clicked-->
        <task-overview></task-overview>

  </div>
</template>

<script>

import { mapState } from 'vuex'
import BoardColumn from '../components/BoardColumn'
import BoardCreateColumn from '../components/BoardCreateColumn'
import TaskOverview from '../components/TaskOverview'

export default {
    computed: {
        ...mapState(['board'])
    },
    components: {
        BoardColumn,
        BoardCreateColumn,
        TaskOverview
    }
}
</script>

<style>
    .board {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
        align-items: flex-start;
    }
</style>