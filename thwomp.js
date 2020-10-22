class Thwomp extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){


        super(scene, x, y, "thwomp");
        this.emitter=EventDispatcher.getInstance();
        scene.add.existing(this);

        this.play("thwomp_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = 200
        scene.enemyProjectiles.add(this);

    }

    update(){
        if(this.y == 72){
            console.log('72')
            this.scene.thwomp.destroy()
        }
    }

    oneThwomp(){
        
        this.scene.thwomp = new Thwomp(this.scene, 48, -50)

    }
    thwompstacleCourse(){
        let rand = Math.floor(Math.random() * 6) + 1
        console.log(this.y)
        if(rand == 1){


                this.scene.thwomp = new Thwomp(this.scene, 80, -50)
                this.scene.thwomp = new Thwomp(this.scene, 112, -50)
                this.scene.thwomp = new Thwomp(this.scene, 144, -50)
                this.scene.thwomp = new Thwomp(this.scene, 176, -50)
                this.scene.thwomp = new Thwomp(this.scene, 208, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 2){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 112, -50)
                this.scene.thwomp = new Thwomp(this.scene, 144, -50)
                this.scene.thwomp = new Thwomp(this.scene, 176, -50)
                this.scene.thwomp = new Thwomp(this.scene, 208, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 3){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 48, -50)
                this.scene.thwomp = new Thwomp(this.scene, 144, -50)
                this.scene.thwomp = new Thwomp(this.scene, 176, -50)
                this.scene.thwomp = new Thwomp(this.scene, 208, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 4){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 48, -50)
                this.scene.thwomp = new Thwomp(this.scene, 80, -50)
                this.scene.thwomp = new Thwomp(this.scene, 176, -50)
                this.scene.thwomp = new Thwomp(this.scene, 208, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 5){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 48, -50)
                this.scene.thwomp = new Thwomp(this.scene, 80, -50)
                this.scene.thwomp = new Thwomp(this.scene, 112, -50)
                this.scene.thwomp = new Thwomp(this.scene, 208, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 6){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 48, -50)
                this.scene.thwomp = new Thwomp(this.scene, 80, -50)
                this.scene.thwomp = new Thwomp(this.scene, 112, -50)
                this.scene.thwomp = new Thwomp(this.scene, 144, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } else if(rand == 7){

                this.scene.thwomp = new Thwomp(this.scene, 16, -50)
                this.scene.thwomp = new Thwomp(this.scene, 48, -50)
                this.scene.thwomp = new Thwomp(this.scene, 80, -50)
                this.scene.thwomp = new Thwomp(this.scene, 112, -50)
                this.scene.thwomp = new Thwomp(this.scene, 144, -50)
                this.scene.thwomp = new Thwomp(this.scene, 176, -50)
                this.scene.thwomp = new Thwomp(this.scene, 240, -50)

    } 
    if(this.y == 262){
        this.y.destroy();
        console.log('Complete')
    }
    }

    testFunction(){
        this.scene.time.addEvent({
            duration: 3000,
            callback: function(){
                console.log('TEST')
            }
        })
    }
    thwompstacleTimed(){

        // var timeline = this.scene.tweens.createTimeline();
        // console.log(timeline)
        // timeline.add({
        //     targets: this.scene.thwomp,
        //     callback: this.scene.thwompstacleCourse(),
        //     duration: 1000,
        //     ease: 'Power2',
        //     repeat: 0
        // });
        // timeline.add({
        //     targets: this.scene.thwomp, 
        //     duration: 500,
        //     ease: 'Power2',
        //     callback: this.scene.thwompstacleCourse(),
        //     repeat: -1
        // });
    
        // timeline.play()

       this.scene.time.addEvent({

            duration: 500,
            callback: this.oneThwomp(),
            loop: true,
            repeat: 5
        })
    }
}