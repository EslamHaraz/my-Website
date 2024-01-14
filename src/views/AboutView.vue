<template>
  <div class="container">
    <div class="row">
      <div class="img-box p-4 col-xl-4 bg-main col-sm-12 col-md-12 border-radius-20">
        <img src="@/assets/me6.png" class="img-fluid main-grediant my-img border-radius-20" />
        <h2 class="text-color mt-3">{{ $t("message.myName") }}</h2>
        <h6 class="title-color mt-3">dev.islamharaz@gmail.com</h6>
        <div class="d-flex align-items-center justify-content-evenly flex-wrap icons-parent mb-4">
          <div class="box-icon p-3 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
          </div>
          <div class="box-icon p-3 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fab', 'facebook']" />
          </div>
          <div class="box-icon p-3 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </div>
          <div class="box-icon p-3 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fab', 'github']" />
          </div>
        </div>
        <router-link :to="{}" class="contact-button">
          <h5 class="text-color main-hover">{{ $t('message.contact') }}</h5>
        </router-link>
      </div>
      <div class="col-xl-7 col-md-12 about-box text-initial">
        <div class="description-box">
          <h3 class="text-color">{{ $t('message.about') }}</h3>
          <p class="text-color mt-4 discription-text">
            {{ $t('message.aboutText') }}
          </p>
          <p class="text-color discription-text">
            {{ $t('message.aboutTextTwo') }}
          </p>
          <p class="text-color discription-text">
            {{ $t('message.aboutTextThree') }}
          </p>
        </div>
        <div class="description-box mt-5">
          <h3 class="text-color">{{ $t('message.expirence') }}</h3>
          <h6 class="title-color">2020-2023</h6>
          <h5 class="special-color">{{ $t('message.jopTitle') }}</h5>
          <h6 class="title-color">{{ $t('message.projects') }}{{ $t('message.spa') }} & {{ $t('message.projects') }}{{
            $t('message.static') }}</h6>
          <p class="text-color mt-4 discription-text">
            {{ $t('message.expirenceDescription') }}
          </p>
        </div>
        <div class="description-box mt-5">
          <h3 class="text-color mb-3">{{ $t('message.mySkills') }}</h3>
          <div class="skills-box text-start">
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'html5']" class="html5" />
              HTML
            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'css3-alt']" class="css3-alt" />
              CSS
            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'html5']" class="js" />
              JavaScript
            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'bootstrap']" class="bootstrab" />
              Bootsrab

            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'vuejs']" class="vuejs" />
              Vue.js

            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fas', 'code']" class="git" />
              JsonServer

            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'git']" class="git" />
              Git

            </h5>
            <h5 class="text-color mb-4">
              <FontAwesomeIcon :icon="['fab', 'sass']" class="sass" />
              Sass

            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  data() {
    return {};
  },
  mounted() { },
};
</script>
<style scoped lang="scss">
.my-img {
  width: 350px;
}

.box-icon {
  background-color: var(--main-color);
  border: 1px solid #858585;
  color: var(--text-color);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  line-height: 35px;
  font-size: 25px;

  &:hover {
    background-color: var(--text-color);
    color: var(--body-color);
  }
}

.icons-parent {
  padding: 10px;
  border-radius: 20px;
}

.contact-button h5 {
  background-color: var(--secodary-color);
  padding: 10px;
  border-radius: 20px;
}

p.discription-text {
  line-height: 1.6;
  font-size: 20px;
}

.about-box {
  height: 700px;
  overflow: auto;
}

.about-box::-webkit-scrollbar {
  background-color: var(--main-color);
  border-radius: 10px;
  width: 8px;
}

.about-box::-webkit-scrollbar-thumb {
  background-color: var(--special-color);
  border-radius: 10px;
}

.skills-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

svg.facebook {
  color: #4267b2;
}

svg.linkedin {
  color: #0077b5;
}

svg.whatsapp {
  color: #25d366;
}

svg.html5 {
  color: #e34c26;
}

svg.css3-alt {
  color: #264de4;
}

svg.js {
  color: #f0db4f;
}

svg.bootstrab {
  color: #563d7c;
}

svg.vuejs {
  color: #41b883;
}

svg.sass {
  color: #cc6699;
}

svg.git {
  color: #f1502f;
}
</style>