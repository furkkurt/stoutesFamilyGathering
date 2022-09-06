class chase extends Phaser.Scene{
  constructor(){
    super("chase")
  }
  create(){
    const citySky = this.add.tileSprite(-4000,0,9999,144,"citySky").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityFar = this.add.tileSprite(-4000,-75,9999,144,"cityFar").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityMid = this.add.tileSprite(-4000,-150,9999,144,"cityMid").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityClose = this.add.tileSprite(-4000,-350,9999,144,"cityClose").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityWires = this.add.tileSprite(-4000,-275,9999,144,"cityWires").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityRoad = this.add.tileSprite(-12000,250,9999,42,"road").setOrigin(0).setScale(5).setScrollFactor(0);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.sound.play("car", {loop: true, volume:.015});

    localStorage.setItem("autosave", "7");
    this.car = this.physics.add.sprite(400, 340, "car").setScale(2).play("car").setDepth(1.03);
    this.car.flipX = true;
    this.susCar = this.physics.add.sprite(50, 340, "carGreen").setScale(2).play("carGreen").setDepth(1.03).setVelocityX(7.5);
    this.susCar.flipX = true;

    this.drivingScene = this.time.addEvent({
      delay: 20,
      callback: () => {
        citySky.x += .0125;
        cityFar.x += .25;
        cityMid.x += .5;
        cityClose.x += 1;
        cityWires.x += 2;
        cityRoad.x += 4;
      }, loop: true
    });
    
    this.screen = this.physics.add.sprite(1,0).setOrigin(0).setInteractive();
    this.screen.scaleX = 24.95;
    this.screen.scaleY = 14.05;
    this.screen.on("pointerdown", () => {
      if (this.input.activePointer.y > this.car.y && this.car.y < 400){
        this.car.y += 32;
        this.car.depth += .01;
      }
      else if (this.input.activePointer.y < this.car.y && this.car.y > 300){
        this.car.y -= 32;
        this.car.depth -= .01;
      }
    });

    this.cars = ["carBlue", "carDark", "carPink"];
    this.positions = [300, 400, 500, 600, 700, 800, 900];
    this.car1 = this.physics.add.sprite(-9999,276,"car").setScale(2).setVelocityX(400).setDepth(1.01);
    this.car2 = this.physics.add.sprite(-9999,308,"car").setScale(2).setVelocityX(400).setDepth(1.02);
    this.car3 = this.physics.add.sprite(-9999,340,"car").setScale(2).setVelocityX(400).setDepth(1.03);
    this.car4 = this.physics.add.sprite(-9999,372,"car").setScale(2).setVelocityX(400).setDepth(1.04);
    this.car5 = this.physics.add.sprite(-9999,404,"car").setScale(2).setVelocityX(400).setDepth(1.05);
    this.car1.flipX = this.car2.flipX = this.car3.flipX = this.car4.flipX = this.car5.flipX = true; 
    this.time.addEvent({
      delay: 4000,
      callback:() =>{
        this.positions = [300, 400, 500, 600, 700, 800, 900];
        let colorNum1 = Math.floor(Math.random() * 3);
        let colorNum2 = Math.floor(Math.random() * 3);
        let colorNum3 = Math.floor(Math.random() * 3);
        let colorNum4 = Math.floor(Math.random() * 3);
        let colorNum5 = Math.floor(Math.random() * 3);
       
        let xNum1 = Math.ceil(Math.random() * (this.positions.length));
        let xNum2 = Math.ceil(Math.random() * (this.positions.length));
        let xNum3 = Math.ceil(Math.random() * (this.positions.length));
        let xNum4 = Math.ceil(Math.random() * (this.positions.length));
        let xNum5 = Math.ceil(Math.random() * (this.positions.length));
        
        this.car1.setTexture(this.cars[colorNum1]);
        this.car1.play(this.cars[colorNum1]);
        this.car1.x = this.car.x - this.positions[xNum1];
        this.car2.setTexture(this.cars[colorNum2]);
        this.car2.play(this.cars[colorNum2]);
        this.car2.x = this.car.x - this.positions[xNum2];
        this.car3.setTexture(this.cars[colorNum3]);
        this.car3.play(this.cars[colorNum3]);
        this.car3.x = this.car.x - this.positions[xNum3];
        this.car4.setTexture(this.cars[colorNum4]);
        this.car4.play(this.cars[colorNum4]);
        this.car4.x = this.car.x - this.positions[xNum4];
        this.car5.setTexture(this.cars[colorNum5]);
        this.car5.play(this.cars[colorNum5]);
        this.car5.x = this.car.x - this.positions[xNum5];
      }, loop: true
    });

    for(let z = 1; z <= 5; z++)
      eval("this.physics.add.overlap(this.car"+z+", this.car, () => {if(this.car"+z+".y == this.car.y && this.car.x>this.car"+z+".x){this.scene.start('chase')}})");

    this.physics.add.overlap(this.car, this.susCar, () => {this.scene.start("shooter")});

    this.keyUp = this.input.keyboard.addKey("up");
    this.keyUp2 = this.input.keyboard.addKey("W");
    this.keyDown = this.input.keyboard.addKey("down");
    this.keyDown2 = this.input.keyboard.addKey("S");
    this.upDown = this.downDown = false;
/*
    this.up = this.physics.add.sprite(1,0).setOrigin(0).setInteractive();
    this.up.scaleX = 24.96;
    this.up.scaleY = 3;
    this.down = this.physics.add.sprite(1,353).setOrigin(0).setInteractive();
    this.down.scaleX = 24.96;
    this.down.scaleY = 3;

    this.up.on("pointerdown", () => {
      if(this.car.y>300){
        this.car.depth -= .01;
        this.car.y -= 32;
      }
    });
    this.down.on("pointerdown", () => {
      if(this.car.y<400){
        this.car.depth += .01;
        this.car.y += 32;    
      }
    });
  }
  */
  update(){
    if ((this.keyUp.isDown || this.keyUp2.isDown) && (this.upDown == false && this.car.y > 300)){
      this.upDown = true;
      this.car.depth -= .01;
      this.car.y -= 32;
    };
    if (this.keyUp.isUp && this.keyUp2.isUp)
      this.upDown = false;
    
    if ((this.keyDown.isDown || this.keyDown2.isDown) && (this.downDown == false && this.car.y < 400)){
      this.downDown = true;
      this.car.depth += .01;
      this.car.y += 32;
    };
    if (this.keyDown.isUp && this.keyDown2.isUp)
      this.downDown = false;
  }
}
