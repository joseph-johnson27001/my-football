<template>
  <div>
    <div class="heading-container"><p>Premier League 2023/2024</p></div>

    <table class="team-table">
      <thead>
        <tr class="headings">
          <th @click="sortBy('position')">#</th>
          <th class="team-header" @click="sortBy('team')">Team</th>
          <th @click="sortBy('playedGames')">Pl</th>
          <th @click="sortBy('won')">W</th>
          <th @click="sortBy('draw')">D</th>
          <th @click="sortBy('lost')">L</th>
          <th @click="sortBy('goalsFor')">GF</th>
          <th @click="sortBy('goalsAgainst')">GA</th>
          <th @click="sortBy('goalDifference')">GD</th>
          <th @click="sortBy('form')">Form</th>
          <th @click="sortBy('points')">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in premierLeagueStandingsSorted"
          :key="team.team.id"
          class="team-row"
        >
          <td>{{ index + 1 }}</td>
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
          <td>{{ team.playedGames }}</td>
          <td>{{ team.won }}</td>
          <td>{{ team.draw }}</td>
          <td>{{ team.lost }}</td>
          <td>{{ team.goalsFor }}</td>
          <td>{{ team.goalsAgainst }}</td>
          <td>{{ team.goalDifference }}</td>
          <td>
            <span v-for="(result, idx) in team.form" :key="idx">
              <span
                :class="getFormColorClass(result)"
                class="form-square"
              ></span>
            </span>
          </td>

          <td>{{ team.points }}</td>
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

.team-table th {
  padding: 15px 0px;
  background-color: #239023;
  cursor: pointer;
  font-weight: 100;
  color: white;
}

.team-header {
  text-align: left !important;
  padding-left: 10px !important;
}

.team-container {
  display: table-cell;
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

.team-heading {
  text-align: left !important;
  padding-left: 10px !important;
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

.form-square {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px; /* add margin between squares */
}

.win-square {
  background-color: green;
}

.draw-square {
  background-color: grey;
}

.lose-square {
  background-color: red;
}
</style>
