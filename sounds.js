class Sounds extends Phaser.GameObjects.Sprite{
    constructor(scene){
        super(scene);




    }

    update(){

    }
    addSounds(){
        // Sounds
        this.scene.beamSound = this.scene.sound.add("audio_beam");
        this.scene.explosionSound = this.scene.sound.add("audio_explosion");
        this.scene.pickupSound = this.scene.sound.add("audio_pickup");
        this.scene.death = this.scene.sound.add("audio_shirt");
        this.scene.mascot = this.scene.sound.add("audio_mascot");
        this.scene.freeloader = this.scene.sound.add("audio_freeloader");
        this.scene.invaderSound = this.scene.sound.add("audio_invader");
        this.scene.jawsDeathSound = this.scene.sound.add("audio_jawsdeath");
        this.scene.jawsHit = this.scene.sound.add("audio_jawshit");
        this.scene.smile = this.scene.sound.add("audio_smile");
        this.scene.btlaser = this.scene.sound.add("audio_btlaser")
        this.scene.turtlesoup = this.scene.sound.add("turtlesoup");
        this.scene.bthit = this.scene.sound.add("bthit");
        this.scene.btdeath = this.scene.sound.add("btdeath");
        this.scene.btdead = this.scene.sound.add("btdead");
        this.scene.lipssound = this.scene.sound.add("lips")
        this.scene.fireballsound = this.scene.sound.add("fireball")
        this.scene.mgsstart = this.scene.sound.add("mgsstart")
        this.scene.mgsend = this.scene.sound.add("mgsend")
        this.scene.btbabies = this.scene.sound.add("btbabies")
        this.scene.thwompsound = this.scene.sound.add("thwompsound")
        this.scene.brick = this.scene.sound.add("brick")

        // BT
        this.scene.bt1 = this.scene.sound.add("bt1")
        this.scene.bt2 = this.scene.sound.add("bt2")
        this.scene.bt3 = this.scene.sound.add("bt3")
        this.scene.bt4 = this.scene.sound.add("bt4")
        this.scene.bt5 = this.scene.sound.add("bt5")
        this.scene.bt6 = this.scene.sound.add("bt6")
        this.scene.bt7 = this.scene.sound.add("bt7")
        this.scene.bt8 = this.scene.sound.add("bt8")
        this.scene.bt9 = this.scene.sound.add("bt9")
        this.scene.bt10 = this.scene.sound.add("bt10")
        this.scene.bt11 = this.scene.sound.add("bt11")
        this.scene.bt12 = this.scene.sound.add("bt12")
        this.scene.bt13 = this.scene.sound.add("bt13")
        this.scene.bt14 = this.scene.sound.add("bt14")
        this.scene.snake = this.scene.sound.add("snake")
        this.scene.itsame = this.scene.sound.add("itsame")
        // Add music
        this.scene.music = this.scene.sound.add("music");
        this.scene.jawsTheme = this.scene.sound.add("audio_jaws");
        this.scene.chem = this.scene.sound.add("audio_chem");
        this.scene.gameover = this.scene.sound.add("audio_gameover");
        this.scene.tmnt = this.scene.sound.add("audio_tmnt")

        this.scene.song1 = this.scene.sound.add("song1");
        this.scene.song2 = this.scene.sound.add("song2");
        this.scene.song3 = this.scene.sound.add("song3");
        this.scene.song4 = this.scene.sound.add("song4");
        this.scene.song5 = this.scene.sound.add("song5");
        this.scene.song6 = this.scene.sound.add("song6");
        this.scene.song7 = this.scene.sound.add("song7");
        this.scene.song8 = this.scene.sound.add("song8");
        this.scene.song9 = this.scene.sound.add("song9");
        this.scene.song10 = this.scene.sound.add("song10");
        this.scene.song11 = this.scene.sound.add("song11");
        this.scene.song12 = this.scene.sound.add("song12");
        this.scene.song13 = this.scene.sound.add("song13");
        this.scene.song14 = this.scene.sound.add("song14");
}
musicStop() {
    this.scene.jawsTheme.stop();
    this.scene.music.stop();
    this.scene.chem.stop();
    this.scene.tmnt.stop();
    this.scene.song1.stop();
    this.scene.song2.stop();
    this.scene.song3.stop();
    this.scene.song4.stop();
    this.scene.song5.stop();
    this.scene.song6.stop();
    this.scene.song7.stop();
    this.scene.song8.stop();
    this.scene.song9.stop();
    this.scene.song10.stop();
    this.scene.song11.stop();
    this.scene.song12.stop();
    this.scene.song13.stop();
    this.scene.song14.stop();
    }
    playRandom(){
        let rand = Math.floor(Math.random() * 13) +1

        if (rand == 1){
            this.scene.song1.play(musicConfig);
        } else if (rand == 2){
            this.scene.song2.play(musicConfig);
        } else if (rand == 3){
            this.scene.song3.play(musicConfig);
        } else if (rand == 4) {
            this.scene.song4.play(musicConfig);
        } else if (rand == 5) {
            this.scene.song5.play(musicConfig);
        } else if (rand == 6) {
            this.scene.song6.play(musicConfig);
        } else if (rand == 7) {
            this.scene.song7.play(musicConfig);
        } else if (rand == 8) {
            this.scene.song8.play(musicConfig);
        } else if (rand == 9) {
            this.scene.song9.play(musicConfig);
        } else if (rand == 10) {
            this.scene.song10.play(musicConfig);
        } else if (rand == 11) {
            this.scene.song11.play(musicConfig);
        } else if (rand == 12) {
            this.scene.song12.play(musicConfig);
        } else if (rand == 13) {
            this.scene.song13.play(musicConfig);
        }else if (rand == 14) {
            this.scene.song14.play(musicConfig);
        }
    }

    randomBT(){
        let rand = Math.floor(Math.random() * 15) +1

        if (rand == 1){
            this.scene.bt1.play(configBT);
            this.scene.btTalk(2000)
        } else if (rand == 2){
            this.scene.bt2.play(configBT);
            this.scene.btTalk(2000)
        } else if (rand == 3){
            this.scene.bt3.play(configBT);
            this.scene.btTalk(6500)
        } else if (rand == 4) {
            this.scene.bt4.play(configBT);
            this.scene.btTalk(4500)
        } else if (rand == 5) {
            this.scene.bt5.play(configBT);
            this.scene.btTalk(1500)
        } else if (rand == 6) {
            this.scene.bt6.play(configBT);
            this.scene.btTalk(2000)
        } else if (rand == 7) {
            this.scene.bt7.play(configBT);
            this.scene.btTalk(2500)
        } else if (rand == 8) {
            this.scene.bt8.play(configBT);
            this.scene.btTalk(6000)
        } else if (rand == 9) {
            this.scene.bt9.play(configBT);
            this.scene.btTalk(3000)
        } else if (rand == 10) {
            this.scene.bt10.play(configBT);
            this.scene.btTalk(2000)
        } else if (rand == 11) {
            this.scene.bt11.play(configBT);
            this.scene.btTalk(5000)
        } else if (rand == 12) {
            this.scene.bt12.play(configBT);
            this.scene.btTalk(4000)
        }else if (rand == 13) {
            this.scene.bt13.play(configBT);
            this.scene.btTalk(3000)
        } else if (rand == 14) {
            this.scene.bt14.play(configBT);
            this.scene.btTalk(2000)
        } else if (rand == 15) {
            this.scene.itsame.play(configBT);
            this.scene.btTalk(3000)
        }else if (rand == 16) {
            this.scene.snake.play(configBT);
            this.scene.btTalk(3500)
        }
    }
}