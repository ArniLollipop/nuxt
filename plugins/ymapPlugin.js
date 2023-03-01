import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey:
    "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
}; // настройки плагина

Vue.use(YmapPlugin, settings);
