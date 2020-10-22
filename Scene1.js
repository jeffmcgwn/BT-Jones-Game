class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {}

  create() {
    this.beamSound2 = this.sound.add('audio_beam');

    // bonanza.setScale(4)
    this.t2 = this.add.tileSprite(0, 0, config.width, config.height, 't2');
    this.t2.setOrigin(0, 0);
    let bg = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      'bonanza'
    );
    // this.add.text(60, 120, "Click to Start!");
    this.bg = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      'bonanza'
    );

    this.intro = this.sound.add('intro');
    this.smk = this.sound.add('smk');
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.intro.play(musicConfig);

    this.input.keyboard.on('keydown', () => this.intro.stop());

    this.input.keyboard.on('keydown', () => this.scene.start('playGame'));

    this.input.on('pointerdown', () => this.scene.start('playGame'));
    this.input.on('gameobjectdown', () => this.scene.start('playGame'));
    this.input.on('pointerdown', () => this.intro.stop());
    this.input.on('gameobjectdown', () => this.intro.stop());

    this.anims.create({
      key: 'epoch_anim',
      frames: this.anims.generateFrameNumbers('epoch'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'codec_anim',
      frames: this.anims.generateFrameNumbers('btcodec'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'invader_anim',
      frames: this.anims.generateFrameNumbers('invader'),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'arcadebtn_anim',
      frames: this.anims.generateFrameNumbers('arcadebtn'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'firebtn_anim',
      frames: this.anims.generateFrameNumbers('firebtn'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'jellyfish_anim',
      frames: this.anims.generateFrameNumbers('jellyfish', {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'jaws_anim',
      frames: this.anims.generateFrameNumbers('jaws', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'btspider_anim',
      frames: this.anims.generateFrameNumbers('btspider', {
        start: 0,
        end: 3,
      }),
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: 'jawsleft_anim',
      frames: this.anims.generateFrameNumbers('jawsleft', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'blackbird_anim',
      frames: this.anims.generateFrameNumbers('blackbird'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'lips_anim',
      frames: this.anims.generateFrameNumbers('lips'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship1_anim',
      frames: this.anims.generateFrameNumbers('ship'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship2_anim',
      frames: this.anims.generateFrameNumbers('ship2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship3_anim',
      frames: this.anims.generateFrameNumbers('ship3'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship4_anim',
      frames: this.anims.generateFrameNumbers('ship4'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship5_anim',
      frames: this.anims.generateFrameNumbers('ship5'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'fly_anim',
      frames: this.anims.generateFrameNumbers('fly'),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'thwomp_anim',
      frames: this.anims.generateFrameNumbers('thwomp'),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'left_anim',
      frames: this.anims.generateFrameNumbers('left'),
      frameRate: 4,
      repeat: 0,
    });

    this.anims.create({
      key: 'flicky_anim',
      frames: this.anims.generateFrameNumbers('flicky'),
      frameRate: 6,
      repeat: -1,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'getblood',
      frames: this.anims.generateFrameNumbers('blood'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'purple',
      frames: this.anims.generateFrameNumbers('blade', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'orange',
      frames: this.anims.generateFrameNumbers('blade', {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ghostappear',
      frames: this.anims.generateFrameNumbers('bbghost', {
        start: 2,
        end: 3,
      }),
      frameRate: 4,
      repeat: 0,
    });

    this.anims.create({
      key: 'ghost_anim',
      frames: this.anims.generateFrameNumbers('bbghost', {
        start: 0,
        end: 1,
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'fireball_anim',
      frames: this.anims.generateFrameNumbers('fireball'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'btbeam_anim',
      frames: this.anims.generateFrameNumbers('btbeam'),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'heart_anim',
      frames: this.anims.generateFrameNumbers('heart'),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'bthead_anim',
      frames: this.anims.generateFrameNumbers('bthead'),
      frameRate: 5,
      repeat: -1,
    });

    var timeline = new Phaser.Time.Clock(this);

    this.bthead = this.add.sprite(45, 35, 'bthead');
    this.bthead.play('bthead_anim');
    this.bthead2 = this.add.sprite(config.width - 45, 35, 'bthead');
    this.bthead2.play('bthead_anim');
  }

  update() {
    this.t2.tilePositionX += 2.5;
  }
}
