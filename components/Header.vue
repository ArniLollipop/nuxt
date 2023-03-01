<template>
  <header class="header">
    <div class="container">
      <div class="head-nav">
        <Logo :logo="logo" />
        <div class="head-nav__btns right-250">
          <button @click="openBurger()" class="head-nav__btn">Алматы</button>
          <button @click="openBurger()" class="head-nav__btn">Астана</button>
          <button @click="openBurger()" class="head-nav__btn">Другие</button>
          <button @click="openBurger()" class="head-nav__btn">О нас</button>
        </div>
        <button @click="openBurger()" class="head-nav__burger">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import ChevronDown from "./icon_components/ChevronDown.vue";
import Logo from "./icon_components/Logo.vue";
export default {
  components: { Logo, ChevronDown },
  name: "NuxtHeader",
  data() {
    return {
      logo: { width: "172", height: "152" },
      burger: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (
        window.pageYOffset - 100 >
        document.querySelector(".header").offsetTop
      ) {
        document.querySelector(".header").classList.add("header-fix");
        this.logo.width = "142";
        this.logo.height = "122";
      } else {
        document.querySelector(".header").classList.remove("header-fix");
        this.logo.width = "172";
        this.logo.height = "152";
      }
    },
    openBurger() {
      if (!this.burger) {
        document.querySelector(".head-nav__btns").classList.remove("right-250");
        this.burger = !this.burger;
      } else {
        document.querySelector(".head-nav__btns").classList.add("right-250");
        this.burger = !this.burger;
      }
    },
  },
};
</script>

<style>
.header {
  background: #f9f7f3;
  width: 100%;
  padding: 30px 0;
  transition: all;
  transition-duration: 0.3s;
  position: fixed;
  top: 0;
  z-index: 6;
}
.header-fix {
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 6;
}
.head-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}
.head-nav__btns {
  display: flex;
  align-items: center;
  gap: 49px;
  z-index: 10;
}
.head-nav__btn {
  color: #5c5754;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 10;
}
.head-nav__btn:nth-child(1) {
  animation: fadeUp 0.3s;
}
.head-nav__btn:nth-child(2) {
  animation: fadeUp 0.4s;
}
.head-nav__btn:nth-child(3) {
  animation: fadeUp 0.5s;
}
.head-nav__btn:last-child {
  animation: fadeUp 0.6s;
}

.head-nav__burger {
  display: none;
}

@media screen and (min-width: 375px) and (max-width: 640px) {
  .header {
    padding: 10px 0;
  }
  .header-fix {
    padding: 5px 0;
  }
  .head-nav__btns {
    position: absolute;
    right: 0;
    flex-direction: column;
    row-gap: 10px;
    transition: all;
    transition-duration: 0.3s;
    background-color: #f9f7f3;
    z-index: 10;
    padding-right: 10px;
  }
  .head-nav__burger {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  .right-250 {
    right: -250px;
  }
  .burger-line {
    width: 30px;
    height: 5px;
    background-color: #5c5754;
    border-radius: 5px;
  }
}

@keyframes fadeUp {
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}
</style>
