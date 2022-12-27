<template>
    <div class="wrapper">
        <header-block></header-block>
        <router-view />
    </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';

export default {
    components: {
        HeaderBlock,
    }
}
</script>

<style>

</style>