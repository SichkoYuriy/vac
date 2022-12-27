<template>
    <div class="about-features">
        <div class="about-features__container _container">
            <div class="about-features__block1">
                <img src="@/assets/about-features.jpg" alt="">
            </div>
            <div class="about-features__block2">
                <p class="title">Main features</p>
                <p class="text">We are your one stop shop. We believe that vehicle shopping should be a fun and painless
                    process and with years of
                    experience, we make it just that.</p>
                <three-blocks :blocks="blocks" class="about-features__three-blocks" />
            </div>
        </div>
    </div>
</template>

<script>
import ThreeBlocks from './ThreeBlocks.vue';
export default {
    components: {
        ThreeBlocks
    },
    data() {
        return {
            blocks: [
                { title: '7,988+', text: 'Sold Cars' },
                { title: '123', text: 'Working Experts' },
                { title: '1560+', text: 'Happy Clients' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.about-features {
    width: 100%;
    margin-bottom: 200px;

    .about-features__container {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
        }

        .about-features__block1 {
            width: 45%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .about-features__block2 {
            width: 50%;

            .title {
                margin-bottom: 20px;
            }

            .text {
                margin-bottom: 40px;
            }
        }
    }
}

@media (max-width:1225px) {
    .about-features {
        margin-bottom: 150px;

        .about-features__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .about-features__block1 {
                width: 80%;
                order: 2;

                img {
                    height: 427px;
                }
            }

            .about-features__block2 {
                width: 80%;
                order: 1;

                .about-features__three-blocks {
                    max-width: 615px;
                }
            }
        }
    }
}

@media (max-width:767px) {
    .about-features {
        margin-bottom: 80px;

        .about-features__container {
            padding: 0 20px;
            gap: 20px;

            .about-features__block1 {
                width: 100%;

                img {
                    height: 320px;
                }
            }

            .about-features__block2 {
                width: 100%;

                .about-features__three-blocks {
                    max-width: unset;
                }

                .title {
                    margin-bottom: 10px;
                }

                .text {
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>