class bedroom extends Phaser.Scene {
  constructor() {
    super("bedroom");
  };
  preload() {};
  create() {
    this.bedroomTile = this.add.tileSprite(0,0,2000,1220,"bedroom").setOrigin(0).setScale(0.4);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.text1 = "This is Malakai's bedroom, where he was found chocked to death.";
    if (localStorage.getItem("firstTimeBedroom") != "n"){
      localStorage.setItem("firstTimeBedroom", "n");
      typing.play();
      i=0;
      this.text1type = this.time.addEvent({
        delay:75,
        callback:() => {
          if (i<this.text1.length){
            let letter = this.add.text(5 + (i*12),400,this.text1.charAt(i),{fontFamily: "noir", fontSize: "18px"});
            i++;
            this.time.addEvent({
              delay: 8000,
              callback: () => {
                letter.destroy();
              }
            });
          }
          else{
            this.text1type.paused = true;
            typing.stop();
          }
        },loop: true
      })
    };
    this.toBathroom = this.physics.add.sprite(705,100).setOrigin(0).setInteractive();
    this.toBathroom.scaleX = 3;
    this.toBathroom.scaleY = 9;
    this.toBathroomText = this.add.text(600,250,"Bathroom -->", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toBathroom.on("pointerover", ()=>{this.toBathroomText.setVisible(true)});
    this.toBathroom.on("pointerout", ()=>{this.toBathroomText.setVisible(false)});
    this.toBathroom.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("bathroom")}});
      typing.stop(); 
    });
 

    this.toRooftop = this.physics.add.sprite(0,100).setOrigin(0).setInteractive();
    this.toRooftop.scaleX = 3;
    this.toRooftop.scaleY = 9;
    this.toRooftopText = this.add.text(50,250,"<-- Rooftop", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toRooftop.on("pointerover", ()=>{this.toRooftopText.setVisible(true)});
    this.toRooftop.on("pointerout", ()=>{this.toRooftopText.setVisible(false)});
    this.toRooftop.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("rooftop")}});
      typing.stop(); 
    });

    this.toStairs = this.physics.add.sprite(250,375).setOrigin(0).setInteractive();
    this.toStairs.scaleX = 9;
    this.toStairs.scaleY = 3;
    this.toStairsText = this.add.text(375,325,"Stairs\n   V", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toStairs.on("pointerover", ()=>{this.toStairsText.setVisible(true)});
    this.toStairs.on("pointerout", ()=>{this.toStairsText.setVisible(false)});
    this.toStairs.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("stairs")}});
      typing.stop(); 
    });

    this.bedroom1 = this.add.tileSprite(100,25,1000,667,"picture").setOrigin(0).setDepth(99).setScale(.6).setInteractive().setVisible(false);
    this.bedroom1.on("pointerdown", () => {this.bedroom1.setVisible(false)});
    this.pictureFrame = this.physics.add.sprite(505,220).setOrigin(0).setInteractive().setScale(1.2);
    this.pictureFrame.on("pointerdown", ()=>{
      this.bedroom1.setVisible(true);
    });
    
    this.bedroom2 = this.add.tileSprite(0,0,1600,1067,"safe").setOrigin(0).setDepth(99).setScale(.5).setInteractive().setVisible(false);
    this.bedroom2_1 = this.physics.add.sprite(300,200,"key").setOrigin(0).setDepth(99.1).setScale(.2).setInteractive().setVisible(false);
    this.bedroom2_1.alpha=.75;
    this.safe = this.physics.add.sprite(490,250).setOrigin(0).setScale(2.25).setInteractive();
    this.safe.on("pointerdown", ()=>{
      this.bedroom2.setVisible(true);
      this.bedroom2_1.setVisible(true);
    });
    this.bedroom2.on("pointerdown", ()=>{this.bedroom2.setVisible(false);this.bedroom2_1.setVisible(false)});
    this.bedroom2_1.on("pointerdown", ()=>{
      localStorage.setItem("basementKeyFound", "y");
      this.keyCloseUp=this.time.addEvent({
        delay: 100,
        callback: () => {
          this.bedroom2_1.x -= 3;
          this.bedroom2_1.y -= 6;
          this.bedroom2_1.scale += .03;
          this.bedroom2_1.alpha += .01;
          this.time.addEvent({delay:3000,callback:()=>{this.bedroom2_1.setVisible(false);}});
          if(this.bedroom2_1.alpha>=1)
            this.keyCloseUp.paused = true;
        },loop: true
      });
    });
    if(localStorage.getItem("basementKeyFound") == "y")
      this.bedroom2_1.destroy();

    this.bedroom3 = this.physics.add.sprite(200,240).setOrigin(0).setInteractive();
    this.bedroom3.scaleX = 8;
    this.bedroom3.scaleY = 3;
    this.bedroom3.on("pointerdown", () => {
      if(localStorage.getItem("elenoreFound") != "y"){
        localStorage.setItem("elenoreFound", "y");
        this.bedText = "You are very tired of all the hustle and buslte. You decide to take a quick nap.";
        this.text1type.paused = true;
        i = 0;
        typing.play();
        this.bedType = this.time.addEvent({
          delay: 50,
          callback:() =>{
            if(i<this.bedText.length){
              let letter = this.add.text(5+(i*10),400,this.bedText.charAt(i), {fontFamily: "noir", fontSize: "13px"});
              i++;
              this.time.addEvent({delay: 5000, callback: () => {letter.destroy()}});
            }
            else{
              typing.stop();
              this.bedType.paused = true;
            }
          }, loop: true
        });
        this.time.addEvent({delay: 5000, callback: ()=>{this.bedFadeOut.paused = false}});
        this.time.addEvent({delay: 15000, callback: ()=>{this.bedFadeIn.paused = false}});
        this.elenore = this.physics.add.sprite(550, 250, "elenore").setScale(.5).setAlpha(0);
        this.bedFadeOut = this.time.addEvent({
          delay: 20,
          callback:() =>{
            this.bedroomTile.alpha -= 0.01;
            if (this.bedroomTile.alpha == 0)
              this.bedFadeOut.paused = true
          }, loop: true, paused: true
        });
        this.bedFadeIn = this.time.addEvent({
          delay: 20,
          callback:() =>{
            this.bedroomTile.alpha += 0.01;
            this.elenore.alpha += 0.01;
            if (this.bedroomTile.alpha == 1)
              this.bedFadeIn.paused = true
          }, loop: true, paused: true
        });
        this.time.addEvent({
          delay: 10000,
          callback:() =>{
            this.elenoreText1 = "Hey! What the hell you think you're doing in my father's bed!";
            this.elenoreText2 = "You are a special agent?! Have some work manners, prick ...";
            this.elenoreText3 = "Anyways, I hope you stop sleeping around and solve this case.";
            typing.play();
            i = 0;
            j = 1;
            this.typingElenore = this.time.addEvent({
              delay: 75,
              callback:() =>{
                if (j==1 && i<this.elenoreText1.length){
                  let letter = this.add.text(5 + (i*13),330,this.elenoreText1.charAt(i),{fontFamily: "noir", fontSize: "17px"});
                  i++;
                  this.time.addEvent({
                    delay: 10000,
                    callback: () => {
                      letter.destroy();
                    }
                  });
                }
                else if (j==2 && i<this.elenoreText2.length){
                  let letter = this.add.text(5 + (i*13),360,this.elenoreText2.charAt(i),{fontFamily: "noir", fontSize: "17px"});
                  i++;
                  this.time.addEvent({
                    delay: 10000,
                    callback: () => {
                      letter.destroy();
                    }
                  });
                }
                else if (j==3 && i<this.elenoreText3.length){
                  let letter = this.add.text(5 + (i*13),390,this.elenoreText3.charAt(i),{fontFamily: "noir", fontSize: "17px"});
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
                    this.typingElenore.paused = true;
                    typing.stop();
                  }
                }
              }, loop: true
            });
          }
        });
        this.time.addEvent({
          delay: 25000,
          callback:() =>{
            this.elenore.setTexture("elenore1");
            this.sound.play("swosh");
            this.time.addEvent({
              delay: 2000,
              callback:() =>{
                this.sound.play("steps");
                this.elenore.destroy();
              }
            })
          }
        })
      }
    });
  }
}
