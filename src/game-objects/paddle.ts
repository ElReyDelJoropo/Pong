import * as Phaser from 'phaser';
export class Paddle extends Phaser.Physics.Arcade.Sprite {
  body: Phaser.Physics.Arcade.Body;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
  }
}
