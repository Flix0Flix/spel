import Phaser from "phaser";

export default class Platform extends Phaser.GameObjects.Rectangle {
  /**
   * @param {Phaser.Scene} scene 
   * @param {Phaser.Physics.Arcade.StaticGroup} staticCollisionGroup
   */
  constructor(scene, x, y, width, height, staticCollisionGroup) {
    super(scene, x, y, width, height, 0xeeeeee)

    this.setOrigin(0, 0)
    
    scene.add.existing(this)
    staticCollisionGroup.add(this)
  }
}