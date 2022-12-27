<template>
    <preloader-page />
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import OnlyHeaderLayout from '@/layouts/OnlyHeaderLayout.vue';
import PreloaderPage from './components/PreloaderPage.vue';

export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || 'main') + '-layout'
        }
    },
    components: {
        MainLayout, EmptyLayout, OnlyHeaderLayout, PreloaderPage
    }
}

</script>

<style lang="scss">
html,
body {
    font-family: 'Gilroy';
    font-style: normal;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    ul,
    ol,
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
}

#app {
    height: 100%;

    .wrapper {
        min-height: 100%;
        max-width: 1920px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .main {
            flex: 1 1 auto;
        }
    }
}

._container {
    max-width: 1200px;
    margin: 0 auto;
}

.title {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
}

.text {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
}

.subtitle {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}

@media (max-width: 767px) {
    .title {
        font-size: 30px;
    }

    .subtitle {
        font-size: 20px;
    }
}

.paginate-buttons {
    width: 15px;
    height: 15px;
    background: rgba(96, 98, 118, 0.3);
    border: none;
    border-radius: 50%;
    color: rgba(96, 98, 118, 0);
    margin-right: 10px;

}

.active-page {
    background: rgba(96, 98, 118, 1);
    border: none;
    color: rgba(96, 98, 118, 0);
}
</style>
