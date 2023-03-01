<template>
  <footer class="footer">
    <div class="flex">
      <svg
        width="536"
        height="6"
        viewBox="0 0 536 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.394531 2.59743C174.05 5.59121 349.901 2.93256 534.15 2.4209"
          stroke="#DC0000"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
      <svg
        width="1377"
        height="10"
        viewBox="0 0 1377 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.50879 2.02441C333.776 10.7806 665.942 9.91816 1377 2.65011"
          stroke="#F9CD02"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="9 9"
        />
      </svg>
    </div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <Logo :logo="logo" />
        </div>
        <div class="footer-right">
          <div class="right-btns">
            <ul class="right-btns__list">
              <li>
                <button class="right-btn">Алматы</button>
              </li>
              <li>
                <button class="right-btn">Астана</button>
              </li>
              <li>
                <button class="right-btn">Павлодар</button>
              </li>
            </ul>
            <ul class="right-btns__list">
              <li>
                <button class="right-btn">Петропавловск</button>
              </li>
              <li>
                <button class="right-btn">Семей</button>
              </li>
              <li>
                <button class="right-btn">Караганда</button>
              </li>
            </ul>
            <ul class="right-btns__list">
              <li>
                <button class="right-btn">Тараз</button>
              </li>
              <li>
                <button class="right-btn">Усть-Каменогорск</button>
              </li>
              <li>
                <button class="right-btn">Актобе</button>
              </li>
            </ul>
          </div>
          <div class="footer-info">
            <button class="right-btn">О нас</button>
            <button class="right-btn__mini">Все права защищены © 2022</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./icon_components/Logo.vue";
export default {
  components: { Logo },
  name: "NuxtFooter",
  data() {
    return {
      logo: { width: "172", height: "152" },
    };
  },
};
</script>

<style>
.footer {
  padding-bottom: 30px;
}
.flex {
  display: flex;
  column-gap: 5px;
}
.footer-content {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-right {
  max-width: 50%;
}
li {
  list-style-type: none;
}
.right-btn {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #5c5754;
}
.right-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 50px;
}
.right-btns__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.footer-info {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-btn__mini {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5c5754;
}

@media screen and (min-width: 375px) and (max-width: 640px) {
  .footer-content {
    flex-direction: column;
    column-gap: 0px;
    align-items: start;
    justify-content: start;
  }
  .footer-right {
    max-width: 100%;
  }
  .right-btns {
    flex-wrap: wrap;
    row-gap: 10px;
  }
  .footer-info {
    width: 100%;
  }
}
</style>
