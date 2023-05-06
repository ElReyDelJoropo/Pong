import * as Phaser from 'phaser';
import { GameScenes, dimensions } from '../game-utils/types';

export class MainMenu extends Phaser.Scene {
  private playButton: Phaser.Input.Keyboard.Key;
  private exitButton: Phaser.Input.Keyboard.Key;

  constructor() {
    super(GameScenes.menu);
  }

  create() {
    // this.scene.start(GameScenes.game);

    this.add
      .text(dimensions.width / 2, 30, 'PONG CHIMBO', {
        color: 'whitesmoke',
        fontSize: '32px',
      })
      .setOrigin(0.5);

    this.add
      .text(dimensions.width / 2, dimensions.height / 2, 'Play (P)')
      .setOrigin(0.5)
      .setFill('whitesmoke');
    this.add
      .text(dimensions.width / 2, dimensions.height / 2 + 30, 'Quit (Q)')
      .setOrigin(0.5)
      .setFill('whitesmoke');

    this.playButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.P,
    );
    this.exitButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.Q,
    );
  }

  update() {
    if (this.playButton.isDown) this.scene.start(GameScenes.game);
  }
}
