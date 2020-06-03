<template>
    <div id="app">
        <TheNavBar class="mb-6" />
        <Card />
    </div>
</template>

<script>
    import TheNavBar from '@/components/TheNavBar'
    import Card from './components/BaseCard'

    export default {
        name: 'App',

        components: {
            TheNavBar,
            Card
        }
    }
</script>