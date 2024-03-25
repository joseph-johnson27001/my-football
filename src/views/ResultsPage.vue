<template>
  <div>
    <span class="heading-span">
      <p>Results</p>
      <div class="matchday-dropdown">
        <label for="matchday-select">Select Match Week: </label>
        <select id="matchday-select" v-model="selectedMatchday">
          <option
            v-for="matchday in matchdays"
            :key="matchday"
            :value="matchday"
          >
            {{ matchday }}
          </option>
        </select>
      </div>
    </span>
    <div class="results-page">
      <div class="fixtures-list">
        <div
          v-for="result in filteredResults"
          :key="result.id"
          class="fixture-item"
        >
          <div class="team-container team-left">
            <img
              :src="getTeamCrest(result.homeTeam.id)"
              :alt="result.homeTeam.name"
              class="team-crest"
            />
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
            <img
              :src="getTeamCrest(result.awayTeam.id)"
              :alt="result.awayTeam.name"
              class="team-crest"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultsPage",
  props: {
    teamCrestsData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedMatchday: 1,
      matchdays: [1, 2, 3, 4],
      results: [],
    };
  },
  computed: {
    filteredResults() {
      return this.results.filter(
        (result) => result.matchday === this.selectedMatchday
      );
    },
  },
  methods: {
    getTeamCrest(teamId) {
      // Find the team with the matching ID in the results array
      const team = this.results.find(
        (result) =>
          result.homeTeam.id === teamId || result.awayTeam.id === teamId
      );
      // Check if the team is found
      if (team) {
        // Return the crest URL of the found team
        return team.homeTeam.id === teamId
          ? team.homeTeam.crest
          : team.awayTeam.crest;
      } else {
        // If the team is not found, return a placeholder image
        return "placeholder.jpg";
      }
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
            id: 2,
            name: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 1 } },
        },
        {
          id: 2,
          homeTeam: {
            id: 3,
            name: "Manchester United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          },
          awayTeam: {
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 0, away: 0 } },
        },
        {
          id: 3,
          homeTeam: {
            id: 2,
            name: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          },
          awayTeam: {
            id: 3,
            name: "Manchester United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          },
          matchday: 2,
          status: "FINISHED",
          score: { fullTime: { home: 1, away: 1 } },
        },
        {
          id: 4,
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
          matchday: 2,
          status: "FINISHED",
          score: { fullTime: { home: 3, away: 2 } },
        },
        {
          id: 5,
          homeTeam: {
            id: 2,
            name: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          },
          awayTeam: {
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          matchday: 3,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 2 } },
        },
        // Add more dummy results as needed
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
  font-weight: bold;
}

.fixture-item {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 10px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.1s, box-shadow 0.1s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fixture-item:hover {
  border-color: #1f8dd6;
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
  text-align: center;
}

.team-crest {
  max-width: 30px;
  margin: 10px;
}

.matchday-dropdown {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.matchday-dropdown label {
  margin-right: 10px;
}

.matchday-dropdown select {
  padding: 8px 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
