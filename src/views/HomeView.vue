<template>
  <div class="home mt-5">
    <div class="container">
      <div class="row align-items-end justify-content-center ">
        <router-link :to="{}" class="brief-box col-xl-5 col-lg-12 p-0  ">
          <div class="brief-content bg-main ">
            <img src="@/assets/me6.png" class="my-img">
            <div class="content">
              <h5 class="title-color fs-27 fw-bold">{{ $t('message.frontEnd') }}</h5>
              <h2 class="text-color">{{ $t('message.myName') }}</h2>
              <h5 class="title-color jop-title fw-normal">{{ $t('message.myAddress') }}</h5>
            </div>
            <routerLink :to="{}">
              <img src="@/assets/icon.svg" class="transform" :class="{ 'right-arrow': this.$store.state.language == 'ar' }">
            </routerLink>
          </div>
        </router-link>
        <AboutComponent></AboutComponent>
        <ProjetctsComponent></ProjetctsComponent>
        <ExpirenceComponent></ExpirenceComponent>
        <router-link :to="{}"
          class="special-section col-xl-10  col-lg-12 p-5 border-radius-20 bg-main text-initial  position-relative">
          <div class="content mt-2">
            <h2 class="text-color">{{ $t('message.letIs') }}</h2>
            <h2 class="text-color">{{ $t('message.work') }} <span class="special-color">{{ $t('message.togther') }}</span>
            </h2>
          </div>
          <routerLink :to="{}">
            <img src="@/assets/icon.svg" class="icon position-absolute " :class="{ 'left-arrow ': this.$store.state.language == 'ar' }">
            <img src="@/assets/Transform.png" class="transform position-absolute " >
          </routerLink>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjetctsComponent from '@/components/ProjetctsComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import ExpirenceComponent from "@/components/ExpirenceComponent.vue"


// @ is an alias to /src

export default {
  name: "HomeView",
  components: { ProjetctsComponent, AboutComponent, ExpirenceComponent }

};
</script>
<style lang="scss">
.brief-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  height: 300px;
  border-radius: 20px;

  & img.my-img {
    width: 180px;
    max-width: 100%;
    background-image: linear-gradient(98deg, #4c75e5, #d5ffff, #80dfff);
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;

  }

  .content {
    text-align: start;
  }

  .jop-title {
    max-width: 200px;
  }

  img.transform {
    position: absolute;
    right: 38px;
    bottom: 20px;
  }
}

.row {
  gap: 20px;
}

@media (max-width:515px) {
  .brief-content {
    flex-direction: column;
  }

  .jop-title {
    display: none;
  }
}

.special-section {
  height: 200px;
  overflow: hidden;

  & img.icon {
    right: 20px;
  }

  & img.transform {
    top: -45px;
  }
}
.left-arrow {
  right: inherit !important;
  left: 20px ;
  rotate: -180deg;
}
</style>

