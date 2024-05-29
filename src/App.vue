<template>
  <div id="app">
    <NavigationBar />
    <NotificationWindow />
    <WarningAlert />
    <div class="background">
      <div class="content-container">
        <div v-show="isLoading" class="animation-container">
          <LoadingAnimation />
        </div>
        <router-view v-show="!isLoading" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavigationBar from "./components/NavigationBar.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";
import NotificationWindow from "./components/NotificationWindow.vue";
import WarningAlert from "./components/WarningAlert.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    LoadingAnimation,
    NotificationWindow,
    WarningAlert,
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },
};
</script>

<style>
#app {
  font-family: "Montserrat";
}

body {
  margin: 0px;
}

h2 {
  font-family: "Bebas Neue", sans-serif;
  color: #1f3f7f;
  font-weight: 100 !important;
  margin-bottom: 15px;
}

h3 {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500 !important;
}

p {
  font-size: 0.9rem;
  line-height: 1.4rem;
}

.background {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.content-container {
  background-color: white;
  border: 1px solid #ccc;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 5px 0px 5px;
}

.animation-container {
  height: 50vh;
  display: flex;
  place-items: center;
  margin: auto;
  justify-content: center;
}

.heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

@media screen and (max-width: 430px) {
  .content-container {
    margin-top: 0px;
    border: none;
    margin: 0px;
  }
}

@media screen and (max-width: 546px) {
  .heading-container {
    flex-direction: column;
    padding: 0px;
    width: 100%;
    align-items: start;
  }
  .team-selection {
    width: 100%;
  }
  #team-dropdown {
    width: 100%;
  }
}
</style>
