<template>
    <div class="advantages">
        <div class="advantages__container _container">
            <div class="advantages__title">
                <p>Advantages of working with us</p>
            </div>
            <div class="advantages__block">
                <advantages-triangle title="Vehicle Delivery"
                    text="We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.">
                    <img src="@/assets/delivery-icon.svg" alt="">
                </advantages-triangle>
                <advantages-triangle-reverse id="reverse" title="Auto Financing"
                    text="We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%">
                    <img src="@/assets/finance-icon.svg" alt="">
                </advantages-triangle-reverse>
                <advantages-triangle id="two" title="Auto Financing"
                    text="We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%">
                    <img src="@/assets/finance-icon.svg" alt="">
                </advantages-triangle>
                <advantages-triangle id="three" title="Huge Inventory"
                    text="We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you">
                    <img src="@/assets/car-icon.svg" alt="">
                </advantages-triangle>
            </div>
        </div>
    </div>

</template>

<script>
import AdvantagesTriangle from './AdvantagesTriangle.vue';
import AdvantagesTriangleReverse from './AdvantagesTriangleReverse.vue';

export default {
    components: {
        AdvantagesTriangle, AdvantagesTriangleReverse
    }
}
</script>

<style lang="scss" scoped>
.advantages {
    margin-bottom: 20px;

    .advantages__container {
        display: flex;
        flex-direction: column;

        .advantages__title {
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            margin-bottom: 60px;

            p {
                margin: 0;
            }
        }

        .advantages__block {
            display: flex;
            justify-content: space-between;

            #two {
                display: none;
            }
        }
    }
}

@media (min-width:1440px) {
    .advantages {
        .advantages__container {
            .advantages__block {

                #reverse,
                #three {
                    margin-left: -50px;
                }
            }
        }
    }
}

@media (max-width:1439px) {
    .advantages {
        .advantages__container {
            .advantages__block {
                flex-direction: column;
                align-items: center;

                #two {
                    display: block;
                }

                #reverse {
                    display: none;
                }
            }
        }
    }
}

@media (max-width:1225px) {
    .advantages {
        .advantages__container {
            .advantages__title {
                margin-top: 40px;
                padding: 0 25px;
            }
        }
    }
}

@media (max-width:767px) {
    .advantages {
        .advantages__container {
            .advantages__title {
                box-sizing: border-box;
                width: 100%;
                padding: 0 20px;
                font-size: 30px;
                text-align: center;
                display: flex;
                justify-content: center;
                margin-bottom: 40px;

                p {
                    max-width: 308px;
                }
            }
        }
    }
}
</style>