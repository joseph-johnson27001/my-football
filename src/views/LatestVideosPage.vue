<template>
  <div class="videos-page">
    <div class="heading-container">
      <h2 v-if="teamName != null">Latest {{ teamName }} Videos</h2>
      <h2 v-else>Latest Football Videos</h2>
    </div>

    <div class="videos-list">
      <!-- Loop through videos and display each with its description -->
      <div
        v-for="(video, index) in latestVideos"
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
</template>
<script>
export default {
  data() {
    return {
      latestVideos: [],
    };
  },
  computed: {
    teamName() {
      return this.$store.state.selectedTeam || "Arsenal";
    },
  },
  created() {
    this.$store.state.isLoading = true;
    this.latestVideos = [
      {
        src: "https://www.youtube.com/embed/t5EhsXZwn4o?si=EiFsFIn-B4BM6dUP",
        title: this.teamName + " V Liverpool",
        description:
          "Highlights of the recent match between " +
          this.teamName +
          " and Liverpool.",
      },
      {
        src: "https://www.youtube.com/embed/HtiYya12mMQ?si=H-z5o4s1HZWaiKqU",
        title: "Goals of the season",
        description: this.teamName + "'s top goals this season.",
      },
      {
        src: "https://www.youtube.com/embed/89Hd99Mjfjw?si=lfiTL_C_8KI_sEEz",
        title: this.teamName + " training sessions best bits",
        description:
          "Best moments from " + this.teamName + " training sessions.",
      },

      {
        src: "https://www.youtube.com/embed/5j5UknRuIh0?si=vpOptcIDAHVw4yuK",
        title: "Interview",
        description:
          "Interview with the " +
          this.teamName +
          " coach discussing their strategies for their upcoming matches.",
      },

      {
        src: "https://www.youtube.com/embed/_DivH1dWGbw?si=ei4hgVZPPA-S85OK",
        title: this.teamName + " Matchday Analysis",
        description:
          "Analysis of the recent " + this.teamName + " performances.",
      },
      {
        src: "https://www.youtube.com/embed/sWBvs-gwBvs?si=z6mA6y3nd-vvVhFw",
        title: this.teamName + " Insights",
        description:
          "Insights into the journey of " +
          this.teamName +
          " in the league so far.",
      },
    ];
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 1000);
  },
  methods: {
    isYouTubeVideo(video) {
      return video.src.includes("youtube.com");
    },
  },
};
</script>

<style scoped>
.videos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.video-item {
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.video-item:hover {
  background-color: #f2f2f2;
}

.video {
  width: 100%;
}
</style>
