<template>
  <a href="#" @click.prevent="openAbout(about)" class="city-one">
    <img
      :src="require('~/static/images/' + img)"
      alt="asdasd"
      class="city-one__img"
    />
    <div class="city-one__yellow">
      <YellowBack />
      <p class="city-one__number">{{ id }}</p>
    </div>
    <svg
      width="374"
      height="334"
      viewBox="0 0 374 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="city-line"
    >
      <path
        d="M155.698 310.544C209.304 310.821 290.337 295.614 337.559 254.292C393.685 205.177 374.096 110.917 337.524 69.1247C293.393 18.6921 140.935 -36.2883 57.285 36.911C-20.253 105.116 -10.9782 213.724 47.571 280.633C102.955 343.925 202.213 354.989 284.784 282.734C356.561 219.924 350.362 130.622 303.769 77.376C238.011 2.22937 115.907 18.9623 76.396 47.8607C15.8738 91.9519 14.9008 169.791 40.9605 219.718C67.8054 271.086 119.178 311.281 199.319 296.143"
        stroke="#DC0000"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
    <div class="city-one__text">
      <span class="city-one__p">{{ text }}</span>
    </div>
  </a>
</template>

<script>
import Decoration6 from "./icon_components/Decoration6.vue";
import YellowBack from "./icon_components/YellowBack.vue";
export default {
  components: { YellowBack, Decoration6 },
  name: "NuxtCityLine",
  props: ["id", "img", "text"],
  methods: {
    openAbout(about) {
      this.$router.push("/about/" + this.id);
    },
  },
};
</script>

<style>
.city-one {
  position: absolute;
  width: fit-content;
  height: fit-content;
  z-index: 5;
}
.city-one__img {
  width: 264px;
  height: 264px;
  border-radius: 50%;
  z-index: 1;
}
.city-one__yellow {
  position: absolute;
  z-index: 2;
  top: 5%;
  left: 5%;
}
.city-one__number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 22px;
  line-height: 156.9%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #5c5754;
}
.city-line {
  max-width: 350px;
  position: absolute;
  top: -10%;
  left: -12%;
  z-index: 0;
}
.city-one__p {
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: #5c5754;
  word-break: break-all;
}
.city-one__text {
  max-width: 264px;
  text-align: center;
  margin-top: 70px;
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .city-one {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    justify-content: center;
    top: 0 !important;
    left: 0 !important;
  }
  .city-line {
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .city-one__yellow {
    position: absolute;
    z-index: 2;
    top: 5%;
    left: 5%;
  }
  .city-one__text {
    margin-top: 40px;
  }
}
</style>
