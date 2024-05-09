<template>
  <div class="videos-page">
    <span class="heading-container heading-span">
      <h2>Latest Videos</h2>
      <div class="matchday-dropdown">
        <select v-model="selectedTeam" id="team-dropdown">
          <option value="">All Teams</option>
          <option v-for="team in teamList" :key="team" :value="team">
            {{ team }}
          </option>
        </select>
      </div>
    </span>

    <div class="videos-list">
      <div
        v-for="(video, index) in filteredVideos"
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
      selectedTeam: null,
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
      filteredVideos: [],
    };
  },
  created() {
    if (this.$store.state.selectedTeam) {
      this.selectedTeam = this.$store.state.selectedTeam;
    } else {
      this.selectedTeam = "";
    }
    this.$store.state.isLoading = true;
    this.latestVideos = [
      {
        src: "https://www.youtube.com/embed/t5EhsXZwn4o?si=EiFsFIn-B4BM6dUP",
        title: "Arsenal V Liverpool",
        description:
          "Highlights of the recent match between Arsenal and Liverpool.",
        teams: ["Arsenal", "Liverpool"],
      },
      {
        src: "https://www.youtube.com/embed/HtiYya12mMQ?si=H-z5o4s1HZWaiKqU",
        title: "Goals of the season",
        description: "Arsenal's top goals this season.",
        teams: ["Arsenal"],
      },
      {
        src: "https://www.youtube.com/embed/89Hd99Mjfjw?si=lfiTL_C_8KI_sEEz",
        title: "Arsenal training sessions best bits",
        description: "Best moments from Arsenal training sessions.",
        teams: ["Arsenal"],
      },
      {
        src: "https://www.youtube.com/embed/5j5UknRuIh0?si=vpOptcIDAHVw4yuK",
        title: "Interview",
        description:
          "Interview with the Arsenal coach discussing their strategies for their upcoming matches.",
        teams: ["Arsenal"],
      },
      {
        src: "https://www.youtube.com/embed/_DivH1dWGbw?si=ei4hgVZPPA-S85OK",
        title: "Arsenal Matchday Analysis",
        description: "Analysis of the recent Arsenal performances.",
        teams: ["Arsenal"],
      },
      {
        src: "https://www.youtube.com/embed/sWBvs-gwBvs?si=z6mA6y3nd-vvVhFw",
        title: "Arsenal Insights",
        description:
          "Insights into the journey of Arsenal in the league so far.",
        teams: ["Arsenal"],
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
  watch: {
    selectedTeam(newTeam) {
      if (newTeam) {
        this.filteredVideos = this.latestVideos.filter((video) =>
          video.teams.includes(newTeam)
        );
      }
      if (newTeam == "") {
        this.filteredVideos = this.latestVideos;
      }
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

#team-dropdown {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.matchday-dropdown label {
  margin-right: 10px;
}

.matchday-dropdown select {
  padding: 8px 4px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-family: "Montserrat";
  font-size: 0.9em;
}

.matchday-label {
  font-weight: 100;
}

@media screen and (max-width: 546px) {
  .matchday-dropdown {
    width: 100%;
  }
  #team-dropdown {
    width: 100%;
  }
}
</style>
