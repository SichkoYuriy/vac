<template>
    <header-block :blueVisible="false" />
    <div class="quiz">
        <div class="quiz__container">
            <div class="quiz__car" v-if="product">
                <catalog-card :cars="product"></catalog-card>
            </div>
            <div class="quiz__content">
                <div class="quiz-progressbar"
                    v-if="questionIndex < this.questions.length + this.setupPersonStatus.length">
                    <div class="quiz-progressbar-active" :style="{ width: progressbar }"></div>
                </div>
                <div class="quiz__content-container">

                    <quiz-card v-if="questionIndex == 0" :question="questions[0].question" :text="questions[0].text"
                        :next="nextBut" :prev="prev" :questionIndex="questionIndex" :currentModel="budget">
                        <div class="buttons" v-for="opt in questions[0].options" :key="opt">
                            <input class="hidden" type="radio" :value="opt.option" name="quizOption"
                                :id="'id' + opt.option" v-model="budget">
                            <label class="quiz__option" :for="'id' + opt.option">{{ opt.option }}</label>
                        </div>
                    </quiz-card>
                    <quiz-card v-if="questionIndex == 1" :question="questions[1].question" :text="questions[1].text"
                        :next="nextBut" :prev="prev" :questionIndex="questionIndex" :currentModel="status">
                        <div class="buttons" v-for="opt in questions[1].options" :key="opt">
                            <input class="hidden" type="radio" :value="opt.option" name="quizOption"
                                :id="'id' + opt.option" v-model="status">
                            <label class="quiz__option" :for="'id' + opt.option">{{ opt.option }}</label>
                        </div>
                    </quiz-card>
                    <div class="quiz-status" v-if="status == 'Employed'">
                        <quiz-card v-if="questionIndex == 2" :question="employed[0].question" :text="employed[0].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed1">

                            <input type="text" class="input width100" :placeholder="employed[0].placeholder"
                                v-model="employed1" :class="{ 'is-invalid': v$.employed1.$error && employed1 }">
                            <div v-if="employed1">
                                <p class="invalid-feedback" v-for="error in v$.employed1.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 3" :question="employed[1].question" :text="employed[1].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed2">
                            <input type="text" class="input width100" :placeholder="employed[1].placeholder1"
                                v-model="employed21"
                                :class="{ 'is-invalid': v$.employed21.$error && employed21, 'mb10': !v$.employed21.$error || !employed21 }">
                            <div v-if="employed21">
                                <p class="invalid-feedback" v-for="error in v$.employed21.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="employed[1].placeholder2"
                                v-model="employed22" :class="{ 'is-invalid': v$.employed22.$error && employed22 }">
                            <div v-if="employed22">
                                <p class="invalid-feedback" v-for="error in v$.employed22.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 4" :question="employed[2].question" :text="employed[2].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed3">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[2].placeholder1"
                                    v-model="employed31"
                                    :class="{ 'is-invalid': v$.employed31.$error && employed31, 'mb10': !v$.employed31.$error || !employed31 }">
                                <div v-if="employed31">
                                    <p class="invalid-feedback" v-for="error in v$.employed31.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input " :placeholder="employed[2].placeholder2"
                                    v-model="employed32" :class="{ 'is-invalid': v$.employed32.$error && employed32 }">
                                <div v-if="employed32">
                                    <p class="invalid-feedback" v-for="error in v$.employed32.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 5" :question="employed[3].question" :text="employed[3].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed4">
                            <input type="text" class="input width100" :placeholder="employed[3].placeholder"
                                v-model="employed4" :class="{ 'is-invalid': v$.employed4.$error && employed4 }">
                            <div v-if="employed4">
                                <p class="invalid-feedback" v-for="error in v$.employed4.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 6" :question="employed[4].question" :text="employed[4].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed5">
                            <input type="text" class="input width100" :placeholder="employed[4].placeholder1"
                                v-model="employed51"
                                :class="{ 'is-invalid': v$.employed51.$error && employed51, 'mb10': !v$.employed51.$error || !employed51 }">
                            <div v-if="employed51">
                                <p class="invalid-feedback" v-for="error in v$.employed51.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="employed[4].placeholder2"
                                v-model="employed52"
                                :class="{ 'is-invalid': v$.employed52.$error && employed52, 'mb10': !v$.employed52.$error || !employed52 }">
                            <div v-if="employed52">
                                <p class="invalid-feedback" v-for="error in v$.employed52.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[4].placeholder3"
                                    v-model="employed53"
                                    :class="{ 'is-invalid': v$.employed53.$error && employed53, 'mb10': !v$.employed53.$error || !employed53 }">
                                <div v-if="employed53">
                                    <p class="invalid-feedback" v-for="error in v$.employed53.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[4].placeholder4"
                                    v-model="employed54"
                                    :class="{ 'is-invalid': v$.employed54.$error && employed54, 'mb10': !v$.employed54.$error || !employed54 }">
                                <div v-if="employed54">
                                    <p class="invalid-feedback" v-for="error in v$.employed54.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 7" :question="employed[5].question" :text="employed[5].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed6">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[5].placeholder1"
                                    v-model="employed61"
                                    :class="{ 'is-invalid': v$.employed61.$error && employed61, 'mb10': !v$.employed61.$error || !employed61 }">
                                <div v-if="employed61">
                                    <p class="invalid-feedback" v-for="error in v$.employed61.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="employed[5].placeholder2"
                                    v-model="employed62"
                                    :class="{ 'is-invalid': v$.employed62.$error && employed62, 'mb10': !v$.employed62.$error || !employed62 }">
                                <div v-if="employed62">
                                    <p class="invalid-feedback" v-for="error in v$.employed62.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="employed[5].placeholder3"
                                    v-model="employed63"
                                    :class="{ 'is-invalid': v$.employed63.$error && employed63, 'mb10': !v$.employed63.$error || !employed63 }">
                                <div v-if="employed63">
                                    <p class="invalid-feedback" v-for="error in v$.employed63.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 8" :question="employed[6].question" :text="employed[6].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="employed7">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[6].placeholder1"
                                    v-model="employed71"
                                    :class="{ 'is-invalid': v$.employed71.$error && employed71, 'mb10': !v$.employed71.$error || !employed71 }">
                                <div v-if="employed71">
                                    <p class="invalid-feedback" v-for="error in v$.employed71.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="employed[6].placeholder2"
                                    v-model="employed72"
                                    :class="{ 'is-invalid': v$.employed72.$error && employed72, 'mb10': !v$.employed72.$error || !employed72 }">
                                <div v-if="employed72">
                                    <p class="invalid-feedback" v-for="error in v$.employed72.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <input type="text" class="input width100" :placeholder="employed[6].placeholder3"
                                v-model="employed73"
                                :class="{ 'is-invalid': v$.employed73.$error && employed73, 'mb10': !v$.employed73.$error || !employed73 }">
                            <div v-if="employed73">
                                <p class="invalid-feedback" v-for="error in v$.employed73.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="employed[6].placeholder4"
                                v-model="employed74" :class="{ 'is-invalid': v$.employed74.$error && employed74 }">
                            <div v-if="employed74">
                                <p class="invalid-feedback" v-for="error in v$.employed74.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                    </div>
                    <div class="quiz-status" v-if="status == 'Self-Employed'">
                        <quiz-card v-if="questionIndex == 2" :question="selfEmployed[0].question"
                            :text="selfEmployed[0].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed1">
                            <input type="text" class="input width100" :placeholder="selfEmployed[0].placeholder"
                                v-model="selfEmployed1"
                                :class="{ 'is-invalid': v$.selfEmployed1.$error && selfEmployed1 }">
                            <div v-if="selfEmployed1">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed1.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 3" :question="selfEmployed[1].question"
                            :text="selfEmployed[1].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed3">

                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[1].placeholder1"
                                    v-model="selfEmployed31"
                                    :class="{ 'is-invalid': v$.selfEmployed31.$error && selfEmployed31, 'mb10': !v$.selfEmployed31.$error || !selfEmployed31 }">
                                <div v-if="selfEmployed31">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed31.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[1].placeholder2"
                                    v-model="selfEmployed32"
                                    :class="{ 'is-invalid': v$.selfEmployed32.$error && selfEmployed32 }">
                                <div v-if="selfEmployed32">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed32.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 4" :question="selfEmployed[2].question"
                            :text="selfEmployed[2].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed4">
                            <input type="text" class="input width100" :placeholder="selfEmployed[2].placeholder"
                                v-model="selfEmployed4"
                                :class="{ 'is-invalid': v$.selfEmployed4.$error && selfEmployed4 }">
                            <div v-if="selfEmployed4">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed4.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 5" :question="selfEmployed[3].question"
                            :text="selfEmployed[3].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed5">
                            <input type="text" class="input width100" :placeholder="selfEmployed[3].placeholder1"
                                v-model="selfEmployed51"
                                :class="{ 'is-invalid': v$.selfEmployed51.$error && selfEmployed51, 'mb10': !v$.selfEmployed51.$error || !selfEmployed51 }">
                            <div v-if="selfEmployed51">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed51.$errors"
                                    :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="selfEmployed[3].placeholder2"
                                v-model="selfEmployed52"
                                :class="{ 'is-invalid': v$.selfEmployed52.$error && selfEmployed52, 'mb10': !v$.selfEmployed52.$error || !selfEmployed52 }">
                            <div v-if="selfEmployed52">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed52.$errors"
                                    :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[3].placeholder3"
                                    v-model="selfEmployed53"
                                    :class="{ 'is-invalid': v$.selfEmployed53.$error && selfEmployed53, 'mb10': !v$.selfEmployed53.$error || !selfEmployed53 }">
                                <div v-if="selfEmployed53">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed53.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[3].placeholder4"
                                    v-model="selfEmployed54"
                                    :class="{ 'is-invalid': v$.selfEmployed54.$error && selfEmployed54, 'mb10': !v$.selfEmployed54.$error || !selfEmployed54 }">
                                <div v-if="selfEmployed54">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed54.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 6" :question="selfEmployed[4].question"
                            :text="selfEmployed[4].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed6">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[4].placeholder1"
                                    v-model="selfEmployed61"
                                    :class="{ 'is-invalid': v$.selfEmployed61.$error && selfEmployed61, 'mb10': !v$.selfEmployed61.$error || !selfEmployed61 }">
                                <div v-if="selfEmployed61">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed61.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="selfEmployed[4].placeholder2"
                                    v-model="selfEmployed62"
                                    :class="{ 'is-invalid': v$.selfEmployed62.$error && selfEmployed62, 'mb10': !v$.selfEmployed62.$error || !selfEmployed62 }">
                                <div v-if="selfEmployed62">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed62.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="selfEmployed[4].placeholder3"
                                    v-model="selfEmployed63"
                                    :class="{ 'is-invalid': v$.selfEmployed63.$error && selfEmployed63, 'mb10': !v$.selfEmployed63.$error || !selfEmployed63 }">
                                <div v-if="selfEmployed63">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed63.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 7" :question="selfEmployed[5].question"
                            :text="selfEmployed[5].text" :next="next" :prev="prev" :questionIndex="questionIndex"
                            :currentModel="selfEmployed7">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[5].placeholder1"
                                    v-model="selfEmployed71"
                                    :class="{ 'is-invalid': v$.selfEmployed71.$error && selfEmployed71, 'mb10': !v$.selfEmployed71.$error || !selfEmployed71 }">
                                <div v-if="selfEmployed71">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed71.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="selfEmployed[5].placeholder2"
                                    v-model="selfEmployed72"
                                    :class="{ 'is-invalid': v$.selfEmployed72.$error && selfEmployed72, 'mb10': !v$.selfEmployed72.$error || !selfEmployed72 }">
                                <div v-if="selfEmployed72">
                                    <p class="invalid-feedback" v-for="error in v$.selfEmployed72.$errors"
                                        :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <input type="text" class="input width100" :placeholder="selfEmployed[5].placeholder3"
                                v-model="selfEmployed73"
                                :class="{ 'is-invalid': v$.selfEmployed73.$error && selfEmployed73, 'mb10': !v$.selfEmployed73.$error || !selfEmployed73 }">
                            <div v-if="selfEmployed73">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed73.$errors"
                                    :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="selfEmployed[5].placeholder4"
                                v-model="selfEmployed74"
                                :class="{ 'is-invalid': v$.selfEmployed74.$error && selfEmployed74 }">
                            <div v-if="selfEmployed74">
                                <p class="invalid-feedback" v-for="error in v$.selfEmployed74.$errors"
                                    :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                    </div>
                    <div class="quiz-status" v-if="status == 'Retired / Pension'">
                        <quiz-card v-if="questionIndex == 2" :question="retired[0].question" :text="retired[0].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired1">
                            <input type="text" class="input width100" :placeholder="retired[0].placeholder"
                                v-model="retired1" :class="{ 'is-invalid': v$.retired1.$error && retired1 }">
                            <div v-if="retired1">
                                <p class="invalid-feedback" v-for="error in v$.retired1.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 3" :question="retired[1].question" :text="retired[1].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired2">
                            <div class="buttons" v-for="opt in retired[1].options" :key="opt">
                                <input class="hidden" type="radio" :value="opt.option" name="quizOption"
                                    :id="'id' + opt.option" v-model="retired2">
                                <label class="quiz__option" :for="'id' + opt.option">{{ opt.option }}</label>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 4" :question="retired[2].question" :text="retired[2].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired4">
                            <input type="text" class="input width100" :placeholder="retired[2].placeholder"
                                v-model="retired4" :class="{ 'is-invalid': v$.retired4.$error && retired4 }">
                            <div v-if="retired4">
                                <p class="invalid-feedback" v-for="error in v$.retired4.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 5" :question="retired[3].question" :text="retired[3].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired5">
                            <input type="text" class="input width100" :placeholder="retired[3].placeholder1"
                                v-model="retired51"
                                :class="{ 'is-invalid': v$.retired51.$error && retired51, 'mb10': !v$.retired51.$error || !retired51 }">
                            <div v-if="retired51">
                                <p class="invalid-feedback" v-for="error in v$.retired51.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="retired[3].placeholder2"
                                v-model="retired52"
                                :class="{ 'is-invalid': v$.retired52.$error && retired52, 'mb10': !v$.retired52.$error || !retired52 }">
                            <div v-if="retired52">
                                <p class="invalid-feedback" v-for="error in v$.retired52.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="retired[3].placeholder3"
                                    v-model="retired53"
                                    :class="{ 'is-invalid': v$.retired53.$error && retired53, 'mb10': !v$.retired53.$error || !retired53 }">
                                <div v-if="retired53">
                                    <p class="invalid-feedback" v-for="error in v$.retired53.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="retired[3].placeholder4"
                                    v-model="retired54"
                                    :class="{ 'is-invalid': v$.retired54.$error && retired54, 'mb10': !v$.retired54.$error || !retired54 }">
                                <div v-if="retired54">
                                    <p class="invalid-feedback" v-for="error in v$.retired54.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 6" :question="retired[4].question" :text="retired[4].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired6">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="retired[4].placeholder1"
                                    v-model="retired61"
                                    :class="{ 'is-invalid': v$.retired61.$error && retired61, 'mb10': !v$.retired61.$error || !retired61 }">
                                <div v-if="retired61">
                                    <p class="invalid-feedback" v-for="error in v$.retired61.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="retired[4].placeholder2"
                                    v-model="retired62"
                                    :class="{ 'is-invalid': v$.retired62.$error && retired62, 'mb10': !v$.retired62.$error || !retired62 }">
                                <div v-if="retired62">
                                    <p class="invalid-feedback" v-for="error in v$.retired62.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="retired[4].placeholder3"
                                    v-model="retired63"
                                    :class="{ 'is-invalid': v$.retired63.$error && retired63, 'mb10': !v$.retired63.$error || !retired63 }">
                                <div v-if="retired63">
                                    <p class="invalid-feedback" v-for="error in v$.retired63.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 7" :question="retired[5].question" :text="retired[5].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="retired7">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="retired[5].placeholder1"
                                    v-model="retired71"
                                    :class="{ 'is-invalid': v$.retired71.$error && retired71, 'mb10': !v$.retired71.$error || !retired71 }">
                                <div v-if="retired71">
                                    <p class="invalid-feedback" v-for="error in v$.retired71.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="retired[5].placeholder2"
                                    v-model="retired72"
                                    :class="{ 'is-invalid': v$.retired72.$error && retired72, 'mb10': !v$.retired72.$error || !retired72 }">
                                <div v-if="retired72">
                                    <p class="invalid-feedback" v-for="error in v$.retired72.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <input type="text" class="input width100 " :placeholder="retired[5].placeholder3"
                                v-model="retired73"
                                :class="{ 'is-invalid': v$.retired73.$error && retired73, 'mb10': !v$.retired73.$error || !retired73 }">
                            <div v-if="retired73">
                                <p class="invalid-feedback" v-for="error in v$.retired73.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="retired[5].placeholder4"
                                v-model="retired74" :class="{ 'is-invalid': v$.retired74.$error && retired74 }">
                            <div v-if="retired74">
                                <p class="invalid-feedback" v-for="error in v$.retired74.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                    </div>
                    <div class="quiz-status" v-if="status == 'Student'">
                        <quiz-card v-if="questionIndex == 2" :question="student[0].question" :text="student[0].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student1">
                            <div class="buttons" v-for="opt in student[0].options" :key="opt">
                                <input class="hidden" type="radio" :value="opt.option" name="quizOption"
                                    :id="'id' + opt.option" v-model="student1">
                                <label class="quiz__option" :for="'id' + opt.option">{{ opt.option }}</label>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 3" :question="student[1].question" :text="student[1].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student2">
                            <input type="text" class="input width100" :placeholder="student[1].placeholder"
                                v-model="student2" :class="{ 'is-invalid': v$.student2.$error && student2 }">
                            <div v-if="student2">
                                <p class="invalid-feedback" v-for="error in v$.student2.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 4" :question="student[2].question" :text="student[2].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student4">
                            <input type="text" class="input width100" :placeholder="student[2].placeholder"
                                v-model="student4" :class="{ 'is-invalid': v$.student4.$error && student4 }">
                            <div v-if="student4">
                                <p class="invalid-feedback" v-for="error in v$.student4.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 5" :question="student[3].question" :text="student[3].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student5">
                            <input type="text" class="input width100" :placeholder="student[3].placeholder1"
                                v-model="student51"
                                :class="{ 'is-invalid': v$.student51.$error && student51, 'mb10': !v$.student51.$error || !student51 }">
                            <div v-if="student51">
                                <p class="invalid-feedback" v-for="error in v$.student51.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="student[3].placeholder2"
                                v-model="student52"
                                :class="{ 'is-invalid': v$.student52.$error && student52, 'mb10': !v$.student52.$error || !student52 }">
                            <div v-if="student52">
                                <p class="invalid-feedback" v-for="error in v$.student52.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="student[3].placeholder3"
                                    v-model="student53"
                                    :class="{ 'is-invalid': v$.student53.$error && student53, 'mb10': !v$.student53.$error || !student53 }">
                                <div v-if="student53">
                                    <p class="invalid-feedback" v-for="error in v$.student53.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="student[3].placeholder4"
                                    v-model="student54"
                                    :class="{ 'is-invalid': v$.student54.$error && student54, 'mb10': !v$.student54.$error || !student54 }">
                                <div v-if="student54">
                                    <p class="invalid-feedback" v-for="error in v$.student54.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 6" :question="student[4].question" :text="student[4].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student6">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="student[4].placeholder1"
                                    v-model="student61"
                                    :class="{ 'is-invalid': v$.student61.$error && student61, 'mb10': !v$.student61.$error || !student61 }">
                                <div v-if="student61">
                                    <p class="invalid-feedback" v-for="error in v$.student61.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="student[4].placeholder2"
                                    v-model="student62"
                                    :class="{ 'is-invalid': v$.student62.$error && student62, 'mb10': !v$.student62.$error || !student62 }">
                                <div v-if="student62">
                                    <p class="invalid-feedback" v-for="error in v$.student62.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="student[4].placeholder3"
                                    v-model="student63"
                                    :class="{ 'is-invalid': v$.student63.$error && student63, 'mb10': !v$.student63.$error || !student63 }">
                                <div v-if="student63">
                                    <p class="invalid-feedback" v-for="error in v$.student63.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 7" :question="student[5].question" :text="student[5].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="student7">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="student[5].placeholder1"
                                    v-model="student71"
                                    :class="{ 'is-invalid': v$.student71.$error && student71, 'mb10': !v$.student71.$error || !student71 }">
                                <div v-if="student71">
                                    <p class="invalid-feedback" v-for="error in v$.student71.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="student[5].placeholder2"
                                    v-model="student72"
                                    :class="{ 'is-invalid': v$.student72.$error && student72, 'mb10': !v$.student72.$error || !student72 }">
                                <div v-if="student72">
                                    <p class="invalid-feedback" v-for="error in v$.student72.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <input type="text" class="input width100" :placeholder="student[5].placeholder3"
                                v-model="student73"
                                :class="{ 'is-invalid': v$.student73.$error && student73, 'mb10': !v$.student73.$error || !student73 }">
                            <div v-if="student73">
                                <p class="invalid-feedback" v-for="error in v$.student73.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="student[5].placeholder4"
                                v-model="student74" :class="{ 'is-invalid': v$.student74.$error && student74 }">
                            <div v-if="student74">
                                <p class="invalid-feedback" v-for="error in v$.student74.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                    </div>
                    <div class="quiz-status" v-if="status == 'Other'">
                        <quiz-card v-if="questionIndex == 2" :question="other[0].question" :text="other[0].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other1">
                            <div class="buttons" v-for="opt in other[0].options" :key="opt">
                                <input class="hidden" type="radio" :value="opt.option" name="quizOption"
                                    :id="'id' + opt.option" v-model="other1">
                                <label class="quiz__option" :for="'id' + opt.option">{{ opt.option }}</label>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 3" :question="other[1].question" :text="other[1].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other2">
                            <input type="text" class="input width100" :placeholder="other[1].placeholder"
                                v-model="other2" :class="{ 'is-invalid': v$.other2.$error && other2 }">
                            <div v-if="other2">
                                <p class="invalid-feedback" v-for="error in v$.other2.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 4" :question="other[2].question" :text="other[2].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other4">
                            <input type="text" class="input width100" :placeholder="other[2].placeholder"
                                v-model="other4" :class="{ 'is-invalid': v$.other4.$error && other4 }">
                            <div v-if="other4">
                                <p class="invalid-feedback" v-for="error in v$.other4.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 5" :question="other[3].question" :text="other[3].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other5">
                            <input type="text" class="input width100" :placeholder="other[3].placeholder1"
                                v-model="other51"
                                :class="{ 'is-invalid': v$.other51.$error && other51, 'mb10': !v$.other51.$error || !other51 }">
                            <div v-if="other51">
                                <p class="invalid-feedback" v-for="error in v$.other51.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="other[3].placeholder2"
                                v-model="other52"
                                :class="{ 'is-invalid': v$.other52.$error && other52, 'mb10': !v$.other52.$error || !other52 }">
                            <div v-if="other52">
                                <p class="invalid-feedback" v-for="error in v$.other52.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="other[3].placeholder3" v-model="other53"
                                    :class="{ 'is-invalid': v$.other53.$error && other53, 'mb10': !v$.other53.$error || !other53 }">
                                <div v-if="other53">
                                    <p class="invalid-feedback" v-for="error in v$.other53.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="other[3].placeholder4" v-model="other54"
                                    :class="{ 'is-invalid': v$.other54.$error && other54, 'mb10': !v$.other54.$error || !other54 }">
                                <div v-if="other54">
                                    <p class="invalid-feedback" v-for="error in v$.other54.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 6" :question="other[4].question" :text="other[4].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other6">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="other[4].placeholder1" v-model="other61"
                                    :class="{ 'is-invalid': v$.other61.$error && other61, 'mb10': !v$.other61.$error || !other61 }">
                                <div v-if="other61">
                                    <p class="invalid-feedback" v-for="error in v$.other61.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="other[4].placeholder2" v-model="other62"
                                    :class="{ 'is-invalid': v$.other62.$error && other62, 'mb10': !v$.other62.$error || !other62 }">
                                <div v-if="other62">
                                    <p class="invalid-feedback" v-for="error in v$.other62.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width23">
                                <input type="text" class="input" :placeholder="other[4].placeholder3" v-model="other63"
                                    :class="{ 'is-invalid': v$.other63.$error && other63, 'mb10': !v$.other63.$error || !other63 }">
                                <div v-if="other63">
                                    <p class="invalid-feedback" v-for="error in v$.other63.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                        </quiz-card>
                        <quiz-card v-if="questionIndex == 7" :question="other[5].question" :text="other[5].text"
                            :next="next" :prev="prev" :questionIndex="questionIndex" :currentModel="other7">
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="other[5].placeholder1" v-model="other71"
                                    :class="{ 'is-invalid': v$.other71.$error && other71, 'mb10': !v$.other71.$error || !other71 }">
                                <div v-if="other71">
                                    <p class="invalid-feedback" v-for="error in v$.other71.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <div class="column width49">
                                <input type="text" class="input" :placeholder="other[5].placeholder2" v-model="other72"
                                    :class="{ 'is-invalid': v$.other72.$error && other72, 'mb10': !v$.other72.$error || !other72 }">
                                <div v-if="other72">
                                    <p class="invalid-feedback" v-for="error in v$.other72.$errors" :key="error.$uid">
                                        {{ error.$message }} </p>
                                </div>
                            </div>
                            <input type="text" class="input width100" :placeholder="other[5].placeholder3"
                                v-model="other73"
                                :class="{ 'is-invalid': v$.other73.$error && other73, 'mb10': !v$.other73.$error || !other73 }">
                            <div v-if="other73">
                                <p class="invalid-feedback" v-for="error in v$.other73.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                            <input type="text" class="input width100" :placeholder="other[5].placeholder4"
                                v-model="other74" :class="{ 'is-invalid': v$.other74.$error && other74 }">
                            <div v-if="other74">
                                <p class="invalid-feedback" v-for="error in v$.other74.$errors" :key="error.$uid">
                                    {{ error.$message }} </p>
                            </div>
                        </quiz-card>
                    </div>
                    <div class="quiz__final"
                        v-if="(questionIndex == 9 && status == 'Employed') || (questionIndex == 8 && status == 'Self-Employed') || (questionIndex == 8 && status == 'Retired / Pension') || (questionIndex == 8 && status == 'Other') || (questionIndex == 8 && status == 'Student')">
                        <img class="quiz__final-success" src="@/assets/Success.svg">
                        <p class="quiz__final-header">Application successful!</p>
                        <p class="quiz__final-text">Your response was successfully submitted. Thank you!
                            Our team will reach out to you shortly.</p>
                        <p class="quiz__final-text2">Confirmation number:</p>
                        <div class="quiz__final-number">
                            <p>{{ generateNumber }}</p>
                        </div>
                        <base-button blue title="Go to main page" @click="toMain" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import CatalogCard from '@/components/CatalogCard.vue';
import BaseButton from '@/components/BaseButton.vue';
import QuizCard from '@/components/QuizCard.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, numeric, maxLength, alpha } from '@vuelidate/validators';

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            employed1: { required, numeric },
            employed21: { required, alpha },
            employed22: { required, alpha },
            employed31: { required, numeric, maxLength: maxLength(2) },
            employed32: { required, numeric, maxLength: maxLength(4) },
            employed4: { required },
            employed51: { required, minLength: minLength(3) },
            employed52: { required, minLength: minLength(3), alpha },
            employed53: { required, minLength: minLength(3) },
            employed54: { required, numeric },
            employed61: { required, maxLength: maxLength(4), numeric },
            employed62: { required, maxLength: maxLength(2), numeric },
            employed63: { required, maxLength: maxLength(2), numeric },
            employed71: { required, alpha },
            employed72: { required, alpha },
            employed73: { required, email },
            employed74: { required, numeric },

            selfEmployed1: { required, numeric },
            selfEmployed31: { required, numeric, maxLength: maxLength(2) },
            selfEmployed32: { required, numeric, maxLength: maxLength(4) },
            selfEmployed4: { required },
            selfEmployed51: { required, minLength: minLength(3) },
            selfEmployed52: { required, minLength: minLength(3), alpha },
            selfEmployed53: { required, minLength: minLength(3) },
            selfEmployed54: { required, numeric },
            selfEmployed61: { required, maxLength: maxLength(4), numeric },
            selfEmployed62: { required, maxLength: maxLength(2), numeric },
            selfEmployed63: { required, maxLength: maxLength(2), numeric },
            selfEmployed71: { required, alpha },
            selfEmployed72: { required, alpha },
            selfEmployed73: { required, email },
            selfEmployed74: { required, numeric },

            retired1: { required, numeric },
            retired4: { required },
            retired51: { required, minLength: minLength(3) },
            retired52: { required, minLength: minLength(3), alpha },
            retired53: { required, minLength: minLength(3) },
            retired54: { required, numeric },
            retired61: { required, maxLength: maxLength(4), numeric },
            retired62: { required, maxLength: maxLength(2), numeric },
            retired63: { required, maxLength: maxLength(2), numeric },
            retired71: { required, alpha },
            retired72: { required, alpha },
            retired73: { required, email },
            retired74: { required, numeric },

            student2: { required, numeric },
            student4: { required, numeric },
            student51: { required, minLength: minLength(3) },
            student52: { required, minLength: minLength(3), alpha },
            student53: { required, minLength: minLength(3) },
            student54: { required, numeric },
            student61: { required, maxLength: maxLength(4), numeric },
            student62: { required, maxLength: maxLength(2), numeric },
            student63: { required, maxLength: maxLength(2), numeric },
            student71: { required, alpha },
            student72: { required, alpha },
            student73: { required, email },
            student74: { required, numeric },

            other2: { required, numeric },
            other4: { required, numeric },
            other51: { required, minLength: minLength(3) },
            other52: { required, minLength: minLength(3), alpha },
            other53: { required, minLength: minLength(3) },
            other54: { required, numeric },
            other61: { required, maxLength: maxLength(4), numeric },
            other62: { required, maxLength: maxLength(2), numeric },
            other63: { required, maxLength: maxLength(2), numeric },
            other71: { required, alpha },
            other72: { required, alpha },
            other73: { required, email },
            other74: { required, numeric },
        }
    },
    components: {
        HeaderBlock, CatalogCard, BaseButton, QuizCard
    },
    data() {
        return {
            budget: '',
            status: '',

            employed1: '',
            selfEmployed1: '',
            retired1: '',
            student1: '',
            other1: '',

            other2: '',
            retired2: '',
            student2: '',
            employed21: '',
            employed22: '',

            employed31: '',
            employed32: '',
            selfEmployed31: '',
            selfEmployed32: '',

            employed4: '',
            retired4: '',
            selfEmployed4: '',
            student4: '',
            other4: '',

            employed51: '',
            employed52: '',
            employed53: '',
            employed54: '',
            retired51: '',
            retired52: '',
            retired53: '',
            retired54: '',
            student51: '',
            student52: '',
            student53: '',
            student54: '',
            other51: '',
            other52: '',
            other53: '',
            other54: '',
            selfEmployed51: '',
            selfEmployed52: '',
            selfEmployed53: '',
            selfEmployed54: '',

            employed61: '',
            employed62: '',
            employed63: '',
            retired61: '',
            retired62: '',
            retired63: '',
            student61: '',
            student62: '',
            student63: '',
            other61: '',
            other62: '',
            other63: '',
            selfEmployed61: '',
            selfEmployed62: '',
            selfEmployed63: '',

            employed71: '',
            employed72: '',
            employed73: '',
            employed74: '',
            retired71: '',
            retired72: '',
            retired73: '',
            retired74: '',
            student71: '',
            student72: '',
            student73: '',
            student74: '',
            other71: '',
            other72: '',
            other73: '',
            other74: '',
            selfEmployed71: '',
            selfEmployed72: '',
            selfEmployed73: '',
            selfEmployed74: '',

            personStatus: '',
            quizOption: 0,
            questionIndex: 0,
            questions: [
                {
                    question: 'What\'s your budget?',
                    text: 'Find vehicle options that fit your budget.',
                    options: [
                        { option: 'Under $250/Month' },
                        { option: '$250-374/Month' },
                        { option: '$374-500/Month' },
                        { option: 'Over $500/Month' },
                    ],
                },
                {
                    question: 'What\'s your employment status?',
                    text: 'Your employment status will help determine the best vehicle and financing options for you.',
                    options: [
                        { option: 'Employed' },
                        { option: 'Self-Employed' },
                        { option: 'Student' },
                        { option: 'Retired / Pension' },
                        { option: 'Other' },
                    ],
                },
            ],
            employed: [
                {
                    question: 'Enter your monthly income',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
                    placeholder: 'Monthly income '
                },
                {
                    question: 'Tell us about your employment',
                    text: 'We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.',
                    placeholder1: 'Employer',
                    placeholder2: 'Title'

                },
                {
                    question: 'How long have you been earning this income ? ',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder1: 'Years',
                    placeholder2: 'Mounths'
                },
                {
                    question: 'How long receiving?',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder: 'Time'
                },
                {
                    question: 'Where do you live?',
                    text: 'Providing your location helps find the best deals near you.',
                    placeholder1: 'Street address',
                    placeholder2: 'City',
                    placeholder3: 'Province',
                    placeholder4: 'Postal code',
                },
                {
                    question: 'When were you born?',
                    text: '',
                    placeholder1: 'Year',
                    placeholder2: 'Mounth',
                    placeholder3: 'Day',
                },
                {
                    question: 'Congratulations! Last step.',
                    text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
                    placeholder1: 'First name',
                    placeholder2: 'Last name',
                    placeholder3: 'Email',
                    placeholder4: 'Phone number',
                },
            ],
            retired: [
                {
                    question: 'Enter your monthly income',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
                    placeholder: 'Monthly income '
                },
                {
                    question: 'Are you currently working?',
                    text: 'Your employment status will help determing the best vehicle and financing options for you.',
                    options: [
                        { option: 'Yes' },
                        { option: 'No' },
                    ],
                },
                {
                    question: 'How long receiving?',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder: 'Time'
                },
                {
                    question: 'Where do you live?',
                    text: 'Providing your location helps find the best deals near you.',
                    placeholder1: 'Street address',
                    placeholder2: 'City',
                    placeholder3: 'Province',
                    placeholder4: 'Postal code',
                },
                {
                    question: 'When were you born?',
                    text: '',
                    placeholder1: 'Year',
                    placeholder2: 'Mounth',
                    placeholder3: 'Day',
                },
                {
                    question: 'Congratulations! Last step.',
                    text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
                    placeholder1: 'First name',
                    placeholder2: 'Last name',
                    placeholder3: 'Email',
                    placeholder4: 'Phone number',
                },
            ],
            other: [
                {
                    question: 'How do you earn income?',
                    text: 'Your employment status will help determine the best vehicle and financing options for you.',
                    options: [
                        { option: 'Long-term disability' },
                        { option: 'Spousal support / Alimony' },
                        { option: 'Child support' },
                        { option: 'Social assistance / Welfare' },
                        { option: 'Maternity leave' },
                        { option: 'Baby bonus / Child tax' },
                        { option: 'Unemployed / EI' },
                        { option: 'Other / Not listed' },
                    ],
                },
                {
                    question: 'Enter your monthly income',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
                    placeholder: 'Monthly income '
                },
                {
                    question: 'How long receiving?',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder: 'Time'
                },
                {
                    question: 'Where do you live?',
                    text: 'Providing your location helps find the best deals near you.',
                    placeholder1: 'Street address',
                    placeholder2: 'City',
                    placeholder3: 'Province',
                    placeholder4: 'Postal code',
                },
                {
                    question: 'When were you born?',
                    text: '',
                    placeholder1: 'Year',
                    placeholder2: 'Mounth',
                    placeholder3: 'Day',
                },
                {
                    question: 'Congratulations! Last step.',
                    text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
                    placeholder1: 'First name',
                    placeholder2: 'Last name',
                    placeholder3: 'Email',
                    placeholder4: 'Phone number',
                },
            ],
            selfEmployed: [
                {
                    question: 'Enter your monthly income',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
                    placeholder: 'Monthly income '
                },
                {
                    question: 'How long have you been earning this income ? ',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder1: 'Years',
                    placeholder2: 'Mounths'
                },
                {
                    question: 'How long receiving?',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder: 'Time'
                },
                {
                    question: 'Where do you live?',
                    text: 'Providing your location helps find the best deals near you.',
                    placeholder1: 'Street address',
                    placeholder2: 'City',
                    placeholder3: 'Province',
                    placeholder4: 'Postal code',
                },
                {
                    question: 'When were you born?',
                    text: '',
                    placeholder1: 'Year',
                    placeholder2: 'Mounth',
                    placeholder3: 'Day',
                },
                {
                    question: 'Congratulations! Last step.',
                    text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
                    placeholder1: 'First name',
                    placeholder2: 'Last name',
                    placeholder3: 'Email',
                    placeholder4: 'Phone number',
                },
            ],
            student: [
                {
                    question: 'Are you currently working?',
                    text: 'Your employment status will help determing the best vehicle and financing options for you.',
                    options: [
                        { option: 'Yes' },
                        { option: 'No' },
                    ],
                },
                {
                    question: 'Enter your monthly income',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.',
                    placeholder: 'Monthly income '
                },
                {
                    question: 'How long receiving?',
                    text: 'Your income details help us make sure your vehicle payments are easy and affordable.',
                    placeholder: 'Time'
                },
                {
                    question: 'Where do you live?',
                    text: 'Providing your location helps find the best deals near you.',
                    placeholder1: 'Street address',
                    placeholder2: 'City',
                    placeholder3: 'Province',
                    placeholder4: 'Postal code',
                },
                {
                    question: 'When were you born?',
                    text: '',
                    placeholder1: 'Year',
                    placeholder2: 'Mounth',
                    placeholder3: 'Day',
                },
                {
                    question: 'Congratulations! Last step.',
                    text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ',
                    placeholder1: 'First name',
                    placeholder2: 'Last name',
                    placeholder3: 'Email',
                    placeholder4: 'Phone number',
                },
            ]
        }
    },
    methods: {
        toMain() {
            this.$router.push("/");
        },
        next() {
            this.v$.$touch();
            if (!this.v$.employed1.$error || !this.v$.selfEmployed1.$error || !this.v$.retired1.$error || this.student1 || this.other1) {
                this.questionIndex++;
            } else if (!this.v$.employed2.$error || !this.v$.student2.$error || !this.v$.other2.$error) {
                this.questionIndex++;
            } else if (!this.v$.employed3.$error || !this.v$.selfEmployed3.$error) {
                this.questionIndex++;
            } else if (!this.v$.employed4.$error || !this.v$.selfEmployed4.$error || !this.v$.retired4.$error || !this.v$.student4.$error || !this.v$.other4.$error) {
                this.questionIndex++;
            } else if (!this.v$.employed5.$error || !this.v$.selfEmployed5.$error || !this.v$.retired5.$error || !this.v$.student5.$error || !this.v$.other5.$error) {
                this.questionIndex++;
            } else if (!this.v$.employed6.$error || !this.v$.selfEmployed6.$error || !this.v$.retired6.$error || !this.v$.student6.$error || !this.v$.other6.$error) {
                this.questionIndex++;
            } else if (!this.v$.employed7.$error || !this.v$.selfEmployed7.$error || !this.v$.retired7.$error || !this.v$.student7.$error || !this.v$.other7.$error) {
                this.questionIndex++;
            }
        },
        nextBut() {
            this.questionIndex++;
        },
        prev() {
            if (this.questionIndex >= 1) {
                this.questionIndex--;
            }
        },
    },
    computed: {
        generateNumber() {
            const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var randomString = '';
            for (var i = 0; i < 25; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        },
        employed2() {
            if (!this.v$.employed21.$error && !this.v$.employed22.$error) {
                return true
            }
        },
        employed3() {
            if (!this.v$.employed31.$error && !this.v$.employed32.$error) {
                return true
            }
        },
        employed5() {
            if (!this.v$.employed51.$error && !this.v$.employed52.$error && !this.v$.employed53.$error && !this.v$.employed54.$error) {
                return true
            }
        },
        employed6() {
            if (!this.v$.employed61.$error && !this.v$.employed62.$error && !this.v$.employed63.$error) {
                return true
            }
        },
        employed7() {
            if (!this.v$.employed71.$error && !this.v$.employed72.$error && !this.v$.employed73.$error && !this.v$.employed74.$error) {
                return true
            }
        },
        selfEmployed3() {
            if (!this.v$.selfEmployed31.$error && !this.v$.selfEmployed32.$error) {
                return true
            }
        },
        selfEmployed5() {
            if (!this.v$.selfEmployed51.$error && !this.v$.selfEmployed52.$error && !this.v$.selfEmployed53.$error && !this.v$.selfEmployed54.$error) {
                return true
            }
        },
        selfEmployed6() {
            if (!this.v$.selfEmployed61.$error && !this.v$.selfEmployed62.$error && !this.v$.selfEmployed63.$error) {
                return true
            }
        },
        selfEmployed7() {
            if (!this.v$.selfEmployed71.$error && !this.v$.selfEmployed72.$error && !this.v$.selfEmployed73.$error && !this.v$.selfEmployed74.$error) {
                return true
            }
        },
        retired5() {
            if (!this.v$.retired51.$error && !this.v$.retired52.$error && !this.v$.retired53.$error && !this.v$.retired54.$error) {
                return true
            }
        },
        retired6() {
            if (!this.v$.retired61.$error && !this.v$.retired62.$error && !this.v$.retired63.$error) {
                return true
            }
        },
        retired7() {
            if (!this.v$.retired71.$error && !this.v$.retired72.$error && !this.v$.retired73.$error && !this.v$.retired74.$error) {
                return true
            }
        },
        student5() {
            if (!this.v$.student51.$error && !this.v$.student52.$error && !this.v$.student53.$error && !this.v$.student54.$error) {
                return true
            }
        },
        student6() {
            if (!this.v$.student61.$error && !this.v$.student62.$error && !this.v$.student63.$error) {
                return true
            }
        },
        student7() {
            if (!this.v$.student71.$error && !this.v$.student72.$error && !this.v$.student73.$error && !this.v$.student74.$error) {
                return true
            }
        },
        other5() {
            if (!this.v$.other51.$error && !this.v$.other52.$error && !this.v$.other53.$error && !this.v$.other54.$error) {
                return true
            }
        },
        other6() {
            if (!this.v$.other61.$error && !this.v$.other62.$error && !this.v$.other63.$error) {
                return true
            }
        },
        other7() {
            if (!this.v$.other71.$error && !this.v$.other72.$error && !this.v$.other73.$error && !this.v$.other74.$error) {
                return true
            }
        },
        productId() {
            return +this.$route.params.id;
        },
        product() {
            return this.$store.getters.getProduct(this.productId);
        },
        setupPersonStatus() {
            if (this.status == 'Employed') {
                this.personStatus = this.employed;
                return this.personStatus
            } else if (this.status == 'Self-Employed') {
                this.personStatus = this.selfEmployed
                return this.personStatus
            } else if (this.status == 'Student') {
                this.personStatus = this.student
                return this.personStatus
            } else if (this.status == 'Other') {
                this.personStatus = this.other
                return this.personStatus
            } else if (this.status == 'Retired / Pension') {
                this.personStatus = this.retired
                return this.personStatus
            } else {
                this.personStatus = this.employed;
                return this.personStatus
            }

        },
        progressbar() {
            return (this.questionIndex / (this.questions.length + this.setupPersonStatus.length) * 100) + '%'
        },
    }
}
</script>

<style lang="scss" scoped>
.column {
    // width: 49%;
    display: flex;
    flex-direction: column;
}

.quiz {
    width: 100%;

    .quiz__container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px 0;
        display: flex;
        gap: 4%;
        justify-content: center;

        p {
            margin: 0;
        }

        .is-invalid {
            border: 2px solid #F54E4E !important;
        }

        .invalid-feedback {
            color: #F54E4E;
            margin-bottom: 10px;
        }

        .quiz__content {
            width: 48%;

            .quiz-progressbar {
                width: 100%;
                height: 8px;
                background: #F1F1F1;
                border-radius: 2px;
                margin-bottom: 60px;

                .quiz-progressbar-active {
                    width: 0;
                    height: 100%;
                    background: #7380FF;
                    border-radius: 2px;
                }
            }

            .quiz__content-container {

                .buttons {
                    width: 49%;
                    height: 45px;
                    margin-bottom: 10px;

                    .quiz__option {
                        border: 2px solid #F1F1F1;
                        border-radius: 2px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                            border: 2px solid #7380FF;
                        }
                    }

                    .hidden {
                        position: absolute;
                        height: 0;
                        width: 0;
                    }

                    input:checked+.quiz__option {
                        border: 2px solid #7380FF;
                    }
                }

                .width100 {
                    width: 100%;
                }

                .width49 {
                    width: 49%;
                }

                .width23 {
                    width: 23%;
                }

                .mb10 {
                    margin-bottom: 10px;
                }

                .input {
                    height: 45px;
                    border: 1px solid #D7D7D7;
                    border-radius: 2px;
                    outline: none;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 159%;

                    &::placeholder {
                        color: #D7D7D7;
                    }
                }

                .quiz__final {
                    .quiz__final-success {
                        margin-bottom: 20px;
                    }

                    .quiz__final-header {
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        letter-spacing: 0.02em;
                        color: #41456B;
                        margin-bottom: 5px;
                    }

                    .quiz__final-text {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 159%;
                        color: #7C7A84;
                        margin-bottom: 30px;
                    }

                    .quiz__final-text2 {
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 34px;
                        color: #41456B;
                        margin-bottom: 5px;
                    }

                    .quiz__final-number {
                        width: min-content;
                        box-sizing: border-box;
                        padding: 10px 20px;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 159%;
                        color: #41456B;
                        margin-bottom: 40px;
                        border: 1px solid #D7D7D7;
                        border-radius: 2px;
                    }

                    button {
                        height: 45px;
                        width: 222px;
                    }
                }
            }
        }

        .quiz__car {
            width: 48%;
        }
    }
}

@media (max-width: 1225px) {
    .quiz {
        .quiz__container {
            flex-direction: column;

            .quiz__content {
                margin: 0 auto;
                order: 1;
                margin-bottom: 60px;
            }

            .quiz__car {
                margin: 0 auto;
                order: 2;
            }
        }
    }
}

@media (max-width: 767px) {
    .column {
        width: 100%;
    }

    .quiz {
        .quiz__container {
            margin-top: 30px;
            padding: 0 20px;
            box-sizing: border-box;

            .quiz__content {
                width: 100%;
                margin-bottom: 40px;

                .quiz-progressbar {
                    margin-bottom: 30px;
                }

                .quiz__content-container {

                    .width49,
                    .width23 {
                        width: 100%;
                    }

                    .buttons {
                        width: 100%;
                    }

                    .quiz__final {
                        .quiz__final-success {
                            margin-bottom: 10px;
                            width: 50px;
                            height: 50px;
                        }

                        .quiz__final-header {
                            font-size: 20px;
                        }

                        .quiz__final-text {
                            margin-bottom: 20px;
                        }

                        .quiz__final-text2 {
                            font-size: 18px;
                        }

                        .quiz__final-number {
                            width: 100%;
                            margin-bottom: 30px;
                        }

                        button {
                            height: 35px;
                            width: 100%;
                        }
                    }
                }
            }

            .quiz__car {
                width: 100%;
            }
        }
    }
}
</style>
