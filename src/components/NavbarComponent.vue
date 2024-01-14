<template>
    <div class="container">
        <div class="parent d-flex justify-content-between align-items-center">
            <h1 class="head-text text-color">{{ $t('message.grid') }}<span class="special-char">{{ $t('message.x') }}</span>
            </h1>
            <nav>
                <router-link :to="{ name: 'home' }" exact class="p-3">{{ $t('message.home') }}</router-link>
                <router-link :to="{ name: 'AboutView' }" class="p-3">{{ $t('message.about') }}</router-link>
                <router-link :to="{ name: 'MyProjectsView' }" class="p-3">{{ $t('message.works') }}</router-link>
                <router-link :to="{ name: 'ContactUsView' }" class="p-3"> {{ $t('message.contact') }}</router-link>
            </nav>
            <button class="btn contact-btn">{{ $t('message.leiIsTalk') }}</button>
            <div class="switch-mode" :class="{ 'rtl': this.$store.state.language == 'ar' }">
                <FontAwesomeIcon @click=" changeMode()" v-if="dark == true" :icon="['fas', 'moon']" />
                <FontAwesomeIcon @click=" changeMode()" v-else :icon="['fas', 'sun']" />
                <div class="switch-language mt-2">
                    <h4 @click=" changeLanguage()" v-if="this.$store.state.language == 'en'">{{ $t('message.arabic') }}</h4>
                    <h4 @click=" changeLanguage()" v-if="this.$store.state.language == 'ar'">{{ $t('message.english') }}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let root = document.querySelector(":root");
export default {
    name: "NavbarComponent",
    data() {
        return {
            root,
            dark: false
        }
    },
    methods: {
        changeMode() {
            if (root.getAttribute("data-theme-mode") == "dark") {
                root.setAttribute("data-theme-mode", "light");
                window.localStorage.setItem("mode", "light");
                this.dark = true
            } else {
                root.setAttribute("data-theme-mode", "dark");
                window.localStorage.setItem("mode", "dark");
                this.dark = false
            }
        },
        changeLanguage() {
            if (this.$store.state.language == 'ar') {
                localStorage.setItem('lang', 'en')
                location.reload()
            } else {
                localStorage.setItem('lang', 'ar')
                location.reload()
            }
        }
    }
}
</script>
<style lang="scss">
#app {
    text-align: center;
    color: #2c3e50;
}

.head-text {
    font-size: 30px;

    .special-char {
        color: var(--special-color);
    }
}

nav {
    padding: 20px;

    a {
        color: var(--title-color);
        font-size: 18px;
        position: relative;
        overflow: hidden;
        display: inline-block;

        &::before {
            content: "";
            position: absolute;
            width: 0;
            height: 4px;
            background-color: var(--special-color);
            top: 50px;
            left: 0;
            transition: 0.4s;
        }

        &:hover::before {
            width: 100%;
        }

        &.router-link-exact-active {
            &::before {
                width: 100%;
            }

            color: var(--special-color);
        }
    }

    .contact-btn {
        background-color: var(--main-color);
        width: 150px;
        color: var(--text-color);
        font-size: 18px;
        border-radius: 5px;

    }

    .contact-btn:hover,
    .switch-mode:hover {
        background-color: var(--text-color);
        color: var(--body-color);
    }
}

.switch-mode {
    position: absolute;
    top: 50%;
    left: 4px;
    color: var(--text-color);
    background-color: var(--secodary-color);
    padding: 20px;
    border-radius: 9px;
    z-index: 500;
}

.switch-mode svg {
    font-size: 25px;
    cursor: pointer;
}

.switch-language h4 {
    cursor: pointer;
}

.rtl {
    left: inherit;
    right: 4px;
}
</style>
