class rooftop extends Phaser.Scene {
  constructor() {
    super("rooftop");
  };
  preload() {};
  create() {
    this.add.tileSprite(0,-50,2912,1824,"rooftop").setOrigin(0).setScale(0.275);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    typing.stop(); 
    this.toBedroom = this.physics.add.sprite(705,100).setOrigin(0).setInteractive();
    this.toBedroom.scaleX = 3;
    this.toBedroom.scaleY = 9;
    this.toBedroomText = this.add.text(600,250,"Bedroom -->", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toBedroom.on("pointerover", ()=>{this.toBedroomText.setVisible(true)});
    this.toBedroom.on("pointerout", ()=>{this.toBedroomText.setVisible(false)});
    this.toBedroom.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("bedroom")}});
      typing.stop();
    });

    this.toolbox = this.add.sprite(0,-75,"toolbox").setOrigin(0).setVisible(false).setInteractive().setScale(.75);
    this.d4 = this.add.sprite(210, 250, "d4").setScale(.16).setVisible(false);
    this.d6 = this.add.sprite(250, 260, "d6").setScale(.14).setVisible(false);
    this.d8 = this.add.sprite(295, 225, "d8").setScale(.14).setVisible(false);
    this.d10 = this.add.sprite(260, 220, "d10").setScale(.13).setVisible(false);
    this.d12 = this.add.sprite(170, 240, "d12").setScale(.10).setVisible(false);
    this.d20 = this.add.sprite(330, 235, "d20").setScale(.13).setVisible(false);
    if(localStorage.getItem("dicesFound") == "y")
      this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 0;
    
    this.toolbox.on("pointerdown", () => {
      this.toolbox.visible = this.d4.visible = this.d6.visible = this.d8.visible = this.d10.visible = this.d12.visible = this.d20.visible = false;
    });

    this.dices = this.physics.add.sprite(250,250).setInteractive();
    this.dices.scaleX = 7;
    this.dices.scaleY = 3;

    this.dices.on("pointerdown", () => {
      this.d4.alpha = this.d6.alpha = this.d8.alpha = this.d10.alpha = this.d12.alpha = this.d20.alpha = 0;
      localStorage.setItem("dicesFound", "y");
    });
    
    this.rooftop1 = this.physics.add.sprite(350,300).setInteractive();
    this.rooftop1.scaleX = 2.5;
    this.rooftop1.scaleY = 1.25;
    this.rooftop1.on("pointerdown", () => {
      this.toolbox.visible = this.d4.visible = this.d6.visible = this.d8.visible = this.d10.visible = this.d12.visible = this.d20.visible = true;
    })

    this.mortiz = this.physics.add.sprite(125,180,"mortiz1").setInteractive().setScale(.1);
    this.mortiz2 = this.physics.add.sprite(700,240,"mortiz").setScale(.48).setVisible(false);
    this.mortiz.alpha = .05
    this.mortiz.on("pointerdown", ()=>{
      localStorage.setItem("mortizFound", "y");
      this.time.addEvent({
        delay: 20,
        callback: () => {
          if (this.mortiz.alpha < 1){
            this.mortiz.alpha += .025;
            this.mortiz.scale += .01;
            this.mortiz.y += 1.5;
            this.text1type.paused = false;
            typing.play();
          }
        }, loop: true
      });
    });

    if(localStorage.getItem("mortizFound") == "y")
      this.mortiz.destroy();

    this.text1 = "Oh, god! A special agent?! I'm  glad you arrived sir. I sure hope";
    this.text2 = "you'll find who had done such horrible thing to my poor father.";
    i = 0; 
    this.text1type = this.time.addEvent({
      delay:75,
      callback:() => {
        if (i<this.text1.length){
          let letter = this.add.text(5 + (i*12),380,this.text1.charAt(i),{fontFamily: "noir", fontSize: "16px"});
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
          i=0;
          this.text2type.paused = false;
        }
      },loop: true, paused: true
    });   
    this.text2type = this.time.addEvent({
      delay:75,
      callback:() => {
        if (i<this.text2.length){
          let letter = this.add.text(5 + (i*12),410,this.text2.charAt(i),{fontFamily: "noir", fontSize: "15px"});
          i++;
          this.time.addEvent({
            delay: 8000,
            callback: () => {
              letter.destroy();
            }
          });
        }
        else{
          this.text2type.paused = true;
          typing.stop();
          this.time.addEvent({delay:1500,callback:()=>{this.mortiz2.setVisible(true); this.mortiz.setVisible(false);this.sound.play("steps")}});
          this.time.addEvent({delay:3000,callback:()=>{this.mortiz2.setVisible(false); this.sound.play("steps")}});
        }
      },loop: true, paused: true
    });
    if(localStorage.getItem("mortizFound") == "y")
      this.mortiz.destroy();
  }
}
