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
          <!-- <h3>{{ fixtureDetails.date }} - {{ fixtureDetails.time }}</h3> -->
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
          <div class="analysis-container">
            <p>{{ matchOverview }}</p>
            <div v-if="source && source.logo" class="source-logo">
              <img :src="source.logo" alt="Source Logo" class="logo-image" />
            </div>
          </div>
        </div>
      </div>

      <!-- Team Lineups -->
      <div class="team-lineups">
        <h2>Lineups</h2>
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
            <!-- <p>Venue: {{ fixtureDetails.venue }}</p> -->
          </div>
        </div>
      </div>

      <div>
        <h2 style="margin-top: 15px">Videos</h2>
        <div class="videos-list">
          <div
            v-for="(video, index) in highlights"
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

      <!-- Match Statistics -->
      <div class="statistics-section">
        <h2 style="margin-top: 15px">Stats</h2>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeScore }}</div>
            <div class="statistic-label">Goals</div>
            <div class="away-value">{{ liveFixture.awayScore }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamGoalsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamGoalsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.shots }}</div>
            <div class="statistic-label">Shots</div>
            <div class="away-value">{{ liveFixture.awayTeam.shots }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Shots on Target</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsOnTargetPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsOnTargetPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.xG }}</div>
            <div class="statistic-label">xG (Expected Goals)</div>
            <div class="away-value">{{ liveFixture.awayTeam.xG }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamXGPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamXGPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Corners</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Fouls</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Tackles</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.yellowCards }}</div>
            <div class="statistic-label">Yellow Cards</div>
            <div class="away-value">{{ liveFixture.awayTeam.yellowCards }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamYellowCardsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamYellowCardsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.redCards }}</div>
            <div class="statistic-label">Red Cards</div>
            <div class="away-value">{{ liveFixture.awayTeam.redCards }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamRedCardsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamRedCardsPercentage + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlights: [],
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
      liveFixture: {
        homeTeam: {
          name: "Arsenal",
          shots: 10,
          shotsOnTarget: 6,
          xG: 1.8,
          yellowCards: 2,
          redCards: 1,
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          goalScorers: [
            { name: "William Saliba", minute: 4 },
            { name: "Gabriel", minute: 25 },
            { name: "Gabriel Jesus", minute: 45 },
            { name: "Bukayo Saka", minute: 84 },
          ],
        },
        awayTeam: {
          name: "Manchester City",
          shots: 8,
          shotsOnTarget: 4,
          xG: 1.2,
          yellowCards: 1,
          redCards: 1,
          crest:
            "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          goalScorers: [{ name: "Earling Haaland", minute: 15 }],
        },
        homeScore: 4,
        awayScore: 1,
      },
    };
  },
  methods: {
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
  computed: {
    orderedComments() {
      return this.liveFixture.comments.slice().reverse();
    },

    homeTeamGoalsPercentage() {
      return (this.liveFixture.homeScore / this.maxGoals) * 100;
    },

    awayTeamGoalsPercentage() {
      return (this.liveFixture.awayScore / this.maxGoals) * 100;
    },

    homeTeamShotsPercentage() {
      return (this.liveFixture.homeTeam.shots / this.maxShots) * 100;
    },
    awayTeamShotsPercentage() {
      return (this.liveFixture.awayTeam.shots / this.maxShots) * 100;
    },
    homeTeamShotsOnTargetPercentage() {
      return (
        (this.liveFixture.homeTeam.shotsOnTarget / this.maxShotsOnTarget) * 100
      );
    },
    awayTeamShotsOnTargetPercentage() {
      return (
        (this.liveFixture.awayTeam.shotsOnTarget / this.maxShotsOnTarget) * 100
      );
    },
    homeTeamXGPercentage() {
      return (this.liveFixture.homeTeam.xG / this.maxXG) * 100;
    },
    awayTeamXGPercentage() {
      return (this.liveFixture.awayTeam.xG / this.maxXG) * 100;
    },
    homeTeamYellowCardsPercentage() {
      return (
        (this.liveFixture.homeTeam.yellowCards / this.maxYellowCards) * 100
      );
    },
    awayTeamYellowCardsPercentage() {
      return (
        (this.liveFixture.awayTeam.yellowCards / this.maxYellowCards) * 100
      );
    },
    homeTeamRedCardsPercentage() {
      return (this.liveFixture.homeTeam.redCards / this.maxRedCards) * 100;
    },
    awayTeamRedCardsPercentage() {
      return (this.liveFixture.awayTeam.redCards / this.maxRedCards) * 100;
    },
    maxShots() {
      return Math.max(
        this.liveFixture.homeTeam.shots,
        this.liveFixture.awayTeam.shots
      );
    },
    maxShotsOnTarget() {
      return Math.max(
        this.liveFixture.homeTeam.shotsOnTarget,
        this.liveFixture.awayTeam.shotsOnTarget
      );
    },
    maxXG() {
      return Math.max(
        this.liveFixture.homeTeam.xG,
        this.liveFixture.awayTeam.xG
      );
    },
    maxYellowCards() {
      return Math.max(
        this.liveFixture.homeTeam.yellowCards,
        this.liveFixture.awayTeam.yellowCards
      );
    },
    maxRedCards() {
      return Math.max(
        this.liveFixture.homeTeam.redCards,
        this.liveFixture.awayTeam.redCards
      );
    },
    maxGoals() {
      return Math.max(this.liveFixture.homeScore, this.liveFixture.awayScore);
    },
  },
  created() {
    this.$store.state.isLoading = true;
    this.highlights = [
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
  margin-bottom: 15px;
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

.bar-container {
  display: flex;
  height: 20px;
}

.bar {
  height: 100%;
}

.home-team {
  background-color: #007bff;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

.away-team {
  background-color: #28a745;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}

.statistic-values {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
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

.analysis-container {
  display: grid;
  grid-template-columns: 6fr 1fr;
}
</style>
