<template>
    <div id="app">
        <TheNavBar class="mb-6" />
        <Post />
    </div>
</template>

<script>
    import TheNavBar from '@/components/TheNavBar'
    import Post from './components/ThePost'

    export default {
        name: 'App',

        components: {
            TheNavBar,
            Post
        }
    }
</script>

<style lang="sass">
    @import "@/styles/main.scss";
</style>