export default {
  async fetchData() {
    const response = await fetch('./data/player-stats.json');
    const parsed = await response.json();
    return parsed;
  },
};
