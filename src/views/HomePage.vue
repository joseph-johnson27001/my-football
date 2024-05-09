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
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="premier-league-table">
          <h2 class="heading-container">Premier League 23/24</h2>
          <NarrowTable />
        </div>
        <div class="side-heading">
          <h2>Next Fixtures</h2>
        </div>
        <NextFixtures />
        <h2 class="side-heading">Latest Results</h2>
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
          image: "https://picsum.photos/150?random=8",
        },
        {
          title: "Liverpool announces new sponsorship deal",
          description:
            "Liverpool Football Club announces a new sponsorship deal with a major international brand.",
          image: "https://picsum.photos/150?random=7",
        },
        {
          title: "Premier League introduces new rule changes",
          description:
            "The Premier League reveals new rule changes for the upcoming season to enhance fair play.",
          image: "https://picsum.photos/150?random=6",
        },
        {
          title: "Arsenal FC unveils plans for stadium expansion",
          description:
            "Arsenal FC announces ambitious plans for expanding their stadium capacity to accommodate more fans.",
          image: "https://picsum.photos/150?random=5",
        },
        {
          title: "Chelsea FC appoints new head coach",
          description:
            "Chelsea FC appoints a new head coach ahead of the upcoming season, aiming for a fresh start.",
          image: "https://picsum.photos/150?random=4",
        },
        {
          title: "Everton FC reveals plans for stadium renovation",
          description:
            "Everton FC unveils ambitious plans to renovate their stadium, promising a modern and enhanced fan experience.",
          image: "https://picsum.photos/150?random=0",
        },
        {
          title: "West Ham United signs veteran goalkeeper",
          description:
            "West Ham United completes the signing of an experienced goalkeeper to bolster their squad for the upcoming season.",
          image: "https://picsum.photos/150?random=9",
        },
      ],
      mainArticle: {
        title: "Exciting Transfer Rumors Rock Premier League Clubs",
        description:
          "Get the latest scoop on the transfer rumors swirling around the Premier League's top clubs as they gear up for the upcoming season.",
        image: "https://picsum.photos/600/300?random=9",
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

@media screen and (max-width: 768px) {
  .top-half-grid {
    grid-template-columns: 1fr;
  }
}
</style>
