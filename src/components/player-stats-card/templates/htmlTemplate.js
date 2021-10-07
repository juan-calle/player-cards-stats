import Template from './templateManager.js';

export default {
  openWrapper() {
    return `<div class="container"><main class="player-stats-card-component">`;
  },

  playerSelector(options) {
    return ` <!--Section Player Selection--><section class="player-selection"><label for="player-selection"></label><select name="Player selection dropdown" id="player-selection" tabindex="0" autofocus ><option disabled selected value>Select a player...</option>{options}</select></section><!-- /section player-selection -->`;
  },

  playerInfo(info) {
    return `<!-- Section Images -->
      <section class="images"><div class="player-headshot"><img id="player-headshot" src="{info.headshotURL.src}", alt="{info.headshotURL.alt}"></div><div class="team-badge"><img id="team-badge"src="{info.teamBadgeURL.src}" alt="{info.teamBadgeURL.alt}"></div></section><!-- /section images --><!-- Section Player Stats --><section class="player-stats"><!-- stats-table --><table id="stats-table"><thead  id="table-title"><tr colspan="2"><th><h3 id="player-name">{info.name}</h3><span id="position-info">{info.position}</span></th></tr></thead><tbody><tr class="stats-row"><td class="stat-title">Appearances</td><td class="stat-value" id="appearances">{info.stats.appearances}</td></tr><tr class="stats-row"><td class="stat-title">Goals</td><td class="stat-value" id="goals">{info.stats.goals}</td></tr><tr class="stats-row"><td class="stat-title">Assists</td><td class="stat-value" id="assists">{info.stats.assists}</td></tr><tr class="stats-row"><td class="stat-title">Goals per match</td><td class="stat-value" id="goals-match">{info.stats.goalsMatch}</td></tr><tr class="stats-row"><td class="stat-title">Passes per minute</td><td class="stat-value" id="passes-minute">{info.stats.passesMinute}</td></tr></tbody></table><!-- /stats-table --></section><!-- /section player-stats -->`;
  },

  closeWrapper() {
    return `</main><!-- /main --></div><!-- /container -->`;
  },
};
