<template>
  <div>
    <div class="notification">
      <p>
        This site is under construction. Some features may not work as expected.
      </p>
      <button @click="hideNotification">Close</button>
    </div>
    <!-- Your main content here -->
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
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
