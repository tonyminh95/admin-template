<template>
    <div id="app">
        <TheNavBar class="mb-6" />
        <HelloWorld msg="Welcome to Your Vue.js App" class="text-center"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import TheNavBar from '@/components/TheNavBar'

    export default {
        name: 'App',

        components: {
            HelloWorld,
            TheNavBar
        }
    }
</script>