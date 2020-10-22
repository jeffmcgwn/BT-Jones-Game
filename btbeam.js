class Btbeam extends Phaser.GameObjects.Sprite{
    constructor(scene){

        var x = scene.btspider.x + 1;
        var y = scene.btspider.y + 16;

        super(scene, x, y, "btbeam");

        scene.add.existing(this);

        this.play("btbeam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = 250

        scene.enemyProjectiles.add(this);
    }

    update() {

        if(this.y > 240){
            this.destroy();
        }
    }
}