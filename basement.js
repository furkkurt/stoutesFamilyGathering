class basement extends Phaser.Scene {
  constructor() {
    super("basement");
  };
  preload() {};
  create() {
    this.basement = this.add.tileSprite(0,0,2400,1300,"basement").setOrigin(0).setScale(.35);
    this.basement.alpha = .01;
    var typing = this.sound.add("typing", {loop: true, volume: .7});
   
    this.toStairs = this.physics.add.sprite(705,100).setOrigin(0).setInteractive();
    this.toStairs.scaleX = 3;
    this.toStairs.scaleY = 9;
    this.toStairsText = this.add.text(650,250,"Stairs -->", {fontFamily: "noir", fontSize: "18px"}).setVisible(false);
    this.toStairs.on("pointerover", ()=>{this.toStairsText.setVisible(true)});
    this.toStairs.on("pointerout", ()=>{this.toStairsText.setVisible(false)});
    this.toStairs.on("pointerdown", ()=>{
      this.sound.play("steps");
      this.time.addEvent({delay: 500,callback: () => {this.scene.start("stairs")}});
    });

    this.basementNote = this.add.sprite(175,50,"note").setOrigin(0).setScale(.75).setVisible(false).setInteractive();
    this.basementNote.alpha = .01;
    this.basementNote.on("pointerdown", () => {
      this.basementNote.setVisible(false);
    });
    this.basement1 = this.physics.add.sprite(90,260).setOrigin(0).setInteractive();
    this.basement1.on("pointerdown", () => {
      this.basementNote.setVisible(true);
    });
    this.basement2 = this.physics.add.sprite(560,90).setOrigin(0).setInteractive();
    this.basement2.scaleY = 2;
    this.basement2.scaleX = .3;
    this.basement2.on("pointerdown", () => {
      if (this.basement.alpha != 1){
        this.basement.alpha = 1;
        this.basementNote.alpha = .9;
      }
      else{
        this.basement.alpha = .01;
        this.basementNote.alpha = .01;
      }
    });
    this.basement2.on("pointerover", () => {this.sound.play("swosh")});
    this.basement2.on("pointerout", () => {this.sound.play("swosh")});
  }
}
