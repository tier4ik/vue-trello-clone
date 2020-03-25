<template>
    <div
        @drop.stop="onDrop"
        @dragover.prevent
        @dragenter.prevent>
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        onDrop(evt) {
            const data = JSON.parse(evt.dataTransfer.getData('payload'))
            this.$emit('drop', data)
        }
    }
}
</script>