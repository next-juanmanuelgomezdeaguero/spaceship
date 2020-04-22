import Phaser from 'phaser';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from './utils/constants';
import MainScene from './scenes/main-scene';

const config = {
  type: Phaser.AUTO,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  pixelArt: true,
  zoom: 1,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [MainScene]
};

window.onload = () => {
  new Phaser.Game(config);
};
