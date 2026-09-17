<script setup lang="ts"></script>

<template>
  <div class="decorator" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1920 64"
      fill="none"
    >
      <path
        d="M572.683 0C348.3 3.47438e-05 0 46.5287 0 46.5287V64H1920V46.5287L1600.6 20.5787C1555.44 16.9095 1510.1 17.9093 1465.06 22.7911C1383.89 31.5877 1246.14 44.9478 1145.37 46.5287C921.011 50.0485 797.068 -3.47439e-05 572.683 0Z"
        fill="#F5EDD5"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.decorator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
