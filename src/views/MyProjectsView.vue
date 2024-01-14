<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="page-title d-flex justify-content-evenly align-items-center">
                    <img src="@/assets/Circle.png" class="img-fluid">
                    <h1 class="text-color">{{ $t('message.allProjects') }}</h1>
                    <img src="@/assets/Circle.png" class="img-fluid">
                </div>
                <div class="bg-main p-3 border-radius-20 mb-3" v-for="(project, index) in test.spaProjects" :key="index">
                    <img :src="project.img" class="img-fluid border-radius-20">
                    <h4 class="project-description text-color text-start mt-4">{{ project.name }}</h4>
                    <div class="d-flex justify-content-between mt-3">
                        <h6 class="project-name title-color">{{ $t('message.vueProject') }}</h6>
                        <div class="text-initial">
                            <img src="/img/icon.ba50ff82.svg" class="transform"
                                :class="{ 'right-arrow': language == 'ar' }">
                        </div>
                    </div>
                    <div class="view-options d-flex align-items-center justify-content-between mt-3">
                        <a :href="project.linkedin" class="demo d-flex align-items-center">
                            <h5 class="title-color m-0">{{ $t('message.showDemo') }}</h5>
                            <FontAwesomeIcon :icon="['fab', 'linkedin']" class="linkedin ms-2 me-2" />
                        </a>
                        <a :href="project.github" class="github d-flex align-items-center">
                            <h5 class="title-color m-0">{{ $t('message.showSource') }}</h5>
                            <FontAwesomeIcon :icon="['fab', 'git']" class="git me-2 ms-2" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="bg-main p-3 border-radius-20 mb-3" v-for="(project, index) in test.staticProjects" :key="index">
                    <img :src="project.img" class="img-fluid border-radius-20">
                    <h4 class="project-description text-color text-start mt-2">{{ project.name }}</h4>
                    <div class="d-flex justify-content-between mt-4">
                        <h6 class="project-name title-color text-initial">{{ $t('message.staticProject') }}</h6>
                        <div class="text-initial">
                            <img src="/img/icon.ba50ff82.svg" class="transform"
                                :class="{ 'right-arrow': language == 'ar' }">
                        </div>
                    </div>
                    <div class="view-options d-flex align-items-center justify-content-between mt-3">
                        <a :href="project.linkedin" class="demo d-flex align-items-center">
                            <h5 class="title-color m-0">{{ $t('message.showDemo') }}</h5>
                            <FontAwesomeIcon :icon="['fab', 'linkedin']" class="linkedin ms-2 me-2" />
                        </a>
                        <a :href="project.github" class="github d-flex align-items-center">
                            <h5 class="title-color m-0">{{ $t('message.showSource') }}</h5>
                            <FontAwesomeIcon :icon="['fab', 'git']" class="git me-2 ms-2" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
import myProjects from "@/json/projects.json"
import test from "@/json/test.js"
export default {
    data() {
        return {
            myProjects,
            test
        }
    },
    computed: {
        ...mapState({
            language: (state) => state.language
        })
    },
    name: 'MyProjectsView'
}
</script>
<style scoped>
.page-title h1 {
    font-size: 40px;
}

svg.linkedin {
    color: #0077b5;
}

svg.git {
    color: #f1502f;
}

.view-options svg {
    font-size: 23px;
}
</style>