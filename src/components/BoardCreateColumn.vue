<template>
  <div class="column">
        <input type="text" 
            name="newColumnName"
            v-model="newColumnName"
            placeholder="+ Add new column"
            @change="createColumn">
    </div>
</template>

<script>
export default {
    data() {
        return {
            newColumnName: ''
        }
    },
    methods: {
        createColumn() {
            if(this.newColumnName.trim().length !== 0) {
                this.$store.dispatch('createColumn', {
                    name: this.newColumnName
                })
                this.newColumnName = ''
            }
        }
    }
}
</script>

<style>

</style>