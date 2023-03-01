<template>
  <div class="main">
    <Header />
    <CityInfo />
    <Story direction="flex-direction:row" :button="true" />
    <div class="container">
      <div class="city">
        <CityLine
          v-for="line in $store.state.lines"
          :key="line.id"
          :id="line.id"
          :img="line.img"
          :text="line.text"
          :style="line.position"
        />
        <svg
          width="795"
          height="1766"
          viewBox="0 0 795 1766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-line"
        >
          <path
            d="M1.87109 1.98132C42.8541 29.837 80.9559 64.9883 130.523 76.098C217.338 95.5567 312.74 95.8905 401.301 95.8905C418.867 95.8905 425.318 100.834 441.307 108.945C453.639 115.2 481.014 123.506 488.051 137.581C491.791 145.06 486.553 154.593 490.789 162.217C498.32 175.773 496.474 191.062 496.474 206.013C496.474 268.936 474.583 316.464 422.357 355.299C388.683 380.339 346.738 391.796 313.709 417.203C303.069 425.388 285.041 430.613 272.229 435.311C245.784 445.008 221.361 458.96 195.164 469.211C166.041 480.607 137.794 494.148 118.31 520.377C108.498 533.586 102.073 567.753 121.258 576.386C129.461 580.077 146.079 580.041 155.579 581.229C167.582 582.729 179.258 588.598 191.374 588.598C235.662 588.598 262.683 659.767 306.971 659.767C383.714 659.767 477.134 577.18 553.956 582.913C575.475 584.519 596.837 584.808 618.387 584.808C643.592 584.808 657.356 595.74 680.292 603.548C702.498 611.107 704.424 609.844 716.297 627.341C724.369 639.236 726.702 646.559 730.615 659.767C737.548 683.167 710.468 715.562 699.663 733.884C684.532 759.541 663.781 766.427 638.18 782.102C603.841 803.125 565.929 819.94 535.216 846.322C518.095 861.029 490.306 887.618 466.574 890.961C396.896 900.774 335.901 922.996 269.07 944.021C239.235 953.408 207.32 961.319 178.53 973.5C158.669 981.902 141.012 997.263 123.995 1009.93C105.786 1023.48 75.5602 1035.48 60.8276 1052.67C45.9187 1070.06 44.5706 1080.96 45.4568 1104.89C46.5901 1135.49 68.5379 1163.34 94.517 1177.95C114.976 1189.46 138.344 1217.24 160.843 1221.33C179.525 1224.72 196.798 1233.49 215.799 1236.49C294.724 1248.95 342.219 1362 422.357 1362C496.213 1362 601.722 1286.41 675.238 1293.76C697.666 1296 785.446 1302.91 792.098 1342.82C801.522 1399.36 748.781 1429.83 702.4 1449.78C619.138 1485.6 526.203 1491.97 439.833 1517.16C416.472 1523.98 387.89 1527.36 366.769 1539.9C336.418 1557.92 305.503 1575.47 275.387 1593.81C249.57 1609.52 216.009 1643.29 216.009 1674.24C216.009 1689.21 251.975 1696.12 261.911 1699.3C284.28 1706.45 308.274 1721.2 331.396 1725.41C361.257 1730.83 389.078 1749.68 417.725 1758.88C431.118 1763.19 452.243 1762.13 466.364 1763.31C496.969 1765.86 528.715 1763.52 559.431 1763.52C623.22 1763.52 687.044 1764.15 750.829 1763.52"
            stroke="#AB9995"
            stroke-width="3"
            stroke-linecap="round"
            stroke-dasharray="9 9"
          />
        </svg>
      </div>
    </div>
    <Story direction="flex-direction:row-reverse" :button="false" />
    <Footer />
  </div>
</template>
<script>
import CityInfo from "../components/CityInfo.vue";
import Header from "../components/Header.vue";
import Story from "../components/Story.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "IndexPage",
  components: { Header, CityInfo, Story, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  padding: 0;
  text-decoration: none;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
a {
  padding: 0;
  text-decoration: none;
  color: black;
  background-color: transparent;
  cursor: pointer;
}
.container {
  max-width: 1220px;
  margin: 0 auto;
  position: relative;
}
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 212px;
}
.relative {
  position: relative;
  overflow: hidden;
}
.bg-line {
  margin-left: 200px;
  margin-top: 70px;
}
.city {
  position: relative;
  margin-bottom: 300px;
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .container {
    padding: 0 10px;
  }
  .main {
    padding-top: 170px;
  }
  .city {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  .bg-line {
    display: none;
  }
}
</style>
