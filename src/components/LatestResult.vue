<template>
  <div>
    <div class="fixtures-list">
      <div
        v-for="result in results"
        :key="result.id"
        class="fixture-item"
        @click="navigateToMatchPage(result)"
      >
        <div class="team-container team-left">
          <span class="crest-container">
            <img
              :src="getTeamCrest(result.homeTeam.id)"
              :alt="result.homeTeam.name"
              class="team-crest"
            />
          </span>
          <div class="team-name">{{ result.homeTeam.name }}</div>
        </div>
        <div class="score-container">
          <span class="score" v-if="result.status === 'FINISHED'">
            {{ result.score.fullTime.home }} -
            {{ result.score.fullTime.away }}
          </span>
        </div>
        <div class="team-container team-right">
          <div class="team-name">{{ result.awayTeam.name }}</div>
          <span class="crest-container">
            <img
              :src="getTeamCrest(result.awayTeam.id)"
              :alt="result.awayTeam.name"
              class="team-crest"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestResult",
  props: {
    teamCrestsData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    getTeamCrest(teamId) {
      const team = this.results.find(
        (result) =>
          result.homeTeam.id === teamId || result.awayTeam.id === teamId
      );
      if (team) {
        return team.homeTeam.id === teamId
          ? team.homeTeam.crest
          : team.awayTeam.crest;
      } else {
        return "placeholder.jpg";
      }
    },
    navigateToMatchPage(result) {
      this.$store.state.selectedFixture = `${result.homeTeam.name} ${result.score.fullTime.home} - ${result.score.fullTime.away} ${result.awayTeam.name}`;
      this.$router.push("result");
    },
    async fetchResults() {
      this.results = [
        {
          id: 1,
          homeTeam: {
            id: 1,
            name: "Arsenal",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          },
          awayTeam: {
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 3, away: 2 } },
        },
      ];
    },
  },
  created() {
    this.fetchResults();
  },
};
</script>

<style scoped>
.heading-span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fixtures-list {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.fixture-item {
  background-color: #f8f8f8;
  padding: 10px 0px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 0px;
  margin-bottom: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}

.fixture-item:hover {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.team-container {
  display: flex;
  align-items: center;
}

.team-left {
  text-align: left;
}

.team-right {
  display: flex;
  text-align: right;
  justify-content: flex-end;
}
.score {
  text-align: center;
}

.score-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.crest-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
}

.team-crest {
  max-width: 30px;
  width: auto;
  max-height: 30px;
  margin: 10px;
}

@media screen and (max-width: 546px) {
  .fixture-item {
    font-size: 0.8rem;
    padding: 5px;
  }

  .team-crest {
    width: 20px;
  }
}
</style>
