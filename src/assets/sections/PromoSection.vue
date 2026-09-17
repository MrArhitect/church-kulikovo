<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import DecoratorPromoIcon from "../icons/DecoratorPromoIcon.vue";
import ButtonUI from "../ui-kit/ButtonUI.vue";
import LinkUI from "../ui-kit/LinkUI.vue";

const bgRef = ref<HTMLElement | null>(null);

// Максимальный сдвиг экрана (px)
const MAX_SHIFT = 20;

// Коэффициент сглаживания, меньше = плавнее
const EASE = 0.025;

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let rafId = 0;

const onMouseMove = (e: MouseEvent) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const nx = (e.clientX - cx) / cx;
  const ny = (e.clientY - cy) / cy;
  targetX = -nx * MAX_SHIFT;
  targetY = -ny * MAX_SHIFT;
};

const onMouseLeave = () => {
  targetX = 0;
  targetY = 0;
};

const tick = () => {
  currentX += (targetX - currentX) * EASE;
  currentY += (targetY - currentY) * EASE;
  if (bgRef.value) {
    bgRef.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.06)`;
  }
  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove, { passive: true });
  document.addEventListener("mouseleave", onMouseLeave);
  rafId = requestAnimationFrame(tick);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseleave", onMouseLeave);
  cancelAnimationFrame(rafId);
});
</script>

<template>
  <section id="promo_section">
    <div class="container">
      <div class="inner">
        <div class="bg" ref="bgRef"></div>
        <div class="content flex">
          <header id="header" class="flex">
            <div class="top flex">
              <div class="left">
                <a href="/"></a>
                <img
                  class="logo"
                  src="/src/assets/images/logo_white_full.svg"
                  alt="логотип, приход вознесенского храма село куликово"
                />
              </div>
            </div>
            <div class="bottom flex">
              <div class="left">
                <nav class="nav">
                  <ul class="nav__inner t-14 flex">
                    <a href="#" class="nav__link">
                      <li class="nav__item">Главная</li>
                    </a>
                    <a href="#" class="nav__link">
                      <li class="nav__item">История храма</li>
                    </a>
                    <a href="#" class="nav__link">
                      <li class="nav__item">Капитальный ремонт</li>
                    </a>
                    <a href="#" class="nav__link">
                      <li class="nav__item">Пожертвование</li>
                    </a>
                    <button href="#" class="btn_link nav__link">
                      <li class="nav__item">Правовая информация</li>
                    </button>
                  </ul>
                </nav>
              </div>
              <div class="right"></div>
            </div>
          </header>
          <div class="inner">
            <p class="status t-16">Объект культурного наследия</p>
            <h1 class="head t-48">
              Храм Вознесения<br />Господня<br />в с. Куликово
            </h1>
            <p class="description">
              Каменный храм, построенный в 1882 году на средства прихожан. Идёт
              капитальное восстановление.
            </p>
            <p class="slogan">Подарите храму новое будущее!</p>
            <div class="buttons flex">
              <div class="target_btn flex">
                <ButtonUI :type="'target'">Пожертвовавать сумму</ButtonUI>
                <LinkUI :href="'#'" :type="'light'">Публичная оферта</LinkUI>
              </div>
              <ButtonUI>Узнать подробнее</ButtonUI>
            </div>
          </div>
          <!-- Заглушка -->
          <div></div>
        </div>
        <DecoratorPromoIcon></DecoratorPromoIcon>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#promo_section {
  color: $white_color;
  position: relative;
  height: 100dvh;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  p.status {
    color: $accent_color;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  h1.head {
    font-family: "Rubik";
    font-weight: 800;
    margin-bottom: 24px;
  }

  p.description {
    max-width: 680px;
    opacity: 0.85;
    margin-bottom: 16px;
  }

  p.slogan {
    font-weight: 700;
    margin-bottom: 36px;
  }

  .buttons {
    gap: 12px;

    .target_btn {
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }
  }
}

#header {
  flex-direction: column;
  padding-top: 32px;

  .nav {
    margin-top: 32px;

    &__inner {
      gap: 25px;
    }

    &__link {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.logo {
  height: 64px;
}

.bg {
  position: absolute;
  inset: -20px;
  z-index: 0;
  background:
    linear-gradient($mask, $mask),
    url("/src/assets/images/promo_image.jpg") center / cover no-repeat;
  will-change: transform;
}
</style>
