import { html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

// Define the rendering function
export function renderCard(c) {
    // Render the HTML template using the provided object `c`
    var oncourt_img = ''
    var progress = ''
    var progress_color = ''

    if (c.oncourt == '1') {
        oncourt_img = 'basketball.png'
    } else {
        oncourt_img = 'Empty.png'
    }

    progress = Math.round(c.progress * 100)

    if (c.side == 'U') {
        if (c.progress  >=  1) {
            progress_color = `#de2707`
        } else if (c.progress > .7) {
            progress_color = '#debe07'
        } else if (c.progress > .5) {
            progress_color = '#81de07'
        } else {
            progress_color = '#07b007'
        }
    }

    if (c.side == 'O') {
        if (c.progress  >=  1) {
            progress_color = '#07b007'
        } else if (c.progress > .7) {
            progress_color = '#81de07'
        } else if (c.progress > .5) {
            progress_color = '#debe07'
        } else {
            progress_color = `#de2707`
        }
    }
    
    const htmlTemplate = html`
    <style>
        .card { background: #000; position: relative; overflow: hidden; padding: 5px; margin: 0px; font-weight: 400; }
        .card-content { font-family: "Copperplate"; font-size: 16px; font-weight: 900; display: flex; justify-content: space-evenly; align-items: center; text-align: center; position: relative; z-index: 1; background: #000; background-image: url('/local/images/bettracker/${c.team}-.png'); background-size: 100%; background-repeat: no-repeat; background-position: center; }
        .header { text-align: center; }
    </style>
    <ha-card>
        <div class="card">
            <div class="card-content">
                <div style="float: left; width: 37%; height: 125px; vertical-align: middle;">
                    ${c.playername}<br>
                    <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/${c.playerid}.png" style="height: 100px; vertical-align: middle;">
                </div> 
                <div style="float: left; width: 32%; height: 125px; vertical-align: middle;" >
                    <center> ${c.stat} ${c.side} ${c.prop} </center>
                    <div style="width: 100%; border: 2px solid white; margin-top: 85px;" >
                        <div style="height: 15px; width: ${progress}%; max-width: 100% !important; background: ${progress_color};"></div>
                    </div> 
                </div>
                <div style="float: left; width: 31%; height: 125px; vertical-align: middle;" >
                    <div style="width: 100%"><center> ${c.time} [${c.home}-${c.visitor}]</center></div>
                    <div style="height: 85px;">
                        <img src="/local/images/bettracker/${oncourt_img}" style="margin: 20px; height: 40px; vertical-align: middle;" >
                    </div>
                    <div style="width: 100%"><center> ${c.current} / ${c.prop} </center></div>
                </div>
            </div>
        </div>
    </ha-card>
`;
    // Return the HTML template
    return htmlTemplate;
}