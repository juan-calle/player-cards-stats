export default {
  async fetchData() {
    let parsed;
    try {
      const response = await fetch('./data/player-stats.json');
      parsed = await response.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    return parsed;
  },
};
