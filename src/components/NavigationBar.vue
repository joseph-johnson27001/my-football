<template>
  <nav class="navigation-bar">
    <div class="navigation-container">
      <router-link
        to="/"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
      >
        <img
          src="@/assets/football.png"
          alt="Home"
          width="38"
          height="38"
          class="icon"
        />
      </router-link>
      <router-link
        to="/news"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >News</router-link
      >
      <router-link
        to="/teams"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >Teams</router-link
      >

      <router-link
        to="/fixtures"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >Fixtures</router-link
      >
      <router-link
        to="/results"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >Results</router-link
      >
      <router-link
        to="/videos"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >Videos</router-link
      >
      <router-link
        to="/table"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam()"
        >Table</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    resetTeam() {
      this.$store.state.selectedTeam = null;
    },
  },
};
</script>

<style scoped>
.navigation-bar {
  background-color: #1f3f7f;
  color: #fff;
  padding: 10px 0px 8px;
}

.navigation-container {
  min-height: 45px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.1s;
  cursor: pointer;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

.nav-link:hover {
  color: gold;
}
</style>
