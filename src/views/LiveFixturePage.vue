<template>
  <div class="live-fixture-page">
    <h2>LIVE</h2>

    <div class="live-fixture">
      <div class="teams">
        <div class="team">
          <img
            :src="liveFixture.homeTeam.crest"
            alt="Home Team Crest"
            class="team-crest"
          />
          <span class="team-name">
            <h3>{{ liveFixture.homeTeam.name }}</h3></span
          >
        </div>
        <div class="score-container">
          <span class="team-score"> {{ liveFixture.homeScore }}</span>
          -
          <span class="team-score">{{ liveFixture.awayScore }}</span>
        </div>
        <div class="team">
          <span class="team-name"
            ><h3>{{ liveFixture.awayTeam.name }}</h3>
          </span>
          <img
            :src="liveFixture.awayTeam.crest"
            alt="Away Team Crest"
            class="team-crest"
          />
        </div>
      </div>
      <div class="match-details">
        <span v-if="liveFixture.status != ''" class="match-status">{{
          liveFixture.status
        }}</span>
        <span class="match-time">{{ liveFixture.time }}</span>
      </div>
      <!-- GOALSCORERS -->
      <div style="display: grid; grid-template-columns: 1fr 1fr">
        <div style="display: flex; justify-content: flex-end">
          <ul
            style="
              list-style-type: none;
              text-align: right;
              padding-left: 0px;
              padding-right: 15px;
            "
          >
            <li
              v-for="scorer in liveFixture.homeTeam.goalScorers"
              :key="scorer"
            >
              {{ scorer.name }} [{{ scorer.minute }}]
            </li>
          </ul>
        </div>
        <div style="text-align: start">
          <ul
            style="
              list-style-type: none;
              text-align: left;
              padding-right: 0px;
              padding-left: 15px;
            "
          >
            <li
              v-for="scorer in liveFixture.awayTeam.goalScorers"
              :key="scorer"
            >
              [{{ scorer.minute }}] {{ scorer.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="toggle-buttons">
        <button v-if="showStatistics" @click="showStatistics = false">
          Commentary
        </button>
        <button v-else @click="showStatistics = true">Stats</button>
      </div>
      <div v-if="showStatistics" class="statistics-section">
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeScore }}</div>
            <div class="statistic-label">Goals</div>
            <div class="away-value">{{ liveFixture.awayScore }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamGoalsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamGoalsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.shots }}</div>
            <div class="statistic-label">Shots</div>
            <div class="away-value">{{ liveFixture.awayTeam.shots }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Shots on Target</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsOnTargetPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsOnTargetPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.xG }}</div>
            <div class="statistic-label">xG (Expected Goals)</div>
            <div class="away-value">{{ liveFixture.awayTeam.xG }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamXGPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamXGPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Corners</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Fouls</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">
              {{ liveFixture.homeTeam.shotsOnTarget }}
            </div>
            <div class="statistic-label">Tackles</div>
            <div class="away-value">
              {{ liveFixture.awayTeam.shotsOnTarget }}
            </div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: homeTeamShotsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.yellowCards }}</div>
            <div class="statistic-label">Yellow Cards</div>
            <div class="away-value">{{ liveFixture.awayTeam.yellowCards }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamYellowCardsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamYellowCardsPercentage + '%' }"
            ></div>
          </div>
        </div>
        <div class="statistic">
          <div class="statistic-values">
            <div class="home-value">{{ liveFixture.homeTeam.redCards }}</div>
            <div class="statistic-label">Red Cards</div>
            <div class="away-value">{{ liveFixture.awayTeam.redCards }}</div>
          </div>
          <div class="bar-container">
            <div
              class="bar home-team"
              :style="{ width: homeTeamRedCardsPercentage + '%' }"
            ></div>
            <div
              class="bar away-team"
              :style="{ width: awayTeamRedCardsPercentage + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div v-else class="live-commentary">
        <table>
          <tbody>
            <tr v-for="comment in orderedComments" :key="comment.id">
              <td class="comment-time">{{ comment.time }}</td>
              <td>{{ comment.text }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveFixturePage",
  data() {
    return {
      showStatistics: false,
      liveFixture: {
        homeTeam: {
          name: "Arsenal",
          shots: 10,
          shotsOnTarget: 6,
          xG: 1.8,
          yellowCards: 2,
          redCards: 1,
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          goalScorers: [
            { name: "William Saliba", minute: 4 },
            { name: "Gabriel", minute: 25 },
            { name: "Gabriel Jesus", minute: 45 },
            { name: "Bukayo Saka", minute: 84 },
          ],
        },
        awayTeam: {
          name: "Manchester City",
          shots: 8,
          shotsOnTarget: 4,
          xG: 1.2,
          yellowCards: 1,
          redCards: 1,
          crest:
            "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          goalScorers: [{ name: "Earling Haaland", minute: 15 }],
        },
        homeScore: 4,
        awayScore: 1,
        status: "",
        time: "90+5",
        comments: [
          {
            id: 1,
            text: "Exciting start to the match! Both teams are showing great energy and determination.",
            time: "1",
          },
          {
            id: 2,
            text: "Home team dominating possession. They are pushing forward aggressively, looking for an early goal.",
            time: "5",
          },
          {
            id: 3,
            text: "Great save by the goalkeeper! The away team had a clear chance, but the goalkeeper denies them with a fantastic reflex save.",
            time: "10",
          },
          {
            id: 4,
            text: "Corner kick for the away team. The home defense is under pressure as the away team prepares to take the corner.",
            time: "15",
          },
          {
            id: 5,
            text: "Goal! Home team takes the lead. A brilliant through ball finds the striker who slots it past the keeper with ease.",
            time: "20",
          },
          {
            id: 6,
            text: "The away team is pushing hard for an equalizer. They've increased their intensity and are attacking with more numbers.",
            time: "25",
          },
          {
            id: 7,
            text: "Yellow card for a reckless tackle by a home team player. The referee quickly brandishes the card, cautioning the player.",
            time: "30",
          },
          {
            id: 8,
            text: "The home crowd is getting restless as the away team continues to apply pressure. They're urging their team to regain control of the match.",
            time: "35",
          },
          {
            id: 9,
            text: "Substitution for the home team. A fresh pair of legs enters the field as the coach looks to change the dynamics of the game.",
            time: "40",
          },
          {
            id: 10,
            text: "The away team is awarded a free-kick in a dangerous position. Can they capitalize on this opportunity to equalize before halftime?",
            time: "45+2",
          },
          {
            id: 11,
            text: "Half-time whistle blows. The home team leads by a solitary goal, but the away team is not out of the game yet.",
            time: "HT",
          },
          {
            id: 12,
            text: "The second half kicks off. Both teams make tactical adjustments during the break, and it'll be interesting to see how they approach the remainder of the match.",
            time: "46",
          },
          {
            id: 13,
            text: "Chance for the home team early in the second half. A swift counter-attack catches the away defense off guard, but the shot goes wide.",
            time: "50",
          },
          {
            id: 14,
            text: "The away team is pushing forward in search of an equalizer. They're dominating possession and putting the home defense under immense pressure.",
            time: "55",
          },
          {
            id: 15,
            text: "A controversial decision by the referee as he awards a penalty to the home team. The away team vehemently protests, but the decision stands.",
            time: "60",
          },
          {
            id: 16,
            text: "Goal! The home team doubles their lead from the penalty spot. The goalkeeper guessed the right direction but couldn't reach the ball.",
            time: "65",
          },
          {
            id: 17,
            text: "The away team makes a substitution, bringing on an attacking player to bolster their offense. Can they stage a comeback?",
            time: "70",
          },
          {
            id: 18,
            text: "The home team's defense is rock solid, thwarting every attempt by the away team to break through. They're maintaining their two-goal lead with resilience.",
            time: "75",
          },
          {
            id: 19,
            text: "The home crowd erupts in cheers as their team launches a swift counter-attack. The away defense scrambles to recover, but the home team is relentless.",
            time: "80",
          },
          {
            id: 20,
            text: "Goal! A spectacular long-range strike from the home team catches everyone by surprise, including the goalkeeper. The home team extends their lead.",
            time: "85",
          },
          {
            id: 21,
            text: "Injury scare for the home team's key player. The medical team rushes onto the field to provide treatment. Hopefully, it's nothing serious.",
            time: "90",
          },
          // {
          //   id: 22,
          //   text: "Full-time whistle blows. The home team emerges victorious with a convincing performance, securing all three points.",
          //   time: "FT",
          // },
        ],
      },
    };
  },
  computed: {
    orderedComments() {
      return this.liveFixture.comments.slice().reverse();
    },

    homeTeamGoalsPercentage() {
      return (this.liveFixture.homeScore / this.maxGoals) * 100;
    },

    awayTeamGoalsPercentage() {
      return (this.liveFixture.awayScore / this.maxGoals) * 100;
    },

    homeTeamShotsPercentage() {
      return (this.liveFixture.homeTeam.shots / this.maxShots) * 100;
    },
    awayTeamShotsPercentage() {
      return (this.liveFixture.awayTeam.shots / this.maxShots) * 100;
    },
    homeTeamShotsOnTargetPercentage() {
      return (
        (this.liveFixture.homeTeam.shotsOnTarget / this.maxShotsOnTarget) * 100
      );
    },
    awayTeamShotsOnTargetPercentage() {
      return (
        (this.liveFixture.awayTeam.shotsOnTarget / this.maxShotsOnTarget) * 100
      );
    },
    homeTeamXGPercentage() {
      return (this.liveFixture.homeTeam.xG / this.maxXG) * 100;
    },
    awayTeamXGPercentage() {
      return (this.liveFixture.awayTeam.xG / this.maxXG) * 100;
    },
    homeTeamYellowCardsPercentage() {
      return (
        (this.liveFixture.homeTeam.yellowCards / this.maxYellowCards) * 100
      );
    },
    awayTeamYellowCardsPercentage() {
      return (
        (this.liveFixture.awayTeam.yellowCards / this.maxYellowCards) * 100
      );
    },
    homeTeamRedCardsPercentage() {
      return (this.liveFixture.homeTeam.redCards / this.maxRedCards) * 100;
    },
    awayTeamRedCardsPercentage() {
      return (this.liveFixture.awayTeam.redCards / this.maxRedCards) * 100;
    },
    maxShots() {
      return Math.max(
        this.liveFixture.homeTeam.shots,
        this.liveFixture.awayTeam.shots
      );
    },
    maxShotsOnTarget() {
      return Math.max(
        this.liveFixture.homeTeam.shotsOnTarget,
        this.liveFixture.awayTeam.shotsOnTarget
      );
    },
    maxXG() {
      return Math.max(
        this.liveFixture.homeTeam.xG,
        this.liveFixture.awayTeam.xG
      );
    },
    maxYellowCards() {
      return Math.max(
        this.liveFixture.homeTeam.yellowCards,
        this.liveFixture.awayTeam.yellowCards
      );
    },
    maxRedCards() {
      return Math.max(
        this.liveFixture.homeTeam.redCards,
        this.liveFixture.awayTeam.redCards
      );
    },
    maxGoals() {
      return Math.max(this.liveFixture.homeScore, this.liveFixture.awayScore);
    },
  },
  mounted() {
    this.$store.state.isLoading = true;
    setTimeout(() => {
      this.$store.state.isLoading = false;
    }, 500);
  },
};
</script>

<style scoped>
.toggle-buttons {
  text-align: right;
  margin-bottom: 20px;
}

.toggle-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1f3f7f;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

.toggle-buttons button:hover {
  color: gold;
}

.teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.team {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.team-name {
  font-weight: bold;
  font-size: 1.3rem;
}

.score-container {
  width: 100%;
  text-align: center;
}

.team-score {
  font-size: 24px;
}

.team-crest {
  max-height: 150px;
  width: auto;
  margin: auto 10px;
}

.match-details {
  text-align: center;
}

.match-status {
  font-weight: bold;
  margin-right: 10px;
}

.live-commentary {
  table {
    width: 95%;
    border-collapse: collapse;
    margin: auto;
  }

  td {
    border: 1px solid #ddd;
    padding: 20px 8px;
    text-align: justify;
  }
  .comment-time {
    width: 50px;
    font-weight: bold;
    text-align: center;
  }
}

.statistics-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.statistic {
  width: 95%;
  margin-bottom: 20px;
}

.statistic-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.bar-container {
  display: flex;
  height: 20px;
}

.bar {
  height: 100%;
}

.home-team {
  background-color: #007bff;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

.away-team {
  background-color: #28a745;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}

.statistic-values {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .team-crest {
    max-height: 80px;
  }
}

@media screen and (max-width: 546px) {
  .team-crest {
    max-height: 45px;
  }
  h3 {
    font-size: 1.2rem;
  }
}
</style>
