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
          <span class="team-name">{{ liveFixture.homeTeam.name }}</span>
        </div>
        <div class="score-container">
          <span class="team-score"> {{ liveFixture.homeScore }}</span>
          -
          <span class="team-score">{{ liveFixture.awayScore }}</span>
        </div>
        <div class="team">
          <span class="team-name">{{ liveFixture.awayTeam.name }} </span>
          <img
            :src="liveFixture.awayTeam.crest"
            alt="Away Team Crest"
            class="team-crest"
          />
        </div>
      </div>
      <div class="match-details">
        <span class="match-status">{{ liveFixture.status }}</span>
        <span class="match-time">{{ liveFixture.time }}</span>
      </div>
      <div class="live-commentary">
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
      liveFixture: {
        homeTeam: {
          name: "Arsenal",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        },
        awayTeam: {
          name: "Manchester United",
          crest:
            "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        },
        homeScore: 3,
        awayScore: 1,
        status: "In Progress",
        time: "45+2'",
        comments: [
          {
            id: 1,
            text: "Exciting start to the match! Both teams are showing great energy and determination.",
            time: "1'",
          },
          {
            id: 2,
            text: "Home team dominating possession. They are pushing forward aggressively, looking for an early goal.",
            time: "5'",
          },
          {
            id: 3,
            text: "Great save by the goalkeeper! The away team had a clear chance, but the goalkeeper denies them with a fantastic reflex save.",
            time: "10'",
          },
          {
            id: 4,
            text: "Corner kick for the away team. The home defense is under pressure as the away team prepares to take the corner.",
            time: "15'",
          },
          {
            id: 5,
            text: "Goal! Home team takes the lead. A brilliant through ball finds the striker who slots it past the keeper with ease.",
            time: "20'",
          },
          {
            id: 6,
            text: "The away team is pushing hard for an equalizer. They've increased their intensity and are attacking with more numbers.",
            time: "25'",
          },
          {
            id: 7,
            text: "Yellow card for a reckless tackle by a home team player. The referee quickly brandishes the card, cautioning the player.",
            time: "30'",
          },
          {
            id: 8,
            text: "The home crowd is getting restless as the away team continues to apply pressure. They're urging their team to regain control of the match.",
            time: "35'",
          },
          {
            id: 9,
            text: "Substitution for the home team. A fresh pair of legs enters the field as the coach looks to change the dynamics of the game.",
            time: "40'",
          },
          {
            id: 10,
            text: "The away team is awarded a free-kick in a dangerous position. Can they capitalize on this opportunity to equalize before halftime?",
            time: "45+2'",
          },
          {
            id: 11,
            text: "Half-time whistle blows. The home team leads by a solitary goal, but the away team is not out of the game yet.",
            time: "HT",
          },
          {
            id: 12,
            text: "The second half kicks off. Both teams make tactical adjustments during the break, and it'll be interesting to see how they approach the remainder of the match.",
            time: "46'",
          },
          {
            id: 13,
            text: "Chance for the home team early in the second half. A swift counter-attack catches the away defense off guard, but the shot goes wide.",
            time: "50'",
          },
          {
            id: 14,
            text: "The away team is pushing forward in search of an equalizer. They're dominating possession and putting the home defense under immense pressure.",
            time: "55'",
          },
          {
            id: 15,
            text: "A controversial decision by the referee as he awards a penalty to the home team. The away team vehemently protests, but the decision stands.",
            time: "60'",
          },
          {
            id: 16,
            text: "Goal! The home team doubles their lead from the penalty spot. The goalkeeper guessed the right direction but couldn't reach the ball.",
            time: "65'",
          },
          {
            id: 17,
            text: "The away team makes a substitution, bringing on an attacking player to bolster their offense. Can they stage a comeback?",
            time: "70'",
          },
          {
            id: 18,
            text: "The home team's defense is rock solid, thwarting every attempt by the away team to break through. They're maintaining their two-goal lead with resilience.",
            time: "75'",
          },
          {
            id: 19,
            text: "The home crowd erupts in cheers as their team launches a swift counter-attack. The away defense scrambles to recover, but the home team is relentless.",
            time: "80'",
          },
          {
            id: 20,
            text: "Goal! A spectacular long-range strike from the home team catches everyone by surprise, including the goalkeeper. The home team extends their lead.",
            time: "85'",
          },
          {
            id: 21,
            text: "Injury scare for the home team's key player. The medical team rushes onto the field to provide treatment. Hopefully, it's nothing serious.",
            time: "90'",
          },
          {
            id: 22,
            text: "Full-time whistle blows. The home team emerges victorious with a convincing performance, securing all three points.",
            time: "FT",
          },
        ],
      },
    };
  },
  computed: {
    orderedComments() {
      return this.liveFixture.comments.slice().reverse();
    },
  },
};
</script>

<style scoped>
.live-fixture {
  padding: 20px;
}
.teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.team {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-name {
  font-weight: bold;
}

.score-container {
  width: 100%;
  text-align: center;
}

.team-score {
  font-size: 24px;
}

.team-crest {
  width: 50px;
  height: auto;
  margin: auto 10px;
}

.match-details {
  text-align: center;
  margin-bottom: 20px;
}

.match-status {
  font-weight: bold;
  margin-right: 10px;
}

.live-commentary {
  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    border: 1px solid #ddd;
    padding: 20px 8px;
  }
  .comment-time {
    width: 50px;
    font-weight: bold;
  }
}
</style>
