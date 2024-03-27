<template>
  <div class="videos-page">
    <div class="heading-container">
      <h2>Latest {{ teamName }} Videos</h2>
    </div>

    <div class="videos-list">
      <!-- Loop through videos and display each with its description -->
      <div
        v-for="(video, index) in latestVideos"
        :key="index"
        class="video-item"
      >
        <video :src="video.src" controls class="video"></video>
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
    this.latestVideos = [
      {
        src: "path/to/video1.mp4",
        title: this.teamName + " V Liverpool",
        description:
          "Highlights of the recent match between " +
          this.teamName +
          " and Liverpool.",
      },
      {
        src: "path/to/video2.mp4",
        title: "Video 2",
        description: this.teamName + "'s top goals this season.",
      },
      {
        src: "path/to/video3.mp4",
        title: "Video 3",
        description:
          "Best moments from  " + this.teamName + " training sessions.",
      },
      {
        src: "path/to/video4.mp4",
        title: "Video 4",
        description:
          "Interview with the  " +
          this.teamName +
          " coach discussing their strategies for their upcoming matches.",
      },
      {
        src: "path/to/video5.mp4",
        title: "Video 5",
        description:
          "Analysis of the recent  " + this.teamName + " performances.",
      },
      {
        src: "path/to/video6.mp4",
        title: "Video 6",
        description:
          "Insights into the journey of " +
          this.teamName +
          " in the league so far.",
      },
    ];
  },
};
</script>

<style scoped>
.videos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.video {
  width: 100%;
}
</style>
