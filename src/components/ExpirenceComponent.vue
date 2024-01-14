<template>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="parent grid-box border-radius-20  align-items-center p-3 col-xl-7 col-md-6 bg-main">
                <div class="box-experience p-3 ">
                    <h2 class="experience-number text-color">02</h2>
                    <h6 class="experience-title title-color"><span class="d-block">{{ $t('message.years') }}</span>{{
                        $t('message.expirence') }}</h6>
                </div>
                <div class="box-experience p-3 ">
                    <h2 class="experience-number text-color">+10</h2>
                    <h6 class="experience-title title-color"><span class="d-block">{{ $t('message.clints') }}</span>{{
                        $t('message.worldwide') }}</h6>
                </div>
                <div class="box-experience p-3 ">
                    <h2 class="experience-number text-color">+8</h2>
                    <h6 class="experience-title title-color"><span class="d-block">{{ $t('message.spa') }}</span>{{
                        $t('message.projects') }}</h6>
                </div>
                <div class="box-experience p-3 ">
                    <h2 class="experience-number text-color">+10</h2>
                    <h6 class="experience-title title-color"><span class="d-block">{{ $t('message.projects') }}</span>{{
                        $t('message.static') }}</h6>
                </div>
            </div>
            <div class="about-box col-xl-4 bg-main border-radius-20 d-flex flex-column justify-content-center col-md-5">
                <ProfilesComponent></ProfilesComponent>
            </div>
        </div>
    </div>
</template>
<script>
import ProfilesComponent from "@/components/ProfilesComponent.vue"
export default {
    components: { ProfilesComponent }
}
</script>
<style>
.experience-title {
    text-transform: uppercase;
    font-weight: normal;
}

.box-experience {
    background-color: var(--secodary-color);
    border-radius: 20px;
    border: 1px solid #858585;
}

.grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-content: space-between;
    gap: 20px;
}</style>