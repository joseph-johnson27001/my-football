<template>
  <div class="team-page">
    <div class="heading-container">
      <h2 v-if="this.$store.state.selectedTeam">
        {{ this.$store.state.selectedTeam }}
      </h2>
      <!-- TO DO - REMOVE THIS BACKUP HEADING -->
      <h2 v-else>Arsenal</h2>
    </div>

    <!-- Navigation area -->
    <div class="navigation-container">
      <nav class="team-navigation">
        <ul>
          <li @click="navigateToPage('/news')"><p>News</p></li>
          <li @click="navigateToPage('/fixtures')"><p>Fixtures</p></li>
          <li @click="navigateToPage('/results')"><p>Results</p></li>
          <li @click="navigateToPage('/squad')"><p>Squad</p></li>
          <li @click="navigateToPage('/stats')"><p>Stats</p></li>
          <li @click="navigateToPage('/videos')"><p>Videos</p></li>
        </ul>
      </nav>
    </div>

    <div class="top-half-grid">
      <div class="team-news">
        <h2 class="side-heading news-heading">Latest News</h2>
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
            </div>
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
        <h2 class="side-heading">Next Fixture</h2>
        <NextFixture />
        <h2 class="side-heading">Latest Result</h2>
        <LatestResult />
        <div class="premier-league-table">
          <h2 class="side-heading">Premier League 23/24</h2>
          <NarrowTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NarrowTable from "@/components/NarrowTable.vue";
import NextFixture from "@/components/NextFixture.vue";
import LatestResult from "@/components/LatestResult.vue";

export default {
  components: {
    NarrowTable,
    NextFixture,
    LatestResult,
  },
  data() {
    return {
      newsArticles: [
        {
          title: "Manchester United signs new striker",
          description:
            "Manchester United completes the signing of a new striker for the upcoming season.",
          image: require("@/assets/saka.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          title: "Liverpool announces new sponsorship deal",
          description:
            "Liverpool Football Club announces a new sponsorship deal with a major international brand.",
          image: require("@/assets/kai.jpg"),
          source: {
            name: "BBC Sport",
            logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
          },
        },
        {
          title: "Premier League introduces new rule changes",
          description:
            "The Premier League reveals new rule changes for the upcoming season to enhance fair play.",
          image: require("@/assets/goal.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        {
          title: "Arsenal FC unveils plans for stadium expansion",
          description:
            "Arsenal FC announces ambitious plans for expanding their stadium capacity to accommodate more fans.",
          image: require("@/assets/shield.jpg"),
          source: {
            name: "Sky Sports",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Sky_Sports_logo_2020.svg",
          },
        },
        // {
        //   title: "Chelsea FC appoints new head coach",
        //   description:
        //     "Chelsea FC appoints a new head coach ahead of the upcoming season, aiming for a fresh start.",
        //   image: "https://picsum.photos/150?random=4",
        //   source: {
        //     name: "BBC Sport",
        //     logo: "https://www.cdnlogo.com/logos/b/30/bbc-sport.svg",
        //   },
        // },
      ],
      mainArticle: {
        title: "Exciting Transfer Rumors Rock Premier League Clubs",
        description:
          "Get the latest scoop on the transfer rumors swirling around the Premier League's top clubs as they gear up for the upcoming season.",
        image: require("@/assets/Arsenal.jpg"),
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
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 500);
  },
  methods: {
    navigateToPage(route) {
      this.$router.push(route);
    },
    checkAllImagesLoaded() {
      // this.imagesLoaded++;
      // if (this.imagesLoaded === this.getTotalImageCount()) {
      //   this.$store.state.isLoading = false;
      // }
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

.news-description {
  margin-bottom: 0px;
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
  .team-navigation ul li {
    line-height: 1rem;
  }
}
</style>
