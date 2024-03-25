<template>
  <div>
    <div class="heading-container">
      <h2>Teams</h2>
    </div>
    <div class="teams-list">
      <div
        v-for="team in teams"
        :key="team.id"
        class="team-item"
        @click="navigateToTeamPage(team)"
      >
        <span class="crest-container">
          <img :src="team.crest" :alt="team.name" class="team-crest" />
        </span>
        <div class="team-name">{{ team.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamsPage",
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "Arsenal",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        },
        {
          id: 2,
          name: "Manchester City",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        },
        {
          id: 3,
          name: "Manchester United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        },
        {
          id: 4,
          name: "Liverpool",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        },
        {
          id: 5,
          name: "Chelsea",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        },
        {
          id: 6,
          name: "Tottenham Hotspur",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
        },
        {
          id: 7,
          name: "Leicester City",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
        },
        {
          id: 8,
          name: "Everton",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
        },
        {
          id: 9,
          name: "Aston Villa",
          crest:
            "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
        },
        {
          id: 10,
          name: "Leeds United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
        },
        {
          id: 11,
          name: "Southampton",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
        },
        {
          id: 12,
          name: "Brighton & Hove Albion",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
        },
        {
          id: 13,
          name: "Wolverhampton Wanderers",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
        },
        {
          id: 14,
          name: "Crystal Palace",
          crest:
            "https://upload.wikimedia.org/wikipedia/sco/0/0c/Crystal_Palace_FC_logo.svg",
        },
        {
          id: 15,
          name: "Newcastle United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
        },
        {
          id: 16,
          name: "Burnley",
          crest:
            "https://upload.wikimedia.org/wikipedia/fr/f/f3/Logo_Burnley_FC_1960.svg",
        },
        {
          id: 17,
          name: "Fulham",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
        },
        {
          id: 18,
          name: "West Bromwich Albion",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/8/8b/West_Bromwich_Albion.svg",
        },
        {
          id: 19,
          name: "Sheffield United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
        },
        {
          id: 20,
          name: "West Ham United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/e/e0/West_Ham_United_FC.svg",
        },
      ],
    };
  },
  mounted() {
    this.teams.sort((a, b) => a.name.localeCompare(b.name));
  },
  methods: {
    navigateToTeamPage(team) {
      this.$store.state.selectedTeam = team.name;
      this.$router.push("team");
    },
  },
};
</script>

<style scoped>
.teams-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.team-item {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 500;
  padding: 20px 0px;
}

.team-item:hover {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.crest-container {
  margin: 10px 0px;
}

.team-crest {
  max-width: 100px;
  width: auto;
  max-height: 100px;
}
</style>
