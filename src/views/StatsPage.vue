<template>
  <div>
    <div class="heading-container">
      <h2 v-if="teamName">{{ teamName }} Statistics</h2>
    </div>
    <div class="player-list">
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
  data() {
    return {
      playerData: {},
    };
  },
  computed: {
    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },

    playerList() {
      return [
        {
          name: "Aaron Ramsdale (G)",
          gamesPlayed: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "David Raya (G)",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Karl Hein (G)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Hubert Graczyk (G)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "James Hillson (G)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "William Saliba (D)",
          gamesPlayed: 20,
          goals: 1,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Ben White (D)",
          gamesPlayed: 19,
          goals: 1,
          assists: 2,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Gabriel Magalhaes (D)",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Cedric Soares (D)",
          gamesPlayed: 17,
          goals: 0,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Jurrien Timber (D)",
          gamesPlayed: 16,
          goals: 1,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Jakub Kiwior (D)",
          gamesPlayed: 19,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Takehiro Tomiyasu (D)",
          gamesPlayed: 20,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Oleksandr Zinchenko (D)",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Taylor Foran (D)",
          gamesPlayed: 14,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Reuell Walters (D)",
          gamesPlayed: 11,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Ayden Heaven (D)",
          gamesPlayed: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Thomas Partey (M)",
          gamesPlayed: 20,
          goals: 3,
          assists: 2,
          yellowCards: 5,
          redCards: 0,
        },
        {
          name: "Martin Odegaard (M)",
          gamesPlayed: 19,
          goals: 2,
          assists: 3,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Emile Smith Rowe (M)",
          gamesPlayed: 20,
          goals: 1,
          assists: 4,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Jorginho (M)",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 4,
          redCards: 0,
        },
        {
          name: "Fabio Vieira (M)",
          gamesPlayed: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Mohamed Elneny (M)",
          gamesPlayed: 16,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Miguel Azeez (M)",
          gamesPlayed: 8,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Mauro Bandeira (M)",
          gamesPlayed: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Declan Rice (M)",
          gamesPlayed: 18,
          goals: 1,
          assists: 1,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Amario Cozier-Duberry (M)",
          gamesPlayed: 6,
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Myles Lewis-Skelly (M)",
          gamesPlayed: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Ethan Nwaneri (M)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Salah-Eddine Oulad M'hand (M)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "James Sweet (M)",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Bukayo Saka (F)",
          gamesPlayed: 20,
          goals: 4,
          assists: 3,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Gabriel Jesus (F)",
          gamesPlayed: 19,
          goals: 6,
          assists: 2,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Gabriel Martinelli (F)",
          gamesPlayed: 18,
          goals: 3,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Eddie Nketiah (F)",
          gamesPlayed: 17,
          goals: 2,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Leandro Trossard (F)",
          gamesPlayed: 16,
          goals: 3,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Reiss Nelson (F)",
          gamesPlayed: 12,
          goals: 1,
          assists: 3,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Kai Havertz (F)",
          gamesPlayed: 10,
          goals: 2,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
      ];
    },
  },
};
</script>

<style scoped>
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
