<template>
  <div class="fixture-page">
    <div class="fixture-content">
      <!-- Match Overview -->
      <div class="match-overview">
        <div class="match-overview-container">
          <h2 v-if="this.$store.state.selectedFixture">
            {{ this.$store.state.selectedFixture }}
          </h2>
          <h2 v-else>Manchester United V Liverpool</h2>
          <h3>{{ fixtureDetails.date }} - {{ fixtureDetails.time }}</h3>
        </div>
        <div class="match-overview-content">
          <img
            :src="fixtureDetails.image"
            alt="Match Overview Image"
            style="
              max-width: 100%;
              border-radius: 4px;
              margin-bottom: 10px;
              border: 1px solid #ddd;
            "
            @load="handleImageLoad"
          />
          <h3>{{ matchOverviewHeading }}</h3>
          <p>{{ matchOverview }}</p>
        </div>
      </div>

      <!-- Team Lineups -->
      <div class="team-lineups">
        <h2 style="margin-top: 15px">Lineups</h2>
        <div class="lineup-details">
          <div class="home-lineup">
            <h3>{{ fixtureDetails.homeTeam }}</h3>
            <ul>
              <li v-for="player in homeLineup" :key="player.id">
                <p>{{ player.name }}</p>
              </li>
            </ul>
            <div>
              <h3>Subs</h3>
              <ul>
                <li v-for="player in homeSubstitutes" :key="player.id">
                  <p>{{ player.name }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="away-lineup">
            <h3>{{ fixtureDetails.awayTeam }}</h3>
            <ul>
              <li v-for="player in awayLineup" :key="player.id">
                <p>{{ player.name }}</p>
              </li>
            </ul>
            <div>
              <h3>Subs</h3>
              <ul>
                <li v-for="player in awaySubstitutes" :key="player.id">
                  <p>{{ player.name }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="referee-info">
            <p>Referee: {{ fixtureDetails.referee }}</p>
            <p>Venue: {{ fixtureDetails.venue }}</p>
          </div>
        </div>
      </div>

      <!-- Match Statistics -->
      <div class="statistics">
        <h2 style="margin-top: 15px">Stats</h2>
      </div>

      <!-- Supporter Engagement -->
      <div class="supporter-engagement">
        <h2>Socials</h2>
        <div class="social-media-links">
          <a href="#" class="social-media-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-media-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-media-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixtureDetails: {
        date: "15th May 2024",
        time: "15:00",
        venue: "Old Trafford",
        referee: "Martin Atkinson",
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
        image: "https://picsum.photos/800/400",
      },
      matchOverview:
        "Manchester United and Liverpool face off in a highly anticipated clash at Old Trafford. This is a dummy match overview.",
      matchOverviewHeading: "Manchester United V Liverpool Analysis",
      homeLineup: [
        { id: 1, name: "David De Gea" },
        { id: 2, name: "Aaron Wan-Bissaka" },
        { id: 3, name: "Harry Maguire" },
        { id: 4, name: "Raphael Varane" },
        { id: 5, name: "Luke Shaw" },
        { id: 6, name: "Scott McTominay" },
        { id: 7, name: "Fred" },
        { id: 8, name: "Bruno Fernandes" },
        { id: 9, name: "Jadon Sancho" },
        { id: 10, name: "Cristiano Ronaldo" },
        { id: 11, name: "Marcus Rashford" },
      ],
      awayLineup: [
        { id: 1, name: "Alisson Becker" },
        { id: 2, name: "Trent Alexander-Arnold" },
        { id: 3, name: "Virgil van Dijk" },
        { id: 4, name: "Joel Matip" },
        { id: 5, name: "Andrew Robertson" },
        { id: 6, name: "Fabinho" },
        { id: 7, name: "Jordan Henderson" },
        { id: 8, name: "Georginio Wijnaldum" },
        { id: 9, name: "Mohamed Salah" },
        { id: 10, name: "Roberto Firmino" },
        { id: 11, name: "Sadio Mané" },
      ],
      homeSubstitutes: [
        { id: 12, name: "Dean Henderson" },
        { id: 13, name: "Eric Bailly" },
        { id: 14, name: "Nemanja Matic" },
      ],
      awaySubstitutes: [
        { id: 12, name: "Adrián" },
        { id: 13, name: "Joe Gomez" },
        { id: 14, name: "James Milner" },
      ],
      homeTeamForm: "WWWWL",
      awayTeamForm: "DWWDL",
    };
  },
  methods: {
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
    handleImageLoad() {
      this.$store.state.isLoading = false;
    },
  },
  created() {
    this.$store.state.isLoading = true;
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: auto !important;
}

.fixture-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
}

@media screen and (max-width: 768px) {
  .fixture-content {
    grid-template-columns: 1fr;
  }
}

.fixture-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.fixture-details p {
  margin-bottom: 10px;
}

.match-overview,
.team-lineups,
.match-analysis,
.supporter-engagement,
.live-updates,
.additional-content {
  border-bottom: 1px solid #ddd;
}

.match-overview-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.match-overview-content {
  cursor: pointer;
}

.match-overview-content:hover {
  background-color: #f2f2f2;
}

.match-overview p {
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 0px;
  padding-bottom: 10px;
}

.match-analysis {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.home-lineup h2,
.away-lineup h2 {
  margin-top: 0px;
}

.lineup-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.team-lineups ul {
  list-style: none;
  padding: 0;
}

.team-lineups li p {
  margin-bottom: 5px;
  line-height: 15px;
}

.social-media-links {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.social-media-link {
  margin: 0 10px;
  font-size: 24px;
  color: #1f3f7f;
  text-decoration: none;
  padding-bottom: 10px;
}

.social-media-link:hover {
  color: #007bff;
}

.form-square {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
}

.win-square {
  background-color: #4caf50;
}

.draw-square {
  background-color: #9e9e9e;
}

.lose-square {
  background-color: #ff0000;
}
</style>
