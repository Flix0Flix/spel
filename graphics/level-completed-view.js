import Phaser from 'phaser'
import Text from './text'
import Button from './button'

export default class LevelCompletedView extends Phaser.GameObjects.Container {
  /**
   * @param {Phaser.Scene} scene 
   */
  constructor(scene, onBackCallback, onNextCallback) {
    super(scene, 0, 0)

    this.scrollFactorX = this.scrollFactorY = 0
    
    const bg = scene.add.rectangle(0, 0, scene.game.config.width, scene.game.config.height, 0x000000, 0.75)
    bg.setOrigin(0, 0)
    this.add(bg)

    const text = new Text(scene, scene.game.config.width/2, 200, "Level Completed!", 64)
    this.add(text)

    if(onBackCallback) {
      const backButton = new Button(scene, "Back to Menu", scene.game.config.width/2 - 0, 300, 300, 60, onBackCallback)
      this.add(backButton)
    }

    scene.add.existing(this)
  }
}