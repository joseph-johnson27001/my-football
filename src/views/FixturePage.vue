<template>
  <div class="fixture-page">
    <div class="fixture-content">
      <div class="match-preview">
        <div class="match-preview-container">
          <h2 v-if="this.$store.state.selectedFixture">
            {{ this.$store.state.selectedFixture }}
          </h2>
          <h2 v-else>Manchester United V Liverpool</h2>
        </div>
        <div class="match-preview-content" @click="showNotificationWarning()">
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
          <h3>{{ matchPreviewHeading }}</h3>
          <div class="preview-container">
            <p>{{ matchPreview }}</p>
            <div v-if="source && source.logo" class="source-logo">
              <img :src="source.logo" alt="Source Logo" class="logo-image" />
            </div>
          </div>
        </div>
      </div>

      <!-- Team Lineups -->
      <div class="team-lineups">
        <h2>Expected Lineups</h2>
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
          <div class="referee-info">
            <p>Referee: {{ fixtureDetails.referee }}</p>
            <!-- <p>Venue: {{ fixtureDetails.venue }}</p> -->
          </div>
        </div>
      </div>
      <!-- Additional Content -->
      <div>
        <h2 style="margin-top: 15px">Videos</h2>
        <div class="videos-list">
          <div
            v-for="(video, index) in recentVideos"
            :key="index"
            class="video-item"
          >
            <!-- Check if the video is a YouTube video -->
            <div v-if="isYouTubeVideo(video)">
              <iframe
                width="100%"
                height="315"
                :src="video.src"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <!-- If not a YouTube video, display the video using video tag -->
            <div v-else>
              <video :src="video.src" controls class="video"></video>
            </div>
            <div class="video-description">
              <h3>{{ video.title }}</h3>
              <p>{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Match Analysis -->
      <div class="match-analysis">
        <div class="recent-history">
          <h2>Recent Form</h2>
          <div class="form">
            <div class="home-form">
              <h3>{{ fixtureDetails.homeTeam }}:</h3>
              <span
                v-for="(result, idx) in homeTeamForm.split('')"
                :key="idx"
                :class="getFormColorClass(result)"
                class="form-square"
              ></span>
            </div>
            <div class="away-form">
              <h3>{{ fixtureDetails.awayTeam }}:</h3>
              <span
                v-for="(result, idx) in awayTeamForm.split('')"
                :key="idx"
                :class="getFormColorClass(result)"
                class="form-square"
              ></span>
            </div>
          </div>
        </div>
        <div class="head-to-head">
          <h2>Head-to-Head</h2>
          <p>{{ fixtureDetails.homeTeam }} Wins: 15</p>
          <p>Draws: 9</p>
          <p>{{ fixtureDetails.awayTeam }} Wins: 13</p>
        </div>
      </div>

      <!-- Live Updates (if available) -->
      <!-- <div class="live-updates">
        <h2>Live Updates</h2>
        <p>Live updates will be available during the match.</p>
      </div> -->

      <!-- Supporter Engagement -->
      <!-- <div class="supporter-engagement">
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
      </div> -->
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
        image: require("@/assets/premierleague.jpg"),
      },
      matchPreview:
        "Manchester United and Liverpool face off in a highly anticipated clash at Old Trafford. This is a dummy match preview.",
      matchPreviewHeading: "Manchester United V Liverpool Pre-Match Analysis",
      source: {
        name: "Sky Sports",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
      },
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
      homeTeamForm: "WWWWL",
      awayTeamForm: "DWWDL",
    };
  },
  methods: {
    showNotificationWarning() {
      this.$store.state.showWarning = true;
    },
    isYouTubeVideo(video) {
      return video.src.includes("youtube.com");
    },
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
    this.recentVideos = [
      {
        src: "https://www.youtube.com/embed/t5EhsXZwn4o?si=EiFsFIn-B4BM6dUP",
        title: "Arsenal V Liverpool",
        description:
          "Highlights of the recent match between Arsenal and Liverpool.",
        teams: ["Arsenal", "Liverpool"],
      },
    ];
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 5px;
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

.match-preview,
.team-lineups,
.match-analysis,
.supporter-engagement,
.live-updates,
.additional-content {
  border-bottom: 1px solid #ddd;
}

.match-preview-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.match-preview-content {
  cursor: pointer;
}

.match-preview-content:hover {
  background-color: #f2f2f2;
}

.match-preview p {
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
  margin: 20px 0px;
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

.source-logo {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.logo-image {
  height: 50px;
  width: 50px;
}

.preview-container {
  display: grid;
  grid-template-columns: 6fr 1fr;
}
</style>
