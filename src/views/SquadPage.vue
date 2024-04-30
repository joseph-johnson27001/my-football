<template>
  <div>
    <div class="heading-container">
      <h2>{{ teamName }} Squad</h2>
    </div>
    <h3>Goalkeepers</h3>
    <div class="players-section">
      <div
        v-for="player in goalkeepers"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <h2 class="player-number">{{ player.number }}</h2>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <h3>Defenders</h3>
    <div class="players-section">
      <div
        v-for="player in defenders"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <h2 class="player-number">{{ player.number }}</h2>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <h3>Midfielders</h3>
    <div class="players-section">
      <div
        v-for="player in midfielders"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <h2 class="player-number">{{ player.number }}</h2>
        <div class="player-name">{{ player.name }}</div>
      </div>
    </div>
    <h3>Attackers</h3>
    <div class="players-section">
      <div
        v-for="player in attackers"
        :key="player.id"
        class="player-item"
        @click="handlePlayerClick(player)"
      >
        <h2 class="player-number">{{ player.number }}</h2>
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
        { id: 1, number: 1, name: "Aaron Ramsdale", position: "Goalkeeper" },
        { id: 2, number: 22, name: "David Raya", position: "Goalkeeper" },
        { id: 3, number: 31, name: "Karl Hein", position: "Goalkeeper" },
        { id: 4, number: 52, name: "Hubert Graczyk", position: "Goalkeeper" },
        { id: 5, number: 54, name: "James Hillson", position: "Goalkeeper" },
        { id: 6, number: 2, name: "William Saliba", position: "Defender" },
        { id: 7, number: 4, name: "Ben White", position: "Defender" },
        { id: 8, number: 6, name: "Gabriel Magalhaes", position: "Defender" },
        { id: 9, number: 12, name: "Cedric Soares", position: "Defender" },
        { id: 10, number: 12, name: "Jurrien Timber", position: "Defender" },
        { id: 11, number: 15, name: "Jakub Kiwior", position: "Defender" },
        { id: 12, number: 18, name: "Takehiro Tomiyasu", position: "Defender" },
        {
          id: 13,
          number: 35,
          name: "Oleksandr Zinchenko",
          position: "Defender",
        },
        { id: 14, number: 50, name: "Taylor Foran", position: "Defender" },
        { id: 15, number: 76, name: "Reuell Walters", position: "Defender" },
        { id: 16, number: 79, name: "Ayden Heaven", position: "Defender" },
        { id: 17, number: 5, name: "Thomas Partey", position: "Midfielder" },
        { id: 18, number: 8, name: "Martin Odegaard", position: "Midfielder" },
        {
          id: 19,
          number: 10,
          name: "Emile Smith Rowe",
          position: "Midfielder",
        },
        { id: 20, number: 20, name: "Jorginho", position: "Midfielder" },
        { id: 21, number: 21, name: "Fabio Vieira", position: "Midfielder" },
        { id: 22, number: 25, name: "Mohamed Elneny", position: "Midfielder" },
        { id: 23, number: 39, name: "Miguel Azeez", position: "Midfielder" },
        { id: 24, number: 40, name: "Mauro Bandeira", position: "Midfielder" },
        { id: 25, number: 41, name: "Declan Rice", position: "Midfielder" },
        {
          id: 26,
          number: 45,
          name: "Amario Cozier-Duberry",
          position: "Midfielder",
        },
        {
          id: 27,
          number: 59,
          name: "Myles Lewis-Skelly",
          position: "Midfielder",
        },
        { id: 28, number: 63, name: "Ethan Nwaneri", position: "Midfielder" },
        {
          id: 29,
          number: 65,
          name: "Salah-Eddine Oulad M'hand",
          position: "Midfielder",
        },
        { id: 30, number: 73, name: "James Sweet", position: "Midfielder" },
        { id: 31, number: 7, name: "Bukayo Saka", position: "Forward" },
        { id: 32, number: 9, name: "Gabriel Jesus", position: "Forward" },
        { id: 33, number: 11, name: "Gabriel Martinelli", position: "Forward" },
        { id: 34, number: 14, name: "Eddie Nketiah", position: "Forward" },
        { id: 35, number: 19, name: "Leandro Trossard", position: "Forward" },
        { id: 36, number: 24, name: "Reiss Nelson", position: "Forward" },
        { id: 37, number: 29, name: "Kai Havertz", position: "Forward" },
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
      return this.squad.filter((player) => player.position === "Forward");
    },
  },
  methods: {
    handlePlayerClick(player) {
      this.$store.state.playerName = player.name;
      this.$router.push("player");
    },
  },
};
</script>

<style scoped>
.players-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.players-section h3 {
  margin-bottom: 10px;
}

.player-item {
  background-color: #f8f8f8;
  padding-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 500;
}

.player-item:hover {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.player-number {
  font-size: 32px;
  font-weight: bold;
}
</style>
