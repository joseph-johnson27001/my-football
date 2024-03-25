<template>
  <div>
    <span class="heading-container heading-span">
      <h2>Fixtures</h2>
      <div class="matchday-dropdown">
        <label for="matchday-select" class="matchday-label">Match Week: </label>
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
    <div class="fixtures-page">
      <div class="fixtures-list">
        <div
          v-for="result in filteredFixtures"
          :key="result.id"
          class="fixture-item"
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
            <span class="score">-</span>
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
</template>

<script>
export default {
  name: "FixturesPage",
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
      fixtures: [],
    };
  },
  computed: {
    filteredFixtures() {
      return this.fixtures.filter(
        (result) => result.matchday === this.selectedMatchday
      );
    },
  },
  methods: {
    getTeamCrest(teamId) {
      const team = this.fixtures.find(
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
    async fetchFixtures() {
      this.fixtures = [
        {
          id: 1,
          homeTeam: {
            id: 11,
            name: "Southampton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
          },
          awayTeam: {
            id: 17,
            name: "Fulham",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
        },
        {
          id: 2,
          homeTeam: {
            id: 12,
            name: "Brighton & Hove Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
          },
          awayTeam: {
            id: 13,
            name: "Wolverhampton Wanderers",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
        },
        {
          id: 3,
          homeTeam: {
            id: 14,
            name: "Crystal Palace",
            crest:
              "https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg",
          },
          awayTeam: {
            id: 15,
            name: "Newcastle United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
        },
        {
          id: 4,
          homeTeam: {
            id: 16,
            name: "Burnley",
            crest:
              "https://upload.wikimedia.org/wikipedia/fr/f/f3/Logo_Burnley_FC_1960.svg",
          },
          awayTeam: {
            id: 18,
            name: "West Bromwich Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
        },
        {
          id: 5,
          homeTeam: {
            id: 19,
            name: "Sheffield United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
          },
          awayTeam: {
            id: 20,
            name: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/e0/West_Ham_United_FC.svg",
          },
          matchday: 1,
          status: "SCHEDULED",
        },
        {
          id: 6,
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
          status: "SCHEDULED",
        },
        {
          id: 7,
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
          status: "SCHEDULED",
        },
        {
          id: 8,
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
          status: "SCHEDULED",
        },
        {
          id: 9,
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
          status: "SCHEDULED",
        },
        {
          id: 10,
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
          status: "SCHEDULED",
        },
        {
          id: 11,
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
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 12,
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
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 13,
          homeTeam: {
            id: 18,
            name: "West Bromwich Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg",
          },
          awayTeam: {
            id: 19,
            name: "Sheffield United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 14,
          homeTeam: {
            id: 20,
            name: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/e/e0/West_Ham_United_FC.svg",
          },
          awayTeam: {
            id: 1,
            name: "Arsenal",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 15,
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
          status: "SCHEDULED",
        },
        {
          id: 16,
          homeTeam: {
            id: 4,
            name: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          awayTeam: {
            id: 5,
            name: "Chelsea",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 17,
          homeTeam: {
            id: 6,
            name: "Tottenham Hotspur",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
          },
          awayTeam: {
            id: 7,
            name: "Leicester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 18,
          homeTeam: {
            id: 8,
            name: "Everton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
          },
          awayTeam: {
            id: 9,
            name: "Aston Villa",
            crest:
              "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 19,
          homeTeam: {
            id: 10,
            name: "Leeds United",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
          },
          awayTeam: {
            id: 11,
            name: "Southampton",
            crest:
              "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
          },
          matchday: 2,
          status: "SCHEDULED",
        },
        {
          id: 20,
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
          matchday: 3,
          status: "SCHEDULED",
        },
      ];
      setTimeout(() => {
        this.$store.state.isLoading = false;
      }, 1000);
    },
  },
  created() {
    this.$store.state.isLoading = true;
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
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 10px 0;
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
  outline: none;
}

.matchday-label {
  font-weight: 100;
}
</style>
