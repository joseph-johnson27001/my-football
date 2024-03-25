<template>
  <div class="heading-container">
    <h2>{{ this.$store.state.selectedFixture }}</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.state.isLoading = true;
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 500);
  },
};
</script>
