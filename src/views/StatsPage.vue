<template>
  <div>
    <div class="heading-container">
      <h2 v-if="teamName">{{ teamName }} Statistics</h2>
    </div>

    <!-- Goalkeepers -->
    <div>
      <h3>Goalkeepers</h3>
      <div class="player-list">
        <table>
          <thead>
            <tr>
              <th class="player-name">Player</th>
              <th>Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>YC</th>
              <th>RC</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="navigateToPlayerPage(player)"
              v-for="(player, index) in goalkeepers"
              :key="'gk-' + index"
            >
              <td class="player-name">
                {{ player.number }}. {{ player.name }}
              </td>
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

    <!-- Defenders -->
    <div>
      <h3>Defenders</h3>
      <div class="player-list">
        <table>
          <thead>
            <tr>
              <th class="player-name">Player</th>
              <th>Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>YC</th>
              <th>RC</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="navigateToPlayerPage(player)"
              v-for="(player, index) in defenders"
              :key="'def-' + index"
            >
              <td class="player-name">
                {{ player.number }}. {{ player.name }}
              </td>
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

    <!-- Midfielders -->
    <div>
      <h3>Midfielders</h3>
      <div class="player-list">
        <table>
          <thead>
            <tr>
              <th class="player-name">Player</th>
              <th>Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>YC</th>
              <th>RC</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="navigateToPlayerPage(player)"
              v-for="(player, index) in midfielders"
              :key="'mid-' + index"
            >
              <td class="player-name">
                {{ player.number }}. {{ player.name }}
              </td>
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

    <!-- Forwards -->
    <div>
      <h3>Forwards</h3>
      <div class="player-list">
        <table>
          <thead>
            <tr>
              <th class="player-name">Player</th>
              <th>Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>YC</th>
              <th>RC</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="navigateToPlayerPage(player)"
              v-for="(player, index) in forwards"
              :key="'for-' + index"
            >
              <td class="player-name">
                {{ player.number }}. {{ player.name }}
              </td>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerData: {},
    };
  },
  methods: {
    navigateToPlayerPage(player) {
      this.$store.state.playerName = player.name;
      this.$store.state.playerNumber = player.number;
      this.$router.push("player");
    },
  },
  computed: {
    playerList() {
      return [
        {
          number: 1,
          name: "Aaron Ramsdale",
          position: "Goalkeeper",
          gamesPlayed: 20,
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 31,
          name: "David Raya",
          position: "Goalkeeper",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          number: 52,
          name: "Karl Hein",
          position: "Goalkeeper",
          gamesPlayed: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 54,
          name: "Hubert Graczyk",
          position: "Goalkeeper",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 2,
          name: "James Hillson",
          position: "Goalkeeper",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 2,
          name: "William Saliba",
          position: "Defender",
          gamesPlayed: 20,
          goals: 1,
          assists: 0,
          yellowCards: 2,
          redCards: 0,
        },
        {
          number: 4,
          name: "Ben White",
          position: "Defender",
          gamesPlayed: 19,
          goals: 1,
          assists: 2,
          yellowCards: 3,
          redCards: 0,
        },
        {
          number: 6,
          name: "Gabriel Magalhaes",
          position: "Defender",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 12,
          name: "Cedric Soares",
          position: "Defender",
          gamesPlayed: 17,
          goals: 0,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          number: 12,
          name: "Jurrien Timber",
          position: "Defender",
          gamesPlayed: 16,
          goals: 1,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          number: 15,
          name: "Jakub Kiwior",
          position: "Defender",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 18,
          name: "Takehiro Tomiyasu",
          position: "Defender",
          gamesPlayed: 20,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 35,
          name: "Oleksandr Zinchenko",
          position: "Defender",
          gamesPlayed: 18,
          goals: 0,
          assists: 0,
          yellowCards: 3,
          redCards: 0,
        },
        {
          number: 50,
          name: "Taylor Foran",
          position: "Defender",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 76,
          name: "Reuell Walters",
          position: "Defender",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 79,
          name: "Ayden Heaven",
          position: "Defender",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 5,
          name: "Thomas Partey",
          position: "Midfielder",
          gamesPlayed: 20,
          goals: 3,
          assists: 2,
          yellowCards: 5,
          redCards: 0,
        },
        {
          number: 8,
          name: "Martin Odegaard",
          position: "Midfielder",
          gamesPlayed: 19,
          goals: 2,
          assists: 3,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 10,
          name: "Emile Smith Rowe",
          position: "Midfielder",
          gamesPlayed: 20,
          goals: 1,
          assists: 4,
          yellowCards: 3,
          redCards: 0,
        },
        {
          number: 20,
          name: "Jorginho",
          position: "Midfielder",
          gamesPlayed: 18,
          goals: 0,
          assists: 1,
          yellowCards: 4,
          redCards: 0,
        },
        {
          number: 21,
          name: "Fabio Vieira",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 25,
          name: "Mohamed Elneny",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 39,
          name: "Miguel Azeez",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 40,
          name: "Mauro Bandeira",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 41,
          name: "Declan Rice",
          position: "Midfielder",
          gamesPlayed: 18,
          goals: 1,
          assists: 1,
          yellowCards: 3,
          redCards: 0,
        },
        {
          number: 45,
          name: "Amario Cozier-Duberry",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 59,
          name: "Myles Lewis-Skelly",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 63,
          name: "Ethan Nwaneri",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 65,
          name: "Salah-Eddine Oulad M'hand",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 73,
          name: "James Sweet",
          position: "Midfielder",
          gamesPlayed: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 7,
          name: "Bukayo Saka",
          position: "Forward",
          gamesPlayed: 20,
          goals: 4,
          assists: 3,
          yellowCards: 2,
          redCards: 0,
        },
        {
          number: 9,
          name: "Gabriel Jesus",
          position: "Forward",
          gamesPlayed: 19,
          goals: 6,
          assists: 2,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 11,
          name: "Gabriel Martinelli",
          position: "Forward",
          gamesPlayed: 18,
          goals: 3,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 14,
          name: "Eddie Nketiah",
          position: "Forward",
          gamesPlayed: 17,
          goals: 2,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          number: 19,
          name: "Leandro Trossard",
          position: "Forward",
          gamesPlayed: 16,
          goals: 3,
          assists: 2,
          yellowCards: 2,
          redCards: 0,
        },
        {
          number: 24,
          name: "Reiss Nelson",
          position: "Forward",
          gamesPlayed: 12,
          goals: 1,
          assists: 3,
          yellowCards: 0,
          redCards: 0,
        },
        {
          number: 29,
          name: "Kai Havertz",
          position: "Forward",
          gamesPlayed: 10,
          goals: 2,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
      ];
    },

    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },

    goalkeepers() {
      return this.playerList.filter(
        (player) => player.position === "Goalkeeper"
      );
    },

    defenders() {
      return this.playerList.filter((player) => player.position === "Defender");
    },

    midfielders() {
      return this.playerList.filter(
        (player) => player.position === "Midfielder"
      );
    },

    forwards() {
      return this.playerList.filter((player) => player.position === "Forward");
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
  font-weight: 100;
}

.team-stats tr:hover,
.player-list tr:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}

.player-name {
  text-align: left !important;
  width: 30%;
}

.player-stats {
  width: calc((100% - 30%) / 5);
}
</style>
