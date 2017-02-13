import * as states from './states';

let wfconfig = {

    active: function() {
        console.log("font loaded");
        init();
    },

    google: {
        families: ['Slabo+27px']
    }

};

WebFont.load(wfconfig);

var init = function () {
	const GAME = new Phaser.Game(800, 1000, Phaser.AUTO);



	Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

	GAME.state.start('Boot');
}


