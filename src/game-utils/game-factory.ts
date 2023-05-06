import * as Phaser from 'phaser';
import { Ball } from '../game-objects/ball';
import { Paddle } from '../game-objects/paddle';
import { Player } from '../game-objects/player';
import { GameTextures, dimensions } from './types';
import { ScoreTable } from '../game-objects/score-table';

export class GameFactory {
  static createPlayers(scene: Phaser.Scene): [Player, Player] {
    const paddle = this.createPaddle(scene, 30);
    const paddle2 = this.createPaddle(scene, dimensions.width - 30);
    return [
      new Player(1, paddle, scene.input),
      new Player(2, paddle2, scene.input),
    ];
  }

  static createBall(scene: Phaser.Scene): Ball {
    const ball = new Phaser.Physics.Arcade.Sprite(
      scene,
      dimensions.width,
      dimensions.height,
      GameTextures.ball,
    )
      .setScale(0.25)
      .addToDisplayList();

    return scene.physics.add
      .existing(ball)
      .setDebug(true, true, 0x00ee00)
      .setBounce(1)
      .setVelocity(-150)
      .setCollideWorldBounds(true);
  }

  static createScoreTable(scene: Phaser.Scene, height: number) {
    return new ScoreTable(scene, dimensions.width / 2, height)
      .setOrigin(0.5)
      .setAlign('center')
      .addToDisplayList();
  }

  private static createPaddle(scene: Phaser.Scene, x: number): Paddle {
    const paddle = new Paddle(
      scene,
      x,
      dimensions.height / 2,
      GameTextures.paddle,
    )
      .setScale(0.5)
      .addToDisplayList();

    return scene.physics.add
      .existing(paddle, false)
      .setDebug(true, true, 0xcc0000)
      .setCollideWorldBounds(true)
      .setPushable(false);
  }
}
