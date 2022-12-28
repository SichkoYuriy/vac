<template>
    <div class="header">
        <div class="header__container _container">
            <div class="header__logo">
                <a href="/">
                    <img src="@/assets/VAC_logo.png" alt="logo icon">
                    <p>VAC</p>
                </a>
            </div>
            <p class="inventory-text" v-if="inventory">Inventory</p>
            <div class="header__buttons">
                <base-button @click="toCatalog" title="Inventory" white v-if="whiteVisible" />
                <router-link :to="toQuiz">
                    <base-button :title=blue blue v-if="blueVisible" />
                </router-link>
                <slot></slot>
            </div>
            <div class="burger__menu" @click="showDialog">
                <i class="fa-solid fa-bars"></i>
            </div>

            <dialog-block v-model:show="dialogVisible">
                <div class="menu__container">
                    <div class="close-button">
                        <div class="button">
                            <i class="fa-solid fa-xmark" @click="closeDialog"> </i>
                        </div>
                    </div>
                    <div class="menu__items">
                        <ul>
                            <a href="#/" @click="showForm">
                                <li>Contact us</li>
                            </a>
                            <a @click="toAbout">
                                <li>About VAC</li>
                            </a>
                            <a href="/loan-rates">
                                <li>Loan Rates</li>
                            </a>
                            <a href="/vehicle-videos">
                                <li>Video</li>
                            </a>
                            <a href="/blog-page">
                                <li>Blog</li>
                            </a>
                            <a href="/calculator-page">
                                <li>Calculate</li>
                            </a>
                        </ul>
                    </div>
                    <div class="menu__socials">
                        <div class="menu__socials-container">
                            <a href="/about-page"><img src="@/assets/Instagram.svg" alt="instagram logo"></a>
                            <a href="/about-page"><img src="@/assets/Facebook.svg" alt="facebook logo"></a>
                            <a href="/about-page"><img src="@/assets/YouTube.svg " alt="youtube logo"></a>
                        </div>
                    </div>
                </div>
            </dialog-block>
            <dialog-block v-model:show="formVisible" v-model:scroll="scrolls">
                <form class="form__container" @submit.prevent="sendData">
                    <div class="close-button">
                        <div class="button">
                            <i class="fa-solid fa-xmark" @click="closeForm"> </i>
                        </div>
                    </div>
                    <div class="form__header">
                        <p>We can't wait to hear from you!</p>
                    </div>
                    <div class="form__inputs">
                        <div class="input__container">
                            <input v-model.trim="form.name" class="input-name" type="text" placeholder="Your Name"
                                :class="v$.form.name.$error ? 'is-invalid' : ''">

                            <p class="invalid-feedback" v-for="error in v$.form.name.$errors" :key="error.$uid">
                                {{ error.$message }} </p>

                            <img class="input-img" src="@/assets/input-name.svg">
                        </div>

                        <div class="input__container">
                            <input v-model.trim="form.phone" class="input-tel"
                                :class="v$.form.phone.$error ? 'is-invalid' : ''" type="tel" placeholder="Phone Number">

                            <p class="invalid-feedback" v-for="error in v$.form.phone.$errors" :key="error.$uid">
                                {{ error.$message }} </p>

                            <img class="input-img-tel" src="@/assets/input-phone.svg">
                        </div>

                        <div class="input__container">
                            <input v-model.trim="form.email" class="input-email" type="email"
                                :class="v$.form.email.$error ? 'is-invalid' : ''" placeholder="Email Address">

                            <p class="invalid-feedback" v-for="error in v$.form.email.$errors" :key="error.$uid">
                                {{ error.$message }} </p>

                            <img class="input-img" src="@/assets/input-email.svg">
                        </div>
                    </div>
                    <div class="form__button">
                        <base-button type="submit" title="contact me" :blue="true" />
                    </div>
                    <div class="form__socials">
                        <div class="form__socials-text">
                            <p>You can contact us yourself</p>
                        </div>
                        <div class="form__socials-links">
                            <a href="/about-page"><img src="@/assets/Instagram.svg" alt="instagram logo"></a>
                            <a href="/about-page"><img src="@/assets/Facebook.svg" alt="facebook logo"></a>
                            <a href="/about-page"><img src="@/assets/YouTube.svg " alt="youtube logo"></a>
                            <a href="/about-page"><img src="@/assets/letter.svg " alt="letter icon"></a>
                        </div>
                    </div>
                </form>
            </dialog-block>
            <dialog-block v-model:show="successVisible" v-model:scroll="scrolls">
                <div class="success__container">
                    <div class="close-button">
                        <i class="fa-solid fa-xmark" @click="closeSuccess"></i>
                    </div>
                    <img src="@/assets/Success.svg" alt="">
                    <p class="success__header">Application Successful!</p>
                    <p class="success__text">Our manager will contact you in the nearest time.</p>
                </div>
            </dialog-block>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import DialogBlock from './DialogBlock.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, numeric, maxLength } from '@vuelidate/validators';

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            dialogVisible: false,
            formVisible: false,
            successVisible: false,
            scrolls: false,
            form: {
                name: '',
                phone: '',
                email: '',
            },
        }
    },
    props: {
        toQuiz: {
            type: String,
            default: '/quiz-page',
        },
        blue: {
            type: String,
            default: 'request a car',
        },
        whiteVisible: {
            type: Boolean,
            default: true,
        },
        blueVisible: {
            type: Boolean,
            default: true,
        },
        inventory: {
            type: Boolean,
            default: false,
        },
    },
    validations() {
        return {
            form: {
                name: { required, minLength: minLength(2) },
                phone: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) },
                email: { required, email },
            }
        }
    },
    components: {
        DialogBlock, BaseButton
    },
    methods: {
        toAbout() {
            this.$router.push("/about-page");
        },
        toCatalog() {
            this.$router.push("/catalog-page");
        },
        showDialog() {
            this.dialogVisible = true;
            this.scrolls = true;
            this.lockScroll(this.dialogVisible);
        },
        closeDialog() {
            this.dialogVisible = false;
            this.unlockScroll(this.dialogVisible);
        },
        lockScroll(lock) {
            if (lock) {
                const body = document.querySelector('body');
                body.classList.add('lock');
            }
        },
        unlockScroll(unlock) {
            if (!unlock) {
                const body = document.querySelector('body');
                body.classList.remove('lock');
            }
        },
        showForm() {
            this.formVisible = true;
        },
        closeForm() {
            this.formVisible = false;
            this.dialogVisible = false;
            this.unlockScroll(this.formVisible)
            this.form.name = '';
            this.form.phone = '';
            this.form.email = '';
        },
        showSuccess() {
            this.successVisible = true;
            this.formVisible = false;
        },
        closeSuccess() {
            this.successVisible = false;
        },
        sendData() {
            this.v$.$touch()
            if (!this.v$.form.$error) {
                console.log('Validation successful!');
                this.form.name = '';
                this.form.phone = '';
                this.form.email = '';
                this.successVisible = true;
                this.formVisible = false;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    height: 80px;

    .header__container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .inventory-text {
            font-weight: 700;
            font-size: 25px;
            line-height: 140%;
            letter-spacing: 0.02em;
            color: #41456B;
            margin-left: 40px;
        }

        .header__logo {
            a {
                display: flex;
                align-items: center;

                img {
                    width: 50px;
                    height: 31px;
                }

                p {
                    margin-left: 5px;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 30px;
                    letter-spacing: 0.02em;
                    color: #7380FF;
                }
            }
        }

        .header__buttons {
            display: flex;
            flex-grow: 2;
            justify-content: flex-end;
            margin-right: 60px;

            .button-blue {
                padding: 15px 22px;
            }

            .button-white {
                width: 137px;
                height: 45px;
                margin-right: 20px;
            }
        }

        .burger__menu {
            .fa-bars {
                font-size: 37px;
            }
        }
    }
}

@media (max-width: 1220px) {
    .header {
        .header__container {
            .header__logo {
                margin-left: 25px;
            }

            .burger__menu {
                margin-right: 25px;
            }
        }
    }
}

@media (max-width: 768px) {
    .header {
        .header__container {
            .header__logo {
                margin-left: 20px;
                margin-right: 10px;
            }

            .header__buttons {
                margin-right: 20px;

                .button-blue {
                    padding: 10px;
                    font-size: 14px;
                }

                .button-white {
                    width: 110px;
                    height: 35px;
                    font-size: 14px;
                }
            }

            .burger__menu {
                margin-right: 20px;
            }
        }
    }
}

@media (max-width: 550px) {
    .header {
        .header__container {
            .header__buttons {
                .button-white {
                    display: none;
                }
            }

            .inventory-text {
                display: none;
            }
        }
    }
}
</style>