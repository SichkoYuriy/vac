<template>
    <div class="about-qualified">
        <div class="about-qualified__container _container">
            <div class="about-qualified__block1">
                <p class="subtitle2">Contact us today and speak with one of our qualified agents</p>
                <base-button :blue="true" title="contact us now" @click="contactUs" />
            </div>
            <div class="about-qualified__block2">
                <p class="title">Our qualified agents</p>
                <p class="text">
                    The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real
                    reason VAC is the
                    easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.
                </p>
                <p class="text">Our team provides you with the best customer experience in the automotive industry. You
                    work with a dedicated
                    representative throughout the process. They are able to answer any questions you have about any of
                    our vehicles or the
                    financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send
                    them to you.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    components: {
        BaseButton,
    },
    methods: {
        contactUs() {
            this.$router.push("/car-page");
        },
    },
}
</script>

<style lang="scss" scoped>
.about-qualified {
    width: 100%;
    margin-bottom: 200px;

    .about-qualified__container {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
        }

        .about-qualified__block1 {
            box-sizing: border-box;
            padding: 60px;
            width: 49%;
            height: fit-content;
            background: #FFFFFF;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);

            .subtitle2 {
                font-weight: 700;
                font-size: 30px;
                line-height: 140%;
                color: #41456B;
                margin-bottom: 40px;
            }

            button {
                width: 200px;
                height: 45px;
            }
        }

        .about-qualified__block2 {
            width: 46%;

            .title {
                margin-bottom: 20px;
            }

            .text {
                &:not(:last-of-type) {
                    margin-bottom: 20px;
                }
            }
        }
    }
}

@media (max-width: 1225px) {

    .about-qualified {
        margin-bottom: 150px;

        .about-qualified__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .about-qualified__block1 {
                order: 2;
                padding: 40px;
                width: 80%;
            }

            .about-qualified__block2 {
                order: 1;
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {

    .about-qualified {
        margin-bottom: 80px;

        .about-qualified__container {
            padding: 0 20px;
            gap: 30px;

            .about-qualified__block1 {
                padding: 20px;
                width: 100%;

                .subtitle2 {
                    font-size: 25px;
                    margin-bottom: 20px;
                }

                button {
                    width: 100%;
                    height: 35px;
                }
            }

            .about-qualified__block2 {
                width: 100%;

                .text {
                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>