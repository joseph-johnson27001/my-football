<template>
  <div>
    <div class="heading-container">
      <h2>{{ playerName }}</h2>
    </div>
    <div class="player-stats">
      <table class="total-stats">
        <thead>
          <tr>
            <th>Pld</th>
            <th>Gls</th>
            <th>Ast</th>
            <th>YC</th>
            <th>RC</th>
            <th>MOTM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ totalStats.Pld }}</td>
            <td>{{ totalStats.G }}</td>
            <td>{{ totalStats.A }}</td>
            <td>{{ totalStats.YC }}</td>
            <td>{{ totalStats.RC }}</td>
            <td>{{ totalStats.MOTM }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead>
          <tr>
            <th class="team-name" style="padding-left: 10px">Team</th>
            <th>Gls</th>
            <th>Ast</th>
            <th>YC</th>
            <th>RC</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, index) in individualGames" :key="index">
            <td class="team-name">{{ game.team }}</td>
            <td>{{ game.goals }}</td>
            <td>{{ game.assists }}</td>
            <td>{{ game.yellowCards }}</td>
            <td>{{ game.redCards }}</td>
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
      isLoading: true,
      totalStats: {
        Pld: 0,
        G: 0,
        A: 0,
        YC: 0,
        RC: 0,
        MOTM: 0,
      },
      individualGames: [
        { team: "Chelsea", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
        {
          team: "Liverpool",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Manchester City",
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          team: "Manchester United",
          goals: 1,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        { team: "Arsenal", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
        {
          team: "Tottenham Hotspur",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Leicester City",
          goals: 1,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        { team: "Everton", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
        {
          team: "West Ham United",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Leeds United",
          goals: 1,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Aston Villa",
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          team: "Wolverhampton Wanderers",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Crystal Palace",
          goals: 1,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        },
        {
          team: "Newcastle United",
          goals: 0,
          assists: 0,
          yellowCards: 1,
          redCards: 0,
        },
        {
          team: "Brighton & Hove Albion",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
        { team: "Burnley", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
        { team: "Fulham", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
        {
          team: "Southampton",
          goals: 0,
          assists: 1,
          yellowCards: 0,
          redCards: 0,
        },
      ],
    };
  },
  computed: {
    playerName() {
      return this.$store.state.playerName || "William Saliba";
    },
  },
  mounted() {
    this.$store.state.isLoading = true;

    setTimeout(() => {
      this.totalStats = {
        Pld: 20,
        G: 5,
        A: 3,
        YC: 2,
        RC: 0,
        MOTM: 7,
      };
      this.$store.state.isLoading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.player-stats table {
  width: 100%;
  border-collapse: collapse;
}

.player-stats th,
.player-stats td {
  border: 1px solid #ccc;
  text-align: center;
  font-weight: 100;
  padding: 10px;
}

.total-stats th,
.total-stat td {
  width: calc(100% / 6);
}

.player-stats td {
  font-weight: 500;
  cursor: pointer;
}

.player-stats th {
  background-color: #1f3f7f;
  color: white;
}

.player-stats tr:hover {
  background-color: #f2f2f2;
}

.team-name {
  text-align: left !important;
}
</style>
