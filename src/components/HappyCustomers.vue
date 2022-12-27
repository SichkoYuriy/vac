<template>
    <div class="happy-customers">
        <div class="happy-customers__container _container">
            <div class="happy-customers__sec1">
                <p class="happy-customers__title">Happy customers</p>
                <p class="happy-customers__text">Since 2017, we have helped thousands of Canadians get their dream
                    vehicles from the comfort of their
                    homes.</p>
                <three-blocks id="second-block" :blocks="blocks" />
                <p class="happy-customers__subtitle">What are you waiting? Get started right now!</p>
                <base-button :blue="true" title="Request a Car" @click="toQuiz" />
            </div>
            <div class="happy-customers__sec2">
                <three-blocks id="first-block" :blocks="blocks" />
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import ThreeBlocks from './ThreeBlocks.vue';

export default {
    components: {
        BaseButton, ThreeBlocks
    },
    methods: {
        toQuiz() {
            this.$router.push("/quiz-page");
        },
    },
    data() {
        return {
            blocks: [
                { title: '7,988+', text: 'Sold Cars' },
                { title: '16,974+', text: 'Vehicles To Choose From' },
                { title: '123', text: 'Experts Across Canada' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.happy-customers {
    width: 100%;
    margin-bottom: 200px;

    .happy-customers__container {
        display: flex;

        .happy-customers__sec1 {
            width: 50%;

            p {
                margin: 0;
            }

            #second-block {
                display: none;
            }

            .happy-customers__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                margin-bottom: 20px;
            }

            .happy-customers__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
                max-width: 549px;
            }

            .happy-customers__subtitle {
                font-weight: 700;
                font-size: 25px;
                line-height: 140%;
                letter-spacing: 0.02em;
                color: #41456B;
                margin: 40px 0;
                max-width: 320px;
            }

            button {
                width: 200px;
                height: 45px;
            }
        }


        .happy-customers__sec2 {
            width: 50%;
        }
    }
}

@media (max-width:1225px) {
    .happy-customers {
        margin-bottom: 150px;

        .happy-customers__container {
            justify-content: center;

            .happy-customers__sec1 {
                width: 79%;

                #second-block {
                    max-width: 600px;
                    display: flex;
                    margin-top: 40px;
                }

                .happy-customers__title {
                    margin-bottom: 20px;
                }

                .happy-customers__text {
                    max-width: 100%;
                }
            }

            .happy-customers__sec2 {
                display: none;
            }
        }
    }
}

@media (max-width: 767px) {
    .happy-customers {
        margin-bottom: 80px;

        .happy-customers__container {
            justify-content: center;
            padding: 0 20px;

            .happy-customers__sec1 {
                width: 100%;

                #second-block {
                    max-width: 100%;
                    display: flex;
                    margin-top: 20px;
                }

                .happy-customers__title {
                    margin-bottom: 10px;
                    font-size: 30px;
                }

                .happy-customers__text {
                    max-width: 100%;
                }

                .happy-customers__subtitle {
                    font-size: 20px;
                    margin: 20px 0;
                    max-width: 250px;
                }

                button {
                    width: 100%;
                }
            }
        }
    }
}
</style>