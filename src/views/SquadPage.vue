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
        <div class="player-number">{{ player.number }}</div>
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
        <div class="player-number">{{ player.number }}</div>
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
        <div class="player-number">{{ player.number }}</div>
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
        {
          id: 1,
          number: 1,
          name: "Aaron Ramsdale (G)",
          position: "Goalkeeper",
        },
        { id: 2, number: 22, name: "David Raya (G)", position: "Goalkeeper" },
        { id: 3, number: 31, name: "Karl Hein (G)", position: "Goalkeeper" },
        {
          id: 4,
          number: 52,
          name: "Hubert Graczyk (G)",
          position: "Goalkeeper",
        },
        {
          id: 5,
          number: 54,
          name: "James Hillson (G)",
          position: "Goalkeeper",
        },
        { id: 6, number: 2, name: "William Saliba (D)", position: "Defender" },
        { id: 7, number: 4, name: "Ben White (D)", position: "Defender" },
        {
          id: 8,
          number: 6,
          name: "Gabriel Magalhaes (D)",
          position: "Defender",
        },
        { id: 9, number: 12, name: "Cedric Soares (D)", position: "Defender" },
        {
          id: 10,
          number: 12,
          name: "Jurrien Timber (D)",
          position: "Defender",
        },
        { id: 11, number: 15, name: "Jakub Kiwior (D)", position: "Defender" },
        {
          id: 12,
          number: 18,
          name: "Takehiro Tomiyasu (D)",
          position: "Defender",
        },
        {
          id: 13,
          number: 35,
          name: "Oleksandr Zinchenko (D)",
          position: "Defender",
        },
        { id: 14, number: 50, name: "Taylor Foran (D)", position: "Defender" },
        {
          id: 15,
          number: 76,
          name: "Reuell Walters (D)",
          position: "Defender",
        },
        { id: 16, number: 79, name: "Ayden Heaven (D)", position: "Defender" },
        {
          id: 17,
          number: 5,
          name: "Thomas Partey (M)",
          position: "Midfielder",
        },
        {
          id: 18,
          number: 8,
          name: "Martin Odegaard (M)",
          position: "Midfielder",
        },
        {
          id: 19,
          number: 10,
          name: "Emile Smith Rowe (M)",
          position: "Midfielder",
        },
        { id: 20, number: 20, name: "Jorginho (M)", position: "Midfielder" },
        {
          id: 21,
          number: 21,
          name: "Fabio Vieira (M)",
          position: "Midfielder",
        },
        {
          id: 22,
          number: 25,
          name: "Mohamed Elneny (M)",
          position: "Midfielder",
        },
        {
          id: 23,
          number: 39,
          name: "Miguel Azeez (M)",
          position: "Midfielder",
        },
        {
          id: 24,
          number: 40,
          name: "Mauro Bandeira (M)",
          position: "Midfielder",
        },
        { id: 25, number: 41, name: "Declan Rice (M)", position: "Midfielder" },
        {
          id: 26,
          number: 45,
          name: "Amario Cozier-Duberry (M)",
          position: "Midfielder",
        },
        {
          id: 27,
          number: 59,
          name: "Myles Lewis-Skelly (M)",
          position: "Midfielder",
        },
        {
          id: 28,
          number: 63,
          name: "Ethan Nwaneri (M)",
          position: "Midfielder",
        },
        {
          id: 29,
          number: 65,
          name: "Salah-Eddine Oulad M'hand (M)",
          position: "Midfielder",
        },
        { id: 30, number: 73, name: "James Sweet (M)", position: "Midfielder" },
        { id: 31, number: 7, name: "Bukayo Saka (F)", position: "Forward" },
        { id: 32, number: 9, name: "Gabriel Jesus (F)", position: "Forward" },
        {
          id: 33,
          number: 11,
          name: "Gabriel Martinelli (F)",
          position: "Forward",
        },
        { id: 34, number: 14, name: "Eddie Nketiah (F)", position: "Forward" },
        {
          id: 35,
          number: 19,
          name: "Leandro Trossard (F)",
          position: "Forward",
        },
        { id: 36, number: 24, name: "Reiss Nelson (F)", position: "Forward" },
        { id: 37, number: 29, name: "Kai Havertz (F)", position: "Forward" },
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
      console.log("Clicked player:", player);
    },
  },
};
</script>

<style scoped>
.players-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.players-section h3 {
  margin-bottom: 10px;
}

.player-item {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 500;
  padding: 20px 0px;
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
