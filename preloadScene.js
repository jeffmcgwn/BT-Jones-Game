class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloadScene' });
  }

  preload() {
    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();
    var progressBar = new Phaser.Geom.Rectangle(100, 120, 60, 20);
    var progressBarFill = new Phaser.Geom.Rectangle(66, 96, 46, 16);

    this.graphics.fillStyle(0xffffff, 1);
    this.graphics.fillRectShape(progressBar);

    this.newGraphics.fillStyle(0x3587e2, 1);
    this.newGraphics.fillRectShape(progressBarFill);

    var loadingText = this.add.text(75, 145, 'Loading: ', {
      fontSize: '12px',
      fill: '#FFF',
    });
    var holdOn = this.add.text(25, 165, '', { fontSize: '8px', fill: '#FFF' });

    this.load.image('background', 'assets/images/background.png');
    this.load.image('black', 'assets/images/black.png');
    this.load.image('bonanza', 'assets/images/bonanza.png', {
      frameWidth: config.width / 2,
      frameHeight: config.height / 2,
    });
    this.load.image('t2', 'assets/images/t2.png', {
      frameWidth: config.width / 2,
      frameHeight: config.height / 2,
    });

    this.load.image('grid', 'assets/images/bggrid.png', {
      frameWidth: config.width / 2,
      frameHeight: config.height / 2,
    });

    this.load.spritesheet('btcodec', 'assets/spritesheets/btcodecsprite.png', {
      frameWidth: 40,
      frameHeight: 60,
    });

    this.load.spritesheet('ship', 'assets/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('thwomp', 'assets/spritesheets/thwomp.png', {
      frameWidth: 24,
      frameHeight: 32,
    });

    this.load.spritesheet('epoch', 'assets/spritesheets/epoch.png', {
      frameWidth: 38,
      frameHeight: 32,
    });

    this.load.spritesheet('blackbird', 'assets/spritesheets/blackbird.png', {
      frameWidth: 46,
      frameHeight: 24,
    });

    this.load.spritesheet('flicky', 'assets/spritesheets/flicky.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('ship2', 'assets/spritesheets/ship2.png', {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet('btbeam', 'assets/spritesheets/btbeam.png', {
      frameWidth: 8,
      frameHeight: 32,
    });
    this.load.spritesheet('ship3', 'assets/spritesheets/ship3.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('ship4', 'assets/spritesheets/ship3.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('fly', 'assets/spritesheets/fly.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('ship5', 'assets/spritesheets/ship4.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('arcadebtn', 'assets/spritesheets/arcadebutton.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('firebtn', 'assets/spritesheets/firebutton.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('invader', 'assets/spritesheets/invader.png', {
      frameWidth: 16,
      frameHeight: 12,
    });
    this.load.spritesheet('explosion', 'assets/spritesheets/explosion.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet('blood', 'assets/spritesheets/blood.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet('blade', 'assets/spritesheets/blade.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('player', 'assets/spritesheets/player.png', {
      frameWidth: 26,
      frameHeight: 24,
    });

    this.load.spritesheet('jaws', 'assets/spritesheets/jaws.png', {
      frameWidth: 88,
      frameHeight: 46,
    });
    this.load.spritesheet('left', 'assets/spritesheets/left.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('btspider', 'assets/spritesheets/btspider.png', {
      frameWidth: 88,
      frameHeight: 56,
    });

    this.load.spritesheet('jawsleft', 'assets/spritesheets/jawsleft.png', {
      frameWidth: 88,
      frameHeight: 48,
    });

    this.load.spritesheet('beam', 'assets/spritesheets/beam.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('jellyfish', 'assets/spritesheets/jellyfish.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('lips', 'assets/spritesheets/homerlips.png', {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet('heart', 'assets/spritesheets/power-up.png', {
      frameWidth: 14,
      frameHeight: 20,
    });

    this.load.spritesheet('bthead', 'assets/spritesheets/8bitbt.png', {
      frameWidth: 34,
      frameHeight: 50,
    });

    this.load.spritesheet('fireball', 'assets/spritesheets/fireball.png', {
      frameWidth: 16,
      frameHeight: 35,
    });

    this.load.spritesheet('bbghost', 'assets/spritesheets/bbghost.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('stormeagle', 'assets/spritesheets/stormeagle.png', {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.bitmapFont(
      'pixelFont',
      'assets/font/font.png',
      'assets/font/font.xml'
    );

    this.load.audio('audio_beam', ['assets/sounds/beam.mp3']);
    this.load.audio('audio_explosion', ['assets/sounds/explosion.mp3']);
    this.load.audio('audio_pickup', [
      'assets/sounds/pickup.ogg',
      'assets/sounds/pickup.mp3',
    ]);
    this.load.audio('music', ['assets/sounds/jenova.mp3']);
    this.load.audio('smk', ['assets/sounds/smk.mp3']);
    this.load.audio('audio_shirt', ['assets/sounds/shirt.mp3']);
    this.load.audio('audio_mascot', ['assets/sounds/mascot.mp3']);
    this.load.audio('audio_freeloader', ['assets/sounds/freeloader.mp3']);
    this.load.audio('audio_invader', ['assets/sounds/invader.mp3']);
    this.load.audio('audio_jawsdeath', ['assets/sounds/jawsdeath.mp3']);
    this.load.audio('audio_jawshit', ['assets/sounds/jawshit.mp3']);
    this.load.audio('audio_smile', ['assets/sounds/smile.mp3']);
    this.load.audio('audio_jaws', ['assets/sounds/jaws.mp3']);
    this.load.audio('audio_chem', ['assets/sounds/chem.mp3']);
    this.load.audio('audio_gameover', ['assets/sounds/gameover.mp3']);
    this.load.audio('audio_btlaser', ['assets/sounds/btlaser.mp3']);
    this.load.audio('audio_tmnt', ['assets/sounds/tmnt.mp3']);
    this.load.audio('turtlesoup', ['assets/sounds/turtlesoup.mp3']);
    this.load.audio('bthit', ['assets/sounds/bthit.mp3']);
    this.load.audio('btdeath', ['assets/sounds/btdeath.mp3']);
    this.load.audio('btdead', ['assets/sounds/btdead.mp3']);
    this.load.audio('song1', ['assets/sounds/music/1.mp3']);
    this.load.audio('song2', ['assets/sounds/music/2.mp3']);
    this.load.audio('song3', ['assets/sounds/music/3.mp3']);
    this.load.audio('song4', ['assets/sounds/music/4.mp3']);
    this.load.audio('song5', ['assets/sounds/music/5.mp3']);
    this.load.audio('song6', ['assets/sounds/music/6.mp3']);
    this.load.audio('song7', ['assets/sounds/music/7.mp3']);
    this.load.audio('song8', ['assets/sounds/music/8.mp3']);
    this.load.audio('song9', ['assets/sounds/music/9.mp3']);
    this.load.audio('song10', ['assets/sounds/music/10.mp3']);
    this.load.audio('song11', ['assets/sounds/music/11.mp3']);
    this.load.audio('song12', ['assets/sounds/music/12.mp3']);
    this.load.audio('song13', ['assets/sounds/music/13.mp3']);
    this.load.audio('song14', ['assets/sounds/music/14.mp3']);
    this.load.audio('pausetheme', ['assets/sounds/music/pause.mp3']);
    this.load.audio('lips', ['assets/sounds/lips.mp3']);
    this.load.audio('intro', ['assets/sounds/music/intro.mp3']);
    this.load.audio('fireball', ['assets/sounds/fireball.mp3']);
    this.load.audio('mgsstart', ['assets/sounds/mgsstart.mp3']);
    this.load.audio('mgsend', ['assets/sounds/mgsend.mp3']);
    this.load.audio('btbabies', ['assets/sounds/btbabies.mp3']);
    this.load.audio('thwompsound', ['assets/sounds/thwomp.mp3']);
    this.load.audio('brick', ['assets/sounds/brick.mp3']);
    this.load.audio('bt1', ['assets/sounds/bt/bt1.mp3']);
    this.load.audio('bt2', ['assets/sounds/bt/bt2.mp3']);
    this.load.audio('bt3', ['assets/sounds/bt/bt3.mp3']);
    this.load.audio('bt4', ['assets/sounds/bt/bt4.mp3']);
    this.load.audio('bt5', ['assets/sounds/bt/bt5.mp3']);
    this.load.audio('bt6', ['assets/sounds/bt/bt6.mp3']);
    this.load.audio('bt7', ['assets/sounds/bt/bt7.mp3']);
    this.load.audio('bt8', ['assets/sounds/bt/bt8.mp3']);
    this.load.audio('bt9', ['assets/sounds/bt/bt9.mp3']);
    this.load.audio('bt10', ['assets/sounds/bt/bt10.mp3']);
    this.load.audio('bt11', ['assets/sounds/bt/bt11.mp3']);
    this.load.audio('bt12', ['assets/sounds/bt/bt12.mp3']);
    this.load.audio('bt13', ['assets/sounds/bt/bt13.mp3']);
    this.load.audio('bt14', ['assets/sounds/bt/bt14.mp3']);
    this.load.audio('snake', ['assets/sounds/bt/snake.mp3']);
    this.load.audio('itsame', ['assets/sounds/bt/itsame.mp3']);

    this.load.on('progress', this.updateBar, {
      newGraphics: this.newGraphics,
      loadingText: loadingText,
    });

    this.load.on('complete', this.complete, { scene: this.scene });
  }
  updateBar(percentage) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(0xff0000, 1);
    this.newGraphics.fillRectShape(
      new Phaser.Geom.Rectangle(102, 122, percentage * 56, 16)
    );

    percentage = percentage * 100;
    this.loadingText.setText('Loading: ' + percentage.toFixed(2) + '%');
    console.log('P:' + percentage);
    console.log(this.holdOn);
    console.log(this.loadingText);
    if (percentage > 70 && percentage < 80) {
      console.log('The bar randomly gets stuck here, give it a sec!');
    }
  }

  complete() {
    console.log('COMPLETE!');
    this.scene.start('bootGame');
  }
}
