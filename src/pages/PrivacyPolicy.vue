<template>
    <PageTitle titleText="Policy Privacy" />

    <AcordeonComponent :accordions="accordions" />

</template>

<script>
import AcordeonComponent from '@/components/AcordeonComponent.vue';
import PageTitle from '@/components/PageTitle.vue';

export default {
    components: {
        AcordeonComponent, PageTitle
    },
    data() {
        return {
            accordions: [
                {
                    id: 1,
                    title: 'Terms',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 2,
                    title: 'Authorization',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person. ',
                },
                {
                    id: 3,
                    title: 'Links',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 4,
                    title: 'Site terms of use modifications',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason . ',
                },
                {
                    id: 5,
                    title: 'Governing law',
                    text: 'By posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 6,
                    title: 'How we treat your personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 7,
                    title: 'Cookies',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
            ],
        }
    },
}
</script>

<style scoped>

</style>