import TextButton from '../extensions/textbutton';
import Util from '../utils/util';

export default class About extends Phaser.State {

    create() {

    	this.game.stage.backgroundColor = Util.getRandomColor();

        this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-250, 'Tic Tac Toe', {
            font: '48px Slabo 27px',
            fill: 'white',
            align: 'center'
        });
        this.title.anchor.setTo(0.5);


        this.desc = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-100, 'Created by:\n Abhishek Banerjee', {
            font: '36px Slabo 27px',
            fill: 'white',
            align: 'center'
        });
        this.desc.anchor.setTo(0.5);

        this.back = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY+100,
            label: 'Back',
            style: {
                font: '36px Slabo 27px',
                fill: 'white',
                align: 'center'
            }
        });

        this.back.onInputUp.add(()=>{
            this.state.start('Menu');

        });

        this.menuPanel = this.add.group();
        this.menuPanel.add(this.title);
        this.menuPanel.add(this.desc);
        this.menuPanel.add(this.back);
    }
}
