<template>
    <page-title titleText="Use our free calculator!" />
    <calculator-component />
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import CalculatorComponent from '@/components/CalculatorComponent.vue';

export default {
    components: {
        PageTitle, CalculatorComponent
    },
}
</script>

<style>

</style>