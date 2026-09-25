<script setup lang="ts">
import DecoratorPromoIcon from "@/assets/icons/DecoratorPromoIcon.vue";
import FooterSection from "@/assets/sections/FooterSection.vue";
import LinkUI from "@/assets/ui-kit/LinkUI.vue";

// Получаем конфиденциальную информацию
const fullName = import.meta.env.VITE_FULL_NAME;
const name = import.meta.env.VITE_NAME;
const inn = import.meta.env.VITE_INN;
const kpp = import.meta.env.VITE_KPP;
const urAdress = import.meta.env.VITE_UR_ADRESS;
const mailAdress = import.meta.env.VITE_MAIL_ADRESS;
const email = import.meta.env.VITE_EMAIL;
const numberB = import.meta.env.VITE_NUMBERB;
const nameB = import.meta.env.VITE_NAMEB;
const koresB = import.meta.env.VITE_KORESB;
const bik = import.meta.env.VITE_BIK;
</script>

<template>
  <section id="doc_section">
    <div class="title_block">
      <div class="container">
        <div class="inner">
          <h2 class="head">Документы</h2>
        </div>
      </div>
      <DecoratorPromoIcon></DecoratorPromoIcon>
    </div>
    <div class="content">
      <div class="container">
        <div class="inner">
          <div class="details card">
            <h3 class="head">Реквизиты организации</h3>
            <div class="details__inner flex">
              <div class="left">
                <div class="block">
                  <h5 class="head">Полное наименование</h5>
                  <p class="t-14">{{ fullName }}</p>
                </div>
                <div class="block">
                  <h5 class="head">Сокращённое наименование</h5>
                  <p class="t-14">
                    {{ name }}
                  </p>
                </div>
                <div class="block">
                  <h5 class="head">ИНН</h5>
                  <p class="t-14">{{ inn }}</p>
                </div>
                <div class="block">
                  <h5 class="head">КПП</h5>
                  <p class="t-14">{{ kpp }}</p>
                </div>
              </div>
              <div class="right">
                <div class="block">
                  <h5 class="head">Юридический адрес</h5>
                  <p class="t-14">
                    {{ urAdress }}
                  </p>
                </div>
                <div class="block">
                  <h5 class="head">Почтовый адрес</h5>
                  <p class="t-14">{{ mailAdress }}</p>
                </div>
                <div class="block">
                  <h5 class="head">Контактные данные</h5>
                  <p class="t-14">{{ email }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bank card">
            <h3 class="head">Реквизиты счёта</h3>
            <div class="bank__inner flex">
              <div class="left">
                <div class="block">
                  <h5 class="head">Номер счёта</h5>
                  <p class="t-14">{{ numberB }}</p>
                </div>
                <div class="block">
                  <h5 class="head">Наименование банка</h5>
                  <p class="t-14">{{ nameB }}</p>
                </div>
                <div class="block">
                  <h5 class="head">Назначение платежа</h5>
                  <p class="t-14">
                    Пожертвование на капитальный ремонт и восстановление
                    Вознесенского храма с. Куликово
                  </p>
                </div>
              </div>
              <div class="right">
                <div class="block">
                  <h5 class="head">Корреспондентский счёт</h5>
                  <p class="t-14">{{ koresB }}</p>
                </div>
                <div class="block">
                  <h5 class="head">БИК</h5>
                  <p class="t-14">{{ bik }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="oferta card">
            <h3 class="head">Публичная оферта</h3>
            <div class="oferta__inner">
              <p class="t-16">
                Настоящий документ является публичной офертой Местной
                православной религиозной организации «Приход Вознесенского храма
                с. Куликово» и определяет условия пожертвования на
                восстановление храма.
              </p>
              <LinkUI :href="'/ПУБЛИЧНАЯ ОФЕРТА О ПОЖЕРТВОВАНИИ.pdf'" download
                >Скачать документ (PDF)</LinkUI
              >
            </div>
          </div>
          <div class="politika card">
            <h3 class="head">Политика конфиденциальности</h3>
            <div class="politika__inner">
              <p class="t-16">
                Политика в отношении обработки персональных данных, собираемых
                при использовании сайта и в процессе принятия пожертвований.
              </p>
              <LinkUI :href="'/ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ.pdf'" download
                >Скачать документ (PDF)</LinkUI
              >
            </div>
          </div>
          <div class="undo flex">
            <LinkUI :href="'/'">Вернуться на главную</LinkUI>
          </div>
        </div>
      </div>
    </div>
    <FooterSection></FooterSection>
  </section>
</template>

<style scoped lang="scss">
#doc_section {
  min-height: 100lvh;
  display: flex;
  flex-direction: column;

  .undo {
    justify-content: center;
    margin: 48px 0px 64px;
  }

  .card {
    border-radius: 24px;
    padding: 40px;
    background-color: #f0e6d0;
    margin-bottom: 36px;

    @media (max-width: 760px) {
      padding: 20px;
    }

    p {
      margin-bottom: 12px;
    }
  }

  .details,
  .bank {
    &__inner {
      flex-direction: flex;
      flex-wrap: wrap;
      gap: 36px;

      @media (max-width: 500px) {
        gap: 12px;
      }

      .left,
      .right {
        flex: 1 1 160px;

        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }

  .title_block {
    text-align: center;
    color: $background_color;
    position: relative;
    padding: 36px 0px 80px;
    flex-shrink: 0;
    background-color: $brown-color;
  }

  .content {
    flex: 1 1 auto;
  }
}
</style>
