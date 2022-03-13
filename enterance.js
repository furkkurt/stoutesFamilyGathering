class enterance extends Phaser.Scene {
  constructor() {
    super("enterance");
  };
  preload() {};
  create() {
    this.sound.stopAll();
    this.sound.play("nightOnTheDocks", {loop: true});
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.add.tileSprite(0,0,1600,896,"yard").setOrigin(0).setScale(0.501);
    this.yard1 = this.physics.add.sprite(0,-110,"yard1").setOrigin(0).setVisible(false).setInteractive();
    let b = 0;
    this.sebastienDoneTalking = false;
    this.yard1.on("pointerdown", () => {
      if (this.sebastienDoneTalking == true){
        this.yard1.setVisible(false);
        this.door.x = 350;
        this.car.x = 60;
        this.bell.visible = false;
      }
    });

    this.text1 = "You are standing in the yard of the mansion.";
    i = 0;
    this.enteranceText = this.time.addEvent({
      delay: 100,
      callback: () => {
        if(i<this.text1.length){
          let letter = this.add.text(20+(i*18),400,this.text1.charAt(i), {fontFamily: "noir", fontSize: "21px"});
          i++;
          this.time.addEvent({delay: 5000, callback: () => {letter.destroy()}});
        }
        else{
          typing.stop();
          this.enteranceText.paused = true;
        }
      }, loop: true, paused: true
    });

    if (localStorage.getItem("firstTimeYard") != "n"){
      localStorage.setItem("firstTimeYard", "n");
      typing.play();
      this.enteranceText.paused = false;
    }
    this.door = this.physics.add.sprite(350,250).setInteractive()
    this.door.scaleX = 6;
    this.door.scaleY = 3;
    this.door.on("pointerover", () => {this.doorText.setVisible(true)});
    this.door.on("pointerout", () => {this.doorText.setVisible(false)});
    this.door.on("pointerdown", () => {
    this.sound.play("door", {volume:.7});
      this.time.addEvent({
        delay: 750,
        callback: () => {
          this.scene.start("hallway");
          localStorage.setItem("autosave", "2");
          typing.stop(); 
       }
      });
    });
    this.doorText = this.add.text(this.door.x-32,this.door.y-16,"   ^\nEnter",{fontFamily: "noir", fontSize: "18px"}).setVisible(false);

    this.car = this.physics.add.sprite(60,450).setScale(4).setInteractive();
    this.car.on("pointerdown", () => {
      if (this.enteranceText.paused == false)
        this.enteranceText.paused = true;
      this.door.x=9999;
      this.car.x=9999;
      i = 0;
      j = 1;
      this.yard1.setVisible(true);
      this.yardText1 = "This is Malakai Stoute's car according to case files."
      this.yardText2 = "Looks like someone tried to drive it yesterday,"
      this.yardText3 = "in the heavy rain, and got it stuck in the mud."
      if (localStorage.getItem("firstTimeYard") != "n")
        typing.play();
      this.yard1Text = this.time.addEvent({
        delay: 60,
        callback: () => {
          if(j == 1 && i<this.yardText1.length){
            let letter = this.add.text(10+(i*15),360,this.yardText1.charAt(i), {fontFamily: "noir", fontSize: "18px"});
            i++;
            this.time.addEvent({delay: 10000, callback: () => {letter.destroy()}});
          }
          else if(j == 2 && i<this.yardText2.length){
            let letter = this.add.text(10+(i*15),390,this.yardText2.charAt(i), {fontFamily: "noir", fontSize: "18px"});
            i++;
            this.time.addEvent({delay: 10000, callback: () => {letter.destroy()}});
          }
          else if(j == 3 && i<this.yardText3.length){
            let letter = this.add.text(10+(i*15),420,this.yardText3.charAt(i), {fontFamily: "noir", fontSize: "18px"});
            i++;
            this.time.addEvent({delay: 10000, callback: () => {letter.destroy()}});
          }
          else{
            if(j<3){
              j++;
              i=0;
            }
            else{
              typing.stop();
              this.yard1Text.paused = true;
            }
          }
        }, loop: true, paused: true
      });
      this.yard1Text.paused = true;
      if(localStorage.getItem("carVisited") != "y")
        this.yard1Text.paused = false;
      this.yard1.on("pointerdown", () => {
        localStorage.setItem("carVisited", "y");
        if(localStorage.getItem("carKeyFound") == "y" && this.bell == undefined){
          this.yard1.setTexture("yard2");
          this.bell = this.physics.add.sprite(370,220,"bell").setScale(.175).setRotation(.175).setInteractive().on("pointerdown", () => {
            if(b == 0){
              b++;
              this.bellFound = this.time.addEvent({
                delay: 25,
                callback:() =>{
                  this.bell.rotation -= .005;
                  this.bell.scale += .01;
                  this.bell.x += 2;
                  this.bell.alpha += .01;
                }, loop: true
              });
              this.time.addEvent({
                delay: 1000,
                callback:() =>{
                  this.bellFound.paused = true;
                }
              })
            }
            else if(b == 1){
              this.sound.play("bellRing");
              if(localStorage.getItem("sebastienFound") != "y"){
                localStorage.setItem("sebastienFound", "y");
                b++;
                this.bell.rotation += .4;
                let c = 0;
                let rot = "l";
                this.ring = this.time.addEvent({
                  delay: 20,
                  callback:() =>{
                    c++;
                    if(c%50 == 0){
                      if(rot == "l")
                        rot = "r";
                      else
                        rot = "l";
                    };
                    if(rot == "l")
                      this.bell.rotation -= .02;
                    else
                      this.bell.rotation += .02;
                  }, loop: true
                });
                this.time.addEvent({
                  delay: 3575,
                  callback:() =>{
                    this.ring.paused = true;
                    this.sebastien = this.physics.add.sprite(-200, 0, "sebastien").setOrigin(0).setInteractive().setDepth(2).setScale(.55);
                    this.sebastien.flipX = true;
                    this.sebastien.setVelocityX(50);
                    this.time.addEvent({delay: 4000, callback: () => {this.sebastien.setVelocity(0)}});
                    this.textSebastien1 = "Sebastien in your service sir! I assume you arrived to solve the case";
                    this.textSebastien2 = "of Sir Statue's horrible murder. I hope justice triumphs in the end.";
                  
                    i = 0;
                    j = 1;
                    this.time.addEvent({
                      delay: 5000,
                      callback:() =>{
                        typing.play();
                        this.typingSebastien.paused = false;
                      }
                    });
                    this.typingSebastien = this.time.addEvent({
                      delay: 75,
                      callback:() =>{
                        if (j==1 && i<this.textSebastien1.length){
                          let letter = this.add.text(5 + (i*11),385,this.textSebastien1.charAt(i),{fontFamily: "noir", fontSize: "14px"}).setDepth(2);
                          i++;
                          this.time.addEvent({
                            delay: 10000,
                            callback: () => {
                              letter.destroy();
                            }
                          });
                        }
                        else if (j==2 && i<this.textSebastien2.length){
                          let letter = this.add.text(5 + (i*11),415,this.textSebastien2.charAt(i),{fontFamily: "noir", fontSize: "14px"}).setDepth(2);
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
                            this.typingSebastien.paused = true;
                            typing.stop();
                          }
                        }
                      }, paused: true, loop: true
                    });
                    this.time.addEvent({
                      delay: 16000,
                      callback:() =>{
                        this.sebastien.flipX = false;
                        this.sound.play("swosh", {volume: 2});
                        this.sebastien.setVelocityX(-50);
                        this.sebastienDoneTalking = true;
                      }
                    });
                    this.time.addEvent({
                      delay: 20000,
                      callback:() =>{
                        this.sebastien.destroy();
                      }
                    })
                    this.time.addEvent({
                      delay: 21000,
                      callback:() =>{
                        this.yard1.setVisible(false);
                        this.door.x = 350;
                        this.car.x = 60;
                        this.bell.visible = false;
                      }
                    })
                  }
                })
              }
            }
          })
          this.bell.alpha = .8;
        }
        else{
          if(this.bell == undefined){
            this.yard1.setVisible(false);
            this.door.x = 350;
            this.car.x = 60;
            this.bell.visible = false;
          }
        }
      });
    });
   }
}
