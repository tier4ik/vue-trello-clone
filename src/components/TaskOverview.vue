<template>
    <div 
        v-if="bgActive"
        class="task__overview-bg"
        @click.self="closeTask">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        bgActive() {
            return this.$route.name === 'task'
        }
    },
    methods: {
        closeTask() {
            this.$router.push({ name: 'board' })
        }
    }
}
</script>

<style>
    .task__overview-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, .2);
        z-index: 999;
    }
</style>