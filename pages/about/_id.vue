<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about-info">
          <div class="about-info__left">
            <h1 class="about-info__head">{{ line.text }}</h1>
          </div>
          <div class="about-info__right">
            <img
              :src="require('~/static/images/' + line.img)"
              alt="asdasd"
              class="city-one__img"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NuxtAboutPage",
  data() {
    return {
      line: this.$store.state.lines[this.$route.params.id - 1],
    };
  },
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
.about {
  padding: 20px;
}
.about-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.about-info__head {
  font-weight: 700;
  font-size: 46px;
  line-height: 53px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #5c5754;
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .about-info {
    flex-direction: column;
  }
}
</style>
