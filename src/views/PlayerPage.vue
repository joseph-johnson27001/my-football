<template>
  <div>
    <div class="heading-container">
      <h2>{{ playerName }}</h2>
    </div>
    <div class="player-stats">
      <h3>Totals</h3>
      <table>
        <thead>
          <tr>
            <th>Pld</th>
            <th>G</th>
            <th>A</th>
            <th>YC</th>
            <th>RC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ totalStats.Pld }}</td>
            <td>{{ totalStats.G }}</td>
            <td>{{ totalStats.A }}</td>
            <td>{{ totalStats.YC }}</td>
            <td>{{ totalStats.RC }}</td>
          </tr>
        </tbody>
      </table>
      <table></table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      totalStats: {
        Pld: 0,
        G: 0,
        A: 0,
        YC: 0,
        RC: 0,
      },
    };
  },
  computed: {
    playerName() {
      return this.$store.state.playerName || "William Saliba";
    },
  },
  mounted() {
    this.$store.state.isLoading = true;

    setTimeout(() => {
      this.totalStats = {
        Pld: 20,
        G: 5,
        A: 3,
        YC: 2,
        RC: 0,
      };
      this.$store.state.isLoading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.player-stats {
  margin-top: 20px;
}

.player-stats table {
  width: 100%;
  border-collapse: collapse;
}

.player-stats th,
.player-stats td {
  padding: 8px;
  border: 1px solid #ccc;
}

.player-stats th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
