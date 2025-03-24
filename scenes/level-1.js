import Phaser from "phaser";
import Platform from "../entities/platform";
import Player from "../entities/player";
import Goal from "../entities/goal";
import LevelCompletedView from "../graphics/level-completed-view";
import MainMenuScene from "./main-menu";

export default class Level1Scene extends Phaser.Scene {
  static KEY = 'level-1'

  constructor() {
    super({key: Level1Scene.KEY})
  }

preload() {
    this.load.image('playerImage', 'bild.png');
}

  create() {
    this.player = new Player(this, 0, 400, () => {
      // Player died, reset...
      this.player.x = 0
      this.player.y = 400
      // Om ni har moving objects, så som enemies
      // eller platforms som rör på sig, måste ni
      // också resetta deras position och hastighet
    })

    this.platforms = this.physics.add.staticGroup()
    new Platform(this, 0, 500, 600, 40, this.platforms)
    new Platform(this, 750, 450, 50, 40, this.platforms)
    new Platform(this, 925, 500, 50, 40, this.platforms)
    new Platform(this, 1500, 420, 50, 80, this.platforms)
    new Platform(this, 1500, 420, 150, 40, this.platforms)
    new Platform(this, 1850, 420, 150, 40, this.platforms)
    new Platform(this, 1500, 250, 500, 80, this.platforms)
    new Platform(this, 1250, 500, 1500, 40, this.platforms)
    new Platform(this, 1750, 500, 1800, 40, this.platforms)
    new Platform(this, 2500, 420, 50, 100, this.platforms)
    new Platform(this, 2850, 420, 50, 100, this.platforms)
    new Platform(this, 3200, 380, 50, 150, this.platforms)
    new Platform(this, 3300, 180, 50, 150, this.platforms)

    new Platform(this, 3800, 525, 125, 20, this.platforms)
    new Platform(this, 3800, 375, 125, 20, this.platforms)
    new Platform(this, 3800, 225, 125, 20, this.platforms)
    new Platform(this, 3800, 75, 125, 20, this.platforms)
    new Platform(this, 4050, 450, 125, 20, this.platforms)
    new Platform(this, 4050, 300, 125, 20, this.platforms)
    new Platform(this, 4050, 150, 125, 20, this.platforms)
    new Platform(this, 4300, 525, 125, 20, this.platforms)
    new Platform(this, 4300, 375, 125, 20, this.platforms)
    new Platform(this, 4330, 280, 60, 60, this.platforms)
    new Platform(this, 4300, 225, 125, 20, this.platforms)
    new Platform(this, 4330, 130, 60, 60, this.platforms)
    new Platform(this, 4300, 75, 125, 20, this.platforms)
    new Platform(this, 4550, 450, 125, 20, this.platforms)
    new Platform(this, 4550, 300, 125, 20, this.platforms)
    new Platform(this, 4550, 150, 125, 20, this.platforms)
    new Platform(this, 4800, 525, 125, 20, this.platforms)
    new Platform(this, 4800, 375, 125, 20, this.platforms)
    new Platform(this, 4800, 225, 125, 20, this.platforms)
    new Platform(this, 4800, 75, 125, 20, this.platforms)
    new Platform(this, 5050, 450, 125, 20, this.platforms)
    new Platform(this, 5080, 355, 60, 60, this.platforms)
    new Platform(this, 5050, 300, 125, 20, this.platforms)
    new Platform(this, 5050, 150, 125, 20, this.platforms)
    new Platform(this, 5300, 525, 125, 20, this.platforms)
    new Platform(this, 5300, 375, 125, 20, this.platforms)
    new Platform(this, 5300, 225, 125, 20, this.platforms)
    new Platform(this, 5330, 130, 60, 60, this.platforms)
    new Platform(this, 5300, 75, 125, 20, this.platforms)
    new Platform(this, 5550, 450, 125, 20, this.platforms)
    new Platform(this, 5550, 300, 125, 20, this.platforms)
    new Platform(this, 5550, 150, 125, 20, this.platforms)
    new Platform(this, 5800, 525, 125, 20, this.platforms)
    new Platform(this, 5800, 375, 125, 20, this.platforms)
    new Platform(this, 5830, 280, 60, 60, this.platforms)
    new Platform(this, 5800, 225, 125, 20, this.platforms)
    new Platform(this, 5830, 130, 60, 60, this.platforms)
    new Platform(this, 5800, 75, 125, 20, this.platforms)
    new Platform(this, 6100, 525, 1000, 20, this.platforms)
    new Platform(this, 6500, 450, 40, 80, this.platforms)

    this.isGameOver = false
    this.goal = new Goal(this, 7000, () => {
      this.isGameOver = true

      new LevelCompletedView(this,
        () => {
          this.scene.start(MainMenuScene.KEY)
        },
        () => {
          console.log("Next level")
        }
      )
    })

    this.physics.add.collider(this.player, this.platforms)
  }

  update() {
    if(this.isGameOver) {
      console.log('Game is over!!')
      return
    }

    this.player.update()
    this.goal.update(this.player.x)

    const cameraX = Math.min(
      this.goal.x - this.game.config.width,
      Math.max(this.player.x - 200, 200)
    )
    this.cameras.main.scrollX = cameraX;
  }
}