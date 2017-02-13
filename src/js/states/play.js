import Util from '../utils/util';
export default class Play extends Phaser.State {

    create() {
    	this.game.stage.backgroundColor = Util.getRandomColor();
    }

    update() {

    }

}
