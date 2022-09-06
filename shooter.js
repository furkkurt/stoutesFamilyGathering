class shooter extends Phaser.Scene{
  constructor(){
    super("shooter")
  }
  create(){
    this.sound.stopAll();
    this.sound.play("steps", {loop: true});
    localStorage.setItem("autosave", "8");
    this.street = this.add.tileSprite(409.6,273.2,1024,683,"street").setScale(.8);
    this.hand = this.add.sprite(0,125,"idle").setOrigin(0).setDepth(99).play("idle").setInteractive();
    this.hand.alpha = .9;
    this.aim = this.physics.add.sprite(0,0);
    this.aim.scaleY = 2;
    this.add.text(150, 10, "Aim to feet, we don't want to kill anyone.", {fontFamily: "noir"})

    this.Winifred = this.physics.add.sprite(-999,0, "winifred").setScale(.4);
    this.Elenore = this.physics.add.sprite(-999,0, "elenore").setScale(.4);
    this.Mortiz = this.physics.add.sprite(-999,0, "mortiz").setScale(.4);
    this.Monika = this.physics.add.sprite(-999,0, "monika").setScale(.4);
    this.UncleEdwin = this.physics.add.sprite(-999,0, "uncleEdwin").setScale(.4);
    this.Sebastien = this.physics.add.sprite(-999,0, "sebastien").setScale(.4);

    this.feet = this.physics.add.sprite(0,0).setInteractive().setScale(2);
    this.deadly = this.physics.add.sprite(0,0).setInteractive();
    this.deadly.scaleY=6;
    this.deadly.scaleX=2;
    this.op;
    eval("this.op = this."+localStorage.getItem("pick"));
    this.op.x = 300;
    this.op.y = 325;
    var daz = 0;
    this.time.addEvent({
      delay: 50,
      callback:() =>{
        this.op.scale -= .002;
        this.feet.scale -= .01;
        this.deadly.scaleY -= .03;
        this.deadly.scaleX -= .01;
        daz++;
        if (daz <= 10)
          this.op.rotation += .01;
        else if(daz > 10 && daz <= 20)
          this.op.rotation -= .01;
        else
          daz = 0;
      }, loop: true
    });
    this.time.addEvent({
      delay: 250,
      callback:() =>{
        if (this.hand.flipX == true && this.op.x < 400)
          this.op.setVelocityX(1000);
        else if (this.hand.flipX == false && this.op.x > 301)
          this.op.setVelocityX(-1000);
        else
          this.op.setVelocity(0);
      }, loop: true
    });

    let fired = false;
    let zad = 8;
    this.hand.on("pointerdown", () => {
      zad++;
      if (zad == 0)
        this.hand.play("idle");
      else if (zad == 1)
        this.hand.play("wield");
      else if (zad > 1 && zad < 8){
        this.hand.play("shoot");
        this.sound.play("shot");
        fired = true;
        this.time.addEvent({delay: 50,callback:() =>{fired = false}});
      }
      else if (zad >= 8){
        this.hand.play("reload");
        this.sound.play("reload");
        zad = 1;
      };
    });

    this.physics.add.overlap(this.feet, this.aim, () => {if(fired == true){this.scene.start("end")}});
    this.physics.add.overlap(this.deadly, this.aim, () => {if(fired == true){this.scene.start("shooter")}});

    this.keyUp = this.input.keyboard.addKey("up");
    this.keyUp2 = this.input.keyboard.addKey("W");
    this.keyDown = this.input.keyboard.addKey("down");
    this.keyDown2 = this.input.keyboard.addKey("S");
    this.keyLeft = this.input.keyboard.addKey("left");
    this.keyLeft2 = this.input.keyboard.addKey("A");
    this.keyRight = this.input.keyboard.addKey("right");
    this.keyRight2 = this.input.keyboard.addKey("D");
 /*   
    this.up = this.physics.add.sprite(1,0).setOrigin(0).setInteractive();
    this.up.scaleX = 24.96;
    this.up.scaleY = 3;
    this.down = this.physics.add.sprite(1,353).setOrigin(0).setInteractive().setDepth(1.1);
    this.down.scaleX = 24.96;
    this.down.scaleY = 3;
    this.left = this.physics.add.sprite(1,1).setOrigin(0).setInteractive();
    this.left.scaleX = 3;
    this.left.scaleY = 14;
    this.right = this.physics.add.sprite(703,1).setOrigin(0).setInteractive();
    this.right.scaleX = 3;
    this.right.scaleY = 14;

    this.upEvent = this.time.addEvent({
      delay: 10,
      callback:() =>{
        this.street.scale += .01; 
        this.op.scale += .002;
        this.feet.scale += .01;
        this.deadly.scaleY += .03;
        this.deadly.scaleX += .01;
        this.aim.y += 1;
        this.hand.y += 1;
      }, loop: true, paused: true
    });

    this.leftEvent = this.time.addEvent({
      delay: 10,
      callback:() =>{
        this.hand.x -= 4;
      }, loop: true, paused: true
    });
    
    this.rightEvent = this.time.addEvent({
      delay: 10,
      callback:() =>{
        this.hand.x += 4;
      }, loop: true, paused: true
    });

    this.downEvent = this.time.addEvent({
      delay: 10,
      callback:() =>{
        this.street.scale -= .01; 
        this.op.scale -= .002;
        this.feet.scale -= .01;
        this.deadly.scaleY -= .03;
        this.deadly.scaleX -= .01;
        this.aim.y -= .75;
        this.hand.y -= .75;
      }, loop: true, paused: true
    });

    this.up.on("pointerdown", () => {this.upEvent.paused = false});
    this.up.on("pointerup", () => {this.upEvent.paused = true});
    this.up.on("pointerout", () => {this.upEvent.paused = true});
    this.down.on("pointerdown", () => {this.downEvent.paused = false});
    this.down.on("pointerup", () => {this.downEvent.paused = true});
    this.down.on("pointerout", () => {this.downEvent.paused = true});
    this.left.on("pointerdown", () => {this.leftEvent.paused = false});
    this.left.on("pointerup", () => {this.leftEvent.paused = true});
    this.left.on("pointerout", () => {this.leftEvent.paused = true});
    this.right.on("pointerdown", () => {this.rightEvent.paused = false});
    this.right.on("pointerup", () => {this.rightEvent.paused = true});
    this.right.on("pointerout", () => {this.rightEvent.paused = true});
    */
    this.time.addEvent({
      delay: 5000,
      callback:() =>{
        this.time.addEvent({
          delay: 25,
          callback:() =>{
            this.op.alpha -= .05;
            this.hand.alpha -= .05;
          }, repeat: 20
        })
      }
    });
    this.time.addEvent({
      delay: 6000,
      callback:() =>{
        this.scene.start("shooter");
      }
    })
  }
  update(){
    if ((this.keyUp.isDown || this.keyUp2.isDown) && this.street.scale < 1.6){
      this.street.scale += .01; 
      this.op.scale += .002;
      this.feet.scale += .01;
      this.deadly.scaleY += .03;
      this.deadly.scaleX += .01;
      this.aim.y += 1;
      this.hand.y += 1;
    }
    if ((this.keyDown.isDown || this.keyDown2.isDown) && this.street.scale > .8){
      this.street.scale -= .01; 
      this.op.scale -= .002;
      this.feet.scale -= .01;
      this.deadly.scaleY -= .03;
      this.deadly.scaleX -= .01;
      this.aim.y -= .75;
      this.hand.y -= .75;
    }
    if (this.keyLeft.isDown || this.keyLeft2.isDown)
      this.hand.x -= 4;
    if (this.keyRight.isDown || this.keyRight2.isDown)
      this.hand.x += 4;
    if(this.hand.x < 75)
      this.hand.flipX = true;
    if(this.hand.x >= 75)
      this.hand.flipX = false;
    this.aim.x = this.hand.x + 300;
    this.aim.y = this.hand.y + 200;
    this.feet.x = this.op.x;
    this.feet.y = this.op.y+(this.feet.scale * 60);
    this.deadly.x = this.op.x;
    this.deadly.y = this.op.y-(this.feet.scale * 30);
  }
}
