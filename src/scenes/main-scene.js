import Phaser from 'phaser';

import shipSprite from '../assets/ship.png';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
    this.load.image('ship', shipSprite);
  }

  create() {
    this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'ship');
  }

  update() {

  }
}

export default MainScene
