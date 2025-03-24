import Phaser from 'phaser'

export default class Goal extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, onLevelCompleted) {
    super(scene, x, 0, 40, 1000, 0x0066ff, 0.33)

    this.setOrigin(1, 0)
    this.onLevelCompleted = onLevelCompleted

    scene.add.existing(this)
  }

  update(playerX) {
    if(playerX > this.x) {
      this.onLevelCompleted()
    }
  }
}
