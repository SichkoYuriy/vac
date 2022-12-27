<template>
    <div class="about-innovate">
        <div class="about-innovate__container _container">
            <div class="about-innovate__block1">
                <p class="title">We're dynamic team of creative people with innovative mind</p>
                <p class="text-bold">Our History</p>
                <p class="text">We founded VAC because we hated how complicated it was to buy a car. You only have so
                    much free time in your life. You
                    don’t want to waste it going to different car dealerships every weekend for weeks and months trying
                    to track down the
                    right car.</p>
                <p class="text-bold">Our Goal</p>
                <p class="text">Buying a car has never been easier. You pick out the car you want on our website. You
                    work with one of our Qualified
                    Agents to secure financing. Then we bring the car to you—all before you sign anything. You test
                    drive the vehicle, and
                    if you like it, you sign the loan documents right there and the car is yours.</p>
            </div>
            <div class="about-innovate__block2">
                <img src="@/assets/about-innovate.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-innovate {
    width: 100%;
    margin-bottom: 200px;

    .about-innovate__container {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
        }

        .about-innovate__block1 {
            width: 43%;

            .title {
                margin-bottom: 20px;
            }

            .text-bold {
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;
                color: #41456B;
                margin-bottom: 5px;
            }

            .text {
                &:not(:last-of-type) {
                    margin-bottom: 20px;
                }
            }
        }

        .about-innovate__block2 {
            width: 50%;

            img {
                width: 100%;
            }
        }
    }
}

@media (max-width: 1225px) {
    .about-innovate {
        margin-bottom: 150px;

        .about-innovate__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .about-innovate__block1 {
                width: 80%;
            }

            .about-innovate__block2 {
                width: 80%;

                img {
                    max-height: 430px;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .about-innovate {
        margin-bottom: 80px;

        .about-innovate__container {
            gap: 20px;
            padding: 0 20px;

            .about-innovate__block1 {
                width: 100%;

                .title {
                    margin-bottom: 10px;
                }

                .text-bold {
                    font-size: 18px;
                }

                .text {
                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                }
            }

            .about-innovate__block2 {
                width: 100%;

                img {
                    max-height: 400px
                }
            }
        }
    }
}

@media (max-width: 500px) {
    .about-innovate {
        .about-innovate__container {
            .about-innovate__block2 {

                img {
                    max-height: 230px
                }
            }
        }
    }
}
</style>