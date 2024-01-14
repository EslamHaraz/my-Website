<template>
    <router-Link :to="{name:'MyProjectsView'}"
        class="projects-box position-relative col-xl-3 bg-main border-radius-20 d-flex flex-column col-md-6">
        <img src="@/assets/img-2.png" class="img-box ">
        <div class="content d-flex justify-content-between align-items-center">
            <div>
                <h6 class="title-color fw-normal ">{{ $t('message.showProjects') }}</h6>
                <h4 class="text-color fs-27 fw-bold ">{{ $t('message.myProjects') }}</h4>
            </div>
            <routerLink :to="{}" :class="{ 'right-arrow': this.$store.state.language == 'ar' }">
                <img src="@/assets/icon.svg" class="transform">
            </routerLink>
        </div>
    </router-Link>
</template>
<script>
export default {
    name: "ProjetctsComponent"
}
</script>