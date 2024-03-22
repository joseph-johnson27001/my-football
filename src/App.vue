<template>
  <div id="app">
    <NavigationBar />
    <div class="background">
      <div class="content-container">
        <!-- This is where matched components will be rendered -->
        <div v-if="isLoading" class="animation-container">
          <LoadingAnimation />
        </div>
        <router-view v-else />
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
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat";
}

.background {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  min-height: 94vh;
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
</style>
