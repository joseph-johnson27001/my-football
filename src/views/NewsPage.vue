<template>
  <div class="news-page">
    <!-- News Heading and Team Selection -->
    <div class="header">
      <p>News</p>
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
    </div>

    <!-- Articles Section -->
    <div class="articles-section">
      <!-- Display articles based on selected team -->
      <div v-if="selectedTeam === 'all'" class="article-grid">
        <!-- Show all articles -->
        <div v-for="article in articles" :key="article.id" class="article">
          <img
            :src="getRandomImage()"
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
            :src="getRandomImage()"
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
        },
        {
          id: 2,
          title: "Article 2",
          description: "Description of article 2",
          content: "Content of article 2",
        },
        {
          id: 3,
          title: "Article 3",
          description: "Description of article 3",
          content: "Content of article 3",
        },
        {
          id: 4,
          title: "Article 4",
          description: "Description of article 4",
          content: "Content of article 4",
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
  methods: {
    getRandomImage() {
      // Generate random image URL from picsum.photos
      const randomWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
      const randomHeight = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
      return `https://picsum.photos/${randomWidth}/${randomHeight}`;
    },
  },
};
</script>

<style scoped>
.news-page {
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.team-selection {
  display: flex;
  align-items: center;
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
  height: 150px;
  object-fit: cover;
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

label {
  margin-right: 5px;
}
</style>
