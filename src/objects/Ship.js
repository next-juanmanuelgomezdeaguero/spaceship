import Phaser from 'phaser';

import { SHIP_SIZE, SHIP_VELOCITY } from '../utils/constants';

class Ship extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'ship');

    this.scene = scene;
    this.displayHeight = SHIP_SIZE;
    this.displayWidth = SHIP_SIZE;
    this.setSize(SHIP_SIZE, SHIP_SIZE);

    this.scene.physics.world.enable(this);
  }

  update() {
    this.body.setVelocityX(SHIP_VELOCITY);
  }
}

export default Ship;