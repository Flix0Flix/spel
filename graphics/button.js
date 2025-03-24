import Phaser from 'phaser';
import Text from './text';

export default class Button extends Phaser.GameObjects.Container {
    /**
     * @param {Phaser.scene} scene 
     */
    constructor(scene, text, x, y, width, height, callback) {
        super(scene, x, y);

        // Store the colors and callback
        this.color = 0xff9933;
        this.hoverColor = 0xffff00;
        this.callback = callback;
        
        this.background = scene.add.rectangle(0, 0, width, height, this.color)
        this.background.originX = 0.5
        this.add(this.background)

        this.label = new Text(scene, 0, 0, text, 32, 'black')
        this.add(this.label)

        // Make sure to enable input events on the button
        this.background.setInteractive();

        // Add the button to the scene
        scene.add.existing(this);

        // Add hover and click event listeners
        this.background.scrollFactorX = 0
        this.background.scrollFactorY = 0
        this.background.on('pointerover', this.onHover, this);
        this.background.on('pointerout', this.onOut, this);
        this.background.on('pointerdown', this.onClick, this);
    }

    // Change the button's color when hovered
    onHover() {
        this.background.setFillStyle(this.hoverColor);
    }

    // Restore the original color when the hover ends
    onOut() {
        this.background.setFillStyle(this.color);
    }

    // Trigger the click event callback
    onClick() {
        if (this.callback) {
            this.callback();
        }
    }
}