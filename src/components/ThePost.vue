<template>
    <BaseCard>
        <div slot="header">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <div class="w-16 h-16 border rounded-full"></div>

                    <div class="ml-4">
                        <div class="text-black">Username</div>
                        <div class="text-gray-500">Hash tag</div>
                    </div>
                </div>

                <font-awesome-icon :icon="['fas', 'ellipsis-h']" size="lg" />
            </div>
        </div>

        <div slot="body">
            <div class="h-64 border"></div>

            <div class="flex items-center justify-between mt-4">
                <div class="flex items-center justify-start">
                    <font-awesome-icon :icon="['far', 'heart']" size="2x" />
                    <font-awesome-icon :icon="['far', 'comment']" size="2x" class="ml-4" />
                    <font-awesome-icon :icon="['far', 'paper-plane']" size="2x" class="ml-4"/>
                </div>

                <font-awesome-icon :icon="['far', 'bookmark']" size="2x" />
            </div>

            <div class="mt-4 text-gray-500">
                Liked by
                <span class="text-black">Minh Bui</span>,
                <span class="text-black">Tri Minh</span>
            </div>

            <div class="mt-4">
                Comment
            </div>

            <div class="mt-4 text-gray-500">
                2 days ago
            </div>
        </div>

        <div slot="footer">
            <div class="flex items-center justify-between">
                <div class="text-gray-500">Add a comment ...</div>
                <div class="text-blue-300">POST</div>
            </div>
        </div>
    </BaseCard>
</template>

<script>
    import BaseCard from '@/components/base/BaseCard'

    export default {
        name: 'ThePost',

        components: {
            BaseCard
        }
    }
</script>