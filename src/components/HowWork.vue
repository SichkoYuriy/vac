<template>
    <div class="how-work">
        <div class="how-work__block">
            <div class="how-work__block-container ">
                <p class="how-work__block-text1">How does it work?</p>
                <p class="how-work__block-text2">From your Phone to your Home</p>
                <p class="how-work__block-text3">We make it easy for you to buy your dream car from your phone without
                    ever having to step into a dealership! We deliver
                    your vehicle to your home for you to test drive before you sign anything.</p>
            </div>
        </div>
        <img src="@/assets/Honda.png" alt="" class="how-work__honda">
        <img src="@/assets/Honda3.png" alt="" class="how-work__honda3">

        <img src="@/assets/Lexus.png" alt="" class="how-work__lexus">
        <img src="@/assets/Lexus2.png" alt="" class="how-work__lexus2">
        <img src="@/assets/Lexus3.png" alt="" class="how-work__lexus3">


    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.how-work {
    width: 100%;
    height: 590px;
    display: flex;
    justify-content: center;
    position: relative;

    .how-work__block {
        width: 605px;
        height: 365px;
        background: #FFFFFF;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-top: -40px;
        z-index: 3;

        .how-work__block-container {
            width: 80%;
            margin: 0 auto;

            p {
                margin: 0;
            }

            .how-work__block-text1 {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                text-align: center;
                color: #41456B;
                margin-top: 60px;
            }

            .how-work__block-text2 {
                font-weight: 700;
                font-size: 30px;
                line-height: 140%;
                text-align: center;
                color: #7481FF;
            }

            .how-work__block-text3 {
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                text-align: center;
                letter-spacing: 0.02em;
                color: #606276;
                margin-top: 20px;
            }
        }
    }

    .how-work__honda {
        position: absolute;
        left: 0;
        top: calc((100% - 200px) / 2);
        z-index: 1;
    }

    .how-work__lexus {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
    }

    .how-work__lexus2,
    .how-work__lexus3,
    .how-work__honda3 {
        display: none;
        position: absolute;
        z-index: 1;
    }
}

@media (max-width: 1225px) {
    .how-work {
        height: 650px;

        .how-work__block {
            width: 556px;
            height: 321px;

            .how-work__block-container {
                .how-work__block-text1 {
                    margin-top: 40px;
                }
            }
        }

        .how-work__honda {
            width: 320px;
            height: 166px;
            left: 0;
            top: 335px;
        }

        .how-work__lexus {
            display: none;
        }

        .how-work__lexus2 {
            display: block;
            right: 0;
            top: 183px;

        }
    }
}

@media (max-width: 767px) {
    .how-work {
        height: 560px;

        .how-work__block {
            width: 320px;
            height: 334px;

            .how-work__block-container {
                width: 87.5%;

                .how-work__block-text1 {
                    margin-top: 20px;
                    font-size: 30px;
                }

                .how-work__block-text2 {
                    font-size: 24px;
                }

                .how-work__block-text3 {
                    margin-top: 10px;
                }
            }
        }

        .how-work__honda3 {
            display: block;
            left: 0;
            top: 366px;
        }

        .how-work__lexus2,
        .how-work__honda {
            display: none;
        }

        .how-work__lexus3 {
            display: block;
            right: 0;
            top: 270px;
        }
    }
}
</style>