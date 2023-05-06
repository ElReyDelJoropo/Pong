import * as Phaser from 'phaser';

export class ScoreTable extends Phaser.GameObjects.Text {
  private player1Score = 0;
  private player2Score = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, '0 - 0', {
      fontFamily: 'mamasita',
      fontSize: '16px',
      color: 'whitesmoke',
    });
  }

  update() {
    this.setText(`${this.player1Score} - ${this.player2Score}`);
  }

  incrementScore(player: 1 | 2) {
    if (player === 1) ++this.player1Score;
    else ++this.player2Score;
  }

  reset() {
    this.player1Score = this.player2Score = 0;
  }

  getWinner() {
    if (this.player1Score === this.player2Score) return 0;
    else if (this.player1Score > this.player2Score) return -1;
    else return 1;
  }
}
