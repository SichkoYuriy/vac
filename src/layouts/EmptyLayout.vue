<template>
    <div class="wrapper-two">
        <router-view />
    </div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
.wrapper-two {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
</style>