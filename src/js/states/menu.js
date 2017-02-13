import TextButton from '../extensions/textbutton';
import Util from '../utils/util';

export default class Menu extends Phaser.State {

    //  The Google WebFont Loader will look for this object, so create it before loading the script

    preload() {

        //  Load the Google WebFont Loader script


    }

    create() {
        this.game.stage.backgroundColor = Util.getRandomColor();
        this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-250, 'Tic Tac Toe', {
            font: '48px Slabo 27px',
            fill: 'white',
            align: 'center'
        });
        this.title.anchor.setTo(0.5);

        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY-100,
            label: 'Start',
            style: {
                font: '36px Slabo 27px',
                fill: 'white',
                align: 'center'
            }
        });

        this.start.onInputUp.add(()=>{
            this.state.start('Play');

        });

        this.about = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            label: 'About',
            style: {
                font: '36px Slabo 27px',
                fill: 'white',
                align: 'center'
            }
        });

        this.about.onInputUp.add(()=>{
            this.state.start('About');
        });

        this.menuPanel = this.add.group();
        this.menuPanel.add(this.title);
        this.menuPanel.add(this.start);
        this.menuPanel.add(this.about);
    }
}
