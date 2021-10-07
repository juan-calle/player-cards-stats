import fetchData from '../api/apiServices.js';
import markup from './htmlTemplate.js';
const { data } = await fetchData;
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
    generatedMarkup += markup.playerSelector();
    generatedMarkup += markup.playerInfo();
    generatedMarkup += markup.closeWrapper();
    return generatedMarkup;
  },
};
