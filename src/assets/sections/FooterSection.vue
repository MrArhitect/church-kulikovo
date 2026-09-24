<script setup lang="ts"></script>

<template>
  <footer id="footer_section">
    <div class="container">
      <div class="inner">
        <div class="copyrite">
          © 2026 Приход Вознесенского храма с. Куликово. Все права защищены.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
#footer_section {
  font-size: 1.4rem;
  color: $background_color;
  text-align: center;
  background-color: $brown_color;
  padding: 48px 0px 32px;

  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
}
</style>
