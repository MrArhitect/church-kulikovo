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
                alt="фото храма, ремонт кровли"
              />
            </div>
            <div class="right">
              <h3 class="head">Процесс восстановления</h3>
              <div class="paragraph">
                <p class="ab_text">
                  Данный храм является объектом культурного наследия. Работы
                  ведутся с сохранением исторического облика по согласованному
                  проекту.
                </p>
                <p class="ab_text">
                  4 июля 2019 года здание было передано в собственность Прихода
                  Вознесенского храма с. Куликово, что дало юридическую
                  возможность вести восстановительные работы.
                </p>
                <h4 class="head">Перечень работ</h4>
                <ul class="list">
                  <li class="item">
                    Восстановление кирпичных стен, в том числе заделка сквозных
                    трещин
                  </li>
                  <li class="item">
                    Восстановление стропильной системы и кровли
                  </li>
                  <li class="item">Восстановление сводов</li>
                  <li class="item">Замена оконных и дверных заполнений</li>
                  <li class="item">Устройство полов</li>
                  <li class="item">
                    Устройство отмосток и благоустройство территории
                  </li>
                </ul>
                <p class="ab_text">
                  Собранные средства направляются исключительно на эти работы.
                  Пожертвования носят целевой характер.
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

  @media (max-width: 780px) {
    padding-top: 96px;
  }
}

h2.head {
  text-align: center;
  margin-bottom: 160px;

  @media (max-width: 780px) {
    margin-bottom: 80px;
  }
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

.list {
  margin-bottom: 20px;

  .item {
    opacity: 0.8;
    display: flex;
    gap: 12px;
    margin-bottom: 8px;
    align-items: flex-start;

    &::before {
      content: "";
      flex-shrink: 0;
      width: 6px;
      height: 6px;
      margin-top: 0.45em; // визуальное выравнивание по первой строке
      background-color: $red_color;
      border-radius: 50%;
    }
  }
}

.second_line__inner {
  flex-wrap: wrap;
  margin-top: 56px;
}
</style>
