<template>
    <div class="three-blocks">
        <div class="block" v-for="block in blocks" :key="block">
            <p class="block__title">{{ block.title }}</p>
            <p class="block__text">{{ block.text }}</p>
        </div>
    </div>

</template>

<script>

export default {
    props: {
        blocks: {
            title: {
                type: String,
                required: true,
                default: ''
            },
            text: {
                type: String,
                required: true,
                default: ''
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.three-blocks {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;

    .block {
        box-sizing: border-box;
        width: 280px;
        height: 143px;
        padding: 25px 0 0 35px;
        background: #FFFFFF;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;

        p {
            margin: 0;
        }

        .block__title {
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            margin-bottom: 5px;
        }

        .block__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
}

@media (max-width: 767px) {
    .three-blocks {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .block {
            width: 100%;
            height: 116px;
            padding: 20px 0 0 30px;

            .block__title {
                font-size: 30px;
            }
        }
    }
}
</style>