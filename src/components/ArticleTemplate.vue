<template>
    <div class="article-template">
        <div class="article-template__button-back">
            <p @click="back"><img src="@/assets/arrow-back.svg" alt=""><span>back</span></p>
        </div>
        <div class="article-template__cover">
            <img class="article-template__img1" src="@/assets/article-cover.jpg" alt="">
            <img class="article-template__img2" src="@/assets/article-cover.jpg" alt="">
            <img class="article-template__img3" src="@/assets/article-cover.jpg" alt="">

        </div>
        <div class="article-template__container">
            <div class="article-template__section">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.article-template {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 200px;

    .article-template__button-back {
        position: absolute;
        top: 245px;
        left: 125px;
        z-index: 2;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #606276;
        cursor: default;

        img {
            vertical-align: middle;
            margin-right: 15px;
        }

        span {
            margin-top: 2px;
        }
    }

    .article-template__cover {
        height: 200px;
        width: 100%;

        .article-template__img2,
        .article-template__img3 {
            display: none;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .article-template__container {
        width: 100%;

        .article-template__section {
            box-sizing: border-box;
            width: 1000px;
            margin: 0 auto;
            background-color: #fff;
            margin-top: -80px;
            padding: 60px 60px 45px 60px;
            border-radius: 5px 5px 0px 0px;
        }
    }
}

@media (max-width: 1440px) {
    .article-template {
        .article-template__button-back {
            position: absolute;
            left: 20px;
        }
    }
}

@media (max-width: 1225px) {
    .article-template {
        margin-bottom: 150px;

        .article-template__button-back {
            top: 218px;
            left: 30px;

            span {
                display: none;
            }
        }

        .article-template__cover {
            .article-template__img1 {
                display: none;
            }

            .article-template__img2 {
                display: block;
            }
        }

        .article-template__container {
            box-sizing: border-box;
            padding: 0 25px;

            .article-template__section {
                width: 100%;
                padding: 40px 60px 45px 60px;
            }
        }
    }
}

@media (max-width: 767px) {
    .article-template {
        margin-bottom: 80px;

        .article-template__button-back {
            top: 163px;
            left: 25px;
            display: flex;

            span {
                display: inline;
            }
        }

        .article-template__cover {
            height: 140px;

            .article-template__img2 {
                display: none;
            }

            .article-template__img3 {
                display: block;
            }
        }

        .article-template__container {
            padding: 0;

            .article-template__section {
                padding: 30px 20px 0 20px;
                border-radius: 0;
                margin-top: 0;
            }
        }
    }
}
</style>