<template>
  <div class="heading-container">
    <h2 v-if="playerName">{{ playerName }}</h2>
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
};
</script>
