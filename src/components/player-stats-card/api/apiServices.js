import 'regenerator-runtime/runtime';

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
  getPic(type, id, name) {
    return type === 'headshot'
      ? { src: `./assets/players/p${id}.png`, alt: `${name}'s picture` }
      : { src: `./assets/badges/b${id}.png`, alt: `${name}'s logo badge` };
  },

  getName(first, last) {
    return `${first} ${last}`;
  },

  getPosition(positionInfo) {
    const regExp = /(?:Second) |\w+$/g;
    return positionInfo.match(regExp).join('');
  },

  getStats(statName, appearances, goals, fwdPass, backPass, minsPlayed) {
    return statName === 'goalsMatch'
      ? (goals / appearances).toFixed(2)
      : ((fwdPass + backPass) / minsPlayed).toFixed(2);
  },

  // eslint-disable-next-line consistent-return
  getPlayerIndex(arr, id) {
    let idx = 0;
    for (let index = 0; index < arr.length; index++) {
      // eslint-disable-next-line eqeqeq
      if (arr[index].player.id == id) {
        idx = index;
        return idx;
      }
    }
  },
  checkMissingStats(rawData, index) {
    const names = [
      'goals',
      'losses',
      'wins',
      'draws',
      'fwd_pass',
      'goal_assist',
      'appearances',
      'mins_played',
      'backward_pass',
    ];
    const clone = { ...rawData };
    console.log(clone);

    // eslint-disable-next-line prefer-destructuring
    const stats = clone[index].stats;

    const existentNames = [];
    if (stats.length !== 9) {
      for (const stat of stats) {
        names.includes(stat.name) ? existentNames.push(stat.name) : '';
      }
      const missingStats = names.filter(name => !existentNames.includes(name));
      for (const stat of missingStats) {
        stats.splice(names.indexOf(stat), 0, { name: stat, value: 'n/a' });
      }
      return clone[index];
    }
    return rawData[index];
  },
};
