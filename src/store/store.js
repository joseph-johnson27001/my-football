// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
    selectedName: null,
    selectedFixture: null,
  },
});
