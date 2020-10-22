class Fireball extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){



        super(scene, x, y, "fireball");
        this.emitter=EventDispatcher.getInstance();
        scene.add.existing(this);

        this.play("fireball_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250 
        scene.projectiles.add(this);
    }

    update() {

        if(this.y < 32){
            this.destroy();
        }
        
    }
    shoot(){
        this.scene.summons -= 1;
        this.summonslabel.text = "FIRE: " + this.scene.summons;
    if(this.scene.summons >= 0){
        this.scene.fireballsound.play();
        var fireball = new Fireball(this.scene, 10, 240);
        var fireball = new Fireball(this.scene, 30, 240);
        var fireball = new Fireball(this.scene, 50, 240);
        var fireball = new Fireball(this.scene, 70, 240);
        var fireball = new Fireball(this.scene, 90, 240);
        var fireball = new Fireball(this.scene, 110, 240);
        var fireball = new Fireball(this.scene, 130, 240);
        var fireball = new Fireball(this.scene, 150, 240);
        var fireball = new Fireball(this.scene, 170, 240);
        var fireball = new Fireball(this.scene, 190, 240);
        var fireball = new Fireball(this.scene, 210, 240);
        var fireball = new Fireball(this.scene, 230, 240);
        var fireball = new Fireball(this.scene, 250, 240);

    } else {
        return;
    }
    }
}