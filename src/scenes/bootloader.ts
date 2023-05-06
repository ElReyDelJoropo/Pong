import * as Phaser from 'phaser';
import { GameScenes, GameTextures } from '../game-utils/types';

export class Bootloader extends Phaser.Scene {
  constructor() {
    super(GameScenes.bootloader);
  }
  preload() {
    this.load.image(GameTextures.ball, 'assets/ball.png');
    this.load.image(GameTextures.paddle, 'assets/paddle.png');
  }
  create() {
    this.scene.start(GameScenes.menu);
  }
}
