<template>
  <div class="narrow-table">
    <table class="team-table">
      <thead>
        <tr>
          <th>#</th>
          <th class="team-header">Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in premierLeagueStandings"
          :key="index"
          @click="navigateToTeamPage(team)"
        >
          <td>{{ index + 1 }}</td>
          <td>
            <div class="team-info">
              <img
                :src="team.team.crest"
                :alt="team.team.name"
                class="team-crest"
              />
              <p class="team-name">{{ team.team.name }}</p>
            </div>
          </td>
          <td>{{ team.playedGames }}</td>
          <td>{{ team.won }}</td>
          <td>{{ team.draw }}</td>
          <td>{{ team.lost }}</td>
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
        {
          team: {
            id: 8,
            name: "Everton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 3,
          lost: 4,
          goalsFor: 14,
          goalsAgainst: 15,
          goalDifference: -1,
          form: "LDWDL",
          points: 12,
        },
        {
          team: {
            id: 9,
            name: "Aston Villa",
            crest:
              "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 2,
          lost: 5,
          goalsFor: 13,
          goalsAgainst: 15,
          goalDifference: -2,
          form: "LWDLL",
          points: 11,
        },
        {
          team: {
            id: 10,
            name: "Leeds United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
          },
          playedGames: 10,
          won: 3,
          draw: 2,
          lost: 5,
          goalsFor: 12,
          goalsAgainst: 18,
          goalDifference: -6,
          form: "WLWLL",
          points: 11,
        },
        {
          team: {
            id: 11,
            name: "Southampton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
          },
          playedGames: 10,
          won: 2,
          draw: 4,
          lost: 4,
          goalsFor: 10,
          goalsAgainst: 15,
          goalDifference: -5,
          form: "DDLWL",
          points: 10,
        },
        {
          team: {
            id: 12,
            name: "Brighton & Hove Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
          },
          playedGames: 10,
          won: 1,
          draw: 5,
          lost: 4,
          goalsFor: 10,
          goalsAgainst: 13,
          goalDifference: -3,
          form: "DDLLD",
          points: 8,
        },
        {
          team: {
            id: 13,
            name: "Wolverhampton Wanderers",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
          },
          playedGames: 10,
          won: 1,
          draw: 4,
          lost: 5,
          goalsFor: 9,
          goalsAgainst: 14,
          goalDifference: -5,
          form: "DLLLD",
          points: 7,
        },
        {
          team: {
            id: 14,
            name: "Crystal Palace",
            crest:
              "https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg",
          },
          playedGames: 10,
          won: 1,
          draw: 3,
          lost: 6,
          goalsFor: 8,
          goalsAgainst: 16,
          goalDifference: -8,
          form: "LLLDL",
          points: 6,
        },
        {
          team: {
            id: 15,
            name: "Newcastle United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
          },
          playedGames: 10,
          won: 1,
          draw: 3,
          lost: 6,
          goalsFor: 9,
          goalsAgainst: 19,
          goalDifference: -10,
          form: "LDLDL",
          points: 6,
        },
        {
          team: {
            id: 16,
            name: "Burnley",
            crest:
              "https://upload.wikimedia.org/wikipedia/fr/f/f3/Logo_Burnley_FC_1960.svg",
          },
          playedGames: 10,
          won: 0,
          draw: 4,
          lost: 6,
          goalsFor: 6,
          goalsAgainst: 16,
          goalDifference: -10,
          form: "DLLDL",
          points: 4,
        },
        {
          team: {
            id: 17,
            name: "Fulham",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
          },
          playedGames: 10,
          won: 0,
          draw: 3,
          lost: 7,
          goalsFor: 6,
          goalsAgainst: 17,
          goalDifference: -11,
          form: "LLLDL",
          points: 3,
        },
        {
          team: {
            id: 18,
            name: "West Bromwich Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg",
          },
          playedGames: 10,
          won: 0,
          draw: 3,
          lost: 7,
          goalsFor: 8,
          goalsAgainst: 20,
          goalDifference: -12,
          form: "LDLDL",
          points: 3,
        },
        {
          team: {
            id: 19,
            name: "Sheffield United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
          },
          playedGames: 10,
          won: 0,
          draw: 1,
          lost: 9,
          goalsFor: 4,
          goalsAgainst: 21,
          goalDifference: -17,
          form: "LLLLL",
          points: 1,
        },
      ],
      isLoading: false,
    };
  },
  methods: {
    navigateToTeamPage(team) {
      this.$store.state.selectedTeam = team.team.name;
      this.$router.push("team");
    },
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
    getFieldValue(object, field) {
      const keys = field.split(".");
      let value = object;
      for (const key of keys) {
        value = value[key];
      }
      return value;
    },
  },
  mounted() {
    this.$store.state.isLoading = true;
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 500);
  },
};
</script>

<style scoped>
.team-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: small;
}

.team-table th,
.team-table td {
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  cursor: pointer;
  padding: 0px 10px;
}

.team-header {
  text-align: left !important;
  padding-left: 10px !important;
}

.team-info {
  display: flex;
  align-items: center;
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
  margin-left: 5px;
}

.team-row:hover {
  background-color: #f2f2f2;
}
</style>
