<template>
  <div>
    <div class="heading-container">
      <h2 v-if="teamName">{{ teamName }} Statistics</h2>
    </div>
    <div class="player-list">
      <table>
        <thead>
          <tr>
            <th class="player-name">Player</th>
            <th>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in playerList" :key="index">
            <td class="player-name">{{ player.name }}</td>
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
          name: "Aaron Ramsdale",
          gamesPlayed: 20,
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "David Raya",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Karl Hein",
          gamesPlayed: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Hubert Graczyk",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "James Hillson",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "William Saliba",
          gamesPlayed: 20,
          goals: 1,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Ben White",
          gamesPlayed: 19,
          goals: 1,
          assists: 2,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Gabriel Magalhaes",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Cedric Soares",
          gamesPlayed: 17,
          goals: 0,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Jurrien Timber",
          gamesPlayed: 16,
          goals: 1,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Jakub Kiwior",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Takehiro Tomiyasu",
          gamesPlayed: 20,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Oleksandr Zinchenko",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Taylor Foran",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Reuell Walters",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Ayden Heaven",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Thomas Partey",
          gamesPlayed: 20,
          goals: 3,
          assists: 2,
          yellowCards: 5,
          redCards: 0,
        },
        {
          name: "Martin Odegaard",
          gamesPlayed: 19,
          goals: 2,
          assists: 3,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Emile Smith Rowe",
          gamesPlayed: 20,
          goals: 1,
          assists: 4,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Jorginho",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 4,
          redCards: 0,
        },
        {
          name: "Fabio Vieira",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Mohamed Elneny",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Miguel Azeez",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Mauro Bandeira",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Declan Rice",
          gamesPlayed: 18,
          goals: 1,
          assists: 1,
          yellowCards: 3,
          redCards: 0,
        },
        {
          name: "Amario Cozier-Duberry",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Myles Lewis-Skelly",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Ethan Nwaneri",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Salah-Eddine Oulad M'hand",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "James Sweet",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Bukayo Saka",
          gamesPlayed: 20,
          goals: 4,
          assists: 3,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Gabriel Jesus",
          gamesPlayed: 19,
          goals: 6,
          assists: 2,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Gabriel Martinelli",
          gamesPlayed: 18,
          goals: 3,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Eddie Nketiah",
          gamesPlayed: 17,
          goals: 2,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          name: "Leandro Trossard",
          gamesPlayed: 16,
          goals: 3,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          name: "Reiss Nelson",
          gamesPlayed: 12,
          goals: 1,
          assists: 3,
          yellowCards: 0,
          redCards: 0,
        },
        {
          name: "Kai Havertz",
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
  font-weight: 500;
}

.team-stats th,
.player-list th {
  background-color: #1f3f7f;
  color: white;
}

.team-stats tr:hover,
.player-list tr:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}

.player-name {
  text-align: left !important;
}
</style>
