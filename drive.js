class drive extends Phaser.Scene{
  constructor(){
    super("drive")
  }
  create(){
    const citySky = this.add.tileSprite(-4000,0,1000,144,"citySky").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityFar = this.add.tileSprite(-4000,0,1000,144,"cityFar").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityMid = this.add.tileSprite(-4000,-100,1000,144,"cityMid").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityClose = this.add.tileSprite(-4000,-250,1000,144,"cityClose").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityWires = this.add.tileSprite(-4000,-250,1000,144,"cityWires").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityRoad = this.add.tileSprite(-4000,350,1000,42,"road").setOrigin(0).setScale(5).setScrollFactor(0);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.sound.play("car", {loop: true, volume:.15});

    localStorage.setItem("autosave", "3");

    this.add.sprite(400, 400, "car").setScale(3).play("car").flipX = true;
    this.drivingScene = this.time.addEvent({
      delay: 30,
      callback: () => {
        citySky.x += .0725;
        cityFar.x += .125;
        cityMid.x += .25;
        cityClose.x += .5;
        cityWires.x += 1;
        cityRoad.x += 2;
      }, loop: true
    });
    typing.play();
    this.text= "You set on your way to interrogation room with all the Stotues.";
    this.drivingText = this.time.addEvent({
      delay: 75,
      callback: () => {
        if(i<this.text.length){
          this.add.text(5+(i*12.5),10,this.text.charAt(i), {fontFamily: "noir", fontSize: "15px"});
          i++;
        }
        else{
          typing.stop();
          this.drivingText.paused = true;
        }
      }, loop: true
    });
    this.time.addEvent({
      delay: 7000,
      callback:() =>{
        this.sound.stopAll();
        this.scene.start("interrogation");
      }
    });
  }
}
