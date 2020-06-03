<template>
    <div class="card">
        <header class="card__header">
            <slot name="header"></slot>
        </header>

        <body class="card__body">
            <slot name="body"></slot>
        </body>

        <footer class="card__footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'BaseCard',
    }
</script>