import MainMenuScene from './scenes/main-menu'
import Level1Scene from './scenes/level-1'
import './style.css'
import Phaser from 'phaser'

/**
 * @type {Phaser.Types.Core.GameConfig}
 */
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: document.querySelector('#app'),
  scene: [
    MainMenuScene,
    Level1Scene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 900 }
    }
  }
}

const game = new Phaser.Game(config)