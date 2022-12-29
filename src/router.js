import { createRouter, createWebHashHistory } from 'vue-router';
import AboutPage from "@/pages/AboutPage.vue";
import ArticleOne from "@/pages/ArticleOne.vue";
import ArticleTwo from "@/pages/ArticleTwo.vue";
import BlogPage from "@/pages/BlogPage.vue";
import CalculatorPage from "@/pages/CalculatorPage.vue";
import CarPage from "@/pages/CarPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoanRates from "@/pages/LoanRates.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import QuizPage from "@/pages/QuizPage.vue";
import TermsConditions from "@/pages/TermsConditions.vue";
import VehicleVideos from "@/pages/VehicleVideos.vue";


const routes = [
  { path: '/about-page', component: AboutPage },
  { path:'/article-one', component: ArticleOne },
  { path:'/article-two', component: ArticleTwo },
  { path:'/blog-page', component: BlogPage },
  { path:'/calculator-page', component: CalculatorPage },
  { path: '/catalog-page', component: CatalogPage, meta: { layout: 'empty' } },
  { name: "carpage" , path:'/catalog-page/:id', component: CarPage,  meta:{layout: 'empty'}, },
  { path:'/', component:HomePage },
  { path: '/loan-rates', component: LoanRates },
  { path: '/404', component: PageNotFound, meta:{layout: 'empty'} },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path:'/quiz-page', component: QuizPage,meta:{layout: 'empty'} },
  { name: "quizpage", path:'/quiz-page/:id', component: QuizPage,meta:{layout: 'empty'} },
  { path:'/terms-conditions', component: TermsConditions },
  { path: '/vehicle-videos', component: VehicleVideos },
  { path: '/:pathMatch(.*)*', redirect: '/404',component: PageNotFound }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

