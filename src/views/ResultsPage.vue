<template>
  <div>
    <div class="fixtures-page">
      <span class="heading-container heading-span">
        <h2>Results</h2>
        <div class="matchday-dropdown">
          <!-- <label for="team-dropdown" class="matchday-label">Select Team:</label> -->
          <select v-model="selectedTeam" id="team-dropdown">
            <option value="">All Teams</option>
            <option v-for="team in teamList" :key="team" :value="team">
              {{ team }}
            </option>
          </select>
        </div>
      </span>
      <div class="fixtures-list">
        <div
          v-for="date in Object.keys(groupedResults)"
          :key="date"
          class="fixture-wrapper"
        >
          <h3 class="fixture-date">{{ date }}</h3>
          <div v-for="result in groupedResults[date]" :key="result.id">
            <div class="fixture-item" @click="navigateToMatchPage(result)">
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
      selectedTeam: "",
      results: [],
      teamList: [],
    };
  },
  computed: {
    groupedResults() {
      const grouped = {};
      this.filteredResults.forEach((result) => {
        if (!grouped[result.date]) {
          grouped[result.date] = [];
        }
        grouped[result.date].push(result);
      });
      return grouped;
    },
    filteredResults() {
      if (!this.selectedTeam) {
        return this.results.slice().reverse();
      }
      return this.results
        .filter(
          (result) =>
            result.homeTeam.name === this.selectedTeam ||
            result.awayTeam.name === this.selectedTeam
        )
        .slice()
        .reverse();
    },
  },
  methods: {
    navigateToMatchPage(result) {
      this.$store.state.selectedFixture = `${result.homeTeam.name} ${result.score.fullTime.home} - ${result.score.fullTime.away} ${result.awayTeam.name}`;
      this.$router.push("result");
    },
    getTeamCrest(teamId) {
      const result = this.results.find(
        (r) => r.homeTeam.id === teamId || r.awayTeam.id === teamId
      );
      if (result) {
        return result.homeTeam.id === teamId
          ? result.homeTeam.crest
          : result.awayTeam.crest;
      } else {
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
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 3, away: 2 } },
          date: "Wednesday 27th January",
        },
        {
          id: 2,
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
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 1, away: 1 } },
          date: "Wednesday 27th January",
        },
        {
          id: 3,
          homeTeam: {
            id: 5,
            name: "Chelsea",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
          },
          awayTeam: {
            id: 6,
            name: "Tottenham Hotspur",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 1, away: 0 } },
          date: "Wednesday 27th January",
        },
        {
          id: 4,
          homeTeam: {
            id: 7,
            name: "Leicester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
          },
          awayTeam: {
            id: 8,
            name: "Everton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 1 } },
          date: "Wednesday 27th January",
        },
        {
          id: 5,
          homeTeam: {
            id: 9,
            name: "Aston Villa",
            crest:
              "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
          },
          awayTeam: {
            id: 10,
            name: "Leeds United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 1, away: 1 } },
          date: "Wednesday 27th January",
        },
        {
          id: 6,
          homeTeam: {
            id: 11,
            name: "Southampton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
          },
          awayTeam: {
            id: 12,
            name: "Brighton & Hove Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 0, away: 0 } },
          date: "Wednesday 27th January",
        },
        {
          id: 7,
          homeTeam: {
            id: 13,
            name: "Wolverhampton Wanderers",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
          },
          awayTeam: {
            id: 14,
            name: "Crystal Palace",
            crest:
              "https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 1 } },
          date: "Wednesday 27th January",
        },
        {
          id: 8,
          homeTeam: {
            id: 15,
            name: "Newcastle United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
          },
          awayTeam: {
            id: 16,
            name: "Burnley",
            crest:
              "https://upload.wikimedia.org/wikipedia/fr/f/f3/Logo_Burnley_FC_1960.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 1, away: 0 } },
          date: "Wednesday 27th January",
        },
        {
          id: 9,
          homeTeam: {
            id: 17,
            name: "Fulham",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
          },
          awayTeam: {
            id: 18,
            name: "West Bromwich Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg",
          },
          matchday: 1,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 2 } },
          date: "Wednesday 27th January",
        },
        {
          id: 2,
          homeTeam: {
            id: 7,
            name: "Leicester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
          },
          awayTeam: {
            id: 8,
            name: "Everton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
          },
          matchday: 2,
          status: "FINISHED",
          score: { fullTime: { home: 2, away: 2 } },
          date: "Thursday 28th January",
        },
        {
          id: 3,
          homeTeam: {
            id: 9,
            name: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
          },
          awayTeam: {
            id: 10,
            name: "Southampton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
          },
          matchday: 3,
          status: "FINISHED",
          score: { fullTime: { home: 3, away: 1 } },
          date: "Friday 29th January",
        },
        {
          id: 4,
          homeTeam: {
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          awayTeam: {
            id: 12,
            name: "Wolverhampton Wanderers",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
          },
          matchday: 4,
          status: "FINISHED",
          score: { fullTime: { home: 0, away: 1 } },
          date: "Saturday 30th January",
        },
      ];
      this.$store.state.isLoading = true;
      setTimeout(() => {
        this.$store.state.isLoading = false;
      }, 500);
    },
    getTeamList() {
      const teams = new Set();
      this.results.forEach((result) => {
        teams.add(result.homeTeam.name);
        teams.add(result.awayTeam.name);
      });
      this.teamList = Array.from(teams).sort();
    },
  },
  created() {
    if (this.$store.state.selectedTeam) {
      this.selectedTeam = this.$store.state.selectedTeam;
    }
    this.fetchResults();
  },
  watch: {
    results: {
      handler() {
        this.getTeamList();
      },
      immediate: true,
    },
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

.fixture-wrapper {
  margin: 10px 0;
  width: 100%;
}

.fixture-item {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 10px 0px;
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

.fixture-date {
  margin-top: 0px;
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
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-family: "Montserrat";
  font-size: 0.9em;
}

.matchday-label {
  font-weight: 100;
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
