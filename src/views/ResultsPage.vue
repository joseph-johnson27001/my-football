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
            <!-- <img
              :src="getTeamCrest(result.homeTeam.id)"
              :alt="result.homeTeam.name"
              class="team-crest"
            /> -->
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
            <!-- <img
              :src="getTeamCrest(result.awayTeam.id)"
              :alt="result.awayTeam.name"
              class="team-crest"
            /> -->
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
      matchdays: [1, 2, 3, 4], // Dummy match week data
      results: [], // Placeholder for results data
    };
  },
  computed: {
    // Filtered results based on selected match week
    filteredResults() {
      // Dummy implementation, replace with actual filtering logic based on match week
      return this.results.filter(
        (result) => result.matchday === this.selectedMatchday
      );
    },
  },
  methods: {
    // Method to get team crest URL based on team ID
    getTeamCrest(teamId) {
      // Use the team crests data passed from props
      return this.teamCrestsData[teamId] || "placeholder.jpg";
    },
    // Dummy method to simulate fetching results data from an API
    async fetchResults() {
      // Dummy data for results
      this.results = [
        {
          id: 1,
          homeTeam: { id: 1, name: "Arsenal" },
          awayTeam: { id: 2, name: "Manchester City" },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 1 } },
        },
        {
          id: 2,
          homeTeam: { id: 3, name: "Manchester United" },
          awayTeam: { id: 4, name: "Liverpool" },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 0, away: 0 } },
        },
        // Add more dummy results as needed
      ];
    },
  },
  created() {
    // Simulate fetching results data from an API
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
