<template>
    <div class="video-main">
        <div class="video-main__container _container">
            <div class="video-main__block">
                <div class="video-main__block-container" v-for="video in displayedRecords" :key="video.id">
                    <div class="video-main__img-container">
                        <img class="video-main__img" :src="video.img">
                        <img class="video-main__svg" src="@/assets/video-play.svg" alt="play-button"
                            @click="openModal(video.link)">
                    </div>
                    <p class="video-main__title">{{ video.title }}</p>
                </div>
            </div>
            <div class="video-main__pagination">
                <vue-awesome-paginate :total-items="videos.length" :items-per-page="perPage" :max-pages-shown="3"
                    v-model="currentPage" @click="onClickHandler" hidePrevNext />
            </div>
        </div>
        <div class="video-dialog" v-if="show" @click="closeModal">
            <div class="video-dialog__content">
                <img src="@/assets/close-white.svg" alt="close">
                <div class="video" v-html="videoLink"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            perPage: 4,
            currentPage: 1,
            videos: [
                { id: 1, img: require('@/assets/video-img1.jpg'), title: 'VAC`s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: '<iframe src="https://www.youtube.com/embed/R9C8CH2_RGM" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 2, img: require('@/assets/video-img2.jpg'), title: 'VAC`s Vehicle Shoot #11: Toyota Highlander', link: '<iframe src="https://www.youtube.com/embed/WIwXJOaaroQ"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 3, img: require('@/assets/video-img3.jpg'), title: 'VAC`s Vehicle Shoot #09: 2019 Mazda CX- 5', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 4, img: require('@/assets/video-img4.jpg'), title: 'Some Vehicles VAC Offers!', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0" title="YouTube video player"  width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },

                { id: 5, img: require('@/assets/video-img2.jpg'), title: 'VAC`s Vehicle Shoot #11: Toyota Highlander', link: '<iframe src="https://www.youtube.com/embed/WIwXJOaaroQ"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 6, img: require('@/assets/video-img4.jpg'), title: 'Some Vehicles VAC Offers!', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0" title="YouTube video player"  width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 7, img: require('@/assets/video-img3.jpg'), title: 'VAC`s Vehicle Shoot #09: 2019 Mazda CX- 5', link: '<iframe src="https://www.youtube.com/embed/R9C8CH2_RGM"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 8, img: require('@/assets/video-img1.jpg'), title: 'VAC`s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },

                { id: 9, img: require('@/assets/video-img4.jpg'), title: 'Some Vehicles VAC Offers!', link: '<iframe src="https://www.youtube.com/embed/R9C8CH2_RGM" title="YouTube video player"  width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 10, img: require('@/assets/video-img3.jpg'), title: 'VAC`s Vehicle Shoot #09: 2019 Mazda CX- 5', link: '<iframe src="https://www.youtube.com/embed/WIwXJOaaroQ"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 11, img: require('@/assets/video-img1.jpg'), title: 'VAC`s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                { id: 12, img: require('@/assets/video-img2.jpg'), title: 'VAC`s Vehicle Shoot #11: Toyota Highlander', link: '<iframe src="https://www.youtube.com/embed/UqvpIenUmL0"  width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
            ],
            videoLink: '',
        }
    },
    methods: {
        onClickHandler() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },
        toArticle() {
            this.$router.push("/article-one");
        },
        openModal(link) {
            this.show = true;
            if (this.show) {
                const body = document.querySelector('body');
                body.classList.add('lock');
            }
            this.videoLink = link;
        },
        closeModal() {
            this.show = false;
            if (!this.show) {
                const body = document.querySelector('body');
                body.classList.remove('lock');
            }
        },
    },
    computed: {
        displayedRecords() {
            const startIndex = this.perPage * (this.currentPage - 1);
            const endIndex = startIndex + this.perPage;
            return this.videos.slice(startIndex, endIndex);
        }
    },
}
</script>

<style lang="scss">
.lock {
    overflow: hidden;
}

.video-main {
    width: 100%;
    margin: 40px 0;

    .video-main__container {
        display: flex;
        flex-direction: column;

        .video-main__block {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 4%;

            .video-main__block-container {
                width: 48%;
                display: flex;
                flex-direction: column;
                gap: 20px;

                p {
                    margin: 0;
                }

                .video-main__img-container {
                    position: relative;

                    .video-main__img {
                        width: 100%;
                    }

                    .video-main__svg {
                        position: absolute;
                        top: calc((100% - 53px) / 2);
                        left: calc((100% - 53px) / 2);
                    }
                }

                .video-main__title {
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    letter-spacing: 0.02em;
                    color: #41456B;
                    margin-bottom: 40px;
                }
            }
        }

        .video-main__pagination {
            display: flex;
            justify-content: center;
        }
    }

    .video-dialog {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);

        .video-dialog__content {
            width: 867px;
            height: 540px;
            position: relative;

            img {
                position: absolute;
                top: 0;
                right: -30px;
            }

            .video {
                width: 100%;
                height: 100%;
            }
        }
    }
}

@media (max-width: 1225px) {
    .video-main {

        .video-main__container {
            padding: 0 25px;

            .video-main__block {

                .video-main__block-container {
                    width: 100%;
                }
            }
        }

        .video-dialog {

            .video-dialog__content {
                width: 600px;
                height: 376px;
            }
        }
    }
}

@media (max-width: 767px) {
    .video-main {

        .video-main__container {
            padding: 0 20px;

            .video-main__block {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 4%;

                .video-main__block-container {
                    gap: 10px;

                    .video-main__img-container {
                        .video-main__svg {
                            width: 35px;
                            height: 35px;
                            top: calc((100% - 35px) / 2);
                            left: calc((100% - 35px) / 2);
                        }
                    }

                    .video-main__title {
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                }
            }
        }

        .video-dialog {

            .video-dialog__content {
                width: 320px;
                height: 200px;

                img {
                    top: -35px;
                    right: 0;
                }
            }
        }
    }
}
</style>