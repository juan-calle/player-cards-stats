import dataHelpers from '../api/apiServices';
import markup from './htmlTemplate';

const fetched = await dataHelpers.fetchData();
const data = fetched.players;
const {
  getPic,
  getName,
  getPosition,
  getStats,
  getPlayerIndex,
  checkMissingStats,
} = dataHelpers;
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
    generatedMarkup += markup.playerInfo(this.player());
    generatedMarkup += markup.closeWrapper();
    return generatedMarkup;
  },
  options() {
    return data
      .map(item => {
        const {
          id,
          name: { first, last },
        } = item.player;
        return `<option value='${id}'>${first} ${last}</option>`;
      })
      .join('');
  },
  player(id) {
    let indx = 0;
    if (id != null) indx = getPlayerIndex(data, id);
    const {
      player: {
        id: playerId,
        name: { first, last },
        info: { positionInfo },
        currentTeam: { id: teamId, name: teamName },
      },
      stats: {
        0: { value: goals },
        4: { value: fwdPass },
        5: { value: assists },
        6: { value: appearances },
        7: { value: minsPlayed },
        8: { value: backPass },
      },
    } = checkMissingStats(data, indx);
    const playerInfo = {
      playerId,
      first,
      last,
      positionInfo,
      teamId,
      teamName,
      stats: { goals, fwdPass, assists, appearances, minsPlayed, backPass },
    };

    playerInfo.name = getName(first, last);
    playerInfo.position = getPosition(positionInfo);
    playerInfo.stats.goalsMatch = getStats(
      'goalsMatch',
      appearances,
      goals,
      fwdPass,
      backPass,
      minsPlayed
    );
    playerInfo.stats.passesMinute = getStats(
      '',
      appearances,
      goals,
      fwdPass,
      backPass,
      minsPlayed
    );
    playerInfo.headshotURL = getPic('headshot', playerId, playerInfo.name);
    playerInfo.teamBadgeURL = getPic('teamBadgeURL', teamId, teamName);

    [
      'first',
      'last',
      'positionInfo',
      'fwdPass',
      'backPass',
      'minsPlayed',
      'teamId',
      'teamName',
    ].forEach(prop => delete playerInfo[prop]);
    return playerInfo;
  },
};
