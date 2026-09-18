<script setup lang="ts">
interface Props {
  size?: number;
  type?: "light" | "default";
}

const props = withDefaults(defineProps<Props>(), {
  size: 10,
  type: "default",
});
</script>

<template>
  <div class="svg_container">
    <svg
      :width="props.size"
      :height="props.size"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.625 4.375L8.75 1.25M6.66667 1.25H8.75V3.33333M8.75 5.83333V7.91667C8.75 8.13768 8.66217 8.34967 8.50592 8.50592C8.34967 8.66217 8.13768 8.75 7.91667 8.75H2.08333C1.86232 8.75 1.65036 8.66217 1.49407 8.50592C1.3378 8.34967 1.25 8.13768 1.25 7.91667V2.08333C1.25 1.86232 1.3378 1.65036 1.49407 1.49407C1.65036 1.3378 1.86232 1.25 2.08333 1.25H4.16667"
        :stroke="props.type == 'light' ? 'white' : '#a9523d'"
        stroke-width="0.833333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
