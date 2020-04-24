import Phaser from 'phaser';

import Ship from '../objects/Ship.js';
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
    this.ship = new Ship(this, 50, SCREEN_HEIGHT / 2);
    this.add.existing(this.ship);
    //this.scene.start('main');
  }

  update() {
    this.ship.update();
  }
}

export default MainScene;
