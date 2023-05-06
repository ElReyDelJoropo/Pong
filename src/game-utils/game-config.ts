import * as Phaser from 'phaser';
import { Bootloader } from '../scenes/bootloader';
import { Main } from '../scenes/main';
import { MainMenu } from '../scenes/main-menu';
import { dimensions } from './types';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#111111',
  width: dimensions.width,
  height: dimensions.height,
  scene: [Bootloader, MainMenu, Main],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  fps: {
    limit: 60,
    min: 30,
  },
};
