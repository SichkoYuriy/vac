<template>
    <buy-car />
    <how-work />
    <perfect-car />
    <advantages-block />
    <dream-vehicle />
    <happy-customers />
    <client-review />
    <calculator-component class="home-calculator" />
    <interesting-slider title="Interesting to read">
        <template v-slot:interesting-slide1>
            <slider-card date="10 May, 2020" title="How to save on buying a car ? Why is it better to buy from us">
                <img src="@/assets/interesting-slider1.jpg" alt="">
            </slider-card>
        </template>
        <template v-slot:interesting-slide2>
            <slider-card date="10 May, 2020" title="How fast can you order a car in Canada?">
                <img src="@/assets/interesting-slider2.jpg" alt="">
            </slider-card>
        </template>
        <template v-slot:interesting-slide3>
            <slider-card date="10 May, 2020" title="How to save on buying a car ? Why is it better to buy from us">
                <img src="@/assets/interesting-slider3.jpg" alt="">
            </slider-card>
        </template>
        <template v-slot:interesting-slide4>
            <slider-card date="10 May, 2020" title="How fast can you order a car in Canada?">
                <img src="@/assets/interesting-slider4.jpg" alt="">
            </slider-card>
        </template>
    </interesting-slider>
</template>

<script>

import BuyCar from "@/components/BuyCar.vue";
import HowWork from "@/components/HowWork.vue";
import PerfectCar from "@/components/PerfectCar.vue";
import AdvantagesBlock from "@/components/AdvantagesBlock.vue";
import DreamVehicle from "@/components/DreamVehicle.vue";
import HappyCustomers from "@/components/HappyCustomers.vue";
import ClientReview from "@/components/ClientReview.vue";
import CalculatorComponent from "@/components/CalculatorComponent.vue";
import InterestingSlider from "@/components/InterestingSlider.vue";
import SliderCard from "@/components/SliderCard.vue";
import SliderComponent from "@/components/SliderComponent.vue";

export default {
    name: 'HomePage',
    components: {
        BuyCar, HowWork, PerfectCar, AdvantagesBlock, DreamVehicle, HappyCustomers, ClientReview, CalculatorComponent, SliderCard, InterestingSlider, SliderComponent,
    },
    provide() {
        return {
        }
    }
} 
</script>

<style lang="scss" scoped>
.home-calculator {
    margin-bottom: 200px;
}

@media (max-width:1225px) {
    .home-calculator {
        margin-bottom: 150px;
    }
}

@media (max-width:767px) {
    .home-calculator {
        margin-bottom: 80px;
    }
}
</style>