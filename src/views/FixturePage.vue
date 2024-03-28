<template>
  <div class="fixture-page">
    <div class="heading-container">
      <h2 v-if="this.$store.state.selectedFixture">
        {{ this.$store.state.selectedFixture }}
      </h2>
      <h2 v-else>Manchester United V Liverpool</h2>
    </div>
    <!-- Fixture Details -->
    <div class="fixture-details">
      <h3>{{ fixtureDetails.date }} - {{ fixtureDetails.time }}</h3>
      <h3>Venue: {{ fixtureDetails.venue }}</h3>
      <h3>Referee: {{ fixtureDetails.referee }}</h3>
    </div>
    <div class="fixture-content">
      <!-- Match Preview -->
      <div class="match-preview">
        <h2 style="margin-top: 10px">Match Preview</h2>
        <img
          :src="fixtureDetails.image"
          alt="Match Preview Image"
          style="
            max-width: 100%;
            border-radius: 4px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
          "
          @load="handleImageLoad"
        />
        <p>{{ matchPreview }}</p>
      </div>

      <!-- Team Lineups -->
      <div class="team-lineups">
        <h2 style="margin-bottom: 0px; margin-top: 10px">Expected Lineups</h2>
        <div class="lineup-details">
          <div class="home-lineup">
            <h3>{{ fixtureDetails.homeTeam }}</h3>
            <ul>
              <li v-for="player in homeLineup" :key="player.id">
                <p>{{ player.name }}</p>
              </li>
            </ul>
          </div>
          <div class="away-lineup">
            <h3>{{ fixtureDetails.awayTeam }}</h3>
            <ul>
              <li v-for="player in awayLineup" :key="player.id">
                <p>{{ player.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Match Analysis -->
      <div class="match-analysis">
        <h2>Match Analysis</h2>
        <p>{{ matchAnalysis }}</p>
      </div>

      <!-- Supporter Engagement -->
      <div class="supporter-engagement">
        <h2>Engage with the Fixture</h2>
        <p>
          This section can include features like a comment section, prediction
          form, or social media integration.
        </p>
      </div>

      <!-- Live Updates (if available) -->
      <div class="live-updates">
        <h2>Live Updates</h2>
        <p>Live updates will be available during the match.</p>
      </div>

      <!-- Additional Content -->
      <div class="additional-content">
        <h2>Additional Content</h2>
        <p>
          This section can include related news articles, multimedia content, or
          links to match highlights.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixtureDetails: {
        date: "April 1, 2024",
        time: "15:00",
        venue: "Old Trafford",
        referee: "Martin Atkinson",
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
        image: "https://picsum.photos/800/400",
      },
      matchPreview:
        "Manchester United and Liverpool face off in a highly anticipated clash at Old Trafford. This is a dummy match preview.",
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
      matchAnalysis:
        "Both teams have been in good form, and this match promises to be an exciting contest. This is a dummy match analysis.",
    };
  },
  methods: {
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
h3 {
  font-family: "Bebas Neue", sans-serif;
}

.fixture-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  .fixture-content {
    grid-template-columns: 1fr;
  }
}

.fixture-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fixture-details p {
  margin-bottom: 10px;
}

.match-preview,
.team-lineups,
.match-analysis,
.supporter-engagement,
.live-updates,
.additional-content {
  border-bottom: 1px solid #ddd;
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
</style>
