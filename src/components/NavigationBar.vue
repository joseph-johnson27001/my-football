<template>
  <nav class="navigation-bar">
    <div class="navigation-container">
      <!-- Home Icon -->
      <router-link to="/" class="nav-link" active-class="active-link">
        <img
          src="@/assets/football-icon.png"
          alt="Home"
          width="38"
          height="38"
        />
      </router-link>

      <!-- Other Navigation Links -->
      <router-link to="/table" class="nav-link" active-class="active-link"
        >Table</router-link
      >
      <router-link to="/fixtures" class="nav-link" active-class="active-link"
        >Fixtures</router-link
      >
      <router-link to="/results" class="nav-link" active-class="active-link"
        >Results</router-link
      >
      <router-link to="/teams" class="nav-link" active-class="active-link"
        >Teams</router-link
      >
      <router-link to="/news" class="nav-link" active-class="active-link"
        >News</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  background-color: #228b22;
  color: #fff;
  padding: 10px 0px;
}

.navigation-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.1s;
  cursor: pointer;
  font-size: 1.1rem;
}

.nav-link:hover {
  color: lightgrey;
}
</style>
