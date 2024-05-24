<template>
  <div class="notification">
    <div class="info-content">
      <h2>Welcome to Our Site</h2>
      <p>
        Please note that the site is currently under construction. As such,
        external links are disabled and all of the data provided is purely
        placeholder, dummy information.
      </p>
      <div class="button-container">
        <button @click="hideNotification">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideNotification() {
      this.$store.state.showNotification = false;
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
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.notification button {
  background-color: #fff;
  color: #1f3f7f;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #1f3f7f;
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
