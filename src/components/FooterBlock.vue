<template>
    <div class="footer">
        <div class="footer__container _container">
            <a @click="toHome" class="footer__logo"><img src="@/assets/logo-white.svg" alt="logo icon"> VAC</a>
            <div class="footer__links">
                <a @click="toTerms">Terms</a>
                <a @click="toPolicy">Privacy</a>
            </div>
            <div class="footer__socials">
                <a @click="toAbout"><img src="@/assets/Instagram-white.svg" alt="instagram logo"></a>
                <a @click="toAbout"><img src="@/assets/Facebook-white.svg" alt="facebook logo"></a>
                <a @click="toAbout"><img src="@/assets/YouTube-white.svg" alt="youtube logo"></a>
            </div>
            <p class="footer__text">Created by <img src="@/assets/created-by.svg" alt="icon"></p>
            <p>©Copyright, 2020. Vehicle Approval</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toTerms() {
            this.$router.push("/terms-conditions");
        },
        toPolicy() {
            this.$router.push("/privacy-policy");
        },
        toHome() {
            this.$router.push("/");
        },
        toAbout() {
            this.$router.push("/about-page");
        },
    }
}
</script>

<style lang="scss" scoped>
.footer {
    height: 133px;
    background-color: #7481FF;

    .footer__container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        box-sizing: border-box;

        .footer__logo {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 28px;
            line-height: 108.5%;
            letter-spacing: 0.02em;
            color: #FFFFFF;

            img {
                margin-right: 5px;
                widows: 50px;
                height: 31px;
            }
        }

        .footer__links {
            display: flex;
            gap: 20px;

            a {
                font-weight: 600;
                font-size: 16px;
                line-height: 14px;
                color: #FFFFFF;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .footer__socials {
            display: flex;
            gap: 10px;
        }

        .footer__text {
            display: flex;
            align-items: center;

            img {
                margin-left: 6px;
            }
        }
    }
}

@media (max-width: 1220px) {
    .footer {
        .footer__container {
            padding: 0 25px;
            flex-wrap: wrap;
        }


    }
}

@media (max-width: 1000px) {
    .footer {
        height: fit-content;

        .footer__container {
            padding: 25px 25px;
            flex-wrap: wrap;

            .footer__logo {
                flex-basis: 33%;
            }

            .footer__links {
                flex-basis: 33%;
            }

            .footer__socials {
                flex-basis: 33%;

            }

            .footer__text {
                display: flex;
                flex-basis: 50%;
                justify-content: flex-end;
            }
        }
    }
}

@media (max-width: 600px) {
    .footer {

        .footer__container {
            padding: 25px 20px;

            .footer__logo {
                flex-basis: 30%;
                margin-bottom: 30px;
            }

            .footer__links {
                margin-bottom: 30px;
                flex-basis: 60%;
            }

            .footer__socials {
                flex-basis: 50%;

            }

            .footer__text {
                flex-basis: 50%;
                justify-content: flex-end;
            }
        }
    }
}
</style>