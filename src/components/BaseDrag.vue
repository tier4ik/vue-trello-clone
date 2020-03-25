<template>
    <div
        draggable="true"
        @dragstart.self="onDrag"
        @dragover.prevent
        @dragenter.prevent>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        transferData: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDrag(evt) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.setData('payload', JSON.stringify(this.transferData))
        }
    }
}
</script>