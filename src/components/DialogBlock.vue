<template>
    <div class="menu" v-if="show" @click="hideDialog">
        <div class="menu__body" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'dialogBlock',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        scroll: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false);
            this.$emit('update:scroll', false);
            if (!this.scroll) {
                const body = document.querySelector('body');
                body.classList.remove('lock');
                // const app = document.querySelector('#app');
                // app.style.paddingRight = '0px';
            }
        }
    },
}
</script>

<style lang="scss">
.menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;


    .menu__body {
        width: 570px;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: 0;

        .menu__container {
            height: 100%;
            display: flex;
            flex-direction: column;

            .close-button {
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: flex-end;
                flex-grow: 1;

                .button {
                    height: 50px;
                    padding-right: 125px;
                    padding-top: 25px;
                    font-size: 40px;
                }
            }

            .menu__items {
                flex-grow: 2;
                font-weight: 700;
                font-size: 25px;
                line-height: 140%;
                letter-spacing: 0.02em;

                ul {
                    width: fit-content;
                    padding: 0;
                    margin: 0 0 0 60px;

                    a {

                        li {
                            cursor: default;
                            margin-bottom: 20px;
                            color: #41456B;
                        }
                    }
                }
            }

            .menu__socials {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                margin: 10px 0 0 60px;

                .menu__socials-container {
                    display: flex;
                    margin-bottom: 105px;

                    img {
                        margin-right: 10px;
                    }
                }
            }
        }

        .form__container {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 50px 0 60px;
            max-width: 390px;

            .close-button {
                margin: 30px 0 40px 0;

                .button {
                    font-size: 40px;
                }
            }

            .form__header {
                width: 100%;
                margin: 0 0 60px 0;
                font-weight: 700;
                font-size: 30px;
                line-height: 140%;
                color: #41456B;
            }

            .form__inputs {
                display: flex;
                flex-direction: column;
                margin: 0 0 40px 0;
                width: 100%;

                .input__container {
                    position: relative;
                    top: 0;
                    left: 0;

                    .input-name,
                    .input-tel,
                    .input-email {
                        box-sizing: border-box;
                        width: 100%;
                    }

                    .input-img {
                        position: absolute;
                        top: 10px;
                        left: 13px;
                    }

                    .input-img-tel {
                        position: absolute;
                        top: 13px;
                        left: 16px;
                    }

                    input {
                        width: 100%;
                        height: 45px;
                        border: 1px solid #D7D7D7;
                        background-color: #fff;
                        border-radius: 2px;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 159%;
                        color: #41456B;
                        padding-left: 44px;
                        outline: none;

                        &:not(:last-child) {
                            margin-bottom: 20px;
                        }

                        &::placeholder {
                            color: #D7D7D7;
                        }
                    }

                    .is-invalid {
                        border: 2px solid #F54E4E;
                    }

                    .invalid-feedback {
                        margin-top: -15px;
                        color: #F54E4E;

                        &:last-of-type {
                            margin-bottom: 20px;
                        }
                    }
                }
            }

            .form__button {
                margin-bottom: 60px;
                width: 100%;

                button {
                    width: 100%;
                    height: 45px;
                    border-radius: 2px;
                }
            }

            .form__socials {
                display: flex;
                flex-direction: column;

                .form__socials-text {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                    margin-bottom: 20px;
                }

                .form__socials-links {
                    display: flex;

                    a {
                        margin-right: 10px;
                    }
                }
            }
        }

        .success__container {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 40px 0 60px;

            .close-button {
                margin-top: 30px;
                font-size: 40px;
            }

            img {
                margin: 60px 0 40px 0;
                width: 70px;
                height: 70px;
            }

            .success__header {
                font-weight: 700;
                font-size: 30px;
                line-height: 140%;
                color: #41456B;
                margin-bottom: 5px;
                margin-top: 0;
            }

            .success__text {
                max-width: 229px;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
            }
        }
    }
}

@media (max-width: 1200px) {
    .menu {
        .menu__body {
            width: 60%;

            .menu__container {
                .close-button {
                    .button {
                        padding-right: 25px;
                        padding-top: 25px;
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    .menu {
        .menu__body {
            width: 100%;

            .menu__container {
                width: 100%;

                .close-button {
                    .button {
                        padding-right: 20px;
                        padding-top: 14px;
                    }
                }

                .menu__items {
                    font-size: 20px;

                    ul {
                        margin: 0 0 0 40px;

                        a {
                            li {
                                margin-bottom: 25px;
                            }
                        }
                    }
                }

                .menu__socials {
                    margin-bottom: 50px;
                    margin-left: 40px;
                }
            }

            .form__container {
                max-width: 100%;
                padding: 0 20px 0 20px;
            }

            .success__container {
                padding: 0 20px 0 20px;

                .close-button {
                    margin-top: 15px;
                    font-size: 40px;
                }

                img {
                    margin: 135px 0 10px 0;
                    width: 50px;
                    height: 50px;
                }

                .success__header {
                    font-size: 24px;
                }
            }
        }
    }
}
</style>