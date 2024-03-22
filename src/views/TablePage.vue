<template>
  <div>
    <div class="heading-container"><p>Premier League 2023/2024</p></div>

    <table class="team-table">
      <thead>
        <tr class="headings">
          <th @click="sortBy('position')" class="stats">#</th>
          <th class="team-header" @click="sortBy('team')">Team</th>
          <th @click="sortBy('playedGames')" class="stats">Pl</th>
          <th @click="sortBy('won')" class="stats">W</th>
          <th @click="sortBy('draw')" class="stats">D</th>
          <th @click="sortBy('lost')" class="stats">L</th>
          <th @click="sortBy('goalsFor')" class="stats">GF</th>
          <th @click="sortBy('goalsAgainst')" class="stats">GA</th>
          <th @click="sortBy('goalDifference')" class="stats">GD</th>
          <th @click="sortBy('points')" class="stats">Pts</th>
          <th @click="sortBy('form')" class="form-header">Form</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in premierLeagueStandingsSorted"
          :key="team.team.id"
          class="team-row"
        >
          <td class="stats">{{ index + 1 }}</td>
          <td class="team-container">
            <div class="crest-name-container">
              <div class="crest-container">
                <img
                  :src="team.team.crest"
                  :alt="team.team.name"
                  class="team-crest"
                />
              </div>
              <span class="team-name">{{ team.team.name }}</span>
            </div>
          </td>
          <td class="stats">{{ team.playedGames }}</td>
          <td class="stats">{{ team.won }}</td>
          <td class="stats">{{ team.draw }}</td>
          <td class="stats">{{ team.lost }}</td>
          <td class="stats">{{ team.goalsFor }}</td>
          <td class="stats">{{ team.goalsAgainst }}</td>
          <td class="stats">{{ team.goalDifference }}</td>
          <td class="form-points stats">{{ team.points }}</td>
          <td class="form-container">
            <span
              v-for="(result, idx) in team.form"
              :key="idx"
              :class="getFormColorClass(result)"
              class="form-square"
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      premierLeagueStandings: [
        {
          team: {
            id: 6,
            name: "Arsenal",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          },
          playedGames: 10,
          won: 8,
          draw: 2,
          lost: 0,
          goalsFor: 25,
          goalsAgainst: 7,
          goalDifference: 18,
          form: "WWWWW",
          points: 26,
        },
        {
          team: {
            id: 1,
            name: "Manchester United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          },
          playedGames: 10,
          won: 7,
          draw: 2,
          lost: 1,
          goalsFor: 20,
          goalsAgainst: 5,
          goalDifference: 15,
          form: "WWWDW",
          points: 23,
        },
        {
          team: {
            id: 2,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          playedGames: 10,
          won: 6,
          draw: 3,
          lost: 1,
          goalsFor: 18,
          goalsAgainst: 6,
          goalDifference: 12,
          form: "WLWWD",
          points: 21,
        },
        {
          team: {
            id: 3,
            name: "Chelsea",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
          },
          playedGames: 10,
          won: 5,
          draw: 4,
          lost: 1,
          goalsFor: 15,
          goalsAgainst: 8,
          goalDifference: 7,
          form: "DDWWL",
          points: 19,
        },
        {
          team: {
            id: 20,
            name: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/e0/West_Ham_United_FC.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 4,
          lost: 3,
          goalsFor: 12,
          goalsAgainst: 12,
          goalDifference: 0,
          form: "LDWLW",
          points: 13,
        },
        {
          team: {
            id: 4,
            name: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          },
          playedGames: 10,
          won: 4,
          draw: 4,
          lost: 2,
          goalsFor: 16,
          goalsAgainst: 10,
          goalDifference: 6,
          form: "WLDDL",
          points: 16,
        },
        {
          team: {
            id: 5,
            name: "Tottenham Hotspur",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 5,
          lost: 2,
          goalsFor: 14,
          goalsAgainst: 12,
          goalDifference: 2,
          form: "DLDWW",
          points: 14,
        },

        {
          team: {
            id: 7,
            name: "Leicester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 4,
          lost: 3,
          goalsFor: 15,
          goalsAgainst: 17,
          goalDifference: -2,
          form: "DLWWD",
          points: 13,
        },
      ],
      isLoading: false,
      sortByField: "position",
      sortOrder: 1,
    };
  },
  computed: {
    premierLeagueStandingsSorted() {
      return this.premierLeagueStandings.slice().sort((a, b) => {
        const aValue = this.getFieldValue(a, this.sortByField);
        const bValue = this.getFieldValue(b, this.sortByField);
        if (aValue < bValue) return -1 * this.sortOrder;
        if (aValue > bValue) return 1 * this.sortOrder;
        return 0;
      });
    },
  },
  methods: {
    getFormColorClass(result) {
      if (result === "W") {
        return "win-square";
      } else if (result === "D") {
        return "draw-square";
      } else if (result === "L") {
        return "lose-square";
      } else {
        return "";
      }
    },
    sortBy(field) {
      if (field === this.sortByField) {
        this.sortOrder *= -1;
      } else {
        this.sortByField = field;
        this.sortOrder = 1;
      }
    },
    getFieldValue(object, field) {
      const keys = field.split(".");
      let value = object;
      for (const key of keys) {
        value = value[key];
      }
      return value;
    },
  },
};
</script>

<style scoped>
.team-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.team-table th,
.team-table td {
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px 0px;
  cursor: pointer;
}

.team-header {
  text-align: left !important;
  padding-left: 10px !important;
}

.stats {
  width: 50px;
}

.team-table th {
  padding: 15px 0px;
  background-color: #1f3f7f;
  cursor: pointer;
  font-weight: 100;
  color: white;
}

.team-container {
  display: table-cell;
  font-weight: 500;
}

.crest-name-container {
  display: flex;
  align-items: center;
}

.crest-container {
  margin-right: 8px;
  display: flex;
  align-items: center;
  width: 40px;
  justify-content: center;
}

.team-crest {
  height: 25px;
}

.team-name {
  flex: 1;
  text-align: left;
}

.team-row:hover {
  background-color: #f2f2f2;
}

.form-points {
  font-weight: 600 !important;
}

.form-square {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
}

.win-square {
  background-color: #4caf50;
}

.draw-square {
  background-color: #9e9e9e;
}

.lose-square {
  background-color: #ff0000;
}

/* Hide form area at mobile sizes */
@media only screen and (max-width: 768px) {
  .form-square,
  .form-header,
  .form-container {
    display: none;
  }
}
</style>
