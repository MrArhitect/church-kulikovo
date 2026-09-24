<script setup lang="ts">
import ChurchIcon from "../icons/ChurchIcon.vue";
import LifeIcon from "../icons/LifeIcon.vue";
import PeopleIcon from "../icons/PeopleIcon.vue";
import ButtonUI from "../ui-kit/ButtonUI.vue";
import LinkUI from "../ui-kit/LinkUI.vue";
</script>

<template>
  <section id="donate_section">
    <div class="container">
      <div class="inner flex">
        <div class="left">
          <h2 class="head">Пожертвование на ремонт храма</h2>
          <div class="paragraph">
            <p class="ab_text">
              Ваше пожертвование позволит сохранить исторический облик храма,
              произвести необходимые ремонтные работы и обеспечить его
              дальнейшую работу. Важна любая сумма.
            </p>
            <p class="ab_text">Благодарим за Вашу поддержку и неравнодушие!</p>
          </div>
          <ul class="list">
            <li class="item flex">
              <div class="left">
                <div class="icon_bg flex">
                  <ChurchIcon :size="32"></ChurchIcon>
                </div>
              </div>
              <div class="right t-18">Ремонт кровли, фасада и интерьера</div>
            </li>
            <li class="item flex">
              <div class="left">
                <div class="icon_bg flex">
                  <LifeIcon :size="32"></LifeIcon>
                </div>
              </div>
              <div class="right t-18">
                Сохранение культурного и духовного наследия
              </div>
            </li>
            <li class="item flex">
              <div class="left">
                <div class="icon_bg flex">
                  <PeopleIcon :size="32"></PeopleIcon>
                </div>
              </div>
              <div class="right t-18">Поддержка жизни храма и прихода</div>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="qr">
            <div class="qr__code">
              <!-- Место для QR-кода -->
              <span class="qr__placeholder">QR</span>
            </div>
            <p class="qr__hint t-16">
              Отсканируйте QR-код для перехода на страницу оплаты
            </p>
            <hr class="qr__line" />
            <ButtonUI :type="'target'" width="max">Пожертвовать сумму</ButtonUI>
            <LinkUI :href="'/doc'">Реквизиты счёта</LinkUI>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#donate_section {
  padding: 96px 0px;

  .inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 64px;

    & > .left {
      flex: 1 1 360px;
      min-width: 0;
    }
  }
}

h2.head {
  margin-bottom: 24px;
}

.paragraph {
  margin-bottom: 24px;
}

.item {
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  .right {
    @media (max-width: 760px) {
      font-size: 1.4rem;
    }
  }

  .icon_bg {
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    background-color: $yellow_color;
    border-radius: 12px;

    @media (max-width: 760px) {
      width: 48px;
      height: 48px;
    }
  }
}

.qr {
  max-width: 420px;
  padding: 32px;
  background-color: #f0e6d0;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &__code {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: $shadow_img;

    img,
    svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .qr__placeholder {
      font-size: 2.4rem;
      font-weight: 700;
      color: $brown_color;
      opacity: 0.3;
      letter-spacing: 0.1em;
    }
  }

  &__hint {
    margin: 0;
    text-align: center;
    color: $light_text_color;
    line-height: 140%;
  }

  &__line {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba($brown_color, 0.15);
    margin: 0;
  }
}
</style>
