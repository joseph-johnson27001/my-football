<template>
  <div class="heading-container">
    <h2 v-if="playerName != null">{{ playerName }}</h2>
  </div>
</template>

<script>
export default {
  data() {},
  computed: {
    playerName() {
      return this.$store.state.playerName || "William Saliba";
    },
  },
  mounted() {
    this.$store.state.isLoading = true;
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 250);
  },
};
</script>
