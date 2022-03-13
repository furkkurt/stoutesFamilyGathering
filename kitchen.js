class kitchen extends Phaser.Scene {
  constructor() {
    super("kitchen");
  };
  preload() {};
  create() {
    this.add.tileSprite(0,-80,4096,2732,"kitchen").setOrigin(0).setScale(0.1954);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    typing.stop(); 
    
    this.toHallway = this.physics.add.sprite(0,100).setOrigin(0).setInteractive();
    this.toHallway.scaleX = 3;
    this.toHallway.scaleY = 8;
    this.toHallwayText = this.add.text(110,215,"<-- Hallway", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toHallway.on("pointerover", ()=>{this.toHallwayText.setVisible(true)});
    this.toHallway.on("pointerout", ()=>{this.toHallwayText.setVisible(false)});
    this.toHallway.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("hallway")}});
      typing.stop(); 
    });
  
    this.boiling = this.sound.add("boiling", {loop: true});
    this.burning = this.sound.add("fire", {loop: true});

    this.d = 1;
    this.d4 = this.add.sprite(760, 75, "d4").setScale(.16).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d4)});
    this.d6 = this.add.sprite(760, 125, "d6").setScale(.14).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d6)});
    this.d8 = this.add.sprite(760, 175, "d8").setScale(.14).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d8)});
    this.d10 = this.add.sprite(760, 225, "d10").setScale(.13).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d10)});
    this.d12 = this.add.sprite(760, 275, "d12").setScale(.10).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d12)});
    this.d20 = this.add.sprite(760, 325, "d20").setScale(.13).setVisible(false).setDepth(1001).setInteractive().on("pointerdown", () => {this.intoBox(this.d20)});
    
    this.carKey = this.physics.add.sprite(515,225,"carKey").setOrigin(0).setDepth(1002).setRotation(-1.7).setScale(.175).setInteractive().setVisible(false).setOffset(-10,-500);
    this.carKey.on("pointerdown", () => {
      localStorage.setItem("carKeyFound", "y");
      this.carKey.setVisible(false);
    });

    this.drawer = this.physics.add.sprite(0,-80,"drawer").setOrigin(0).setVisible(false).setScale(1.6).setInteractive().setDepth(1000);
    this.drawer.on("pointerdown", () => {
      this.drawer.setVisible(false);
      this.box.visible = this.d4.visible = this.d6.visible = this.d8.visible = this.d10.visible = this.d12.visible = this.d20.visible = false;
    });
    
    i = 0;

    this.boxEmpty = true;
    this.box = this.physics.add.sprite(225, 150, "boxclose").setOrigin(0).setScale(.5).setDepth(1000.99).setRotation(-.45).setOffset(100,-100).setInteractive().setVisible(false);
    this.box.on("pointerdown", () => {
      if (i==0){
        this.box.setTexture("boxopen");
        this.sound.play("boxOpen", {volume: 2});
        this.box.setScale(.75).setRotation(-.33).setOffset(0,-100);
        i++;
        if (localStorage.getItem("dicesFound") == "y"){
          this.d4.visible = this.d6.visible = this.d8.visible = this.d10.visible = this.d12.visible = this.d20.visible = true;
          this.d4.x = this.d6.x = this.d8.x = this.d10.x = this.d12.x = this.d20.x = 760;
          this.d4.y = 75;
          this.d6.y = this.d4.y + 50;
          this.d8.y = this.d6.y + 50;
          this.d10.y = this.d8.y + 50;
          this.d12.y = this.d10.y + 50;
          this.d20.y = this.d12.y + 50;
          this.boxEmpty = true;
          if(this.d == 2)
            this.d4.alpha = 0;
          if(this.d == 3)
            this.d6.alpha = 0;
          if(this.d == 4)
            this.d20.alpha = 0;
          if(this.d == 5)
            this.d12.alpha = 0;
          if(this.d == 6)
            this.d8.alpha = 0;
          if(this.d == 7){
            this.d10.alpha = 0;
            this.carKey.setVisible(true);
          }
        }
      }
      else if (i == 1){
        this.box.setTexture("boxclose");
        this.sound.play("boxClose", {volume: 2});
        this.box.setScale(.5).setRotation(-.45).setOffset(100,-100);
        i--;
        this.d4.visible = this.d6.visible = this.d8.visible = this.d10.visible = this.d12.visible = this.d20.visible = false;
      }
    })

    this.kitchen1 = this.physics.add.sprite(180,240).setOrigin(0).setInteractive();
    this.kitchen1.scaleX = 3;
    this.kitchen1.scaleY = 1.25;
    this.kitchen1.on("pointerdown", () => {
      this.drawer.visible = true;
      this.box.visible = true;
    });

    this.teaFound = false;
    this.teaDone = false;
    this.tea = this.add.sprite(132, 376, "tea").setOrigin(0).setScale(.039).setRotation(-.425).setDepth(5).setInteractive();
    this.tea.flipX = true;
    this.tea.alpha = .1;
    this.tea.on("pointerdown", () => {
      if (this.teaFound == false){
        this.teaFound = true;
        this.tea.flipX = false;
        this.teaFound1 = this.time.addEvent({
          delay: 10,
          callback:() =>{
            this.tea.scale += .0025;
            this.tea.alpha += .01;
            if (this.tea.rotation < 0)
              this.tea.rotation += .004;
            else{
              this.teaFound1.paused = true;
              this.teaFound2.paused = false;
            };
            this.tea.x += 2;
            this.tea.y -= 2;
          }, loop: true
        });
        this.teaFound2 = this.time.addEvent({
          delay: 10,
          callback:() =>{
            this.tea.scale -= .0025;
            this.tea.x -= 1;
            this.tea.y += .25;
            this.tea.alpha -= .0035;
            if (this.tea.scale < .074)
              this.teaFound2.paused = true
          }, loop: true, paused: true
        })
      }
      else{
        if (this.teaDone == false && (this.teaFound2.paused && this.teaFound1.paused) == true){
          this.teaBag = this.physics.add.sprite(-99, -99, "teaBag").setInteractive().setDepth(99);
          this.teaBag.on("pointerdown", () => {
            this.teaBagDrag.paused = true;
            if(this.physics.overlap(this.teaBag, this.teapot) == true && this.potOnFire == true){
              this.teaBag.setActive(false);
              this.teaBag.setVisible(false);
              this.tea.setActive(false);
              this.teaDone = true;
            }
            else{
              this.teaBag.setVisible(false);
            }
          });
          this.teaBagDrag = this.time.addEvent({
            delay: 50,
            callback:() =>{
              this.teaBag.x = this.input.activePointer.x;
              this.teaBag.y = this.input.activePointer.y;
            }, loop: true
          })
        }
      }
    });

    this.cup = this.physics.add.sprite(315, 215, "cup").setScale(.03).setDepth(6).setInteractive();
    this.cup.alpha = .5;1
    this.cupDrag = this.time.addEvent({
      delay: 50,
      callback:() =>{
        this.cup.x = this.input.activePointer.x;
        this.cup.y = this.input.activePointer.y;
      }, loop: true, paused: true
    });
    this.cup.on("pointerdown", () => {
      this.cup.alpha = .95;
      if (this.cupDrag.paused == false){
        if(this.teaDone == true && this.physics.overlap(this.pot, this.cup) == true){
          if(localStorage.getItem("winifredFound") != "y"){
            localStorage.setItem("winifredFound", "y");
            this.boiling.stop();
            this.burning.stop();
            this.cup.setTexture("cupoftea");
            this.winifred = this.physics.add.sprite(200, -500, "winifred").setOrigin(0).setDepth(99).setScale(.5).setVelocityY(800);
            this.time.addEvent({
              delay: 666,
              callback:() =>{
                this.winifred.setVelocity(0);
                this.winifredText1 = "Oh my poor Malakai... Is the smell of fresh tea coming from here?";
                this.winifredText2 = "Are you a special agent? Sir, you can't guess how gratefull I'm to see";
                this.winifredText3 = "you here. I hope you find out who had done such horrible thing to my husband.";
                
                typing.play();
                i = 0;
                j = 1;
                this.typingWinifred = this.time.addEvent({
                  delay: 75,
                  callback:() =>{
                    if (j==1 && i<this.winifredText1.length){
                      let letter = this.add.text(5 + (i*11),380,this.winifredText1.charAt(i),{fontFamily: "noir", fontSize: "14px"}).setDepth(999);
                      i++;
                      this.time.addEvent({
                        delay: 15000,
                        callback: () => {
                          letter.destroy();
                        }
                      });
                    }
                    else if (j==2 && i<this.winifredText2.length){
                      let letter = this.add.text(5 + (i*10),400,this.winifredText2.charAt(i),{fontFamily: "noir", fontSize: "14px"}).setDepth(999);
                      i++;
                      this.time.addEvent({
                        delay: 15000,
                        callback: () => {
                          letter.destroy();
                        }
                      });
                    }
                    else if (j==3 && i<this.winifredText3.length){
                      let letter = this.add.text(5 + (i*10),420,this.winifredText3.charAt(i),{fontFamily: "noir", fontSize: "13px"}).setDepth(999);
                    i++;
                      this.time.addEvent({
                        delay: 15000,
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
                        this.typingWinifred.paused = true;
                        typing.stop();
                      }
                    }
                  }, loop: true
                })             
              }
            });
            this.time.addEvent({
              delay: 2000,
              callback:() =>{
                this.sound.play("swosh");
                this.winifred.setTexture("winifred2");
                this.winifred.flipX = true;
              }
            });
            this.time.addEvent({
              delay: 17500,
              callback:() =>{
                this.sound.play("swosh");
                this.winifred.flipX = true;
                this.winifred.setTexture("winifred");
                this.winifred.setVelocityX(-200);
              }
            })
            this.time.addEvent({
              delay: 20000,
              callback:() =>{
                this.winifred.destroy();
              }
            })
          }
        }
        else{
          this.cup.x = 315;
          this.cup.y = 215;
          this.cup.alpha = .5;
          this.cupDrag.paused = true;
        }
      }
      else
        this.cupDrag.paused = false;
    });

    this.potOnFire = false;
    this.teapot = this.physics.add.sprite(690, 200, "teapot").setOrigin(0).setScale(.025).setInteractive().setDepth(2);
    this.teapot.alpha = .7;
    this.teapotSpr = this.physics.add.sprite(690, 200, "teapot").setOrigin(0).setScale(.025).setInteractive().setDepth(3);
    this.teapotSpr.alpha = .01;
    this.teapotSpr.on("pointerdown", () => {
      this.teapotSpr.x = -99;
      this.teapot.alpha = 1;
      this.teapot.on("pointerdown", () => {
        this.teapotDrag.paused = true;
        if (this.potOnFire == false){
          if (this.physics.overlap(this.teapot, this.pot) == true && this.matchLightened == true){
            this.boiling.play();
            this.potOnFire = true;
            this.teapot.x = 480;
            this.teapot.y = 172.5;
            this.teapot.alpha = .95;
          }
          else{
            this.teapotSpr.x = 690;
            this.teapot.alpha = .7;
            this.teapot.x = 690;
            this.teapot.y = 200;
          }
        }
      });
      this.teapotDrag = this.time.addEvent({
        delay: 50,
        callback:() =>{
          this.teapot.x = this.input.activePointer.x;
          this.teapot.y = this.input.activePointer.y;
        }, loop: true
      })
    });

    this.woodOnPot = false;
    this.matchLightened = false;
    this.matchBox = this.add.sprite(750, 400, "matchBox").setOrigin(0).setScale(.0125).setRotation(-.9).setInteractive();
    this.matchBox.alpha = .3;
    this.matchBox.on("pointerdown", () => {
      if (this.matchLightened == false){
        this.sound.play("match");
        this.match = this.physics.add.sprite(-99, -99, "match").setScale(.5).setInteractive();
        this.match.play("match");
        this.match.on("pointerdown", () => {
          this.matchDrag.paused = true;
          if (this.physics.overlap(this.match, this.pot) == true && this.woodOnPot == true){
            this.match.destroy();
            this.matchLightened = true;
            this.fire = this.physics.add.sprite(500, 200, "fire").play("fire");
            this.burning.play();
          }
          else
            this.match.destroy();
        });
        this.matchDrag = this.time.addEvent({
          delay: 50,
          callback:() =>{
            this.match.x = this.input.activePointer.x;
            this.match.y = this.input.activePointer.y;
          }, loop: true
        })
      }
    });
    
    this.pot = this.physics.add.sprite(476,170).setOrigin(0).setDepth(99);
    this.pot.scaleX = 2;
    this.pot.scaleY = 3;

    this.woods = this.physics.add.sprite(390, 335).setOrigin(0).setInteractive();
    this.woods.scaleX = 2;
    this.woods.scaleY = 1.75;
    this.woods.on("pointerdown", () => {
      this.sound.play("woodPick");
      this.wood = this.physics.add.sprite(-99,-99,"woods").setScale(.25).setInteractive();
      this.wood.on("pointerdown", () => {
        this.woodDrag.paused = true;
        if (this.physics.overlap(this.wood, this.pot) == true){
          this.wood.x = 500;
          this.wood.y = 225;
          this.woods.destroy();
          this.sound.play("woodDrop");
          this.woodOnPot = true;
        }
        else
          this.wood.destroy();
      });
      this.woodDrag = this.time.addEvent({
        delay: 50,
        callback:() =>{
          this.wood.x = this.input.activePointer.x;
          this.wood.y = this.input.activePointer.y;
        }, loop: true
      })
    })
  }

  intoBox(dice){
    if(this.boxEmpty == true){
      dice.x = 550;
      dice.y = 180;
      this.boxEmpty = false;
      if(this.d == 1 && dice == this.d4)
        this.d++;
      else if(this.d == 2 && dice == this.d6)
        this.d++;
      else if(this.d == 2 && dice != this.d6)
        this.d = this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 1;
      else if(this.d == 3 && dice == this.d20)
        this.d++;
      else if(this.d == 3 && dice != this.d20)
        this.d = this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 1;
      else if(this.d == 4 && dice == this.d12)
        this.d++;
      else if(this.d == 4 && dice != this.d12)
        this.d = this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 1;
      else if(this.d == 5 && dice == this.d8)
        this.d++;
      else if(this.d == 5 && dice != this.d8)
        this.d = this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 1;
      else if(this.d == 6 && dice == this.d10)
        this.d++;
      else if(this.d == 6 && dice != this.d10)
        this.d = this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 1;
    }
  };
}
