<template>
  <div class="news-page">
    <p>News</p>
    <!-- Team Selection Dropdown -->
    <div class="team-selection">
      <label for="team-select">Select Team: </label>
      <select v-model="selectedTeam" id="team-select">
        <option value="all">All Teams</option>
        <!-- Generate options for teams -->
        <option v-for="team in teams" :key="team.id" :value="team.id">
          {{ team.name }}
        </option>
      </select>
    </div>
    <!-- Articles Section -->
    <div class="articles-section">
      <!-- Display articles based on selected team -->
      <div v-if="selectedTeam === 'all'" class="article-grid">
        <!-- Show all articles -->
        <div v-for="article in articles" :key="article.id" class="article">
          <img
            v-if="article.image"
            :src="article.image"
            alt="Article Image"
            class="article-image"
          />
          <div class="article-content">
            <h3>{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
          </div>
        </div>
      </div>
      <div v-else class="article-grid">
        <!-- Show articles for selected team -->
        <div
          v-for="article in filteredArticles"
          :key="article.id"
          class="article"
        >
          <img
            v-if="article.image"
            :src="article.image"
            alt="Article Image"
            class="article-image"
          />
          <div class="article-content">
            <h3>{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
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
      selectedTeam: "all", // Default selected team
      teams: [
        // Dummy teams data
        { id: 1, name: "Team A" },
        { id: 2, name: "Team B" },
        { id: 3, name: "Team C" },
      ],
      articles: [
        // Dummy articles data
        {
          id: 1,
          title: "Article 1",
          description: "Description of article 1",
          content: "Content of article 1",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          title: "Article 2",
          description: "Description of article 2",
          content: "Content of article 2",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          title: "Article 3",
          description: "Description of article 3",
          content: "Content of article 3",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          title: "Article 4",
          description: "Description of article 4",
          content: "Content of article 4",
          image: "https://via.placeholder.com/150",
        },
        // Add more articles as needed
      ],
    };
  },
  computed: {
    // Filter articles based on selected team
    filteredArticles() {
      if (this.selectedTeam === "all") {
        return this.articles;
      } else {
        // Assuming each article has a teamId property
        return this.articles.filter(
          (article) => article.teamId === this.selectedTeam
        );
      }
    },
  },
};
</script>

<style scoped>
.news-page {
  margin: 0 auto;
  padding: 20px;
}

.team-selection {
  margin-bottom: 20px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.article {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.article-image {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.article-content {
  padding: 10px;
}

.article-description {
  font-style: italic;
}

select {
  padding: 5px;
  font-size: 16px;
}
</style>
