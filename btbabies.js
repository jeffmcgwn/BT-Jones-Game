class Btbabies extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){



        super(scene, x, y, "btspider").setScale(.30);


        scene.add.existing(this);

        this.play("btspider_anim");
        scene.physics.world.enableBody(this);
        var randVelocity = Math.floor(Math.random() * Math.floor(100)) + 150
        this.body.velocity.y = randVelocity;

        scene.enemyProjectiles2.add(this);
    }

    update() {

        if(this.y < 132){
            this.destroy();
        }
        
    }

}

