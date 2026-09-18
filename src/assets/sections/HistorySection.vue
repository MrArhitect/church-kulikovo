<script setup lang="ts">
import DecoratorHistoryIcon from "../icons/DecoratorHistoryIcon.vue";
</script>

<template>
  <section id="history_section">
    <div class="container">
      <div class="inner">
        <h2 class="head">История храма</h2>
        <div class="first_line">
          <div class="first_line__inner flex">
            <div class="left">
              <div class="qouke">
                Храм во имя Вознесения Господня в селе Куликово — это не только
                архитектурный памятник, но и живая страница истории Липецкой
                области.
              </div>
              <h3 class="head">Как всё начиналось</h3>
              <div class="paragraph">
                <p class="ab_text">
                  Каменный храм во имя Вознесения Господня был построен в 1882
                  году на средства прихожан. Тёплый храм стал центром духовной
                  жизни нескольких окрестных деревень.
                </p>
                <p class="ab_text">
                  В храме было пять престолов: главный — в честь Вознесения
                  Господня, придельные — во имя святителя Николая Чудотворца,
                  великомученика Димитрия Солунского, святителя Митрофана
                  Воронежского и Покрова Пресвятой Богородицы.
                </p>
                <p class="ab_text">
                  При храме действовали церковно-приходская и земская школы,
                  работала библиотека, велись метрические книги с 1780 года. В
                  приходе числились деревня Аксай и хутор Писарева.
                </p>
              </div>
            </div>
            <div class="right">
              <img
                class="image"
                src="/src/assets/images/history_image.png"
                alt="фото храма, старый документ"
              />
            </div>
          </div>
        </div>
        <div class="history_progress">
          <img
            class="image"
            src="/src/assets/images/history_progress.png"
            alt="график развития храма"
          />
        </div>
        <div class="second_line">
          <div class="second_line__inner flex">
            <div class="left flex">
              <img
                class="image"
                src="/src/assets/images/history_group_1.jpg"
                alt="фото храма, старый документ"
              />
              <img
                class="image"
                src="/src/assets/images/history_group_2.jpg"
                alt="фото храма, старый документ"
              />
            </div>
            <div class="right">
              <h3 class="head">Упадок храма</h3>
              <div class="paragraph">
                <p class="ab_text">
                  К началу XX века приход в Куликово был одним из значимых в
                  округе. По данным «Историко-статистического описания
                  Тамбовской епархии» 1911 года, в приходе числилось более 700
                  дворов, а штат храма составляли три священника, диакон и три
                  псаломщика. При храме хранилась местночтимая Иверская икона
                  Божией Матери, а метрические книги велись с 1780 года.
                </p>
                <p class="ab_text">
                  В XX веке храм пережил трудные времена. Богослужения
                  прекратились, здание пришло в запустение. Оно очень давно не
                  использовалось по назначению.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DecoratorHistoryIcon></DecoratorHistoryIcon>
    </div>
  </section>
</template>

<style scoped lang="scss">
#history_section {
  position: relative;
  padding: 96px 0px 188px;

  @media (max-width: 760px) {
    padding: 64px 0px 96px;
  }

  .first_line,
  .second_line {
    &__inner {
      flex-wrap: wrap-reverse;
      justify-content: space-between;
      gap: 48px;

      .left,
      .right {
        flex: 1 1 360px;
        min-width: 0px;
      }
    }
  }

  .second_line {
    &__inner {
      margin-top: 120px;
      flex-wrap: wrap;

      @media (max-width: 760px) {
        margin-top: 0px;
      }

      .left {
        gap: 25px;

        @media (max-width: 980px) {
          padding: 0px 50px;
        }

        @media (max-width: 760px) {
          gap: 10px;
          padding: 0px 30px;
        }

        .image {
          flex: 1 1 0;
          min-width: 0;
          width: 100%;
          height: fit-content;
          object-fit: cover;
          display: block;
          border-top-left-radius: 24px;
          border-bottom-right-radius: 24px;
          box-shadow: $shadow_img;
        }

        .image:nth-child(2) {
          position: relative;
          top: 30px;
        }
      }
    }
  }
}

h2.head {
  margin-bottom: 64px;

  @media (max-width: 760px) {
    text-align: center;
  }
}

.qouke {
  font-size: 15px;
  padding-left: 20px;
  border-left: 4px solid $red_color;
  margin-bottom: 32px;
}

.history_progress {
  margin-top: 80px;

  .image {
    @media (max-width: 980px) {
      display: none;
      margin-top: 40px;
    }
  }
}

h3.head {
  margin-bottom: 16px;
}
</style>
