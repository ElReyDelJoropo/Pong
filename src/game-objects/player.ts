import * as Phaser from 'phaser';
import { Paddle } from './paddle';

export class Player {
  private upKey: Phaser.Input.Keyboard.Key;
  private downKey: Phaser.Input.Keyboard.Key;
  private pauseKey: Phaser.Input.Keyboard.Key;

  constructor(
    private player: 1 | 2,
    public paddle: Paddle,
    input: Phaser.Input.InputPlugin,
  ) {
    this.setKeyBindings(input);
  }

  private setKeyBindings(input: Phaser.Input.InputPlugin) {
    if (this.player === 1) {
      this.upKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.downKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    } else {
      this.upKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      this.downKey = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
  }

  update() {
    if (this.upKey.isDown) this.move('up');
    else if (this.downKey.isDown) this.move('down');
    else this.stop();
  }

  private move(to: 'up' | 'down') {
    if (to === 'up') this.paddle.setVelocityY(-250);
    else this.paddle.setVelocityY(250);
  }

  private stop() {
    this.paddle.setVelocityY(0);
  }
}
