<template>
  <nav class="navigation-bar">
    <div class="navigation-container">
      <!-- Home Icon -->
      <router-link to="/" class="nav-link" active-class="active-link">
        <img
          src="@/assets/football.png"
          alt="Home"
          width="38"
          height="38"
          class="icon"
        />
      </router-link>

      <!-- Other Navigation Links -->
      <router-link to="/news" class="nav-link" active-class="active-link"
        >News</router-link
      >
      <router-link to="/teams" class="nav-link" active-class="active-link"
        >Teams</router-link
      >

      <router-link to="/fixtures" class="nav-link" active-class="active-link"
        >Fixtures</router-link
      >
      <router-link to="/results" class="nav-link" active-class="active-link"
        >Results</router-link
      >
      <router-link to="/table" class="nav-link" active-class="active-link"
        >Table</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  background-color: #1f3f7f;
  color: #fff;
  padding: 10px 0px 8px;
}

.navigation-container {
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
}

.active-link {
  color: gold;
}
</style>
