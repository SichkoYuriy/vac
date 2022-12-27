<template>
    <page-title titleText="About VAC" />
    <a-l-block
        text="Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!"
        title="Our mission">
        <template v-slot:image><img src="@/assets/Kia.png" alt=""></template>
    </a-l-block>
    <about-dream-car />
    <about-convenience />
    <about-conditions />
    <about-qualified />
    <client-review />
    <about-innovate />
    <about-features />
    <calculator-component />
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import ALBlock from '@/components/ALBlock.vue';
import AboutDreamCar from '@/components/AboutDreamCar.vue';
import AboutConvenience from '@/components/AboutConvenience.vue';
import AboutConditions from '@/components/AboutConditions.vue';
import AboutQualified from '@/components/AboutQualified.vue';
import ClientReview from '@/components/ClientReview.vue';
import AboutInnovate from '@/components/AboutInnovate.vue';
import CalculatorComponent from '@/components/CalculatorComponent.vue';
import AboutFeatures from '@/components/AboutFeatures.vue';

export default {
    components: {
        PageTitle, ALBlock, AboutDreamCar, AboutConvenience, AboutConditions, AboutQualified, ClientReview, AboutInnovate, CalculatorComponent, AboutFeatures
    },
}
</script>

<style lang="scss">

</style>