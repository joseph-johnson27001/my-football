<template>
  <div class="team-page">
    <div class="heading-container">
      <h2>{{ this.$store.state.selectedTeam }}</h2>
    </div>

    <div class="top-half-grid">
      <div class="team-news">
        <div class="latest-news">
          <div
            v-for="(article, index) in newsArticles"
            :key="index"
            class="news-item"
          >
            <img :src="article.image" :alt="article.title" class="news-image" />
            <div class="news-content">
              <p class="news-title">{{ article.title }}</p>
              <p class="news-description">{{ article.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="premier-league-table"><NarrowTable /></div>
    </div>
  </div>
</template>

<script>
import NarrowTable from "@/components/NarrowTable.vue";

export default {
  components: {
    NarrowTable,
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
          title: "Chelsea FC unveils plans for stadium expansion",
          description:
            "Chelsea FC announces ambitious plans for expanding their stadium capacity to accommodate more fans.",
          image: "https://picsum.photos/150?random=5",
        },
        {
          title: "Arsenal FC appoints new head coach",
          description:
            "Arsenal FC appoints a new head coach ahead of the upcoming season, aiming for a fresh start.",
          image: "https://picsum.photos/150?random=4",
        },
        {
          title: "Manchester City launches new community outreach program",
          description:
            "Manchester City launches a new initiative aimed at fostering community engagement and social responsibility.",
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-half-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.news-item {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 5px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0px;
  cursor: pointer;
}

.news-item:hover {
  background-color: #f2f2f2;
  border-bottom: 1px solid #3498db;
}

.news-image {
  border-radius: 4px;
  border: 1px solid #ccc;
}

.news-title {
  font-weight: 500;
}

.news-content {
  padding: 0px 10px;
}

.news-description {
  font-size: 0.95rem;
}
</style>
