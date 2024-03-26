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
            :style="{
              borderBottom:
                index < newsArticles.length - 1 ? '1px solid #ddd' : 'none',
            }"
          >
            <img :src="article.image" :alt="article.title" class="news-image" />
            <div class="news-content">
              <p class="news-title">{{ article.title }}</p>
              <p class="news-description">{{ article.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="premier-league-table">
        <img
          src="premier_league_table.jpg"
          alt="Premier League Table"
          class="table-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsArticles: [
        {
          title: "Manchester United signs new striker",
          description:
            "Manchester United completes the signing of a new striker for the upcoming season.",
          image: "https://via.placeholder.com/150",
        },
        {
          title: "Liverpool announces new sponsorship deal",
          description:
            "Liverpool Football Club announces a new sponsorship deal with a major international brand.",
          image: "https://via.placeholder.com/150",
        },
        {
          title: "Premier League introduces new rule changes",
          description:
            "The Premier League reveals new rule changes for the upcoming season to enhance fair play.",
          image: "https://via.placeholder.com/150",
        },
        // Add more news articles as needed      ],
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
</style>
