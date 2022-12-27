<template>
    <div class="wrapper">
        <header-block></header-block>
        <main class="main">
            <router-view />
        </main>
        <footer-block></footer-block>
    </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
    components: {
        FooterBlock, HeaderBlock,
    }
}
</script>

<style>

</style>