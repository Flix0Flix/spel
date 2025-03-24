import Phaser from "phaser"
import Text from './../graphics/text'
import Button from "../graphics/button"
import Level1Scene from "./level-1"

export default class MainMenuScene extends Phaser.Scene {

  static KEY = 'main-menu'

  constructor() {
    super({ key: MainMenuScene.KEY })
  }

  create() {
    // Create the game title
    new Text(this, this.game.config.width/2, 100, 'CAT DASH', 60);

    // Create level select buttons
    new Button(this, 'Start', this.game.config.width/2, 200, 160, 60, () => {
      this.scene.start(Level1Scene.KEY)
    })
  }
}