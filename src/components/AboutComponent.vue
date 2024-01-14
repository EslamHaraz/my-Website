<template>
    <router-Link :to="{ name: 'AboutView' }" class="about-box col-xl-3 bg-main border-radius-20 d-flex flex-column col-md-5 ">
        <img src="@/assets/sign.png" class="img-box">
        <div class="content d-flex justify-content-between align-items-center">
            <div>
                <h6 class="title-color fw-normal">{{ $t('message.moreAbout') }}</h6>
                <h4 class="text-color fs-27 fw-bold ">{{ $t('message.credentials') }}</h4>
            </div>
            <routerLink :to="{}" :class="{ 'right-arrow': this.$store.state.language == 'ar' }">
                <img src="@/assets/icon.svg" class="transform">
            </routerLink>
        </div>
    </router-Link>
</template>
<script>
export default {
    name: "AboutComponent"
}
</script>
<style lang="scss">
.about-box,
.projects-box {
    height: 250px;
    padding: 15px;

    img.img-box {
        width: 250px;
        margin: auto;
    }
}
</style>