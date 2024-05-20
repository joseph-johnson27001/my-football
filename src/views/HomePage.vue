<template>
  <div class="team-page">
    <div class="top-half-grid">
      <div class="team-news">
        <div class="side-heading">
          <h2>Latest News</h2>
        </div>
        <div class="latest-news">
          <!-- Main article -->
          <div v-if="mainArticle" class="news-item main-article">
            <img
              :src="mainArticle.image"
              :alt="mainArticle.title"
              class="main-news-image"
              @load="checkAllImagesLoaded"
            />
            <div class="news-content">
              <h3 class="main-news-title">{{ mainArticle.title }}</h3>
              <p class="main-news-description">{{ mainArticle.description }}</p>
              <div
                v-if="mainArticle.source && mainArticle.source.logo"
                class="source-logo"
              >
                <img
                  :src="mainArticle.source.logo"
                  alt="Source Logo"
                  class="logo-image"
                />
              </div>
            </div>
          </div>
          <!-- Other news articles -->
          <div
            v-for="(article, index) in newsArticles"
            :key="index"
            class="news-item"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="news-image"
              @load="checkAllImagesLoaded"
            />
            <div class="news-content">
              <h3 class="news-title">{{ article.title }}</h3>
              <p class="news-description">{{ article.description }}</p>
              <div
                v-if="article.source && article.source.logo"
                class="source-logo"
              >
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
      <div>
        <div class="premier-league-table">
          <h2 class="heading-container">Premier League 23/24</h2>
          <NarrowTable />
        </div>
        <div class="heading-container">
          <h2>Next Fixtures</h2>
        </div>
        <NextFixtures />
        <h2 class="heading-container">Latest Results</h2>
        <LatestResults />
      </div>
    </div>
  </div>
</template>

<script>
import NarrowTable from "@/components/NarrowTable.vue";
import NextFixtures from "@/components/NextFixtures.vue";
import LatestResults from "@/components/LatestResults.vue";

export default {
  components: {
    NarrowTable,
    NextFixtures,
    LatestResults,
  },
  data() {
    return {
      newsArticles: [
        {
          title: "Manchester United signs new striker",
          description:
            "Manchester United completes the signing of a new striker for the upcoming season.",
          image: require("@/assets/fans.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          title: "Liverpool announces new sponsorship deal",
          description:
            "Liverpool Football Club announces a new sponsorship deal with a major international brand.",
          image: require("@/assets/goal.jpg"),
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          title: "Premier League introduces new rule changes",
          description:
            "The Premier League reveals new rule changes for the upcoming season to enhance fair play.",
          image: require("@/assets/kai.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          title: "Arsenal FC unveils plans for stadium expansion",
          description:
            "Arsenal FC announces ambitious plans for expanding their stadium capacity to accommodate more fans.",
          image: require("@/assets/stadium.jpg"),
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          title: "Chelsea FC appoints new head coach",
          description:
            "Chelsea FC appoints a new head coach ahead of the upcoming season, aiming for a fresh start.",
          image: require("@/assets/tomi.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          title: "Everton FC reveals plans for stadium renovation",
          description:
            "Everton FC unveils ambitious plans to renovate their stadium, promising a modern and enhanced fan experience.",
          image: require("@/assets/rice.jpg"),
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          title: "West Ham United signs veteran goalkeeper",
          description:
            "West Ham United completes the signing of an experienced goalkeeper to bolster their squad for the upcoming season.",
          image: require("@/assets/shield.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
      ],
      mainArticle: {
        title: "Exciting Transfer Rumors Rock Premier League Clubs",
        description:
          "Get the latest scoop on the transfer rumors swirling around the Premier League's top clubs as they gear up for the upcoming season.",
        image: require("@/assets/premierleague.jpg"),
        source: {
          name: "Sky Sports",
          logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
        },
      },
      imagesLoaded: 0,
    };
  },
  mounted() {
    this.$store.state.isLoading = true;
  },
  methods: {
    checkAllImagesLoaded() {
      this.imagesLoaded++;
      if (this.imagesLoaded === this.getTotalImageCount()) {
        this.$store.state.isLoading = false;
      }
    },
    getTotalImageCount() {
      let count = this.mainArticle ? 1 : 0;
      count += this.newsArticles.filter((article) => article.image).length;
      return count;
    },
  },
};
</script>

<style scoped>
.side-heading {
  margin-top: 0px;
  margin-bottom: 5px;
  padding-left: 0px;
}

.top-half-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.news-item {
  display: flex;
  flex-direction: column;
}

.news-description {
  margin-bottom: 0px;
}

.news-item {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 5px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0px;
  cursor: pointer;
}

.main-article {
  display: block;
  padding-top: 0px;
}

.news-item:hover {
  background-color: #f2f2f2;
}

.news-image {
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-left: 10px;
  max-height: 150px;
}

.main-news-image {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.news-title {
  font-weight: 500;
}

.main-news-title {
  font-weight: 500;
  text-align: center;
}

.news-content {
  padding: 0px 10px;
}

.crest-container {
  margin-right: 8px;
  display: flex;
  align-items: center;
  width: 40px;
  justify-content: center;
}

.navigation-container {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.team-navigation ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
  margin: 0;
}

.team-navigation ul li {
  padding: 5px 30px;
  width: 100%;
  text-align: center;
}

.team-navigation ul li:hover {
  background-color: #f2f2f2;
  cursor: pointer;
  height: 100%;
}

.source-logo {
  margin-top: auto;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.logo-image {
  height: 50px;
  width: 50px;
}

@media screen and (max-width: 768px) {
  .top-half-grid {
    grid-template-columns: 1fr;
  }
}
</style>
