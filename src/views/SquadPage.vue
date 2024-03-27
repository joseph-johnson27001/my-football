<template>
  <div class="heading-container">
    <h2 v-if="teamName != null">{{ teamName }} Squad</h2>
    <h2 v-else>Latest Football Videos</h2>
  </div>
</template>

<script>
export default {
  data() {},
  computed: {
    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },
  },
};
</script>
