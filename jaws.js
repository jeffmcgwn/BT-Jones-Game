class Jaws extends Phaser.GameObjects.Sprite{
    constructor(scene){
        

        var x = scene.player.x -100;
        var y = scene.player.y -100;

        super(scene, x, y, "jaws");

        scene.add.existing(this);

        this.play("jaws_anim");
        this.life = 100;
        this.setInteractive();
        this.body.setVelocity.y = -250
        
    }
    enterjaws(){
        this.time.addEvent({
            delay: 10000,
            callback: this.movejaws(this.jaws, 3),
            callbackScope: this,
            loop: false
        });
    }
    hitjaws(projectile, jaws) {
        this.life -= 1;
        this.hit.play();
        projectile.destroy();
        console.log(this.life)
        if(this.life == 20) {

        }
        if(this.life == 0) {
            this.movePowerUps(this.heart)
            this.jawsDeathSound.play();
            this.destroy();
            this.musicStop();
            this.playRandom()
            this.jellyfish.destroy();
            this.jellyfish2.destroy(); 
            this.background.tilePositionY -= 1.5;
                   
        } 
        var blood = new Blood(this, jaws.x, jaws.y);
    }

    movejaws(ship, speed) {
        var randomY = Phaser.Math.Between(0, config.height);

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