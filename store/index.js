import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      lines: [
        {
          id: 1,
          img: "CityLineImage.png",
          text: "Роща Баума",
          position: "top: 30px; left: 30px;",
        },
        {
          id: 2,
          img: "CityLineImage2.png",
          text: "Дом Баума",
          position: "top: 50px; right: 25%;",
        },
        {
          id: 3,
          img: "CityLineImage3.png",
          text: "Академия наук",
          position: "top: 25%; left: 100px;",
        },
        {
          id: 4,
          img: "CityLineImage4.png",
          text: "Памятник Г.К. Бельгеру",
          position: "top: 30%; right: 10%;",
        },
        {
          id: 5,
          img: "CityLineImage5.png",
          text: "Немецкий Дом",
          position: "top: 45%; right: 40%;",
        },
        {
          id: 6,
          img: "CityLineImage6.png",
          text: "Мемориальная доска Э.Ф. Айриху.",
          position: "top: 55%; left: 60px;",
        },
        {
          id: 7,
          img: "CityLineImage7.png",
          text: "Стадион «Динамо»",
          position: "top: 70%; right: 10%;",
        },
        {
          id: 8,
          img: "CityLineImage8.png",
          text: "Казахстанско-Немецкий университет",
          position: "top: 85%; left: 25%;",
        },
        {
          id: 9,
          img: "CityLineImage9.png",
          text: "Музеи",
          position: "top: 93%; right: 10%;",
        },
      ],
    },
  });

export default store;
