<template>
  <div>
    <div class="fixtures-list">
      <div
        v-for="fixture in fixtures"
        :key="fixture.id"
        class="fixture-item"
        @click="navigateToMatchPage(fixture)"
      >
        <div class="team-container team-left">
          <span class="crest-container">
            <img
              :src="getTeamCrest(fixture.homeTeam.id)"
              :alt="fixture.homeTeam.name"
              class="team-crest"
            />
          </span>
          <div class="team-name">{{ fixture.homeTeam.name }}</div>
        </div>
        <div class="score-container">
          <span class="score">-</span>
          <span class="fixture-time">{{ fixture.time }} </span>
        </div>
        <div class="team-container team-right">
          <div class="team-name">{{ fixture.awayTeam.name }}</div>
          <span class="crest-container">
            <img
              :src="getTeamCrest(fixture.awayTeam.id)"
              :alt="fixture.awayTeam.name"
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
  name: "NextFixture",
  props: {
    teamCrestsData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fixtures: [],
    };
  },

  methods: {
    getTeamCrest(teamId) {
      const team = this.fixtures.find(
        (fixture) =>
          fixture.homeTeam.id === teamId || fixture.awayTeam.id === teamId
      );
      if (team) {
        return team.homeTeam.id === teamId
          ? team.homeTeam.crest
          : team.awayTeam.crest;
      } else {
        return "placeholder.jpg";
      }
    },
    navigateToMatchPage(fixture) {
      this.$store.state.selectedFixture = `${fixture.homeTeam.name} v ${fixture.awayTeam.name}`;
      this.$router.push("fixture");
    },
    async fetchFixtures() {
      this.fixtures = [
        {
          id: 1,
          homeTeam: {
            id: 11,
            name: "Arsenal",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          },
          awayTeam: {
            id: 17,
            name: "Fulham",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
          time: "17:30",
        },
      ];
    },
  },
  created() {
    this.fetchFixtures();
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fixture-time {
  font-size: 0.8em;
  font-weight: 100;
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
