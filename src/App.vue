<template>
  <div
    id="app"
    
    :class="{ 'rtl-direction': language == 'ar', arabic: language == 'ar' }"
  >
    <nav>
      <NavbarComponent></NavbarComponent>
    </nav>
    <router-view />
  </div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
let root = document.querySelector(":root");
let language = localStorage.getItem("lang");
export default {
  data() {
    return {
      root,
      language,
    };
  },
  components: {
    NavbarComponent,
  },
  mounted() {
    root.setAttribute("data-theme-mode", "dark");
  },
};
</script>
<style>
.rtl-direction {
  direction: rtl;
}
.arabic {
  font-family: 'Amiri', serif !important;
}
</style>
