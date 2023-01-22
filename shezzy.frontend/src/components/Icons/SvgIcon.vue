<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :fill="props.fill"
    version="1.1"
    :width="props.width"
    :height="props.height"
    :viewBox="props.view_box"
    xml:space="preserve"
  >
    <g>
      <path :d="props.path_d" />
    </g>
  </svg>
</template>
<script lang="ts" setup>
const props = defineProps<{
  fill: string;
  width: string;
  height: string;
  view_box: string;
  path_d: string;
}>();
</script>
