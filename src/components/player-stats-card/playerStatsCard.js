import style from './styles/style.styles.scss';
import Template from './templates/templateManager';

class PlayerStatsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
    // Webpack compiles the SCSS, gets appended as a string
    this.theme = document.createElement('style');
    this.theme.type = 'text/css';
    this.theme.appendChild(document.createTextNode(style));
    this.shadowRoot.appendChild(this.theme);
    this.dom = Template.mapDOM(this.shadowRoot);
    this.dom.playerSelector.addEventListener('change', event =>
      this.playerUpdate(event)
    );
  }

  playerUpdate(event) {
    const player = Template.player(event.target.value);
    this.dom.playerHeadshot.src = player.headshotURL.src;
    this.dom.playerHeadshot.setAttribute('alt', player.headshotURL.alt);
    this.dom.teamBadge.src = player.teamBadgeURL.src;
    this.dom.teamBadge.setAttribute('alt', player.teamBadgeURL.alt);
    this.dom.positionInfo.innerHTML = player.position;
    this.dom.playerName.innerHTML = player.name;
    this.dom.appearances.innerHTML = player.stats.appearances;
    this.dom.goals.innerHTML = player.stats.goals;
    this.dom.assists.innerHTML = player.stats.assists;
    this.dom.goalsMatch.innerHTML = player.stats.goalsMatch;
    this.dom.passesMinute.innerHTML = player.stats.passesMinute;
  }
}

if (!customElements.get('player-stats-card')) {
  customElements.define('player-stats-card', PlayerStatsCard);
}
