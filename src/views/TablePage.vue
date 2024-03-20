<template>
  <div>
    <div style="margin-bottom: 5px">Table</div>
    <div v-if="isLoading" class="animation-container">
      <loadingAnimation />
    </div>
    <div v-if="!isLoading && premierLeagueStandings.length === 0">
      The free API has hit its limit for 10 calls every minute. Please wait and
      try again.
    </div>
    <table
      v-if="!isLoading && premierLeagueStandings.length > 0"
      class="team-table"
    >
      <thead>
        <tr>
          <th>#</th>
          <th style="text-align: left">Team</th>
          <th>Pl</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Form</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in premierLeagueStandings"
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
            <span
              v-for="(result, idx) in team.form"
              :key="idx"
              :class="{
                win: result === 'W',
                draw: result === 'D',
                lose: result === 'L',
              }"
              style="font-weight: 400"
            >
              {{ result }}
            </span>
          </td>
          <td>{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import loadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  components: {
    loadingAnimation,
  },
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
          goalsFor: 13,
          goalsAgainst: 14,
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
    };
  },
};
</script>

<style scoped>
.team-table {
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid #ddd; */
}

.team-table th,
.team-table td {
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 5px;
}

.team-table th {
  padding: 15px 0px;
  background-color: #f2f2f2;
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

.team-crest {
  height: 35px;
}

.team-name {
  flex: 1;
  text-align: left;
}

.team-row:hover {
  background-color: #f2f2f2;
}

.win {
  color: green;
}

.draw {
  color: orange;
}

.lose {
  color: red;
}
</style>
