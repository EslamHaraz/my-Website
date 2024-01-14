<template>
    <div class="parent">
        <router-Link :to="{name:''}">
            <div class="d-flex align-items-center justify-content-evenly icons-parent mb-4">

                <div class="box-icon p-3 ">
                    <FontAwesomeIcon :icon="['fas', 'phone']" />
                </div>
                <div class="box-icon p-3 ">
                    <FontAwesomeIcon :icon="['fas', 'home']" />
                </div>
            </div>
            <div class="content d-flex justify-content-between align-items-center">
                <div>
                    <!-- <h4 class="title-color  fw-normal">{{ $t('message.stayWithMe') }}</h4> -->
                    <h4 class="text-color fs-27  ">{{ $t('message.profiles') }}</h4>
                </div>
                <routerLink :to="{}" :class="{ 'right-arrow': this.$store.state.language == 'ar' }">
                    <img src="@/assets/icon.svg" class="transform">
                </routerLink>
            </div>
        </router-Link>
    </div>
</template>
<script>
export default {
    name: "ProfilesComponent"
}
</script>
<style scoped lang="scss"> .box-icon {
     background-color: var(--main-color);
     border: 1px solid #858585;
     color: var(--text-color);
     width: 100px;
     height: 100px;
     border-radius: 50%;
     line-height: 60px;
     font-size: 25px;

     &:hover {
         background-color: var(--text-color);
         color: var(--body-color);
     }
 }

 .icons-parent {
     background-color: var(--secodary-color);
     padding: 10px;
     border-radius: 20px;
 }
</style>