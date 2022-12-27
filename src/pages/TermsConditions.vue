<template>
    <PageTitle titleText="Terms & Conditions" />

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
                    title: 'Please read these terms and conditions of use carefully before using this web site',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 2,
                    title: 'Modifications of the terms and conditions',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person. ',
                },
                {
                    id: 3,
                    title: 'How we work',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 4,
                    title: 'Authorization',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason . ',
                },
                {
                    id: 5,
                    title: 'Links',
                    text: 'By posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 6,
                    title: 'Minors',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 7,
                    title: 'Restricted access',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 8,
                    title: 'Governing law',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting. ',
                },
                {
                    id: 9,
                    title: 'Privacy policy',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 10,
                    title: 'Personal information',
                    text: 'Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 11,
                    title: 'Collecting personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 12,
                    title: 'Using and sharing personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person. ',
                },
                {
                    id: 13,
                    title: 'Sharing your personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 14,
                    title: 'Retaining your personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. ',
                },
                {
                    id: 15,
                    title: 'Contacting you',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 16,
                    title: 'Accessing your personal information stored by us',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                },
                {
                    id: 17,
                    title: 'Responding to privacy concerns or complaints ',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify.Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                }
            ],
        }
    },
}
</script>

<style>

</style>