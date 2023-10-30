import { LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { renderCard } from './render_card.js';

export class bettrackerCard extends LitElement {

    static get properties() {
        return {
            hass: {},
            _config: {},
        };
    }

    setConfig(config) {
        this._config = config;
    }

    getCardSize() {
        return 8;
    }

    render() {
        var c = {};  // c is the object that holds the card data used to render the HTML

        //
        //  Render error message if missing configuration, entity, or state
        //
        if (!this.hass || !this._config) {
            throw new Error("You need to define an entity");
        }
        const stateObj = this.hass.states[this._config.entity];
        
        //
        //  Set card options based on configuration
        //
        const index = this._config.index - 1;
        
        //
        //  Set Card Values
        //
        c.team = stateObj.attributes.bets[index].team;
        c.playerid = stateObj.attributes.bets[index].playerid;
        c.playername = stateObj.attributes.bets[index].playername;
        c.side = stateObj.attributes.bets[index].side;
        c.prop = stateObj.attributes.bets[index].prop;
        c.stat = stateObj.attributes.bets[index].stat;
        c.current = stateObj.attributes.bets[index].current;
        c.progress = stateObj.attributes.bets[index].progress;
        c.time = stateObj.attributes.bets[index].time;
        c.home = stateObj.attributes.bets[index].home;
        c.visitor = stateObj.attributes.bets[index].visitor;
        c.oncourt = stateObj.attributes.bets[index].oncourt;
        
        //
        //  Render the card based on the state
        //
        return renderCard(c);
        
    }

//
// Trigger the UI Card Editor from Card Picker
//    Uncomment to enable visual editor
//
    //  static getConfigElement() {
    //    // Create and return an editor element
    //    return document.createElement("my-custom-card-editor");
    //  }
    //
    //  static getStubConfig() {
    //    // Return a minimal configuration that will result in a working card configuration
    //    return { entity: "" };
    //  }

}

customElements.define("bettracker-card", bettrackerCard);

console.info("%c BETTRACKER-CARD 1 IS INSTALLED", "color: green; font-weight: bold");
