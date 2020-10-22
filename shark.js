class Shark extends Phaser.GameObjects.Sprite{
    constructor(config){

        super(config.scene, config.x, config.y, "jaws");


        config.scene.add.existing(this);
        this.sharklife = 100;
        this.play("jaws_anim");
        this.life = 100;
        this.setInteractive();
        // scene.physics.world.enableBody(this);
        console.log(this.scene.jellyfish)
        console.log(this.life)
        console.log(this.sharklife)
        
    }

    update(){

    }

    enter(){
        this.complete = false;
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: ship,
            x: -10,
            duration: 5000,
            ease: 'Power2',
            repeat: -1,
            onComplete: this.complete = true
        });

        this.time.addEvent({
            delay: 10000,
            callback: this.movejaws(this.jaws, 3),
            callbackScope: this,
            loop: false
        });
    }
    hit(projectile, jaws) {
        this.enemyBlink(this.shark);
        this.shark.sharklife -= 1;
        this.jawsHit.play()
        projectile.destroy();
        console.log(this.shark.sharklife)

        if(this.shark.sharklife == 0) {
            this.movement.movePowerUps(this.heart)
            this.jawsDeathSound.play();
            this.shark.destroy();
            this.sounds.musicStop();
            this.sounds.playRandom();

                   
        } 
        if(this.shark.sharklife == 0) {
            this.background.tilePositionY += 10   
        }
        var blood = new Blood(this, this.x, this.y)   ;
    }

    move(ship, speed) {
        var randomY = Phaser.Math.Between(20, 272);

        if (ship.x <= -80) {
            ship.isRight = true;
            ship.y = randomY;
            ship.flipX = false;
        } else if (ship.x >= 320) {
            ship.isRight = false;
            ship.y = randomY;
            ship.flipX = true;
        }

        if (ship.isRight) {
            ship.x += speed;
        } else {
            ship.x -= speed;   
        }


    }


}