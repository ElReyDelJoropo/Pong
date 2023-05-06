import * as Phaser from 'phaser';
import { Ball } from '../game-objects/ball';
import { Player } from '../game-objects/player';
import { GameFactory } from '../game-utils/game-factory';
import { GameScenes, dimensions } from '../game-utils/types';
import { ScoreTable } from '../game-objects/score-table';

export class Main extends Phaser.Scene {
  private player1: Player;
  private player2: Player;
  private ball: Ball;
  private scores: ScoreTable;

  private readonly offset = 100;

  constructor() {
    super(GameScenes.game);
  }

  create() {
    this.physics.world.setBounds(
      0,
      this.offset,
      dimensions.width,
      dimensions.height - this.offset,
      false,
      false,
      true,
      true,
    );

    this.add
      .graphics()
      .lineStyle(2, 0xf3f3f3)
      .strokeLineShape(
        new Phaser.Geom.Line(0, this.offset, dimensions.width, this.offset),
      );

    this.add
      .graphics()
      .lineStyle(2, 0xf3f3f3)
      .strokeLineShape(
        new Phaser.Geom.Line(
          dimensions.width / 2,
          this.offset,
          dimensions.width / 2,
          dimensions.height,
        ),
      );

    [this.player1, this.player2] = GameFactory.createPlayers(this);
    this.ball = GameFactory.createBall(this);
    this.scores = GameFactory.createScoreTable(this, this.offset / 2);

    this.physics.world.addCollider(this.player1.paddle, this.ball, () => {
      this.ball.body.velocity.add({ x: 20, y: 0 });
      if (Math.random() > 0.5) this.ball.body.velocity.y *= -1;
    });
    this.physics.world.addCollider(this.player2.paddle, this.ball, () => {
      this.ball.body.velocity.add({ x: -20, y: 0 });
      if (Math.random() > 0.5) this.ball.body.velocity.y *= -1;
    });
  }

  update() {
    this.player1.update();
    this.player2.update();

    const ballOut = this.isBallOut();
    if (ballOut) {
      this.resetBall();
      this.scores.incrementScore(ballOut === 1 ? 1 : 2);
      this.scores.update();
    }
  }

  isBallOut() {
    if (this.ball.body.x < 0) return -1;
    else if (this.ball.body.x > dimensions.width) return 1;
    else return 0;
  }

  resetBall() {
    this.ball
      .setX(dimensions.width / 2)
      .setY(dimensions.height / 2 + this.offset);
    this.ball.setVelocity(Math.random() > 0.5 ? 150 : -150);
  }
}
