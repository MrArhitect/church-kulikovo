<script setup lang="ts">
interface Props {
  type?: "target" | "default";
  width?: "max" | "default";
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  width: "default",
});
</script>

<template>
  <button :class="[props.type, props.width]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  color: $white_color;
  font-size: 1.6rem;
  height: 52px;
  padding: 0px 24px;
  border: 1.6px solid $white_color;
  border-radius: 12px;
  transition: transform 0.3s ease-out;

  &.target {
    background-color: $red_color;
    border: none;
  }

  &.max {
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
