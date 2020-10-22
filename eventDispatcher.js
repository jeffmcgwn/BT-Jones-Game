let instance = null;

class EventDispatcher  extends Phaser.Scene{
    constructor(){

        super();
        if (instance == null)
        {
            instance = this;
        }
    }
    static getInstance()
    {
        if(instance=null)
        {
            instance = new EventDispatcher();
        }
    }
    update() {

    }
    

}