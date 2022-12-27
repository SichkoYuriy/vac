<template>
    <button class="button" :class="className">{{ title }}</button>
    <!-- @click="click" -->
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        blue: {
            type: Boolean,
            default: false
        },
        white: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        // click() {
        //     this.$emit('click')
        // }
    },
    computed: {
        className() {
            return {
                'button-blue': this.blue,
                'button-white': this.white,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.button {
    border-radius: 2px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
}

.button-blue {
    background-color: #7481FF;
    color: #FFF;
    border: none;

    &:hover {
        background-color: #6270FF;
    }
}

.button-white {
    border: 1px solid #7481FF;
    background-color: #fff;
    color: #7481FF;

    &:hover {
        color: #6270FF;
        border-color: #6270FF;
    }
}
</style>