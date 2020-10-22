class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }
  preload() {
    var url;

    url =
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
    this.load.plugin('rexvirtualjoystickplugin', url, true);
  }

  create() {
    var gameOn = true;
    console.log(this.cursorKeys);
    let randomCoordinate = Math.floor(Math.random() * 250) + 6;
    // Create Background
    this.background = this.add.tileSprite(0, 0, 256, 272, 'background');
    this.background.setOrigin(0, 0);
    this.grid = this.add.tileSprite(0, 0, 256, 272, 'grid');
    this.grid.setOrigin(0, 0);
    this.grid.alpha = 0.2;
    // Create Ships
    this.ship1 = this.add.sprite(256 / 2 - 50, 10, 'ship');
    this.ship2 = this.add.sprite(256 / 2, 10, 'ship2');
    this.ship3 = this.add.sprite(256 / 2 + 50, 0, 'ship3');
    this.ship4 = this.add.sprite(256 / 2 + 60, 0, 'ship4');
    this.ship5 = this.add.sprite(256 / 2 + 60, 0, 'ship5');
    this.epoch = this.add.sprite(256 / 2 + 20, 0, 'epoch');
    this.blackbird = this.add.sprite(50, 0, 'blackbird');
    this.invader = this.add.sprite(70, 0, 'invader');
    this.flicky = this.add.sprite(-30, 100, 'flicky');
    this.fly = this.add.sprite(-30, 100, 'fly');
    this.lips = this.add.sprite(120, -20, 'lips');
    this.jellyfish = this.add.sprite(200, 0, 'jellyfish');
    this.jellyfish2 = this.add.sprite(100, 0, 'jellyfish');
    this.btcodec = this.add.sprite(230, 245, 'btcodec');
    this.btspider = this.add.sprite(-120, 40, 'btspider');
    this.heart = this.add.sprite(100, 332 + 30, 'heart');

    this.arcadebtn = this.add.sprite(235, 315, 'arcadebtn');
    this.arcadebtn.setScale(1.45);

    this.firebtn = this.add.sprite(175, 315, 'firebtn');
    this.firebtn.setScale(1.45);

    this.shark = new Shark({ scene: this, x: -100, y: 100 });
    this.storm = new Storm({ scene: this, x: 256, y: -15 });
    this.movement = new Movement(this);
    this.enemyLife = 2;
    this.dispatch = new EventDispatcher();
    this.sounds = new Sounds(this);
    this.sounds.addSounds();

    // Entrance Completed
    this.complete = false;
    // Create Enemies
    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship1);
    this.enemies.add(this.ship2);
    this.enemies.add(this.ship3);
    this.enemies.add(this.ship4);
    this.enemies.add(this.ship5);
    this.enemies.add(this.epoch);
    this.enemies.add(this.blackbird);
    this.enemies.add(this.invader);
    this.enemies.add(this.flicky);
    this.enemies.add(this.fly);
    this.enemies.add(this.storm);

    this.gameOver = false;
    // Boss Enemies Group
    this.bossEnemies = this.physics.add.group();
    this.bossEnemies.add(this.jellyfish);
    this.bossEnemies.add(this.jellyfish2);

    //Shark Group
    this.sharks = this.physics.add.group();
    this.sharks.add(this.shark);

    // Create BT Group
    this.BTGroup = this.physics.add.group();
    this.BTGroup.add(this.btspider);

    // Power Up Group
    this.powerUps = this.physics.add.group();
    this.powerUps.add(this.heart);

    // Create Player
    this.player = this.physics.add.sprite(256 / 2 - 8, 272 - 20, 'player');
    this.player.play('thrust');
    // Player Movement
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    // Shoot Beam
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    this.input.keyboard.addKeys('W,S,A,D');

    this.input.on(
      'pointerdown',
      function (pointer) {
        var touchX = pointer.x;
        var touchY = pointer.y;
        if (touchX > 210 && touchX < 250 && touchY > 295 && touchY < 335) {
          this.shootBeam();
          this.shootBeam2();
          this.arcadebtn.play('arcadebtn_anim');

          console.log(touchX);
          console.log(touchY);
        } else if (
          touchX > 150 &&
          touchX < 190 &&
          touchY > 295 &&
          touchY < 335
        ) {
          this.shootFireball();
          this.firebtn.play('firebtn_anim');
        } else if (
          touchX > 90 &&
          touchX < 125 &&
          touchY > 295 &&
          touchY < 335
        ) {
          this.scene.launch('pauseGame');
          this.scene.pause();
          console.log('aaa');
        } else {
          return;
        }

        // ...
      },
      this
    );

    newTimer = this.time.addEvent({ delay: 300, repeat: 0 });
    // Groups
    this.projectiles = this.add.group();
    this.blades = this.physics.add.group();
    this.projectiles.add(this.lips);
    this.enemyProjectiles = this.add.group();
    this.enemyProjectiles2 = this.add.group();

    this.fireball = new Fireball(this, -10, 240);
    this.thwomp = new Thwomp(this, -100, 100);

    var maxObjects = 0;

    // Animate Ships
    this.ship1.play('ship1_anim');
    this.ship2.play('ship2_anim');
    this.ship3.play('ship3_anim');
    this.ship4.play('ship4_anim');
    this.ship5.play('ship5_anim');
    this.epoch.play('epoch_anim');
    this.blackbird.play('blackbird_anim');
    this.invader.play('invader_anim');
    this.flicky.play('flicky_anim');
    this.fly.play('fly_anim');
    this.lips.play('lips_anim');
    this.jellyfish.play('jellyfish_anim');
    this.jellyfish2.play('jellyfish_anim');
    this.btspider.play('btspider_anim');
    this.heart.play('heart_anim');
    this.btcodec.play('codec_anim');

    // Make ships interactive
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();
    this.ship4.setInteractive();
    this.ship5.setInteractive();
    this.epoch.setInteractive();
    this.blackbird.setInteractive();
    this.invader.setInteractive();
    this.jellyfish.setInteractive();
    this.jellyfish2.setInteractive();
    this.btspider.setInteractive();
    this.heart.setInteractive();
    this.btcodec.setInteractive();

    // Freeze Ships that will activate later

    // blackbird.disableBody(true, true)

    // Additional ships

    let bladelife = 10;
    console.log(bladelife);
    var hit = this.bthit;
    var explode = this.explosionSound;

    // Physics
    this.physics.add.collider(this.projectiles, this.blades, function (
      projectile,
      blade
    ) {
      hit.play();
      projectile.destroy();
      bladelife -= 1;
      console.log(bladelife);
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      blade.setVelocity(getRandomInt(100), -100);
      if (
        bladelife == 0 ||
        bladelife == -10 ||
        bladelife == -20 ||
        bladelife == -30 ||
        bladelife == -40 ||
        bladelife == -50 ||
        bladelife == -60 ||
        bladelife == -70
      ) {
        // var explosion = new Explosion(this, blade.x, blade.y);
        explode.play();
        blade.destroy();
      }
    });

    this.addColliders();

    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(256, 0);
    graphics.lineTo(256, 20);
    graphics.lineTo(0, 20);
    graphics.lineTo(0, 0);
    graphics.closePath();
    graphics.fillPath();

    var graphics2 = this.add.graphics();
    graphics2.fillStyle(0x000000, 1);
    graphics2.beginPath();
    graphics2.moveTo(0, 272);
    graphics2.lineTo(256, 272);
    graphics2.lineTo(256, 292);
    graphics2.lineTo(0, 272);
    graphics2.lineTo(0, 292);
    graphics2.closePath();
    graphics2.fillPath();

    //ADD CONTROLS

    this.joyStick = this.plugins
      .get('rexvirtualjoystickplugin')
      .add(this, {
        x: 40,
        y: 315,
        radius: 20,
        base: this.add.circle(0, 0, 20, 0x888888),
        thumb: this.add.circle(0, 0, 10, 0xcccccc),
        dir: '8dir', // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        forceMin: 10,
        enable: true,
      })
      .on('update', this.dumpJoyStickState, this);

    this.text = this.add.text(400, 400);
    this.dumpJoyStickState();

    // END CONTROLS
    // SCORE
    this.score = 0;
    this.scoreLabel = this.add.bitmapText(
      10,
      5,
      'pixelFont',
      'SCORE: 000000',
      16
    );

    // LIVES
    this.lives = 1;
    this.livesLabel = this.add.bitmapText(
      120,
      5,
      'pixelFont',
      `LIVES: ${this.lives}`,
      16
    );

    this.pauselabel = this.add.bitmapText(90, 310, 'pixelFont', `PAUSE`, 18);
    // Summons
    this.summons = 3;
    this.summonslabel = this.add.bitmapText(
      200,
      5,
      'pixelFont',
      `FIRE: ${this.summons}`,
      16
    );

    this.ghostlife = 10;
    // this.sharklife = 100;
    this.btlife = 100;
    this.btcodec.setDisplaySize(37.5, 48);

    this.input.keyboard.on(
      'keydown-Q',
      function () {
        this.movement.moveLips(this.lips);
      },
      this
    );

    this.input.keyboard.on(
      'keydown-F',
      function () {
        this.shootFireball();
      },
      this
    );
    if (gameOn === true) {
      this.input.keyboard.on(
        'keydown-ENTER',
        function () {
          this.scene.launch('pauseGame');
          this.scene.pause();
        },
        this
      );
    } else {
      return;
    }

    this.events.on(
      'pause',
      function () {
        this.sounds.musicStop();
        console.log('Scene A paused');
      },
      this
    );

    this.events.on(
      'resume',
      function () {
        console.log('Scene A resumed');
        this.sounds.musicStop();
        this.sounds.playRandom();
      },
      this
    );

    this.btcodec.alpha = 0;

    this.sounds.playRandom();
    this.freeloader.play(configBT);
    this.btTalk(2500);

    // this.thwomp.thwompstacleTimed()
    // this.testThing()
  }

  dumpJoyStickState() {
    var cursorKeys = this.joyStick.createCursorKeys();
    var s = 'Key down: ';
    for (var name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        s += name + ' ';
      }
    }
    s += '\n';
    s += 'Force: ' + Math.floor(this.joyStick.force * 100) / 100 + '\n';
    s += 'Angle: ' + Math.floor(this.joyStick.angle * 100) / 100 + '\n';
    this.text.setText(s);
  }

  bladeExplode() {
    new Explosion(this, blade.x, blade.y);
  }
  pickupHeart() {
    this.heart.destroy();
    this.pickupSound.play();
    this.lives += 1;
    this.livesLabel.text = 'LIVES: ' + this.lives;
  }

  hurtPlayer(player, enemy) {
    this.resetShipPos(enemy);
    if (this.player.alpha < 1) {
      return;
    }
    this.playerExplode();
    // Lose Life
    if (this.player.alpha == 1) {
      this.lives -= 1;
      this.livesLabel.text = 'LIVES: ' + this.lives;
    }
    // Game over
    if (this.lives < 0) {
      this.gameEnd();
    }
    var maxObjects = 1;
  }

  hurtByBoss(player, enemy) {
    if (this.player.alpha == 1) {
      this.lives -= 1;
      this.livesLabel.text = 'LIVES: ' + this.lives;
    }
    if (this.player.alpha < 1) {
      return;
    }
    // Game over
    if (this.lives < 0) {
      this.gameEnd();
    }
    this.playerExplode();
  }

  hitBT(projectile, bt) {
    this.enemyBlink(this.btspider);
    this.btlife -= 1;
    this.btBabyAttack();

    this.btAttack();
    projectile.destroy();

    if (this.btlife == 0) {
      this.btdeath.play();
      this.btdead.play(configBT);
      this.btspider.destroy();
      this.sounds.musicStop();
      this.sounds.playRandom();
    }
    var blood = new Blood(this, this.btspider.x, this.btspider.y);
  }

  hitEnemy(projectile, enemy) {
    var explosion = new Explosion(this, enemy.x, enemy.y);
    this.explosionSound.play(configFX);
    projectile.destroy();

    this.resetShipPos(enemy), (this.score += 15);
    this.scoreLabel.text = 'SCORE: ' + this.score;
    var scoreFormated = this.zeroPad(this.score, 6);
    this.scoreLabel.text = 'SCORE: ' + scoreFormated;

    this.thwompPart();
    this.gameEvents();
  }
  hitEnemy2(projectile, enemy) {
    var explosion = new Explosion(this, enemy.x, enemy.y);
    this.explosionSound.play(configFX);
    projectile.destroy();

    this.resetShipPos(enemy);
  }

  hitBossEnemy(projectile, enemy) {
    var explosion = new Explosion(this, enemy.x, enemy.y);
    this.explosionSound.play(configFX);
    projectile.destroy();
    this.resetShipPos(enemy);
  }

  zeroPad(number, size) {
    var stringNumber = String(number);
    while (stringNumber.length < (size || 2)) {
      stringNumber = '0' + stringNumber;
    }
    return stringNumber;
  }

  update() {
    this.background.tilePositionY -= 1;
    this.grid.tilePositionY -= 4;
    this.movePlayerManager();
    this.startGame(0, 0, newTimer);

    // Starting Ships
    this.movement.move(this.ship1, 2);
    this.movement.move(this.ship2, 3);

    if (this.score >= 300) {
      this.movement.move(this.invader, 4);
    }
    if (this.score >= 600) {
      this.movement.move(this.ship4, 2);
    }
    if (this.score >= 800) {
      this.shark.move(this.flicky, 1);
    }
    if (this.score >= 1200) {
      this.movement.moveShip2(this.ship1, 2);
      this.movement.moveShip3(this.ship5, 3);
    }
    if (this.score >= 1500) {
      this.clearBadGuys(this.shark.sharklife);
      // this.background.tilePositionY -= 10;
      this.shark.move(this.shark, 4);
      this.shark.move(this.jellyfish, 1);
      this.movement.moveUp(this.jellyfish2, 1);
    }

    if (this.score >= 1700) {
      this.movement.moveShip2(this.ship1, 1);
      this.movement.move(this.ship2, 2);
    }
    if (this.score >= 2000) {
      this.shark.move(this.fly, 4);
    }

    if (this.score >= 2200) {
      this.movement.moveShip3(this.ship5, 2);
      this.storm.move(this.storm, 2);
    }
    if (this.score >= 2700) {
      this.movement.moveShip3(this.epoch, 3);
    }

    if (this.score >= 3000) {
      this.clearBadGuys(this.btlife);
      this.movement.moveBtSpider(this.btspider, 3);
    }

    if (this.shark.sharklife == 0) {
      this.jellyfish.destroy();
      this.jellyfish2.destroy();
    }

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if (this.player.active) {
        this.shootBeam();
        this.shootBeam2();
      } else {
        console.log('You are dead');
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyP)) {
      if (this.player.active) {
        this.score += 150;
        this.lives++;
      } else {
        console.log('You are dead');
      }
    }

    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }
    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam2 = this.projectiles.getChildren()[i];
      beam2.update();
    }
  }

  shootBeam() {
    var beam = new Beam(this);
    this.beamSound.play();
  }
  shootBeam2() {
    var beam2 = new Beam2(this);
    this.beamSound.play();
  }
  shootFireball() {
    if (this.summons > 0) {
      this.summons -= 1;
      this.summonslabel.text = 'FIRE: ' + this.summons;
      this.fireballsound.play();
      var fireball = new Fireball(this, 10, 240);
      var fireball = new Fireball(this, 30, 240);
      var fireball = new Fireball(this, 50, 240);
      var fireball = new Fireball(this, 70, 240);
      var fireball = new Fireball(this, 90, 240);
      var fireball = new Fireball(this, 110, 240);
      var fireball = new Fireball(this, 130, 240);
      var fireball = new Fireball(this, 150, 240);
      var fireball = new Fireball(this, 170, 240);
      var fireball = new Fireball(this, 190, 240);
      var fireball = new Fireball(this, 210, 240);
      var fireball = new Fireball(this, 230, 240);
      var fireball = new Fireball(this, 250, 240);
    } else {
      return;
    }
  }
  // MOVEMENT FUNCTIONS
  movePlayerManager() {
    this.player.setVelocity(0);
    if (this.cursorKeys.left.isDown || this.keyA.isDown || this.joyStick.left) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (
      this.cursorKeys.right.isDown ||
      this.keyD.isDown ||
      this.joyStick.right
    ) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if (
      (this.cursorKeys.up.isDown && this.player.y > 90) ||
      (this.keyW.isDown && this.player.y > 90) ||
      (this.joyStick.up && this.player.y > 90)
    ) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (
      (this.cursorKeys.down.isDown && this.player.y < 262) ||
      (this.keyS.isDown && this.player.y < 262) ||
      (this.joyStick.down && this.player.y < 262)
    ) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }

  enemyBlink(enemy) {
    enemy.setTint(0xffff33);
    this.bthit.play();
    var tween = this.tweens.add({
      targets: enemy,
      y: enemy.y - 1,
      ease: 'Power1',
      duration: 100,
      repeat: 0,
      onComplete: function () {
        enemy.clearTint();
        enemy.y += 1;
      },
      callbackScope: this,
    });

    //  And this tells it to repeat, i.e. fade in again 10 times.
    //  The 1000 tells it to wait for 1 second before restarting the fade.
    //   tween.repeat(10, 1000);
  }

  enemyBlinkFast(enemy) {
    enemy.setTint(0xffff33);
    var timeline = this.tweens.timeline({
      targets: this.btspider,
      ease: 'Cubic',
      repeat: -1,
      delay: 50,
      duration: 50,
      onComplete: function () {
        enemy.clearTint();
      },
    });
  }

  shootBtBeam() {
    var btbeam = new Btbeam(this);
    this.btlaser.play(configFX);
    if (this.btlife == 0) {
      btbeam.destroy();
      this.btlaser.stop();
    }
  }

  shootBtTimed() {
    var timer = this.time.addEvent({
      delay: 300, // ms
      callback: this.shootBtBeam,
      //args: [],
      callbackScope: this,
      loop: true,
    });
  }

  btAttack() {
    if (
      this.btlife == 50 ||
      this.btlife == 40 ||
      this.btlife == 30 ||
      this.btlife == 20 ||
      this.btlife == 10
    )
      var timeline = this.tweens.timeline({
        targets: this.btspider,
        ease: 'Cubic',
        duration: 800,
        tweens: [
          {
            y: this.player.y - 40,
          },
          {
            y: this.player.y - 40,
          },
          {
            y: this.player.y - 20,
          },
          {
            y: this.player.y - 20,
          },
          {
            y: this.player.y - 10,
          },
          {
            y: this.player.y,
          },
          {
            x: 150,
          },
          {
            y: 100,
          },
        ],
        onComplete: function () {
          return;
        },
      });
  }

  // RESET FUNCTIONS
  resetPlayer() {
    var x = 256 / 2 - 8;
    var y = 272 + 64;
    this.player.enableBody(true, x, y, true, true);
    this.player.alpha = 0.5;

    var tween = this.tweens.add({
      targets: this.player,
      y: 272 - 40,
      ease: 'Power1',
      duration: 1500,
      repeat: 0,
      onComplete: function () {
        this.player.alpha = 1;
      },
      callbackScope: this,
    });
  }
  resetSidewaysPos(ship) {
    ship.x = 0;
    var randomY = Phaser.Math.Between(0, 272);
    ship.y = randomY;
  }

  resetUpPos(ship) {
    ship.y = 272;
    var randomX = Phaser.Math.Between(0, 256);
    ship.x = randomX;
  }

  resetShipPos(ship) {
    let randY = Math.floor(Math.random() * 300) + 100;
    ship.y = 0 - randY;
    var randomX = Phaser.Math.Between(0, 256);
    ship.x = randomX;
  }

  resetShipPos2(ship) {
    let randY = Math.floor(Math.random() * 300) + 100;
    ship.y = 0 - randY;
    var randomX = Phaser.Math.Between(10, 246);
    ship.x = randomX;
  }

  destroyShip(ship) {
    if (ship.y < 100) {
      ship.destroy();
    }
  }
  // CLEAR / RESPAWN FUNCTIONS
  clearBadGuys(bosslife) {
    if (bosslife > 0) {
      var enemyObjects = this.enemies.getChildren();
      var tween = this.tweens.add({
        targets: enemyObjects,
        y: -20,
        ease: 'Power1',
        duration: 1000,
        repeat: 0,
        onComplete: function () {
          enemyObjects.y = 1;
        },
        callbackScope: this,
      });
    } else if (bosslife == 0) {
      return;
    }
  }

  gameEnd() {
    this.scene.pause();
    this.scene.launch('gameOver');
    this.enemies.clear(true);
    this.projectiles.clear(true);
    this.blades.clear(true);
    this.background.tilePositionY -= 0;
    this.sounds.musicStop();
    this.gameover.play();
    this.player.setTint(0xff0000);
    this.livesLabel.text = 'LIVES: 0';

    this.player.body.enable = false;
    this.gameOver === true;
  }

  // SOUND FUNCTIONS
  btTalk(duration) {
    this.btcodec.alpha = 0.8;
    this.mgsstart.play();
    var tween = this.tweens.add({
      targets: this.btcodec,
      y: this.btcodec.y,
      delay: 300,
      ease: 'Power1',
      duration: duration,
      repeat: 0,
      onComplete: function () {
        this.btcodec.alpha = 0;
        this.mgsend.play();
      },
      callbackScope: this,
    });
  }

  randomBT() {}

  newblade() {
    this.bladelife += 10;
    var blade = this.physics.add.sprite(16, 16, 'blade');
    this.blades.add(blade);
    blade.setRandomPosition(20, 0, 256, 262);
    if (Math.random() > 0.5) {
      blade.play('purple');
    } else {
      blade.play('orange');
    }

    blade.setVelocity(100, 100);
    blade.setCollideWorldBounds(true);
    blade.setBounce(1);
  }

  playerExplode() {
    var explosion = new Explosion(this, this.player.x, this.player.y);
    this.explosionSound.play(configFX);
    this.player.disableBody(true, true);
    this.time.addEvent({
      delay: 500,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false,
    });
  }
  addColliders() {
    // Player colliders
    this.physics.add.overlap(
      this.player,
      this.powerUps,
      this.pickupHeart,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.sharks,
      this.hurtByBoss,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.btspider,
      this.hurtByBoss,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.hurtPlayer,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.blades,
      this.hurtPlayer,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.enemyProjectiles,
      this.hurtByBoss,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.enemyProjectiles2,
      this.hurtByBoss,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.bossEnemies,
      this.hurtByBoss,
      null,
      this
    );
    this.physics.add.overlap(
      this.lips,
      this.enemies,
      this.hitEnemy,
      null,
      this
    );

    // Projectile colliders
    this.physics.add.overlap(
      this.projectiles,
      this.bossEnemies,
      this.hitBossEnemy,
      null,
      this
    );
    this.physics.add.overlap(
      this.projectiles,
      this.sharks,
      this.shark.hit,
      null,
      this
    );
    this.physics.add.overlap(
      this.projectiles,
      this.btspider,
      this.hitBT,
      null,
      this
    );
    this.physics.add.overlap(
      this.projectiles,
      this.enemies,
      this.hitEnemy,
      null,
      this
    );
    this.physics.add.overlap(
      this.projectiles,
      this.enemyProjectiles2,
      this.hitBossEnemy,
      null,
      this
    );
  }

  enterBoss(boss) {
    var timeline = this.tweens.createTimeline();
    timeline.add({
      targets: boss,
      x: -10,
      delay: 3000,
      duration: 5000,
      ease: 'Power2',
      repeat: 0,
      onComplete: (this.complete = true),
    });
  }
  btBabyAttack() {
    if (this.btlife == 60 || this.btlife == 30) {
      this.btbabies.play();
      var timer = this.time.addEvent({
        delay: 300,
        ease: 'Power1',
        repeat: 1,
        callback: function () {
          var btbaby = new Btbabies(this, 10, 20);
          var btbaby2 = new Btbabies(this, 30, 10);
          var btbaby3 = new Btbabies(this, 50, 12);
          var btbaby4 = new Btbabies(this, 70, 5);
          var btbaby5 = new Btbabies(this, 90, 0);
          var btbaby6 = new Btbabies(this, 110, -10);
          var btbaby7 = new Btbabies(this, 130, 1);
          var btbaby8 = new Btbabies(this, 150, 5);
          var btbaby9 = new Btbabies(this, 170, 20);
          var btbaby10 = new Btbabies(this, 190, 10);
          var btbaby11 = new Btbabies(this, 210, -12);
          var btbaby12 = new Btbabies(this, 230, 9);
          var btbaby13 = new Btbabies(this, 250, 11);
          if (btbaby.y > 100) {
            btbaby.destroy();
          }
          if (btbaby2.y > 100) {
            btbaby2.destroy();
          }
          if (btbaby3.y > 100) {
            btbaby3.destroy();
          }
          if (btbaby4.y > 100) {
            btbaby4.destroy();
          }
          if (btbaby5.y > 100) {
            btbaby5.destroy();
          }
          if (btbaby6.y > 100) {
            btbaby6.destroy();
          }
          if (btbaby7.y > 100) {
            btbaby7.destroy();
          }
          if (btbaby8.y > 100) {
            btbaby8.destroy();
          }
          if (btbaby9.y > 100) {
            btbaby9.destroy();
          }
          if (btbaby10.y > 100) {
            btbaby10.destroy();
          }
          if (btbaby11.y > 100) {
            btbaby11.destroy();
          }
          if (btbaby12.y > 100) {
            btbaby12.destroy();
          }
          if (btbaby13.y > 100) {
            btbaby13.destroy();
          }
        },
        callbackScope: this,
      });
    }
  }

  newGhost() {
    var ghost = this.physics.add.sprite(16, 16, 'bbghost');
    this.blades.add(ghost);
    ghost.setRandomPosition(20, 0, 256, 262);

    var timeline = this.tweens.createTimeline();
    timeline.add({
      targets: ghost,

      callback: function () {
        ghost.play('ghostappear');
      },
      duration: 1000,
      ease: 'Power2',
      repeat: 0,
    });
    timeline.add({
      targets: ghost,
      duration: 500,
      ease: 'Power2',
      callback: function () {
        ghost.play('ghost_anim');
      },
      repeat: -1,
    });

    timeline.play();
    ghost.setVelocity(70, 50);
    ghost.setCollideWorldBounds(true);
    ghost.setBounce(1);

    if (ghost.x <= 50) {
      ghost.isRight = true;
    } else if (ghost.x >= 240) {
      ghost.isRight = false;
    }

    if (ghost.isRight) {
      ghost.flipX = false;
    } else {
      ghost.flipX = true;
    }
  }
  gameEvents() {
    // SOUND CUES
    if (this.score == 150) {
      this.sounds.randomBT();
    }
    if (this.score == 300) {
      this.invaderSound.play();
    }
    if (this.score == 750) {
      this.sounds.randomBT();
    }
    if (this.score == 1350) {
      this.sounds.randomBT();
    }
    if (this.score == 1950) {
      this.sounds.randomBT();
    }
    if (this.score == 2550) {
      this.sounds.randomBT();
    }
    if (this.score == 3150) {
      this.sounds.randomBT();
    }
    if (this.score == 3750) {
      this.sounds.randomBT();
    }
    if (this.score == 4350) {
      this.sounds.randomBT();
    }
    if (this.score == 4950) {
      this.sounds.randomBT();
    }
    if (this.score == 5550) {
      this.sounds.randomBT();
    }
    if (this.score == 6150) {
      this.newblade();
    }
    if (this.score == 1815) {
    }
    if (this.score == 1500) {
      this.btTalk(3500);
      this.sounds.musicStop();
      this.jawsTheme.play(musicConfig);
      this.smile.play(configBT);
      // this.clearBadGuys()
      var jawsConfig = {
        volume: 0.2,
        repeat: 2,
      };
    }
    if (this.score == 3000) {
      this.sounds.musicStop();
      this.turtlesoup.play(configBT);
      this.tmnt.play(musicConfig);
    }
    // Difficulty V Hard
    if (this.score == 1200) {
    }
    // Difficulty V V Hard
    if (this.score == 3000) {
      this.shootBtTimed();
    }
    if (this.score == 4395) {
      this.btTalk(2000);
      this.brick.play(configBT);
    }

    // Difficulty V V V Hard
    if (this.score == 6000) {
      this.newblade();
    }
    // Difficulty WICKED Hard
    if (this.score == 10000) {
      this.newblade();
    }
    // Difficulty WICKED WICKED Hard
    if (this.score == 13000) {
      this.newblade();
    }
    // Game Win
    if (this.score >= 20000) {
      console.log('WAHHH!');
    }
  }

  thwompstacleCourse() {
    this.time.addEvent({
      delay: 3000, // ms
      callback: function () {
        this.thwomp = new Thwomp(this, 16, -50);
        this.thwomp = new Thwomp(this, 48, -50);
        this.thwomp = new Thwomp(this, 80, -50);
        this.thwomp = new Thwomp(this, 112, -50);
        this.thwomp = new Thwomp(this, 144, -50);
        this.thwomp = new Thwomp(this, 176, -50);
        this.thwomp = new Thwomp(this, 208, -50);
        this.thwomp = new Thwomp(this, 240, -50);
        for (var i = 0; i < this.enemyProjectiles.getChildren().length; i++) {
          var thwomp = this.enemyProjectiles.getChildren()[i];
          thwomp.update();
        }
      },
      callbackScope: this,
    });
  }

  startGame(x, y, timer) {
    if (timer.delay <= 300) {
      timer.delay--;
    } else if (timer.delay <= 200) {
      console.log(2);
      timer.delay--;
    } else if (timer.delay <= 100) {
      console.log(1);
      timer.delay--;
    } else if (timer.delay == 0) {
      return;
    }
  }

  thwompPart() {
    if (this.score == 4500) {
      this.thwompsound.play();

      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4530) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4560) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4590) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4620) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4650) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4680) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4710) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4740) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4770) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4800) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4830) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4860) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4890) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4920) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4950) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
    if (this.score == 4990) {
      this.thwompsound.play();
      this.thwomp.thwompstacleCourse();
    }
  }
}
