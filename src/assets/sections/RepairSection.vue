<script setup lang="ts">
import DecoratorPromoIcon from "../icons/DecoratorPromoIcon.vue";
</script>

<template>
  <section id="repair_section">
    <div class="container">
      <div class="inner">
        <h2 class="head">Капитальный ремонт</h2>
        <div class="first_line">
          <div class="first_line__inner flex">
            <div class="left">
              <h3 class="head">Текущее состояние храма</h3>
              <div class="paragraph">
                <p class="ab_text">
                  Здание Вознесенского храма находится в состоянии, требующем
                  неотложного вмешательства. Обследование, проведённое 22 ноября
                  2004 года, зафиксировало аварийное состояние: кровля над всем
                  зданием отсутствовала, оконные и дверные заполнения были
                  утрачены, полы отсутствовали.
                </p>
                <p class="ab_text">
                  По всему периметру кирпичных стен — многочисленные трещины, в
                  том числе сквозные. Из-за хранения удобрений стены с
                  внутренней стороны оставались мокрыми, а штукатурка
                  отслаивалась.
                </p>
                <p class="ab_text">
                  Заключение комиссии было однозначным: необходимо капитальное
                  восстановление кирпичных стен, стропильной системы, сводов,
                  оконных и дверных заполнений, полов и отмосток.
                </p>
              </div>
            </div>
            <div class="right flex">
              <img
                class="image"
                src="/src/assets/images/repair_group_1.jpg"
                alt="фото храма, разрушения"
              />
              <img
                class="image"
                src="/src/assets/images/repair_group_2.jpg"
                alt="фото храма, разрушения"
              />
            </div>
          </div>
        </div>
        <div class="second_line">
          <div class="second_line__inner flex">
            <div class="left flex">
              <img
                class="image"
                src="/src/assets/images/repair_group_3.jpg"
                alt="фото храма, разрушения"
              />
              <img
                class="image"
                src="/src/assets/images/repair_group_4.jpg"
                alt="фото храма, разрушения"
              />
            </div>
            <div class="right">
              <h3 class="head">Текущее состояние храма</h3>
              <div class="paragraph">
                <p class="ab_text">
                  Здание Вознесенского храма находится в состоянии, требующем
                  неотложного вмешательства. Обследование, проведённое 22 ноября
                  2004 года, зафиксировало аварийное состояние: кровля над всем
                  зданием отсутствовала, оконные и дверные заполнения были
                  утрачены, полы отсутствовали.
                </p>
                <p class="ab_text">
                  По всему периметру кирпичных стен — многочисленные трещины, в
                  том числе сквозные. Из-за хранения удобрений стены с
                  внутренней стороны оставались мокрыми, а штукатурка
                  отслаивалась.
                </p>
                <p class="ab_text">
                  Заключение комиссии было однозначным: необходимо капитальное
                  восстановление кирпичных стен, стропильной системы, сводов,
                  оконных и дверных заполнений, полов и отмосток.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DecoratorPromoIcon></DecoratorPromoIcon>
    </div>
  </section>
</template>

<style scoped lang="scss">
#repair_section {
  color: $background_color;
  position: relative;
  background-color: $brown_color;
  padding: 148px 0px;
}

h2.head {
  text-align: center;
  margin-bottom: 160px;
}

.first_line,
.second_line {
  &__inner {
    justify-content: space-between;
    margin-top: 120px;
    flex-wrap: wrap-reverse;
    gap: 48px;

    @media (max-width: 760px) {
      margin-top: 0px;
    }

    .right,
    .left {
      flex: 1 1 360px;
      gap: 25px;

      @media (max-width: 980px) {
        padding: 0px 30px;
      }

      @media (max-width: 760px) {
        gap: 10px;
        padding: 0px 10px;
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

.second_line__inner {
  flex-wrap: wrap;
  margin-top: 56px;
}
</style>
