<template>
  <section class="info">
    <div class="container">
      <div class="info-content">
        <div class="info-content__text">
          <h1 class="info-text__h1">Алматы</h1>
          <p class="info-text__p">прогулка по «немецкой» истории города</p>
        </div>
        <div class="info-content__container">
          <img
            class="info-content__img"
            src="../static/images/infoImage.png"
            alt=""
          />
          <Decoration6 class="line6" />
          <Decoration7 class="line7" />
          <Decoration8 class="line8" />
          <Decoration9 class="line9" />
          <Decoration10 class="line10" />
        </div>
      </div>
    </div>
    <Decoration1 class="line1" />
    <Decoration2 class="line2" />
    <Decoration3 class="line3" />
    <Decoration4 class="line4" />
    <Decoration5 class="line5" />
  </section>
</template>

<script>
import Decoration1 from "./icon_components/Decoration1.vue";
import Decoration10 from "./icon_components/Decoration10.vue";
import Decoration2 from "./icon_components/Decoration2.vue";
import Decoration3 from "./icon_components/Decoration3.vue";
import Decoration4 from "./icon_components/Decoration4.vue";
import Decoration5 from "./icon_components/Decoration5.vue";
import Decoration6 from "./icon_components/Decoration6.vue";
import Decoration7 from "./icon_components/Decoration7.vue";
import Decoration8 from "./icon_components/Decoration8.vue";
import Decoration9 from "./icon_components/Decoration9.vue";

export default {
  name: "NuxtCityInfo",
  components: {
    Decoration1,
    Decoration2,
    Decoration3,
    Decoration4,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Decoration9,
    Decoration10,
  },
};
</script>

<style>
.info {
  background: #f9f7f3;
  padding-bottom: 140px;
  padding-top: 60px;
  position: relative;
}
.info-content__img {
  z-index: 5;
  position: relative;
}
.info-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  position: relative;
}
.info-text__h1 {
  font-weight: 700;
  font-size: 55.7734px;
  line-height: 156.9%;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #5c5754;
  z-index: 10;
}
.info-content__container {
  position: relative;
  height: fit-content;
  width: fit-content;
}
.info-text__p {
  font-weight: 700;
  font-size: 14px;
  line-height: 180%;
  color: #ab9995;
}
.line1 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
.line2 {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
}
.line3 {
  position: absolute;
  left: 30%;
  bottom: 0;
  z-index: 0;
}
.line4 {
  position: absolute;
  top: -35%;
  right: 0;
  z-index: 0;
}
.line5 {
  position: absolute;
  bottom: 0;
  right: 10%;
  z-index: 0;
}
.line6 {
  position: absolute;
  top: 10%;
  right: -15%;
  z-index: 0;
}
.line7 {
  position: absolute;
  top: -2%;
  left: 25%;
  z-index: 6;
}
.line8 {
  position: absolute;
  top: -5%;
  left: 10%;
  z-index: 6;
}
.line9 {
  position: absolute;
  top: 50%;
  left: -5%;
  z-index: 6;
}
.line10 {
  position: absolute;
  top: 47%;
  left: 5%;
  z-index: 6;
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .info-content {
    flex-direction: column-reverse;
  }
  .info-content__img {
    width: 100%;
  }
  .info {
    padding-bottom: 20px;
  }
  .line1 {
    display: none;
  }
  .line2 {
    display: none;
  }
  .line3 {
    display: none;
  }
  .line4 {
    display: none;
  }
  .line5 {
    display: none;
  }
  .line6 {
    display: none;
  }
  .line7 {
    display: none;
  }
  .line8 {
    display: none;
  }
  .line9 {
    display: none;
  }
  .line10 {
    display: none;
  }
}
</style>
