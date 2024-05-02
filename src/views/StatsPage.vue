<template>
  <div>
    <div class="heading-container">
      <h2 v-if="teamName">{{ teamName }} Statistics</h2>
    </div>
    <div class="team-stats">
      <h3>Top Performers</h3>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in topPerformers" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.goals }}</td>
            <td>{{ player.assists }}</td>
            <td>{{ player.yellowCards }}</td>
            <td>{{ player.redCards }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="player-list">
      <h3>Player List</h3>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in playerList" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.gamesPlayed }}</td>
            <td>{{ player.goals }}</td>
            <td>{{ player.assists }}</td>
            <td>{{ player.yellowCards }}</td>
            <td>{{ player.redCards }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },
    topPerformers() {
      return this.$store.state.topPerformers || [];
    },
    playerList() {
      return this.$store.state.playerList || [];
    },
  },
};
</script>

<style scoped>
.team-stats,
.player-list {
  margin-top: 20px;
}

.team-stats table,
.player-list table {
  width: 100%;
  border-collapse: collapse;
}

.team-stats th,
.team-stats td,
.player-list th,
.player-list td {
  border: 1px solid #ccc;
  text-align: center;
  padding: 8px;
}

.team-stats th,
.player-list th {
  background-color: #1f3f7f;
  color: white;
}

.team-stats tr:hover,
.player-list tr:hover {
  background-color: #f2f2f2;
}
</style>
