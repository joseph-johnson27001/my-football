<template>
  <div class="fixture-page">
    <div class="heading-container">
      <h2>{{ this.$store.state.selectedFixture }}</h2>
    </div>
    <div class="fixture-content">
      <!-- Fixture Details -->
      <div class="fixture-details">
        <p style="margin-top: 0px">
          {{ fixtureDetails.date }} - {{ fixtureDetails.time }}
        </p>
        <p>Venue: {{ fixtureDetails.venue }}</p>
      </div>

      <!-- Match Preview -->
      <div class="match-preview">
        <h2>Match Preview</h2>
        <p>{{ matchPreview }}</p>
      </div>

      <!-- Team Lineups -->
      <div class="team-lineups">
        <h2>Expected Lineups</h2>
        <div class="home-lineup">
          <h2>{{ fixtureDetails.homeTeam }}</h2>
          <ul>
            <li v-for="player in homeLineup" :key="player.id">
              {{ player.name }}
            </li>
          </ul>
        </div>
        <div class="away-lineup">
          <h2>{{ fixtureDetails.awayTeam }}</h2>
          <ul>
            <li v-for="player in awayLineup" :key="player.id">
              {{ player.name }}
            </li>
          </ul>
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
        <!-- Add supporter engagement features here (e.g., comment section, prediction form) -->
      </div>

      <!-- Live Updates (if available) -->
      <div class="live-updates">
        <h2>Live Updates</h2>
        <!-- Add live updates section here (e.g., live stream links, score updates) -->
      </div>

      <!-- Additional Content -->
      <div class="additional-content">
        <h2>Additional Content</h2>
        <!-- Add related news articles, multimedia content, etc. -->
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
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
      },
      matchPreview:
        "Manchester United and Liverpool face off in a highly anticipated clash at Old Trafford.",
      homeLineup: [
        { id: 1, name: "David De Gea" },
        { id: 2, name: "Aaron Wan-Bissaka" },
        { id: 3, name: "Harry Maguire" },
        { id: 4, name: "Paul Pogba" },
        { id: 5, name: "Bruno Fernandes" },
      ],
      awayLineup: [
        { id: 1, name: "Alisson Becker" },
        { id: 2, name: "Trent Alexander-Arnold" },
        { id: 3, name: "Virgil van Dijk" },
        { id: 4, name: "Mohamed Salah" },
        { id: 5, name: "Sadio Mané" },
      ],
      matchAnalysis:
        "Both teams have been in good form, and this match promises to be an exciting contest.",
    };
  },
};
</script>

<style scoped>
/* Overall layout */
.fixture-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* Fixture Details */
.fixture-details {
  grid-column: span 2;
}

.fixture-details p {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Match Preview */
.match-preview,
.team-lineups,
.match-analysis,
.supporter-engagement,
.live-updates,
.additional-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.match-preview p,
.team-lineups ul,
.match-analysis p {
  font-size: 16px;
  line-height: 1.6;
}

.team-lineups h4 {
  font-size: 18px;
  font-weight: bold;
}

.team-lineups ul {
  list-style: none;
  padding: 0;
}

.team-lineups li {
  font-size: 16px;
  margin-bottom: 5px;
}

.additional-content {
  border-top: 1px solid #ccc;
}

.additional-content p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
