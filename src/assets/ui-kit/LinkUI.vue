<script setup lang="ts">
import LinkIcon from "../icons/LinkIcon.vue";

interface Props {
  href: string;
  type?: "light" | "default";
  download?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  download: false,
});
</script>

<template>
  <a
    :href="props.href"
    :class="[props.type, 'flex', 't-12']"
    :download="props.download ? '' : null"
  >
    <link-icon :type="props.type"></link-icon>
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
a {
  color: $red_color;
  align-items: center;
  gap: 5px;

  @media (max-width: 760px) {
    justify-content: center;
    font-size: 1.6rem;
  }

  &.light {
    color: $white_color;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
