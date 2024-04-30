<template>
  <div>
    <div class="heading-container">
      <h2>{{ teamName }} Squad</h2>
    </div>
    <div class="players-section">
      <h2>Goalkeepers</h2>
      <div
        v-for="player in goalkeepers"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <div class="player-number">{{ player.number }}</div>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <div class="players-section">
      <h2>Defenders</h2>
      <div
        v-for="player in defenders"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <div class="player-number">{{ player.number }}</div>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <div class="players-section">
      <h2>Midfielders</h2>
      <div
        v-for="player in midfielders"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <div class="player-number">{{ player.number }}</div>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <div class="players-section">
      <h2>Attackers</h2>
      <div
        v-for="player in attackers"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <div class="player-number">{{ player.number }}</div>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      squad: [
        { id: 1, number: 1, name: "Player 1", position: "Goalkeeper" },
        { id: 2, number: 2, name: "Player 2", position: "Defender" },
        { id: 3, number: 3, name: "Player 3", position: "Midfielder" },
        { id: 4, number: 4, name: "Player 4", position: "Attacker" },
        // Add more players as needed
      ],
    };
  },
  computed: {
    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },
    goalkeepers() {
      return this.squad.filter((player) => player.position === "Goalkeeper");
    },
    defenders() {
      return this.squad.filter((player) => player.position === "Defender");
    },
    midfielders() {
      return this.squad.filter((player) => player.position === "Midfielder");
    },
    attackers() {
      return this.squad.filter((player) => player.position === "Attacker");
    },
  },
  methods: {
    handlePlayerClick(player) {
      // Handle click event for player card
      console.log("Clicked player:", player);
    },
  },
};
</script>

<style scoped>
.players-section {
  margin-bottom: 20px;
}

.players-section h2 {
  margin-bottom: 10px;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.player-item {
  background-color: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 500;
  padding: 20px 0;
}

.player-item:hover {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.player-number {
  font-size: 24px;
  font-weight: bold;
}

.player-name {
  margin-top: 10px;
}
</style>
