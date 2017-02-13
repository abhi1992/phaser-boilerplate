export default class Preload extends Phaser.State {

    preload() {

        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        this.loaderBg.anchor.setTo(0.5);
        this.loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.loaderBar);

        this.load.image('title', 'img/title.png');
        this.load.image('board1', 'img/board_1.png');
        this.load.image('x', 'img/x.png');
        this.load.image('o', 'img/o.png');

    }

    create() {
        this.state.start('Menu');
    }

}
