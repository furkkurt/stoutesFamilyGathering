class guessing extends Phaser.Scene{
  constructor(){
    super("guessing")
  }
  create(){
    localStorage.setItem("autosave", "6");
    this.room = this.add.tileSprite(0,0,1280,720,"interrogation").setOrigin(0).setScale(.625);
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    
    let context = "Who killed Malakai Stotue?";
    let content = "";
    let text = this.add.text(250, 50, "", {fontFamily: "noir", color: "red", fontSize: "14.5px"});
    i = 0;
    typing.play();
    this.typing1 = this.time.addEvent({
      delay: 50,
      callback:() =>{
        content += context.charAt(i);
        text.setText(content);
        i++;
        if (content == context)
          typing.stop();
      }, loop: true, repeat: context.length
    });
    let pick;
    let runnerText;

    this.optionWinifred = this.add.sprite(125,100, "winifred").setOrigin(0).setScale(.4).setInteractive();
    this.optionElenore = this.add.sprite(225,100, "elenore").setOrigin(0).setScale(.4).setInteractive();
    this.optionMortiz = this.add.sprite(300,100, "mortiz").setOrigin(0).setScale(.4).setInteractive();
    this.optionMonika = this.add.sprite(400,100, "monika").setOrigin(0).setScale(.4).setInteractive();
    this.optionUncleEdwin = this.add.sprite(500,100, "uncleEdwin").setOrigin(0).setScale(.4).setInteractive();
    this.optionSebastien = this.add.sprite(600,100, "sebastien").setOrigin(0).setScale(.4).setInteractive();
   
    this.optionWinifred.on("pointerover", () => {this.optionWinifred.setTexture("winifred1").setDepth(2)});
    this.optionWinifred.on("pointerout", () => {this.optionWinifred.setTexture("winifred").setDepth(1)});
    this.optionElenore.on("pointerover", () => {this.optionElenore.setTexture("elenore1").setDepth(2)});
    this.optionElenore.on("pointerout", () => {this.optionElenore.setTexture("elenore").setDepth(1)});
    this.optionMortiz.on("pointerover", () => {this.optionMortiz.setTexture("mortiz2").setDepth(2)});
    this.optionMortiz.on("pointerout", () => {this.optionMortiz.setTexture("mortiz").setDepth(1)});
    this.optionMonika.on("pointerover", () => {this.optionMonika.setTexture("monika1").setDepth(2)});
    this.optionMonika.on("pointerout", () => {this.optionMonika.setTexture("monika").setDepth(1)});
    this.optionUncleEdwin.on("pointerover", () => {this.optionUncleEdwin.setTexture("uncleEdwin1").setDepth(2)});
    this.optionUncleEdwin.on("pointerout", () => {this.optionUncleEdwin.setTexture("uncleEdwin").setDepth(1)});
    this.optionSebastien.on("pointerover", () => {this.optionSebastien.setTexture("sebastien1").setDepth(2)});
    this.optionSebastien.on("pointerout", () => {this.optionSebastien.setTexture("sebastien").setDepth(1)});

    this.optionWinifred.on("pointerdown", () => {pick = "Winifred"; localStorage.setItem("pick", pick); this.run()});
    this.optionElenore.on("pointerdown", () => {pick = "Elenore"; localStorage.setItem("pick", pick); this.run()});
    this.optionMortiz.on("pointerdown", () => {pick = "Mortiz"; localStorage.setItem("pick", pick); this.run()});
    this.optionMonika.on("pointerdown", () => {pick = "Monika"; localStorage.setItem("pick", pick); this.run()});
    this.optionUncleEdwin.on("pointerdown", () => {pick = "UncleEdwin"; localStorage.setItem("pick", pick); this.run()});
    this.optionSebastien.on("pointerdown", () => {pick = "Sebastien"; localStorage.setItem("pick", pick); this.run()});
    
    this.run = function(){
      for(j = 0; j<6; j++){
        let suspects = ["Winifred", "Elenore", "Mortiz", "Monika", "UncleEdwin", "Sebastien"];
        let suspect = suspects[j];
        if (suspect != pick)
          eval("this.option"+suspect+".destroy()");
        eval("this.option"+pick+".x = 375");
      };

      if (pick == "Winifred")
        runnerText = "Oh! Well, it's funny you should, I mean, you see, George, they're on to us!";
      else
        runnerText = "What!? You are making a huge mistake, no sir, I'm not going to jail!";
      
      let q = 0;
      typing.play();
      text.x = 0;
      this.typing1.paused = true;
      content = "";
      if (pick == "Elenore" || pick == "Sebastien")
        eval("this.option" + pick + ".flipX = true");
      this.time.addEvent({delay: 400, callback:() =>{this.sound.play("steps")}});
      this.time.addEvent({delay: 1200, callback:() =>{this.sound.play("door")}});
      this.sound.play("swosh", {volume: 1.5});
      this.time.addEvent({
        delay: 20,
        callback:() =>{
          content += runnerText.charAt(q);
          text.setText(content);
          q++;
          if (content == runnerText)
            typing.stop();
        }, loop: true, repeat: runnerText.length
      });
      this.time.addEvent({
        delay: 50,
        callback:() =>{
          eval("this.option" + pick + ".scale -= .01");
          eval("this.option" + pick + ".y += 6");
          eval("this.option" + pick + ".x += 3");
        }, repeat: 16
      });
      this.time.addEvent({
        delay: 2000,
        callback:() =>{
          this.scene.start("chase");    
        }
      })
    }; 
  }
}
