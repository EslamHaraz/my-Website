<template>
    <div class="parent mt-5">
        <div class="main-content container">
            <router-view></router-view>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: "mainLayout",
    components: { FooterComponent },
    mounted() {
        if (this.$route.fullPath == '/') {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
<style>
.main-content {
    min-height: 70vh;
}
</style>
