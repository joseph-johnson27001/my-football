<template>
  <div class="news-page">
    <!-- News Heading and Team Selection -->
    <div class="heading-container">
      <h2>Football News</h2>
      <div class="team-selection">
        <select v-model="selectedTeam" id="team-dropdown">
          <option value="All">All Teams</option>
          <option v-for="team in teamList" :key="team" :value="team">
            {{ team }}
          </option>
        </select>
      </div>
    </div>

    <!-- Main Article -->
    <div
      v-if="mainArticle"
      class="main-article"
      @click="showNotificationWarning()"
    >
      <img
        v-if="mainArticle.image"
        :src="mainArticle.image"
        alt="Main Article Image"
        class="article-image"
        @load="checkAllImagesLoaded"
        @error="handleImageError"
      />
      <div class="article-content">
        <h3 class="article-title">{{ mainArticle.title }}</h3>
        <p class="article-description">{{ mainArticle.description }}</p>
        <div
          v-if="mainArticle.source && mainArticle.source.logo"
          class="source-logo"
          style="justify-content: center"
        >
          <img
            :src="mainArticle.source.logo"
            alt="Source Logo"
            class="logo-image"
            style="justify-content: center"
          />
        </div>
      </div>
    </div>

    <!-- Articles Section -->
    <div class="articles-section">
      <div class="article-grid">
        <div
          v-for="article in filteredArticlesExceptMain"
          :key="article.id"
          class="article"
          @click="showNotificationWarning()"
        >
          <img
            v-if="article.image"
            :src="article.image"
            alt="Article Image"
            class="article-image"
            @load="checkAllImagesLoaded"
            @error="handleImageError"
          />
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
          </div>
          <div v-if="article.source && article.source.logo" class="source-logo">
            <img
              :src="article.source.logo"
              alt="Source Logo"
              class="logo-image"
            />
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
      selectedTeam: "All",
      teamList: [
        "Arsenal",
        "Aston Villa",
        "Brighton & Hove Albion",
        "Burnley",
        "Chelsea",
        "Crystal Palace",
        "Everton",
        "Fulham",
        "Leeds United",
        "Leicester City",
        "Liverpool",
        "Manchester City",
        "Manchester United",
        "Newcastle United",
        "Sheffield United",
        "Southampton",
        "Tottenham Hotspur",
        "West Bromwich Albion",
        "West Ham United",
        "Wolverhampton Wanderers",
      ],
      articles: [
        {
          id: 1,
          title: "Premier League Season Preview",
          description:
            "Get ready for the new Premier League season with our in-depth preview.",
          content:
            "Content providing insights and analysis on the upcoming Premier League season, including key players, teams to watch, and predictions.",
          image: require("@/assets/premierleague.jpg"),
          teams: ["All"],
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          id: 2,
          title: "Tactical Analysis: Title Contenders' Strategies",
          description:
            "Analyze the tactical approaches of the top contenders for the Premier League title.",
          content:
            "Content dissecting the tactical strategies employed by the leading teams in the race for the Premier League championship.",
          image: require("@/assets/fans.jpg"),
          teams: ["Arsenal", "Manchester City"],
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          id: 3,
          title: "Key Transfers: Impact on Premier League Clubs",
          description:
            "Assess the impact of key transfer signings on Premier League clubs.",
          content:
            "Content examining the significance of major transfer deals and their potential effects on the fortunes of respective Premier League teams.",
          image: require("@/assets/goal.jpg"),
          teams: ["Brighton & Hove Albion", "Chelsea"],
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          id: 4,
          title: "Top 10 Goals of the Premier League Season",
          description:
            "A roundup of the most spectacular goals from the Premier League.",
          content:
            "Content describing the top 10 goals scored in the Premier League season so far.",
          image: require("@/assets/kai.jpg"),
          teams: ["Liverpool", "Manchester United"],
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          id: 5,
          title: "Rising Stars: Young Talent in the Premier League",
          description:
            "Exploring the emergence of promising young players in the Premier League.",
          content:
            "Content highlighting the young football talents making a mark in the Premier League.",
          image: require("@/assets/rice.jpg"),
          teams: ["Manchester City", "Chelsea"],
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          id: 6,
          title: "Matchday Analysis: Tactical Insights and Player Performances",
          description:
            "Analyze key moments and performances from recent Premier League matches.",
          content:
            "Content providing tactical insights and player analyses from select Premier League fixtures.",
          image: require("@/assets/saka.jpg"),
          teams: ["Manchester United", "Liverpool"],
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          id: 7,
          title: "Evolution of Football Tactics: From Catenaccio to Tiki-Taka",
          description:
            "Trace the evolution of football tactics from defensive systems like Catenaccio to possession-based strategies like Tiki-Taka.",
          content:
            "Content exploring the historical development of football tactics and the influence of different playing styles on the modern game.",
          image: require("@/assets/shield.jpg"),
          teams: ["Southampton", "Arsenal"],
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          id: 8,
          title: "Impact of VAR on Premier League Matches",
          description:
            "Examine the impact of Video Assistant Referee (VAR) technology on decision-making and game dynamics in the Premier League.",
          content:
            "Content analyzing the implementation of VAR in the Premier League and its implications for match outcomes and officiating.",
          image: require("@/assets/stadium.jpg"),
          teams: ["Tottenham Hotspur", "Chelsea"],
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          id: 9,
          title:
            "Legendary Premier League Managers: Their Legacy and Influence",
          description:
            "Celebrate the legacy and influence of legendary managers who have left an indelible mark on the Premier League.",
          content:
            "Content highlighting the achievements, tactics, and managerial philosophies of iconic figures in Premier League history.",
          image: require("@/assets/tomi.jpg"),
          teams: ["Fulham", "Liverpool"],
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
      ],
      imagesLoaded: 0,
    };
  },
  mounted() {
    if (this.$store.state.selectedTeam) {
      this.selectedTeam = this.$store.state.selectedTeam;
    }
    this.$store.state.isLoading = true;
  },
  computed: {
    mainArticle() {
      return this.articles.length > 0 ? this.articles[0] : null;
    },
    filteredArticlesExceptMain() {
      if (this.selectedTeam === "All") {
        return this.articles.slice(1);
      } else {
        return this.articles
          .slice(1)
          .filter((article) => article.teams.includes(this.selectedTeam));
      }
    },
  },
  methods: {
    showNotificationWarning() {
      this.$store.state.showWarning = true;
    },
    checkAllImagesLoaded() {
      this.imagesLoaded++;
      if (this.imagesLoaded === this.getTotalImageCount()) {
        this.$store.state.isLoading = false;
      }
    },
    getTotalImageCount() {
      let count = this.mainArticle ? 1 : 0;
      count += this.filteredArticlesExceptMain.filter(
        (article) => article.image
      ).length;
      return count;
    },
  },
};
</script>
<style scoped>
.team-selection {
  display: flex;
  align-items: center;
}

.main-article {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  text-align: center !important;
  cursor: pointer;
}

.main-article:hover {
  background-color: #f2f2f2;
}

.main-article .article-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.main-article .article-content {
  padding: 10px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.article {
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.article:hover {
  background-color: #f2f2f2;
}

.article-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.article-title {
  font-weight: 500;
}

.article-content {
  padding: 0px 10px;
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

select {
  padding: 8px 4px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-family: "Montserrat";
  font-size: 0.9em;
}

label {
  margin-right: 5px;
  font-weight: 100;
}

@media screen and (max-width: 546px) {
  #team-dropdown {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
