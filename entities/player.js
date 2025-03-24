import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Image {
  /**
   
@param {Phaser.Scene} scene*/
constructor(scene, x, y, onDiedCallback) {
  super(scene, x, y, 'playerImage');

    this.speed = 350;
    this.jumpStrength = 500;
    this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.onDiedCallback = onDiedCallback;


    scene.add.existing(this);
    scene.physics.add.existing(this);


    this.setDisplaySize(40, 40);


    scene.physics.world.gravity.y = 1000;
  }

  update() {
    if (this.y > this.scene.game.config.height || this.body.touching.right) {
      this.onDiedCallback();
    }

    this.body.setVelocityX(this.speed);

    if (this.jumpKey.isDown && this.body.blocked.down) {
      this.body.setVelocityY(-this.jumpStrength);
    }
  }
}