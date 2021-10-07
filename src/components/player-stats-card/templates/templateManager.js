import api from '../api/apiServices';
import markup from './htmlTemplate';

const data = await api.fetchData();

export default {
  mapDOM(scope) {
    return {
      playerSelector: scope.querySelector('#player-selection'),
      playerHeadshot: scope.querySelector('#player-headshot'),
      teamBadge: scope.querySelector('#team-badge'),
      positionInfo: scope.querySelector('#position-info'),
      playerName: scope.querySelector('#player-name'),
      appearances: scope.querySelector('#appearances'),
      goals: scope.querySelector('#goals'),
      assists: scope.querySelector('#assists'),
      goalsMatch: scope.querySelector('#goals-match'),
      passesMinute: scope.querySelector('#passes-minute'),
    };
  },
  render() {
    return this.html();
  },
  html() {
    let generatedMarkup = '';
    generatedMarkup += markup.openWrapper();
    generatedMarkup += markup.playerSelector(this.options());
    // generatedMarkup += markup.playerInfo();
    generatedMarkup += markup.closeWrapper();
    return generatedMarkup;
  },

  /* Takes the info needed to populate the dropdown menu and generates an option
  value for each player */
  options() {
    return data.players
      .map(item => {
        const {
          id,
          name: { first, last },
        } = item.player;
        return `<option value='${id}'>${first} ${last}</option>`;
      })
      .join('');
  },
};
