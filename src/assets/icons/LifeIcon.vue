<script setup lang="ts">
interface Props {
  size?: number;
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33266 4C5.65135 4 2.66602 6.95469 2.66602 10.6C2.66602 13.5427 3.83268 20.5267 15.3167 27.5867C15.5227 27.7111 15.7587 27.7769 15.9993 27.7769C16.24 27.7769 16.476 27.7111 16.682 27.5867C28.1673 20.5267 29.3327 13.5427 29.3327 10.6C29.3327 6.95469 26.3473 4 22.666 4C18.9847 4 15.9993 8 15.9993 8C15.9993 8 13.014 4 9.33266 4Z"
        stroke="#5C3D1E"
        stroke-width="2.85714"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
