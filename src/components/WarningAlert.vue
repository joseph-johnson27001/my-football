<template>
  <div v-if="this.$store.state.showWarning" class="notification">
    <div class="info-content">
      <h2>NOTICE</h2>
      <p>Please note that this site is still under construction.</p>
      <p>
        As such, external links are disabled and all of the data provided is
        purely placeholder, dummy information.
      </p>
      <div class="button-container">
        <button @click="hideNotification">CLOSE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},

  methods: {
    hideNotification() {
      this.$store.state.showWarning = false;
    },
  },
};
</script>

<style>
.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1f3f7f;
  color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 80%;
  max-height: 80%;
  overflow: auto;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.notification button {
  background-color: #1f3f7f;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #1f3f7f;
  transition: color 0.1s ease;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

.notification button:hover {
  color: gold;
}

.info-content {
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.info-content h2 {
  color: #1f3f7f;
}

.info-content p {
  color: #333;
}
</style>
