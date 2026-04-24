<script>
export default {
  props: {
    totalAmount: {
      type: Number,
      required: true,
    },
  },
}
</script>

<template>
  <h1>Statistics</h1>
  <p>Total amount: {{ totalAmount }}</p>
</template>
