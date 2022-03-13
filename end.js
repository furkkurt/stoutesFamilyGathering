class end extends Phaser.Scene{
  constructor(){
    super("end")
  }
  create(){
    this.sound.stopAll();
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    localStorage.setItem("autosave", "9");
    let person = localStorage.getItem("pick").toLowerCase();
    if (person == "uncleedwin")
      person = "uncleEdwin";
    this.pick = this.add.sprite(400, 250, person).setDepth(1.1).setScale(.5);
    this.cell = this.add.tileSprite(0,-50,1200,750,"cell").setScale(.66).setOrigin(0);
    this.bars = this.physics.add.sprite(-20,-1500, "bars").setVelocityY(300).setOrigin(0).setScale(.70).setDepth(1.2);
    this.time.addEvent({
      delay: 5000,
      callback:() =>{
        this.bars.setVelocity(0)
      }
    })
    let ending;
    if(localStorage.getItem("pick") == "Winifred")
      ending = "good";
    else
      ending = "bad";
      
    this.wall = this.add.tileSprite(0,0,521,333,"wall").setDepth(1.4).setScale(1.6).setOrigin(0);
    this.painting = this.add.sprite(200,120,"mountedSwordfish").setDepth(1.4).setScale(4);
    this.chief = this.add.sprite(520,225,"chief").setDepth(1.4).setScale(.5);
    this.wall.alpha = this.painting.alpha = this.chief.alpha = 0;

    if(ending == "good"){
      this.text1 = "It was me! I killed the old fool and I'd do it again!";
      this.text2 = "                                                              THE CONFESSION\n\n\n\n\n\n\n\n\n\n\n\n\n\nMalakai was a tyrant!  He ruled our house like a dictator, making my life a living hell for the last 45\nyears! And, Edwin told me last night that Malakai had rewritten his will, leaving everything to the\nbutler, for God’s sake!  The Butler! I nearly had a heart attack when Edwin told me!\n\nI’m not stupid enough to think I could have changed Malakai’s will, but I couldn’t just leave it be. I\nknew where he kept the key to the family safe, so I snuck into his bedroom after you all went to bed,\nand smothered him with a pillow. He was so hateful that he kept the key to the safe around his neck,\nso I snatched it, grabbed the jewels, and headed out to his beloved Rolls Royce.\n\nI was the responsible one who had those jewels appraised, so I knew I could sell them and that awful\ncar and start a new life without all you fools, but that storm made the driveway such a mess that I\ncouldn’t get the car onto the main road. After all that, I was still trapped in this prison of an estate";
      this.text3 = "congratulations, agent " + name + ".\nYou truly never disappoint.\nOnce again,\nJustice triumphs in the end\nthanks to you.";

      this.context = "";
      this.texT1 = this.add.text(10, 350, "", {fontFamily: "noir", fontSize: "21px"}).setDepth(1.19);
      i = 0;
      typing.play();
      this.time.addEvent({
        delay: 75,
        callback:() =>{
          this.context += this.text1.charAt(i);
          i++;
          this.texT1.setText(this.context);
        }, repeat: this.text1.length
      });
      this.time.addEvent({delay: 4000,callback:() =>{typing.stop()}});
      this.time.addEvent({
        delay: 6000,
        callback:() =>{
          this.time.addEvent({
            delay: 50,
            callback:() =>{
              this.texT1.alpha -= .01;
              this.bars.alpha -= .01;
              this.cell.alpha -= .01;
              this.pick.alpha -= .01;
            }, repeat: 100
          })
        }
      });
      this.texT2 = this.add.text(0,1500,this.text2,{fontFamily: "noir", fontSize: "10.7px"}).setDepth(1.3).setInteractive();
      this.time.addEvent({
        delay: 30,
        callback:() =>{
          this.texT2.y -= 3;
        }, repeat: 500
      });

      this.texT3 = this.add.text(0,210,this.text3,{fontFamily: "noir", fontSize: "19.75px", color: "black"}).setDepth(1.5);
      this.texT3.alpha = 0;

      this.texT2.on("pointerdown", () => {
        this.time.addEvent({
          delay: 25,
          callback:() =>{
            this.texT2.alpha -= .02;
            this.wall.alpha += .02;
            this.painting.alpha += .02;
            this.chief.alpha += .02;
            this.texT3.alpha += .02;
          }, repeat: 50
        })
      });
    }
    else if(ending == "bad"){
      this.text1 = "Look, you must believe me, I swear I didn't kill him!";
      this.text2 = "                                  2 YEARS LATER\n\n\n\nRemember the case of Malakai Stoute? His grandson found this diamond\nring on his bedroom. Killer must've been dropped this while stealing\njewelries. Tender spot is that the fingerprints on this ring doesn't match\n" + localStorage.getItem("pick") + "'s. You let me down, agent " + localStorage.getItem("name") + ".\n\nWe've been keeping an innocent person locked up for 2 damn years!\nThis is unacceptable... I can't let you work in the\nFederal Bureau of Investigation anymore. Fired!";
      
      this.context = "";
      this.texT1 = this.add.text(0, 350, "", {fontFamily: "noir", fontSize: "20px"}).setDepth(1.19);
      i = 0;
      typing.play();
      this.time.addEvent({
        delay: 75,
        callback:() =>{
          this.context += this.text1.charAt(i);
          i++;
          this.texT1.setText(this.context);
        }, repeat: this.text1.length
      });
      this.time.addEvent({delay: 4000,callback:() =>{typing.stop()}});

      
      this.texT2 = this.add.text(10, 500, this.text2, {fontFamily: "noir", fontSize: "14px",}).setDepth(1.5).setInteractive();
      this.texT2.on("pointerdown", () => {
        localStorage.clear();
        this.scene.start("boot");
      });
      this.texT2.alpha = 0;
      this.time.addEvent({
        delay: 5000,
        callback:() =>{
          this.time.addEvent({
            delay: 25,
            callback:() =>{
              this.cell.alpha -= .02;
              this.bars.alpha -= .02;
              this.pick.alpha -= .02;
              this.texT1.alpha -= .02;
              this.wall.alpha += .005;
              this.painting.alpha += .005;
              this.chief.alpha += .005;
              this.texT2.alpha += .02;
            },repeat: 50
          });
          this.time.addEvent({
            delay: 25,
            callback:() =>{
              this.texT2.y -= 2;
            },repeat: 240
          })
        }
      })
    }
  }
}
