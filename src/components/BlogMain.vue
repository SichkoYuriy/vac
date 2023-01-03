<template>
    <div class="blog-main">
        <div class="blog-main__container _container">
            <div class="blog-main__block1">
                <div class="blog-main__card" v-for="blog in displayedRecords" :key="blog"
                    @click="toArticle(blog.article)">
                    <div class="blog-main__card-sec1">
                        <img :src="blog.img">
                    </div>
                    <div class="blog-main__card-sec2">
                        <p class="blog-main__card-date">{{ blog.date }}</p>
                        <p class="blog-main__card-title">{{ blog.title }}</p>
                    </div>
                </div>
            </div>
            <div class="block-main__pagination">
                <vue-awesome-paginate :total-items="blogs.length" :items-per-page="perPage" :max-pages-shown="3"
                    v-model="currentPage" @click="onClickHandler" hidePrevNext />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            perPage: 9,
            currentPage: 1,
            blogs: [
                { img: require('@/assets/interesting-slider1.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider2.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider3.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },

                { img: require('@/assets/interesting-slider4.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider5.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider6.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

                { img: require('@/assets/interesting-slider7.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider8.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider9.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

                { img: require('@/assets/interesting-slider7.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider8.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider9.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },

                { img: require('@/assets/interesting-slider1.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider2.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider3.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

                { img: require('@/assets/interesting-slider4.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider5.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider6.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

                { img: require('@/assets/interesting-slider1.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider2.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider3.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },

                { img: require('@/assets/interesting-slider4.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider5.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider6.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

                { img: require('@/assets/interesting-slider7.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },
                { img: require('@/assets/interesting-slider8.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-two' },
                { img: require('@/assets/interesting-slider9.jpg'), date: '10 May, 2020', title: 'How to save on buying a car? Why is it better to buy from us', article: '/article-one' },

            ],
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
        detectWidthChange() {
            if (window.innerWidth >= 1125) {
                this.perPage = 9;
            }
            if (window.innerWidth <= 1125) {
                this.perPage = 8;
            }
            if (window.innerWidth <= 768) {
                this.perPage = 6;
            }
        },
        toArticle(article) {
            this.$router.push(article);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    computed: {
        displayedRecords() {
            const startIndex = this.perPage * (this.currentPage - 1);
            const endIndex = startIndex + this.perPage;
            return this.blogs.slice(startIndex, endIndex);
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.detectWidthChange)
        })
    },
}
</script>

<style lang="scss">
.blog-main {
    width: 100%;
    margin: 40px 0;

    .blog-main__container {
        .blog-main__block1 {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .blog-main__card {
                max-width: 387px;
                height: 360px;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                margin-bottom: 25px;

                p {
                    margin: 0;
                }

                .blog-main__card-sec1 {
                    img {
                        width: 100%;
                        height: 64%;
                    }
                }

                .blog-main__card-sec2 {
                    height: 36%;
                    box-sizing: border-box;
                    padding: 20px 30px;

                    .blog-main__card-date {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                    }

                    .blog-main__card-title {
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                        max-width: 300px;
                    }
                }
            }
        }

        .block-main__pagination {
            display: flex;
            justify-content: center;
        }
    }
}

@media (max-width: 1225px) {
    .blog-main {
        .blog-main__container {
            padding: 0 25px;

            .blog-main__block1 {
                justify-content: center;
                gap: 20px;

                .blog-main__card {
                    max-width: 345px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>