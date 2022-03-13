var i = 0;
var j = 1;
class intro extends Phaser.Scene {
  constructor() {
    super("intro");
  };
  preload() {};
  create() {
    this.sound.play("covertAffair", {volume:1.5});
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    const mansion = this.add.tileSprite(0,0,this.scene.width,this.scene.height,"mansion").setOrigin(0).setDepth(4).setScale(1.8);
    const thunder1 = this.add.sprite(50,50,"thunder").play("lightning").setDepth(4).setScale(4).setVisible(false);
    const thunder2 = this.add.sprite(750,100,"thunder").play("lightning").setDepth(4).setScale(4).setVisible(false);
    const act1 = this.time.addEvent({
      delay: 10,
      callback: () => {
        mansion.y += -.35;
      }, loop: true
    });
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        thunder1.setVisible(true);
        this.sound.play("thunder", {volume:2});
      }
    });
    this.time.addEvent({
      delay: 2000,
      callback: () => {
        thunder1.setVisible(false);
        thunder2.setVisible(true);
        this.sound.play("thunder"), {volume:2};
      }
    });
    this.time.addEvent({
      delay: 3000,
      callback: () => {
        thunder2.setVisible(false);
      }
    });
    this.time.addEvent({
      delay: 12000,
      callback: () => {
        act1.paused = true;
        mansion.setVisible(false);
        this.text1anims.paused = false;
        typing.play();
      }
    });
     const name = prompt("What's your name?");
     const wall = this.add.tileSprite(0,0,521,333,"wall").setDepth(2).setScale(1.6).setOrigin(0);
     this.text1 = "Agent " + name + ",";
     this.text2 = "there's an emergency.";
     this.text3 = "W e need you at the crim e scene";
     this.text4 = "as soon as possible.";
     this.text5 = "Oh, here, be sure to";
     this.text6 = "Check the case files";
     this.text7 = "before you leave.";
     let content = ""; 
     this.text1anims = this.time.addEvent({
       delay: 50,
       callback:()=>{
         if (j==1 && i<this.text1.length){
           content +=  this.text1.charAt(i);
           let letter = this.add.text(i*16,200,this.text1.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text2.length && j==2){
           let letter = this.add.text(i*16,230,this.text2.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++; 
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text3.length && j==3){
           let letter = this.add.text(i*12,260,this.text3.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text4.length && j==4){
           let letter = this.add.text(i*16,290,this.text4.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text5.length && j==5){
           let letter = this.add.text(i*16,320,this.text5.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text6.length && j==6){
           let letter = this.add.text(i*16,350,this.text6.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else if(i<this.text7.length && j==7){
           let letter = this.add.text(i*16,380,this.text7.charAt(i), {color:"black", fontSize: "18px", fontFamily:"noir"}).setDepth(3); 
           i++;
           this.time.addEvent({delay: 4000,callback: () => {letter.destroy()}});
         }
         else
           if(j<8){
             j++
             i=0;
           }
           else{
             this.text1anims.paused = true;
             typing.stop();
           } 
       }, loop: true, paused: true
     });
     const painting = this.add.sprite(200,120,"mountedSwordfish").setDepth(2).setScale(4);
     const chief = this.add.sprite(520,225,"chief").setDepth(2).setScale(.5);
     this.time.addEvent({
       delay: 21000,
       callback: () => {
         chief.setVisible(false);
         painting.setVisible(false);
         wall.setVisible(false);
         this.sound.play("turnpage");
       } 
     });
    const table = this.add.sprite(0,0,"tabletop").setDepth(1.5).setOrigin(0).setScale(.57);
    const file = this.add.sprite(50,-50,"file").setDepth(1.5).setOrigin(0).setScale(1.25).setRotation(.2);
    const info1 = this.add.text(340,30,"The stoute family was\ngathered at their\nancestral home\nfor a family reunion,\nhosted by the elderly\nMalakai Stoute.\n\nNone of the Stoutes\nhave ever gotten along\nparticularly well\nwith each other,\nbut the promise of\na substantial inheritance\nhas encouraged them\nto at least\nput on their friendly faces\nand attend Malakai Stoute’s\noccasional gatherings.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5);  
    const info1pic = this.add.sprite(175,125,"mansion").setDepth(1.5).setRotation(.2).setScale(.4);
    const info2 = this.add.text(340,30,"However, the next morning\nsomething awfull has\nhappened. Malakai's\nlifeless body found\ncrumpled upon the bed.\nHis contorted, purple\nfeatures a mute testament\nto the fact that he had\nbeen smothered or choked\nin his sleep.\n\nFurther,\nthe wall safe in Malakai’s\nstudy has been opened,\nand the precious Stoute\nfamily jewels are missing!", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info2pic = this.add.sprite(170,120,"malakai").setDepth(1.5).setRotation(.2).setScale(.2).setVisible(false);
    const info3 = this.add.text(340,30,"Winifred Stoute,\nMalakai’s Wife.\nA stately, if sometimes\nstern, presence in the\nfamily.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info3pic = this.add.sprite(420,300,"winifred").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    const info4 = this.add.text(340,30,"Elenore Stoute, \nMalakai’s Daughter.\nA refined woman who\nalways makes a great\nappearance.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info4pic = this.add.sprite(420,300,"elenore").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    const info5 = this.add.text(340,30,"Mortiz Stoute,\nMalakai’s Son.\nA driven businessman and\nMalakai’s eldest child.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info5pic = this.add.sprite(420,300,"mortiz").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    const info6 = this.add.text(340,30,"Monika Stoute,\nMalakai’s s Daughter-in-Law.\nMortiz’s flawlessly pleasant\nand ever-cheerful wife.", {color: "black", fontSize:"17px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info6pic = this.add.sprite(420,300,"monika").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    const info7 = this.add.text(340,30,"Uncle Edwin Stoute,\nMalakai’s Brother.\nHe’s never fully recovered\nsince the war.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info7pic = this.add.sprite(420,300,"uncleEdwin").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    const info8 = this.add.text(340,30,"Sebastien Seward,\nMalakai’s Butler.\nThe long-time employee and\nfixture of Malachai’s\nhousehold.", {color: "black", fontSize:"18px"}).setRotation(.2).setDepth(1.5).setVisible(false);
    const info8pic = this.add.sprite(420,300,"sebastien").setDepth(1.5).setRotation(.2).setScale(.3).setVisible(false);
    this.time.addEvent({delay: 31000,callback: () => {info1.setVisible(false); info1pic.setVisible(false); info2.setVisible(true); info2pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 41000,callback: () => {info2.setVisible(false); info2pic.setVisible(false); info3.setVisible(true); info3pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 46000,callback: () => {info3.setVisible(false); info3pic.setVisible(false); info4.setVisible(true); info4pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 51000,callback: () => {info4.setVisible(false); info4pic.setVisible(false); info5.setVisible(true); info5pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 56000,callback: () => {info5.setVisible(false); info5pic.setVisible(false); info6.setVisible(true); info6pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 61000,callback: () => {info6.setVisible(false); info6pic.setVisible(false); info7.setVisible(true); info7pic.setVisible(true); this.sound.play("turnpage")}});
    this.time.addEvent({delay: 66000,callback: () => {info7.setVisible(false); info7pic.setVisible(false); info8.setVisible(true); info8pic.setVisible(true); this.sound.play("turnpage")}});

    const citySky = this.add.tileSprite(-4000,0,1000,144,"citySky").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityFar = this.add.tileSprite(-4000,0,1000,144,"cityFar").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityMid = this.add.tileSprite(-4000,-100,1000,144,"cityMid").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityClose = this.add.tileSprite(-4000,-250,1000,144,"cityClose").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityWires = this.add.tileSprite(-4000,-250,1000,144,"cityWires").setOrigin(0).setScale(6).setScrollFactor(0);
    const cityRoad = this.add.tileSprite(-4000,350,1000,42,"road").setOrigin(0).setScale(5).setScrollFactor(0);
    this.add.sprite(400, 400, "car").setScale(3).play("car").flipX = true;
    for(let i=0;i<4;i++){
      for(let j=0;j<7;j++)
        this.add.sprite(j*128,i*128,"rain").play("rain").setScale(2);
    }
    this.time.addEvent({
      delay: 71000,
      callback: () => {
        this.sound.play("turnpage");
        this.drivingScene.paused = false;
        table.setVisible(false);
        file.setVisible(false);
        info8.setVisible(false);
        info8pic.setVisible(false);
        this.sound.play("rain", {loop: true, volume:.6});
        this.sound.play("car", {loop: true, volume:.15});
        typing.play();
        i = 0;
        this.drivingText.paused = false;
      }
    });
    this.drivingScene = this.time.addEvent({
      delay: 30,
      callback: () => {
        citySky.x += .0725;
        cityFar.x += .125;
        cityMid.x += .25;
        cityClose.x += .5;
        cityWires.x += 1;
        cityRoad.x += 2;
      }, loop: true, paused: true
    });
    this.text8 = "You set on your way to Malakai Stoute's mansion";
    this.drivingText = this.time.addEvent({
      delay: 50,
      callback: () => {
        if(i<this.text8.length){
          this.add.text(20+(i*16),10,this.text8.charAt(i), {fontFamily: "noir", fontSize: "22px"});
          i++;
        }
        else{
          typing.stop();
          this.drivingText.paused = true;
        }
      }, loop: true, paused: true
    });
    this.time.addEvent({
      delay: 75000,
      callback: () => {
        this.scene.start("enterance");
        localStorage.setItem("autosave", "1");
        localStorage.setItem("name", name);
      }
    });
  }
}
