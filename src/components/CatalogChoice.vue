<template>
    <div class="filter-choice-item" v-if="visible">
        <img src="@/assets/Close.svg" @click="click">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        visible: Array[String],
        click: Function,
    }
}
</script>

<style lang="scss" scoped>
.filter-choice-item {
    width: fit-content;
    padding: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #41456B;
    background: rgba(116, 129, 255, 0.2);
    border-radius: 2px;
    margin-right: 10px;

    img {
        margin-right: 5px;
        cursor: pointer;
    }
}
</style>