class bathroom extends Phaser.Scene {
  constructor() {
    super("bathroom");
  };
  preload() {};
  create() {
    this.add.tileSprite(0,-70,3080,2052,"bathroom").setOrigin(0).setScale(.26);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
   
    this.toBedroom = this.physics.add.sprite(0,100).setOrigin(0).setInteractive();
    this.toBedroom.scaleX = 3;
    this.toBedroom.scaleY = 9;
    this.toBedroomText = this.add.text(100,250,"<-- Bedroom", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toBedroom.on("pointerover", ()=>{this.toBedroomText.setVisible(true)});
    this.toBedroom.on("pointerout", ()=>{this.toBedroomText.setVisible(false)});
    this.toBedroom.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("bedroom")}});
      typing.stop(); 
    });

    this.bathroomLayer2 = this.physics.add.sprite(240,221,"bathroom1").setOrigin(0).setScale(.26).setDepth(2);
    this.uncleEdwin = this.physics.add.sprite(320,250,"uncleEdwin").setOrigin(0).setScale(.4);
    this.bathroom1 = this.physics.add.sprite(350,150).setOrigin(0).setScale(2).setInteractive();
    this.bathroom1.on("pointerdown", () => {
      this.sound.play("pour");
      let water = this.physics.add.sprite(379,165,"pouringWater").play("pour").setScale(.2).setOrigin(0);
      water.alpha = .6;
      this.time.addEvent({
        delay: 2500,
        callback: () => {
          let pourEnd = this.time.addEvent({
            delay: 50,
            callback: () => {
              water.alpha -= .02;
              water.y = water.y += 4
            }, loop: true
          });
          this.time.addEvent({
            delay: 1000,
            callback: () => {
              pourEnd.paused = true;
            }
          })
        }
      });
      if (localStorage.getItem("uncleEdwinFound") != "y"){
        localStorage.setItem("uncleEdwinFound", "y");
        this.time.addEvent({
          delay: 3000,
          callback: () => {
            this.uncleEdwin.setVelocityY(-50)
            this.time.addEvent({
              delay: 2000,
              callback: () => {
                this.uncleEdwin.setVelocityY(0)
                this.time.addEvent({
                  delay: 500,
                  callback: () => {
                    this.sound.play("swosh");
                    this.uncleEdwin.flipX = true;
                    this.time.addEvent({
                      delay: 500,
                      callback: () => {
                        this.sound.play("swosh");
                        this.uncleEdwin.flipX= false;
                      }
                    })
                  }
                })
              }
            })
          }
        })
  
        this.time.addEvent({
          delay: 6500,
          callback: () => {
            this.sound.play("splash");
            this.uncleEdwin.setVelocityY(-700);
            this.time.addEvent({
              delay: 700,
              callback: () => {
                this.uncleEdwin.setDepth(3);
                this.uncleEdwin.setVelocityY(800); 
                this.time.addEvent({
                  delay: 500, 
                  callback: () => {
                    this.uncleEdwin.setVelocityY(0);
                    this.time.addEvent({
                      delay: 1500,
                      callback: () => {
                        this.text1Type.paused = false;
                        typing.play();
                        this.uncleEdwinPose = this.physics.add.sprite(0,0,"uncleEdwin1").setScale(.4).setOrigin(0).setDepth(4);
                        this.uncleEdwinPose.x = this.uncleEdwin.x;
                        this.uncleEdwinPose.y = this.uncleEdwin.y;
                        this.uncleEdwin.setVisible(false);
                      }
                    })
                  }
                }
              )}
            })
          }
        });
  
        this.text1 = "Anyone who isn't confused really doesn't understand the situation.";
        i = 0;
        this.text1Type = this.time.addEvent({
          delay: 75,
          callback: () => {
            if (i<this.text1.length){
              let letter = this.add.text(5 + (i*12),400,this.text1.charAt(i),{fontFamily: "noir", fontSize: "16px"}).setDepth(5);
              i++
              this.time.addEvent({
                delay: 4000,
                callback: () => {
                  letter.destroy()
                }
              })
            }
            else{
              this.text1Type.paused = true;
              typing.stop()
            }
          },loop: true, paused: true
        });
  
        this.time.addEvent({
          delay: 14000,
          callback: () => {
            this.sound.play("swosh");
            this.uncleEdwinPose.setVisible(false);
            this.uncleEdwin.setVisible(true);
            this.time.addEvent({
              delay: 1000,
              callback: () => {
                this.sound.play("swosh");
                this.uncleEdwin.flipX = true;
                this.time.addEvent({
                  delay: 1000,
                  callback: () => {
                    this.sound.play("swosh");
                    this.sound.play("steps");
                    this.uncleEdwin.x -= 200;
                    this.time.addEvent({
                      delay: 1000,
                      callback: () => {
                        this.sound.play("steps");
                        this.uncleEdwin.setVisible(false);
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    });
  }
}
