import { defineStore } from "pinia";

export const useViewStateStore = defineStore({
  id: "viewState",
  state: () => ({
    sidebarShown: false,
    spinnerShown: false
  }),
  getters: {
    getSidebarShown: (state) => {
      return this.sidebarShown;
    },
    getSpinnerShown: (state) => {
      return this.spinnerShown;
    },
  },
  actions: {
    setSidebarShown(state) {
      this.sidebarShown = state;
    },
    setSpinnerShown(state) {
      this.spinnerShown = state;
    },
  },
});
