<template>
  <nav class="navigation-bar">
    <!-- Burger button for smaller viewports -->
    <div class="burger-button-container">
      <router-link
        to="/"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        <img
          src="@/assets/football.png"
          alt="Home"
          width="38"
          height="38"
          class="icon"
        />
      </router-link>
      <button class="burger-button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- Dropdown menu -->
      <div class="dropdown-menu" v-if="showMenu">
        <router-link
          to="/news"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          News
        </router-link>
        <router-link
          to="/teams"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          Teams
        </router-link>
        <router-link
          to="/fixtures"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          Fixtures
        </router-link>
        <router-link
          to="/results"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          Results
        </router-link>
        <router-link
          to="/videos"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          Videos
        </router-link>
        <router-link
          to="/table"
          class="nav-link"
          active-class="active-link"
          @click="resetTeam"
        >
          Table
        </router-link>
      </div>
    </div>

    <!-- Navigation links -->
    <div class="navigation-container" :class="{ 'show-menu': showMenu }">
      <router-link
        to="/"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
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
        @click="resetTeam"
      >
        News
      </router-link>
      <router-link
        to="/teams"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        Teams
      </router-link>
      <router-link
        to="/fixtures"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        Fixtures
      </router-link>
      <router-link
        to="/results"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        Results
      </router-link>
      <router-link
        to="/videos"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        Videos
      </router-link>
      <router-link
        to="/table"
        class="nav-link"
        active-class="active-link"
        @click="resetTeam"
      >
        Table
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    resetTeam() {
      this.$store.state.selectedTeam = null;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
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

.burger-button-container {
  display: none;
}

.burger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.burger-button span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  transition: all 0.3s ease;
}

.show-menu .burger-button span:first-child {
  transform: translateY(8px) rotate(45deg);
}

.show-menu .burger-button span:nth-child(2) {
  opacity: 0;
}

.show-menu .burger-button span:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

@media screen and (max-width: 768px) {
  .navigation-container {
    display: none;
  }

  .burger-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    padding-left: 10px;
  }

  .burger-button {
    display: block;
  }
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #1f3f7f;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}
.dropdown-menu .nav-link {
  color: #fff;
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.dropdown-menu .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
