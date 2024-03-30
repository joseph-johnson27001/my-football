<template>
  <div id="app">
    <NavigationBar />
    <div class="background">
      <div class="content-container">
        <!-- This is where matched components will be rendered -->
        <div v-show="isLoading" class="animation-container">
          <LoadingAnimation />
        </div>
        <router-view v-show="!isLoading" />
        <!-- Vue Router will render matched components here -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavigationBar from "./components/NavigationBar.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    LoadingAnimation,
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
  margin: 10px 0px 0px 0px;
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
</style>
