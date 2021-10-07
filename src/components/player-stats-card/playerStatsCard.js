import style from './styles/style.scss';
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
    console.log(event);
  }
}

if (!customElements.get('player-stats-card')) {
  customElements.define('player-stats-card', PlayerStatsCard);
}
