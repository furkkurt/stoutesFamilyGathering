class stairs extends Phaser.Scene {
  constructor() {
    super("stairs");
  };
  preload() {};
  create() {
    this.add.tileSprite(0,0,2944,1656,"stairs").setOrigin(0).setScale(0.271739130435);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    typing.stop(); 
    
    this.toBasement = this.physics.add.sprite(0,100).setOrigin(0).setInteractive();
    this.toBasement.scaleX = 3;
    this.toBasement.scaleY = 9;
    this.toBasementText = this.add.text(50,215,"<-- Basement", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toBasement.on("pointerover", ()=>{this.toBasementText.setVisible(true)});
    this.toBasement.on("pointerout", ()=>{this.toBasementText.setVisible(false)});
    this.toBasement.on("pointerdown", ()=>{
      if (localStorage.getItem("basementKeyFound") == "y"){
        this.sound.play("doorUnlock", {volume: 2});
        this.sound.play("steps");
        this.time.addEvent({delay: 500,callback: () => {this.scene.start("basement")}});
      }
      else{
        let text1 = "The door is locked.";
        i = 0;
        this.sound.play("doorTry", {volume: 3});
        typing.play();
        let text1type = this.time.addEvent({
          delay: 100,
          callback: () => {
            if(i<text1.length){
              let letter = this.add.text(20+(i*18),400,text1.charAt(i), {fontFamily: "noir", fontSize: "21px"});
              i++;
              this.time.addEvent({delay: 3000, callback: () => {letter.destroy()}});
            }
            else{
              typing.stop();
              text1type.paused = true;
            }
          }, loop: true
        });
      }
    });

    this.toHallway = this.physics.add.sprite(705,100).setOrigin(0).setInteractive();
    this.toHallway.scaleX = 3;
    this.toHallway.scaleY = 9;
    this.toHallwayText = this.add.text(650,215,"Hallway -->", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toHallway.on("pointerover", ()=>{this.toHallwayText.setVisible(true)});
    this.toHallway.on("pointerout", ()=>{this.toHallwayText.setVisible(false)});
    this.toHallway.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("hallway")}});
    });
    this.toBedroom = this.physics.add.sprite(300,0).setOrigin(0).setInteractive();
    this.toBedroom.scaleX = 9;
    this.toBedroom.scaleY = 3;
    this.toBedroomText = this.add.text(375,100,"     ^\nBedroom", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toBedroom.on("pointerover", ()=>{this.toBedroomText.setVisible(true)});
    this.toBedroom.on("pointerout", ()=>{this.toBedroomText.setVisible(false)});
    this.toBedroom.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("bedroom")}});
    });
  }
}
