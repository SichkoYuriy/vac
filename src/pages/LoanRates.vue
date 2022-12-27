<template>
    <page-title titleText="Loan rates" />
    <a-l-block
        text="You want to secure a loan that works for your budget.Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan."
        title="Our credit policy">
        <template v-slot:image><img src="@/assets/Chevrolet.png" alt=""></template>
    </a-l-block>
    <l-r-terms />
    <l-r-benefits />
    <calculator-component />
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import ALBlock from '@/components/ALBlock.vue';
import LRTerms from '@/components/LRTerms.vue';
import LRBenefits from '@/components/LRBenefits.vue';
import CalculatorComponent from '@/components/CalculatorComponent.vue';

export default {
    components: {
        PageTitle, ALBlock, LRTerms, LRBenefits, CalculatorComponent
    },
}
</script>

<style>

</style>