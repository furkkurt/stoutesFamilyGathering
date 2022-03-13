class hallway extends Phaser.Scene {
  constructor() {
    super("hallway");
  };
  preload() {};
  create() {
    if(hallStart == true){
      this.sound.stopAll();
      this.sound.play("iKnewAGUY", {volume: 1.5, loop: true});
    }
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.hall = this.add.tileSprite(0,0,2944,1656,"hall").setOrigin(0).setScale(0.3268);
    this.text1 = "You entered the mansion but Stotues are not in your sight."
    this.text2 = "You better gather them and start interrogating."
    i = 0;
    j = 1;
    if (localStorage.getItem("firstTimeHall") != "n"){
      typing.play();
      this.text1type = this.time.addEvent({
        delay:75,
        callback:() => {
          if (j==1 && i<this.text1.length){
            let letter = this.add.text(25 + (i*13),330,this.text1.charAt(i),{fontFamily: "noir", fontSize: "17px"});
            i++;
            this.time.addEvent({
              delay: 10000,
              callback: () => {
                letter.destroy();
              }
            });
          }
          else if (j==2 && i<this.text2.length){
            let letter = this.add.text(75 + (i*13),380,this.text2.charAt(i),{fontFamily: "noir", fontSize: "17px"});
            i++;
            this.time.addEvent({
              delay: 10000,
              callback: () => {
                letter.destroy();
              }
            });
          }
          else{
            if(j<2){
              j++;
              i = 0;
            }
            else{
              this.text1type.paused = true;
              typing.stop();
            }
          }
        },loop: true
      })
    };
    this.toStairs = this.physics.add.sprite(0,100).setOrigin(0).setInteractive();
    this.toStairs.scaleY = 9;
    this.toStairs.scaleX = 3;
    this.toStairsText = this.add.text(50,215,"<-- Stairs", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toStairs.on("pointerover", ()=>{this.toStairsText.setVisible(true)});
    this.toStairs.on("pointerout", ()=>{this.toStairsText.setVisible(false)});
    this.toStairs.on("pointerdown", ()=>{
      this.sound.play("steps");
      localStorage.setItem("firstTimeHall", "n");
      hallStart = false;
      typing.stop();
      this.time.addEvent({delay: 500,callback:() => {this.scene.start("stairs")}});
    });
    this.toKitchen = this.physics.add.sprite(705,100).setOrigin(0).setInteractive();
    this.toKitchen.scaleY = 9;
    this.toKitchen.scaleX = 3;
    this.toKitchenText = this.add.text(600,215,"Kitchen -->", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toKitchen.on("pointerover", ()=>{this.toKitchenText.setVisible(true)});
    this.toKitchen.on("pointerout", ()=>{this.toKitchenText.setVisible(false)});
    this.toKitchen.on("pointerdown", ()=>{
      this.sound.play("steps");
      localStorage.setItem("firstTimeHall", "n");
      hallStart = false;
      typing.stop();
      this.time.addEvent({delay: 500,callback:() => {this.scene.start("kitchen")}});
    });
    this.toYard = this.physics.add.sprite(260,350).setOrigin(0).setInteractive();
    this.toYard.scaleY = 3;
    this.toYard.scaleX = 9;
    this.toYardText = this.add.text(375,325,"Yard\n  v", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toYard.on("pointerover", ()=>{this.toYardText.setVisible(true)});
    this.toYard.on("pointerout", ()=>{this.toYardText.setVisible(false)});
    this.toYard.on("pointerdown", ()=>{
      if((localStorage.getItem("winifredFound") && localStorage.getItem("uncleEdwinFound") && localStorage.getItem("sebastienFound") && localStorage.getItem("mortizFound") && localStorage.getItem("monikaFound") && localStorage.getItem("elenoreFound")) == "y")
        this.scene.start("drive");
      this.sound.play("steps");
      localStorage.setItem("firstTimeHall", "n");
      hallStart = false;
      typing.stop();
      this.time.addEvent({delay: 500,callback:() => {this.scene.start("enterance")}});
    });

    this.hallway1 = this.physics.add.sprite(620,155).setOrigin(0).setInteractive().on("pointerdown", () => {
      if(localStorage.getItem("monikaFound") != "y"){
        this.text1type.paused = true;
        localStorage.setItem("monikaFound", "y");

        this.textMonika1 = "Don't turn off the lights please, I feel scared since";
        this.textMonika2 = "what happend to poor Malakai. You must be an agent,";
        this.textMonika3 = "please solve the case so I can sleep well again.";

        i = 0;
        j = 1;
        this.typingMonika = this.time.addEvent({
          delay: 75,
          callback:() =>{
            if (j==1 && i<this.textMonika1.length){
              let letter = this.add.text(25 + (i*13),330,this.textMonika1.charAt(i),{fontFamily: "noir", fontSize: "17px"});
              i++;
              this.time.addEvent({
                delay: 10000,
                callback: () => {
                  letter.destroy();
                }
              });
            }
            else if (j==2 && i<this.textMonika2.length){
              let letter = this.add.text(25 + (i*13),360,this.textMonika2.charAt(i),{fontFamily: "noir", fontSize: "17px"});
              i++;
              this.time.addEvent({
                delay: 10000,
                callback: () => {
                  letter.destroy();
                }
              });
            }
            else if (j==3 && i<this.textMonika3.length){
              let letter = this.add.text(25 + (i*13),390,this.textMonika3.charAt(i),{fontFamily: "noir", fontSize: "17px"});
              i++;
              this.time.addEvent({
                delay: 10000,
                callback: () => {
                  letter.destroy();
                }
              });
            }
            else{
              if(j<3){
                j++;
                i = 0;
              }
              else{
                this.typingMonika.paused = true;
                typing.stop();
              }
            }
          }, paused: true, loop: true
        })
  
        this.hall.alpha = 0;
        this.time.addEvent({
          delay: 1000,
          callback:() =>{
            this.hall.alpha = 1;
            this.sound.play("switch");
            this.monika1 = this.add.sprite(600,285, "monika1").setScale(.5);
            this.time.addEvent({delay: 2500, callback: ()=>{typing.play(); this.typingMonika.paused = false}});
            this.time.addEvent({delay: 2050, callback: ()=>{this.monika1.destroy()}});
          }
        });
        this.time.addEvent({
          delay: 3000,
          callback:() =>{
            this.sound.play("swosh");
            this.monika2 = this.physics.add.sprite(570, 285, "monika").setScale(.5);
            this.monika2.flipX = true;
            this.time.addEvent({
              delay: 13000,
              callback:() =>{
                this.sound.play("swosh");
                this.monika2.flipX = false;
              }
            })
            this.time.addEvent({
              delay: 15000,
              callback:() =>{
                this.sound.play("steps");
                this.monika2.destroy();
              }
            })
          }
        });
      }
    });
    this.hallway1.scaleX = 3;
    this.hallway1.scaleY = 2;

  }
}
