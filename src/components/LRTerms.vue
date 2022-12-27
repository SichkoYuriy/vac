<template>
    <div class="lr-terms">
        <div class="lr-terms__container _container">
            <div class="lr-terms__title">
                <p>Interest rates and loan terms</p>
            </div>
            <div class="lr-terms__block">
                <div class="lr-terms__sec">
                    <div class="lr-terms__subtitle">
                        <img src="@/assets/percent.svg" alt="">
                        <p>What are my interest rate options?</p>
                    </div>
                    <p class="lr-terms__text">
                        We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is
                        critical for determining
                        the total cost of your auto financing. Interest rates are based on many factors including the
                        loan amount, your credit
                        score, and your budget. We help you find the lowest interest rates available for your auto loan.
                    </p>
                </div>
                <div class="lr-terms__sec">
                    <div class="lr-terms__subtitle">
                        <img src="@/assets/clock.svg" alt="">
                        <p>How long will my loan term be?</p>
                    </div>
                    <p class="lr-terms__text">
                        Our goal is to find the right car and the right loan for you. Because we have relationships with
                        so many different
                        lenders, we can help you find the right term length for your budget. The longer the loan is,
                        often the lower the monthly
                        payments will be—but the more expensive the loan will be overall. Most of the loans we secure
                        for our clients are
                        between 36 and 72 months.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.lr-terms {
    width: 100%;
    margin-bottom: 200px;

    .lr-terms__container {
        display: flex;
        flex-direction: column;
        gap: 60px;

        p {
            margin: 0;
        }

        .lr-terms__title {
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
        }

        .lr-terms__block {
            display: flex;
            justify-content: space-between;

            .lr-terms__sec {
                box-sizing: border-box;
                width: 49%;
                padding: 60px;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;

                .lr-terms__subtitle {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    gap: 20px;

                    p {
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        letter-spacing: 0.02em;
                        color: #41456B;
                    }

                    img {
                        width: 60px;
                        height: 60px;
                    }

                }

                .lr-terms__text {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    letter-spacing: 0.02em;
                    color: #606276;
                }
            }
        }
    }
}

@media (max-width:1225px) {
    .lr-terms {
        margin-bottom: 150px;

        .lr-terms__container {
            align-items: center;

            .lr-terms__block {
                flex-direction: column;
                align-items: center;
                gap: 20px;

                .lr-terms__sec {
                    width: 80%;
                    padding: 40px;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .lr-terms {
        margin-bottom: 80px;

        .lr-terms__container {
            padding: 0 20px;
            gap: 30px;

            .lr-terms__title {
                font-size: 30px;
            }

            .lr-terms__block {

                .lr-terms__sec {
                    width: 100%;
                    padding: 20px;

                    .lr-terms__subtitle {
                        font-size: 20px;

                        img {
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
            }
        }
    }
}
</style>