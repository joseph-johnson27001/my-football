import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
    selectedName: null,
    selectedFixture: null,
    playerName: null,
    playerNumber: null,
    selectedTeam: null,
    showNotification: true,
  },
});
