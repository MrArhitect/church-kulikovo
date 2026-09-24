<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import DecoratorPromoIcon from "../icons/DecoratorPromoIcon.vue";
import ButtonUI from "../ui-kit/ButtonUI.vue";
import LinkUI from "../ui-kit/LinkUI.vue";
import BurgerIcon from "../icons/BurgerIcon.vue";

// -- Функционал плавного перехода к блоку через JS- --
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// -- Функционал эффекта парралакса на фоне --
const bgRef = ref<HTMLElement | null>(null);

// Максимальный сдвиг экрана (px)
const MAX_SHIFT = 20;

// Коэффициент сглаживания, меньше = плавнее
const EASE = 0.05;

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

// -- Функционал бургер-меню --
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

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
                <a href="/">
                  <img
                    class="logo"
                    src="/src/assets/images/logo_white_full.svg"
                    alt="логотип, приход вознесенского храма село куликово"
                  />
                </a>
              </div>
              <div class="right">
                <button
                  class="burger_menu_btn flex mobile_show"
                  :class="{ 'is-open': isMenuOpen }"
                  @click="toggleMenu"
                  aria-label="Открыть меню"
                  :aria-expanded="isMenuOpen"
                >
                  <BurgerIcon :size="36"></BurgerIcon>
                </button>
              </div>
            </div>
            <div class="bottom flex">
              <div class="left">
                <nav class="nav">
                  <ul class="nav__inner t-14 flex">
                    <a href="/" class="nav__link">
                      <li class="nav__item">Главная</li>
                    </a>
                    <a href="#history_section" class="nav__link">
                      <li class="nav__item">История храма</li>
                    </a>
                    <a href="#repair_section" class="nav__link">
                      <li class="nav__item">Капитальный ремонт</li>
                    </a>
                    <a href="#donate_section" class="nav__link">
                      <li class="nav__item">Пожертвование</li>
                    </a>
                    <a href="/doc" class="nav__link">
                      <li class="nav__item">Документы</li>
                    </a>
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
                <LinkUI class="mobile_down" :href="'/doc'" :type="'light'"
                  >Публичная оферта</LinkUI
                >
              </div>
              <ButtonUI @click="scrollTo('history_section')"
                >Узнать подробнее</ButtonUI
              >
              <LinkUI class="mobile_show" :href="'/doc'" :type="'light'"
                >Публичная оферта</LinkUI
              >
            </div>
          </div>
          <!-- Заглушка -->
          <div></div>
        </div>
        <DecoratorPromoIcon></DecoratorPromoIcon>
      </div>
    </div>
    <div
      class="mobile_menu"
      :class="{ 'is-open': isMenuOpen }"
      role="dialog"
      aria-modal="true"
    >
      <nav class="mobile_menu__nav">
        <a href="/" class="mobile_menu__link" @click="closeMenu">Главная</a>
        <a href="#history_section" class="mobile_menu__link" @click="closeMenu"
          >История храма</a
        >
        <a href="#repair_section" class="mobile_menu__link" @click="closeMenu"
          >Капитальный ремонт</a
        >
        <a href="#donate_section" class="mobile_menu__link" @click="closeMenu"
          >Пожертвование</a
        >
        <a href="/doc" class="mobile_menu__link" @click="closeMenu"
          >Документы</a
        >
      </nav>
    </div>

    <!-- Оверлей (затемнение фона) -->
    <div
      class="mobile_menu__overlay"
      :class="{ 'is-open': isMenuOpen }"
      @click="closeMenu"
    ></div>
  </section>
</template>

<style scoped lang="scss">
#promo_section {
  color: $white_color;
  position: relative;
  height: 100svh;
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

    @media (max-width: 760px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  h1.head {
    font-family: "Rubik";
    font-weight: 800;
    margin-bottom: 24px;

    @media (max-width: 760px) {
      font-size: 3.2rem;
      text-align: center;
    }
  }

  p.description {
    max-width: 680px;
    opacity: 0.85;
    margin-bottom: 16px;

    @media (max-width: 760px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  p.slogan {
    font-weight: 700;
    margin-bottom: 36px;

    @media (max-width: 760px) {
      font-weight: 500;
      text-align: center;
    }
  }

  .buttons {
    gap: 12px;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    .target_btn {
      flex-direction: column;
      gap: 12px;
      align-items: center;

      @media (max-width: 760px) {
        align-items: normal;
      }
    }
  }
}

#header {
  flex-direction: column;
  padding-top: 32px;

  @media (max-width: 760px) {
    .top {
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      height: 48px;
    }
  }

  .nav {
    margin-top: 32px;

    @media (max-width: 760px) {
      display: none;
    }

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

.burger_menu_btn {
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }
}

.mobile_menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $brown_color;
  padding: 32px 24px 12px;
  transform: translateY(-100%);
  transition: transform 0.45s cubic-bezier(0.25, 1, 0.35, 1);
  will-change: transform;

  &.is-open {
    transform: translateY(0);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__link {
    color: $white_color;
    font-size: 1.6rem;
    padding: 24px 0;
    border-bottom: 1px solid rgba($white_color, 0.15);

    &:hover {
      color: $accent_color;
    }
  }

  &__overlay {
    position: fixed;
    inset: 0;
    background: $mask;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease-out,
      visibility 0.3s ease-out;
    z-index: 99;

    &.is-open {
      opacity: 1;
      visibility: visible;
    }
  }
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
