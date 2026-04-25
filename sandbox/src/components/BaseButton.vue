<script lang="ts">
export default {
  props: {
    text: String,
    icon: String,
  },
}
</script>

<template>
  <button>
    <slot />
  </button>
</template>
