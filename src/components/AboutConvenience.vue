<template>
    <div class="about-conv">
        <div class="about-conv__container _container">
            <div class="about-conv__block1">
                <img src="@/assets/Nissan-about.png" alt="">
            </div>
            <div class="about-conv__block2">
                <p class="about-conv__title">VAC is convenience and transparency</p>
                <p class="about-conv__text">
                    We want to make simple for you to find the car you want. We also want to make sure you are 100%
                    comfortable with the
                    terms of the conditions of your auto loan.
                </p>
                <p class="about-conv__text">Buying a car has never been easier. You pick out the car you want on our
                    website. You work with one of our Qualified
                    Agents to secure financing. Then we bring the car to you—all before you sign anything. You test
                    drive the vehicle, and
                    if you like it, you sign the loan documents right there and the car is yours.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-conv {
    width: 100%;
    margin-bottom: 200px;

    .about-conv__container {
        display: flex;
        justify-content: space-between;

        .about-conv__block1 {
            width: 47%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            img {
                width: 100%;
            }
        }

        .about-conv__block2 {
            width: 45%;

            p {
                margin: 0;
            }

            .about-conv__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                margin-bottom: 20px;
            }

            .about-conv__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;

                &:not(:last-of-type) {
                    margin-bottom: 20px;
                }
            }
        }
    }
}

@media (max-width: 1225px) {
    .about-conv {
        margin-bottom: 150px;

        .about-conv__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .about-conv__block1 {
                order: 2;
                width: 80%;
                flex-direction: row;
                justify-content: center;
            }

            .about-conv__block2 {
                order: 1;
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {
    .about-conv {
        margin-bottom: 80px;

        .about-conv__container {
            padding: 0 20px;
            gap: 30px;

            .about-conv__block1 {
                width: 100%;
            }

            .about-conv__block2 {
                width: 100%;

                .about-conv__title {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

                .about-conv__text {
                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                }

            }
        }
    }
}
</style>