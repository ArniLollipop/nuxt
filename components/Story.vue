<template>
  <section class="story">
    <div class="container">
      <h2 v-if="!button" class="story-text">текст с заголовком</h2>
      <div class="story-content" :style="direction">
        <img
          src="../static/images/StoryIMage.png"
          alt=""
          class="story-content__img"
        />

        <p class="story-content__text">
          Немецкая история Верного – Алма-Аты – Алматы начинается буквально с
          момента основания города в 1854 г. С середины 19 в. здесь в молодом
          городе Туркестанского края жили и работали не только чиновники
          немецкого происхождения, но и немецкие ученые и путешественники:
          ботаник-натуралист А.Шренк, путешественник, врач и исследователь
          растительного мира Туркестанского края Иоганн-Альберт Регель, садовод
          К.Штольц, лесоводы братья Баум и другие.

          <span class="mt-1">
            В советский период истории в нашем городе жили и работали немцы –
            представители творческой и научной интеллигенции, архитекторы,
            известные спортсмены, врачи и многие другие. Многие из них были
            депортированы в 1941 г. из различных мест проживания этнических
            немцев в СССР и расселены в разных областях Казахской ССР, а с
            ослаблением режима спецпоселения, когда появилась возможностью
            работать и учиться в столице Казахстана, переехали в Алма-Ату.</span
          >
          <span class="mt-1 font-600">
            Надеемся, что наша экскурсия поможет вам в осмыслении исторического
            прошлого своего народа и сохранении достойной памяти о нем!
          </span>
        </p>
      </div>
      <a
        v-if="button"
        href="../static/images/image 9.svg"
        class="story-btn"
        download="image"
      >
        Скачать маршрут: Увлекательный маршрут по городу
        <Pdf />
      </a>
    </div>
  </section>
</template>

<script>
import Pdf from "./icon_components/Pdf.vue";

export default {
  components: { Pdf },
  name: "NuxtStory",
  props: ["direction", "button"],
};
</script>

<style>
.story {
  margin: 160px 0;
}
.story-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 55px;
}
.story-content__text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 154%;
  color: #72767e;
}
.mt-1 {
  margin-top: 1rem;
  display: block;
}
.font-600 {
  font-weight: 600;
}
.story-btn {
  margin-top: 70px;
  display: flex;
  align-items: center;
  column-gap: 30px;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
  border: 3px dashed #ab9995;
  border-radius: 30px;
  font-size: 18px;
  color: #5c5754;
  font-weight: 700px;
}
.story-text {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  color: #5c5754;
  margin-bottom: 55px;
  text-transform: uppercase;
}
@media screen and (min-width: 375px) and (max-width: 640px) {
  .story {
    margin: 20px 0;
  }
  .story-content {
    column-gap: 0px;
    row-gap: 10px;
    flex-direction: column !important;
  }
  .story-content__img {
    width: 100%;
  }
  .story-btn {
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
  }
}
</style>
