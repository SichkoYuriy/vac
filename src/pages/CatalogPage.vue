<template>
    <header-block :white-visible=false :inventory=true></header-block>
    <div class="catalog">
        <div class="catalog__container _container">
            <div class="catalog__filters" @click="closeFilters">
                <img src="@/assets/catalog-close.svg" class="catalog__filters-close" @click="closeFilters">
                <div class="catalog__filters-container " @click.stop>
                    <div class="filters">
                        <div class="catalog__filters-title">
                            <p>Detailed search</p>
                            <span v-if="clear()" @click="clearFilters">Clear filters</span>
                        </div>
                        <!-- 1 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Marke, Model</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-first">
                                    <p>Marke</p>
                                    <v-select :options="brands" label="marke" class="style-chooser"
                                        placeholder="Search Marke..." deselectFromDropdown v-model="carMarke">
                                        <template #open-indicator="{ attributes }">
                                            <span v-bind="attributes"><img src="@/assets/Search.svg"></span>
                                        </template>
                                        <template #no-options>
                                            Nothing found
                                        </template>
                                    </v-select>

                                    <p>Model</p>
                                    <!-- :selectable="(option) => option.marke == carMarke" -->
                                    <v-select :options="models" label="model" class="style-chooser"
                                        placeholder="Search Model..." deselectFromDropdown v-model="carModel"
                                        :disabled="isDisable">
                                        <template #open-indicator="{ attributes }">
                                            <span v-bind="attributes"><img src="@/assets/Search.svg"></span>
                                        </template>
                                        <template #no-options>
                                            Nothing found
                                        </template>
                                    </v-select>
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice" :class="{ choosed: this.carMarke.length != 0 }">
                                    <catalog-choice :visible="carMarke.length != 0" :click="resetMarke">
                                        {{ this.carMarke }}
                                    </catalog-choice>
                                    <catalog-choice :visible="carModel.length != 0" :click="resetModel">
                                        {{ this.carModel }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <!-- 2 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Body type</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-two">
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="truck" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/Truck-icon.svg" alt="">
                                        Trucks
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="suv" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/suv-icon.svg" alt="">
                                        SUV
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="sedan" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/sedan-icon.svg" alt="">
                                        Sedan
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="hatchback" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/hatchback-icon.svg" alt="">
                                        Hatchback
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="coupe" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/coupe-icon.svg" alt="">
                                        Coupe
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="convertiable" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/convertiable-icon.svg" alt="">
                                        Convertiable
                                    </label>
                                    <label class="filter-two__label">
                                        <input type="checkbox" value="van" v-model="bodyType">
                                        <span class="check"></span>
                                        <img src="@/assets/van-icon.svg" alt="">
                                        VAN
                                    </label>
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice" :class="{ choosed: this.bodyType.length != 0 }">
                                    <catalog-choice :visible="bodyType" v-for="item in bodyType.length" :key="item"
                                        :click="resetBodyType">
                                        {{ bodyType[--item] }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <!-- 3 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Transmission</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-three">
                                    <label class="filter-three__label">
                                        <input type="checkbox" value="automatic" v-model="transmission">
                                        <span class="check"></span>
                                        <p>Automatic</p>
                                    </label>
                                    <label class="filter-three__label">
                                        <input type="checkbox" value="manual" v-model="transmission">
                                        <span class="check"></span>
                                        <p>Manual</p>
                                    </label>
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice" :class="{ choosed: this.transmission.length != 0 }">
                                    <catalog-choice :visible="transmission" v-for="item in transmission.length"
                                        :key="item" :click="resetTransmissionType">
                                        {{ transmission[--item] }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <!-- 4 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Price</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-four">
                                    <div class="filter-four__values">
                                        <p><span>$</span>{{ formattedPriceMin }}</p>
                                        <p><span>$</span>{{ formattedPriceMax }}</p>
                                    </div>
                                    <vue-slider v-model="value" :min="5000" :max="350000" :interval="5000"
                                        :tooltip="'none'" :enable-cross="false">
                                    </vue-slider>
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice" :class="{ choosed: value[0] != 5000 || value[1] != 350000 }">
                                    <catalog-choice :visible="value" :click="resetPriceMin" v-if="value[0] != 5000">
                                        <span style="margin-right: 5px;">$</span>
                                        {{ formattedPriceMin }}
                                    </catalog-choice>
                                    <catalog-choice :visible="value" :click="resetPriceMax" v-if="value[1] != 350000">
                                        <span style="margin-right: 5px;">$</span>
                                        {{ formattedPriceMax }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <!-- 5 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Year</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-five">
                                    <div class="filter-five__values">
                                        <p>{{ yearValue[0] }}</p>
                                        <p>{{ yearValue[1] }}</p>
                                    </div>
                                    <vue-slider v-model="yearValue" :min="1990" :max="2022" :interval="1"
                                        :tooltip="'none'" :enable-cross="false">
                                    </vue-slider>
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice"
                                    :class="{ choosed: yearValue[0] != 1990 || yearValue[1] != 2022 }">
                                    <catalog-choice :visible="yearValue" :click="resetYearMin"
                                        v-if="(yearValue[0] != 1990)">
                                        {{ yearValue[0] }}
                                    </catalog-choice>
                                    <catalog-choice :visible="yearValue" :click="resetYearMax"
                                        v-if="(yearValue[1] != 2022)">
                                        {{ yearValue[1] }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <!-- 6 FILTER -->
                        <catalog-acordeon>
                            <template v-slot:title>
                                <p>Kilometres</p>
                            </template>
                            <template v-slot:filter>
                                <div class="filter-six range">
                                    <p> <span>{{ formatted }}</span> or less</p>
                                    <input type="range" min="10000" max="200000" step="10000" v-model="kilometres"
                                        @input="updateKilometers" :style="{ backgroundSize: kilometresBackgroundSize }">
                                </div>
                            </template>
                            <template v-slot:chosed>
                                <div class="filter-choice" :class="{ choosed: kilometres != 200000 }">
                                    <catalog-choice :visible="kilometres" :click="resetKilometres"
                                        v-if="(kilometres != 200000)">
                                        {{ formatted }}
                                    </catalog-choice>
                                </div>
                            </template>
                        </catalog-acordeon>

                        <div class="catalog__filters-apply">
                            <base-button blue title="apply" @click="applyButtonClick" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="catalog__main">
                <div class="catalog__main-filtration">
                    <div class="catalog__main-burger" @click="openFilters">
                        <img src="@/assets/filter-icon.svg">
                        <p>Search Filter</p>
                    </div>
                    <div class="catalog__main-search">
                        <v-select :options="brands" label="marke" class="style-chooser"
                            placeholder="Find a dream car..." deselectFromDropdown v-model="carMarke">
                            <template #open-indicator="{ attributes }">
                                <span v-bind="attributes"><img src="@/assets/Search.svg"></span>
                            </template>
                            <template #no-options>
                                Nothing found
                            </template>
                        </v-select>
                        <img src="@/assets/Share.svg" alt="">
                    </div>
                    <div class="catalog__main-filter">
                        <p>Sorted by</p>
                        <v-select :options="sort" label="item" :value="sort.key" class="filter-sort"
                            v-model="filtration" :clearable="false" :searchable="false">
                        </v-select>
                    </div>
                </div>
                <div class="catalog__main-content">
                    <catalog-card class="card" :cars="car" v-for="car in displayed" :key="car"></catalog-card>
                    <div v-if="noMatches" class="catalog__main-nomatches">
                        <img src="@/assets/404-sedan.svg" alt="sedan-img">
                        <p class="nomatches-text1">Unfortunately there are no matches for your query.</p>
                        <p class="nomatches-text2">Try using other filter settings or request a car of your choice.</p>
                        <a class="nomatches-link" href="/quiz-page">Request a car</a>
                    </div>
                </div>
                <div class="catalog__main-pagination" v-if="this.arrFilter.length > 6">
                    <vue-awesome-paginate :total-items="this.arrFilter.length" :items-per-page="perPage"
                        :max-pages-shown="3" v-model="currentPage" @click="onClickHandler" hidePrevNext />
                </div>
            </div>
        </div>
    </div>
    <footer-block />
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import CatalogAcordeon from '@/components/CatalogAcordeon.vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import CatalogChoice from '@/components/CatalogChoice.vue';
import BaseButton from '@/components/BaseButton.vue';
import CatalogCard from '@/components/CatalogCard.vue';


export default {
    components: {
        HeaderBlock, FooterBlock, CatalogAcordeon, VueSlider, CatalogChoice, BaseButton, CatalogCard,
    },
    data() {
        return {
            sorted: Array,
            filtered: Array,
            apply: true,
            noMatches: false,
            arrFilter: Number,
            perPage: 6,
            currentPage: 1,
            bodyType: [],
            transmission: [],
            kilometres: 200000,
            kilometresBackgroundSize: '100% 100%',
            value: [5000, 350000],
            yearValue: [1990, 2022],
            cars: [
                // Panamera II Turbo S E - Hybrid
                {
                    id: 1,
                    img1: require('@/assets/porsche-panamera/ext/porsche-panamera-ext-1.jpg'),
                    img2: require('@/assets/porsche-panamera/ext/porsche-panamera-ext-2.jpg'),
                    img3: require('@/assets/porsche-panamera/int/porsche-panamera-int-1.jpg'),
                    marke: 'Porsche',
                    model: 'Panamera II Turbo S E-Hybrid',
                    price: 150000,
                    year: 2021,
                    bodyType: 'sedan',
                    transmission: 'automatic',
                    kilometres: 17000,

                },
                // Outlander
                {
                    id: 2,
                    img1: require('@/assets/mitsubishi-outlander/ext/mitsubishi-outlander-ext-1.jpg'),
                    img2: require('@/assets/mitsubishi-outlander/ext/mitsubishi-outlander-ext-2.jpg'),
                    img3: require('@/assets/mitsubishi-outlander/int/mitsubishi-outlander-int-1.jpg'),
                    marke: 'Mitsubishi',
                    model: 'Outlander ',
                    price: 35000,
                    year: 2016,
                    bodyType: 'suv',
                    transmission: 'manual',
                    kilometres: 65000,
                },
                // AMG GT Black Series
                {
                    id: 3,
                    img1: require('@/assets/mercedes-amg/ext/mercedes-amg-ext-1.jpg'),
                    img2: require('@/assets/mercedes-amg/ext/mercedes-amg-ext-2.jpg'),
                    img3: require('@/assets/mercedes-amg/int/mercedes-amg-int-1.jpg'),
                    marke: 'Mercedes-Benz',
                    model: 'AMG GT Black Series',
                    price: 90000,
                    year: 2021,
                    bodyType: 'coupe',
                    transmission: 'manual',
                    kilometres: 7000,
                },
                // W124 420
                {
                    id: 4,
                    img1: require('@/assets/mercedes-w124/ext/mercedes-w124-ext-1.jpg'),
                    img2: require('@/assets/mercedes-w124/ext/mercedes-w124-ext-2.jpg'),
                    img3: require('@/assets/mercedes-w124/int/mercedes-w124-int-1.jpg'),
                    marke: 'Mercedes-Benz',
                    model: 'W124 420',
                    price: 13200,
                    year: 1993,
                    bodyType: 'sedan',
                    transmission: 'manual',
                    kilometres: 195000,
                },
                // C - Class All - Terrain
                {
                    id: 5,
                    img1: require('@/assets/mercedes-c-class/ext/mercedes-c-class-ext-1.jpg'),
                    img2: require('@/assets/mercedes-c-class/ext/mercedes-c-class-ext-2.jpg'),
                    img3: require('@/assets/mercedes-c-class/int/mercedes-c-class-int-1.jpg'),
                    marke: 'Mercedes-Benz',
                    model: 'C-Class All-Terrain ',
                    price: 67000,
                    year: 2022,
                    bodyType: 'sedan',
                    transmission: 'automatic',
                    kilometres: 10000,
                },
                // Audi A7
                {
                    id: 6,
                    img1: require('@/assets/audi-a7/ext/audi-a7-ext-1.jpg'),
                    img2: require('@/assets/audi-a7/ext/audi-a7-ext-2.jpg'),
                    img3: require('@/assets/audi-a7/int/audi-a7-int-1.jpg'),
                    marke: 'Audi',
                    model: 'A7 I (4G) S-tronic',
                    price: 56500,
                    year: 2020,
                    bodyType: 'sedan',
                    transmission: 'automatic',
                    kilometres: 93000,
                },
                // Audi A6
                {
                    id: 7,
                    img1: require('@/assets/audi-a6/ext/audi-a6-ext-1.jpg'),
                    img2: require('@/assets/audi-a6/ext/audi-a6-ext-2.jpg'),
                    img3: require('@/assets/audi-a6/int/audi-a6-int-1.jpg'),
                    marke: 'Audi',
                    model: 'A6 Avant sport 40TDI ',
                    price: 39000,
                    year: 2019,
                    bodyType: 'sedan',
                    transmission: 'automatic',
                    kilometres: 92000,

                },
                // F - 150 RAPTOR
                {
                    id: 8,
                    img1: require('@/assets/ford-f150/ext/ford-f150-ext-1.jpg'),
                    img2: require('@/assets/ford-f150/ext/ford-f150-ext-2.jpg'),
                    img3: require('@/assets/ford-f150/int/ford-f150-int-1.jpg'),
                    marke: 'Ford',
                    model: 'F-150 RAPTOR',
                    price: 75000,
                    year: 2018,
                    bodyType: 'truck',
                    transmission: 'automatic',
                    kilometres: 40000,
                },
                // Sedona LX
                {
                    id: 9,
                    img1: require('@/assets/kia-sedona/ext/kia-sedona-ext-1.jpg'),
                    img2: require('@/assets/kia-sedona/ext/kia-sedona-ext-2.jpg'),
                    img3: require('@/assets/kia-sedona/int/kia-sedona-int-1.jpg'),
                    marke: 'Kia',
                    model: 'Sedona LX',
                    price: 22000,
                    year: 2017,
                    bodyType: 'van',
                    transmission: 'manual',
                    kilometres: 110000,
                },
                // Audi Q7
                {
                    id: 10,
                    img1: require('@/assets/audi-q7/ext/audi-q7-ext-1.jpg'),
                    img2: require('@/assets/audi-q7/ext/audi-q7-ext-2.jpg'),
                    img3: require('@/assets/audi-q7/int/audi-q7-int-1.jpg'),
                    marke: 'Audi',
                    model: 'Q7',
                    price: 40500,
                    year: 2016,
                    bodyType: 'suv',
                    transmission: 'automatic',
                    kilometres: 93000,
                },
                // Continental GTC Speed'
                {
                    id: 11,
                    img1: require('@/assets/bentley-continental/ext/bentley-continental-ext-1.jpg'),
                    img2: require('@/assets/bentley-continental/ext/bentley-continental-ext-2.jpg'),
                    img3: require('@/assets/bentley-continental/int/bentley-continental-int-1.jpg'),
                    marke: 'Bentley',
                    model: 'Continental GTC Speed',
                    price: 48500,
                    year: 2010,
                    bodyType: 'convertiable',
                    transmission: 'automatic',
                    kilometres: 81000,
                },
                // astonmartin db9
                {
                    id: 12,
                    img1: require('@/assets/astonmartin-db9/ext/astonmartin-db9-ext-1.jpg'),
                    img2: require('@/assets/astonmartin-db9/ext/astonmartin-db9-ext-2.jpg'),
                    img3: require('@/assets/astonmartin-db9/int/astonmartin-db9-int-1.jpg'),
                    marke: 'Aston Martin',
                    model: 'DB9',
                    price: 50000,
                    year: 2004,
                    bodyType: 'coupe',
                    transmission: 'automatic',
                    kilometres: 49000,
                },
                //Land Rover
                {
                    id: 13,
                    img1: require('@/assets/landrover-discovery/ext/landrover-discovery-ext-1.jpg'),
                    img2: require('@/assets/landrover-discovery/ext/landrover-discovery-ext-2.jpg'),
                    img3: require('@/assets/landrover-discovery/int/landrover-discovery-int-1.jpg'),
                    marke: 'Land Rover',
                    model: 'Discovery Sport Dynamic',
                    price: 20500,
                    year: 2016,
                    bodyType: 'suv',
                    transmission: 'automatic',
                    kilometres: 144000,
                },
            ],
            sort: [
                { key: 'kilometres', dir: 'asc', item: 'Recommendations ' },
                { key: 'year', dir: 'desc', item: 'Newest inventory' },
                { key: 'price', dir: 'asc', item: 'Lowest price' },
                { key: 'price', dir: 'desc', item: 'Highest prices' },
            ],
            carMarke: '',
            carModel: '',
            filtration: '',
        }
    },
    mounted() {
        this.filtration = this.sort[0];
    },
    methods: {
        applyButtonClick() {
            this.apply = true;
        },
        onClickHandler() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },
        closeFilters() {
            const block = document.querySelector(".catalog__filters");
            block.classList.remove('active');
            const body = document.querySelector('body');
            body.classList.remove('lock');
        },
        openFilters() {
            const block = document.querySelector(".catalog__filters");
            block.classList.add('active');
            const body = document.querySelector('body');
            body.classList.add('lock');
            this.apply = false;
        },
        updateKilometers(e) {
            let clickedElement = e.target,
                min = clickedElement.min,
                max = clickedElement.max,
                val = clickedElement.value;
            this.kilometresBackgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        },
        resetMarke() {
            this.carMarke = '';
        },
        resetModel() {
            this.carModel = '';
        },
        resetBodyType(index) {
            this.bodyType.splice(index, 1);
        },
        resetTransmissionType(index) {
            this.transmission.splice(index, 1);
        },
        resetPriceMin() {
            this.value = [5000, this.value[1]];
        },
        resetPriceMax() {
            this.value = [this.value[0], 350000];
        },
        resetYearMin() {
            this.yearValue = [1990, this.yearValue[1]];
        },
        resetYearMax() {
            this.yearValue = [this.yearValue[0], 2022];
        },
        resetKilometres() {
            this.kilometres = 200000;
            this.kilometresBackgroundSize = '100% 100%';
        },
        clearFilters() {
            this.bodyType = [];
            this.resetMarke();
            this.resetModel();
            this.transmission = [];
            this.value = [5000, 350000];
            this.yearValue = [1990, 2022];
            this.resetKilometres();
        },
        clear() {
            if (this.bodyType.length != 0 || this.transmission.length != 0 || this.kilometres != 200000 ||
                this.carMarke.length > 0 || this.carModel.length > 0 || this.value[0] != 5000 || this.value[1] != 350000
                || this.yearValue[0] != 1990 || this.yearValue[1] != 2022) {
                return true
            } else {
                return false
            }
        },
    },
    computed: {
        isDisable() {
            if (this.carMarke != 0) {
                return false
            } else if (this.carMarke == 0) {
                this.carModel = [];
                return true
            }
            else {
                return true
            }
        },
        brands() {
            let a = [...new Set(this.cars.map(n => {
                return n.marke
            }))]
            return a;
        },
        models() {
            let a = [];
            a = [...new Set(this.cars.map(n => {
                if (n.marke == this.carMarke) {
                    return n.model
                }
                if (n.model == this.carModel) {
                    this.carModel = [];
                }
            }))];

            const result = a.filter(el => {
                return el !== undefined;
            })
            return result;
        },
        formatted() {
            const num = new Intl.NumberFormat('ru-RU').format(this.kilometres);
            return num;
        },
        formattedPriceMin() {
            const num = new Intl.NumberFormat('ru-RU').format(this.value[0]);
            return num;
        },
        formattedPriceMax() {
            const num = new Intl.NumberFormat('ru-RU').format(this.value[1]);
            return num;
        },
        displayed() {
            const startIndex = this.perPage * (this.currentPage - 1);
            const endIndex = startIndex + this.perPage;
            if (this.apply) {
                this.filtered = this.cars
                    .filter(product => {
                        return this.carMarke == '' || product.marke.toLowerCase() == this.carMarke.toString().toLowerCase();
                    })
                    .filter(product => {
                        return this.carModel == '' || product.model.toLowerCase() == this.carModel.toString().toLowerCase();
                    })
                    .filter(product => {
                        return this.transmission == 0 || this.transmission.indexOf(product.transmission.toString()) != -1;
                    })
                    .filter(product => {
                        return this.bodyType == 0 || this.bodyType.indexOf(product.bodyType.toString()) != -1;
                    })
                    .filter(product => {
                        return Number(product.price) >= this.value[0] && Number(product.price) <= this.value[1];
                    })
                    .filter(product => {
                        return Number(product.year) >= this.yearValue[0] && Number(product.year) <= this.yearValue[1];
                    })
                    .filter(product => {
                        return Number(product.kilometres) <= this.kilometres;
                    });
                this.sorted = _.sortBy(this.filtered, product => {
                    return Number(product[this.filtration.key]);
                });
            }
            if (this.filtration.dir === 'desc') {
                this.sorted = this.sorted.reverse();
            }
            if (this.filtered.length <= 0) {
                this.noMatches = true;
                this.apply = true
            } else {
                this.noMatches = false;
            }
            this.arrFilter = this.filtered;
            if (this.arrFilter.length >= 6) {
                return this.sorted.slice(startIndex, endIndex);
            } else {
                this.currentPage = 1;
                return this.sorted
            }
        },
    },
}
</script>
<style lang="scss">
// SEARCH BAR 
.filter-sort .vs__dropdown-menu,
.style-chooser .vs__dropdown-menu {
    background: #fff;
    color: #41456B;
}

.style-chooser .vs__clear {
    display: none;
}

.style-chooser .vs__open-indicator {
    transform: none !important;
}

.filter-sort .vs__no-options,
.style-chooser .vs__no-options {
    text-align: left;
    margin-left: 10px;
}

.filter-sort .vs__dropdown-option--highlight,
.style-chooser .vs__dropdown-option--highlight {
    background: #000;
}

.filter-sort .vs__search::placeholder,
.style-chooser .vs__search::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #D7D7D7;
}

.filter-sort .vs__dropdown-toggle,
.style-chooser .vs__dropdown-toggle {
    min-height: 45px;
    max-height: 55px;
}

.style-chooser,
.filter-sort {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
}

// RANGE WITH TWO THUMBS
.vue-slider-rail {
    height: 8px;
    width: 100%;
    border-radius: 2px;
    background-color: #D7D7D7;
}

.vue-slider-process {
    background-color: #7481FF;
}

.vue-slider-dot-handle {
    width: 18px;
    height: 18px;
    border: 1px solid #FFFFFF;
    border-radius: 2px;
    background-color: #7481FF;
    margin-top: -3px;
    box-shadow: none;
}

.vue-slider-dot-handle-focus {
    box-shadow: none;
}
</style>

<style lang="scss" scoped>
p {
    margin: 0;
}

.range {
    input[type=range] {
        width: 100%;
        -webkit-appearance: none;
        background: #D7D7D7;
        background-image: -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #7481FF), color-stop(100%, #7481FF));
        background-image: -webkit-linear-gradient(left, #7481FF 0%, #7481FF 100%);
        background-image: -moz-linear-gradient(left, #7481FF 0%, #7481FF 100%);
        background-image: -o-linear-gradient(to right, #7481FF 0%, #7481FF 100%);
        background-image: linear-gradient(to right, #7481FF 0%, #7481FF 100%);
        background-repeat: no-repeat;

        &::-webkit-slider-runnable-track {
            width: 100%;
            -webkit-appearance: none;
            border-radius: 2px;
            height: 8px;
            background: transparent;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            background: #7481FF;
            border: 1px solid #FFFFFF;
            border-radius: 2px;
            margin-top: -5px;
        }
    }
}

.filter-choice {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.choosed {
    margin-top: 20px;
    margin-bottom: 10px;
}

.catalog {
    width: 100%;
    flex: 1 1 auto;
    padding: 40px 0;

    .catalog__container {
        display: flex;
        justify-content: space-between;

        .catalog__filters {
            width: 25%;

            .catalog__filters-close {
                display: none;
            }

            .catalog__filters-container {
                width: 100%;

                .filters {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    .catalog__filters-apply {
                        display: none;
                    }

                    .catalog__filters-title {
                        display: flex;
                        gap: 20px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                        margin-bottom: 30px;

                        span {
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                            color: #7481FF;
                            cursor: pointer;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }

                    .filter-first {
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 14px;
                        color: #41456B;

                        .style-chooser {
                            margin-bottom: 10px;
                        }

                        P {
                            margin-bottom: 10px;
                        }
                    }

                    .filter-two,
                    .filter-three {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        margin-bottom: 10px;

                        .filter-two__label,
                        .filter-three__label {
                            position: relative;
                            padding-left: 20px;

                            input {
                                position: absolute;
                                height: 0;
                                width: 0;
                                cursor: pointer;
                            }

                            input:checked~.check {
                                &::after {
                                    content: "";
                                    position: absolute;
                                    width: 5px;
                                    height: 12px;
                                    border: solid #7481FF;
                                    border-width: 0 3px 3px 0;
                                    left: 7.5px;
                                    top: 0px;
                                    transform: rotate(45deg);
                                }
                            }

                            .check {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 20px;
                                height: 20px;
                                border: 1px solid #D7D7D7;
                                border-radius: 2px;
                            }

                            img {
                                margin-left: 10px;
                                margin-right: 5px;
                                vertical-align: middle;
                            }
                        }
                    }

                    .filter-three {
                        .filter-three__label {
                            padding-left: 30px;

                            p {
                                padding-top: 2px;
                            }
                        }
                    }

                    .filter-six {
                        margin-bottom: 10px;

                        p {
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            color: #606276;
                            margin-bottom: 10px;
                        }

                        span {
                            color: #41456B;
                        }
                    }

                    .filter-four,
                    .filter-five {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin-bottom: 10px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;

                        .filter-four__values,
                        .filter-five__values {
                            display: flex;
                            justify-content: space-between;

                            span {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }

        .catalog__main {
            width: 71.5%;

            .catalog__main-filtration {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;

                .catalog__main-burger {
                    display: none;
                }

                .catalog__main-search {
                    display: flex;
                    align-items: center;
                    width: 50%;

                    .style-chooser {
                        width: 80%;
                        margin-right: 20px;
                    }

                    img {
                        width: 22px;
                        height: 22px;
                    }
                }

                .catalog__main-filter {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    justify-content: flex-end;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    letter-spacing: 0.02em;
                    color: #41456B;

                    .filter-sort {
                        width: 60%;
                    }
                }
            }

            .catalog__main-content {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 2%;

                .catalog__main-nomatches {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 60px;
                    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;

                    img {
                        margin-bottom: 20px;
                    }

                    .nomatches-text1 {
                        margin-bottom: 10px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                    }

                    .nomatches-text2 {
                        margin-bottom: 20px;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #41456B;
                    }

                    .nomatches-link {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 14px;
                        letter-spacing: 0.02em;
                        text-transform: uppercase;
                        color: #7481FF;
                    }
                }
            }

            .catalog__main-pagination {
                width: 100%;
                display: flex;
                justify-content: center;

            }
        }
    }
}

@media (max-width:1225px) {
    .catalog {
        .catalog__container {
            padding: 0 25px;
        }
    }
}

@media (max-width:1023px) {
    .catalog {
        .catalog__container {
            .catalog__filters {
                position: absolute;
                top: 80px;
                right: 0;
                bottom: 0;
                left: 0;
                width: unset;
                display: none;
                z-index: 5;
                overflow: scroll;
                background-color: rgba(0, 0, 0, 0.1);

                &.active {
                    display: flex;
                }

                .catalog__filters-close {
                    display: block;
                    position: fixed;
                    top: 129px;
                    left: 24px;
                }

                .catalog__filters-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    background-color: #FFFFFF;
                    padding-top: 50px;
                    padding-bottom: 40px;
                    height: fit-content;

                    .filters {
                        width: 55%;

                        .catalog__filters-title {
                            width: 100%;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            gap: 0;
                        }

                        .catalog__filters-apply {
                            width: 100%;
                            display: block;
                            margin-top: 20px;

                            button {
                                width: 100%;
                                height: 35px;
                            }
                        }
                    }
                }
            }

            .catalog__main {
                width: 100%;

                .catalog__main-filtration {
                    width: 100%;

                    .catalog__main-burger {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        cursor: default;
                    }

                    .catalog__main-search {
                        width: unset;

                        .style-chooser {
                            width: 240px;
                            margin-right: 20px;
                        }
                    }

                    .catalog__main-filter {
                        width: unset;

                        p {
                            display: none;
                        }

                        .filter-sort {
                            width: 240px;
                        }
                    }
                }

                .catalog__main-content {
                    width: 100%;
                }
            }
        }
    }
}

@media (max-width:767px) {
    .catalog {
        .catalog__container {
            padding: 0 20px;

            .catalog__filters {
                .catalog__filters-close {
                    position: absolute;
                    top: 41px;
                    left: 24px;
                }

                .catalog__filters-container {
                    padding: 40px 20px 20px 20px;

                    .filters {
                        width: 100%;

                        .catalog__filters-title {
                            p {
                                margin-left: 35px;
                            }
                        }
                    }
                }
            }

            .catalog__main {

                .catalog__main-filtration {
                    flex-wrap: wrap;
                    gap: 10px;

                    .catalog__main-burger {

                        @media (max-width: 500px) {
                            p {
                                display: none;
                            }
                        }
                    }

                    .catalog__main-search {
                        .style-chooser {
                            width: 230px;
                        }
                    }

                    .catalog__main-filter {
                        width: 100%;

                        .filter-sort {
                            width: 100%;
                        }
                    }
                }

                .catalog__main-content {
                    width: 100%;

                    .catalog__main-nomatches {
                        padding: 20px;

                        .nomatches-text1 {
                            margin-bottom: 5px;
                        }

                        .nomatches-text2 {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:374px) {
    .catalog {
        .catalog__container {
            .catalog__main {
                .catalog__main-filtration {
                    .catalog__main-search {
                        .style-chooser {
                            width: 190px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>