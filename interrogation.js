class interrogation extends Phaser.Scene{
  constructor(){
    super("interrogation")
  }
  create(){
    var typing = this.sound.add("typing", {loop: true, volume: .7});
    this.winifredRound1 = "I saw Edwin wandering about the halls late last night, looking even more deranged then normal. Who’s to say what that crackpot could have been up to in the middle of the night?";
    this.elenoreRound1 = "Uncle Edwin is known to be soft in the head. There are rumors that after the war, he killed a man in a bar fight with his bare hands.";
    this.mortizRound1 = "I know that Sebastien, the butler, has been the target of frequent abuse at the hands of Malakai.";
    this.mortizRound1RespondToMonika = "What?! Has she gone mad?! Accusing me, her husband, of murdering his father? That’s the most preposterous thing she ever said! Although it’s probably the most INTERESTING thing she ever said, ironically. But I won’t entertain notions that I can’t withstand the pressures of my work.";
    this.monikaRound1 = "I know my husband, Mortiz, has been under a great deal of pressure at his job lately; I’m actually surprised that he even agreed to come to this reunion; that’s not like him at all.";
    this.uncleEdwinRound1 = "I know that Sebastien Seward knew where the keys to the safe were kept.";
    this.uncleEdwinRound1RespondToWinifred = "I don’t really remember what I did last night, or much about my past, for that matter. But it’s certainly possible.";
    this.uncleEdwinRound1RespondToElenore = "I don't remember much about my past, but It's true I'm a though fighter.";
    this.uncleEdwinRound1RespondToSebastien = "We talk about many things, we are brothers after all...";
    this.sebastienRound1 = "I overheard Malakai talking to Edwin about his will several nights ago.";
    this.sebastienRound1RespondToMortiz = "*Rolls eyes* Oh, of course. Of course, the butler did it...";
    this.sebastienRound1RespondToEdwin = "Yes, I knew were they keys were. It’s my job to know those things. That proves nothing.";

    this.winifredRound2 = "Malakai recently disciplined Sebastien for not properly polishing the silver. You should have seen how angry Sebastiae looked!";
    this.elenoreRound2 = "The murderer was trying to take the family Rolls Royce, so it couldn’t have been me. I arrived in my own vehicle.";
    this.elenoreRound2RespondToMortiz = "I’d never be caught dead in boots that looked like that, and they’d never be muddy, thank you very much!";
    this.mortizRound2 = "Hey, the pair of muddy boots found near the door were a small size, they were probably worn by a woman.";
    this.monikaRound2 = "While I was up last night, I saw Sebastien wandering the halls. I have no idea what he was up to but it looked like he was trying to be very quiet.";
    this.monikaRound2RespondToElenore = "As did Mortiz and I.";
    this.uncleEdwinRound2 = "Poor old Malakai. Smothered with a pillow. If it was me, I’d just choke him with my bare hands. Not that I’d kill anyone, of course. I don’t think that’s the sort of thing I’d do.";
    this.uncleEdwinRound2RespondToSebastien = "Keys? What keys?";
    this.sebastienRound2 = "Now that I think about it, Uncle Edwin had also discovered the key’s location during one of his bizarre midnight stumblings through the house.";
    this.sebastienRound2RespondToWinifred = "Look, he must’ve been mistaken; Malakai may have disciplined me, and I may have been angry. But as a well-trained butler, I’d certainly never have let my anger show! But of course, the butler did it...";
    this.sebastienRound2RespondToMonika = "I am, in fact, the butler, and I am regularly still busy attending to my duties far into the night.";

    this.winifredRound3 = "Crazy Uncle Edwin’s fugue states have become increasingly frequent lately; who knows what he’s been up to?";
    this.winifredRound3RespondToElenore = "Plenty of spouses don’t share a bedroom, and since when is talking to your husband a crime? As I said, I was saying good night like I always do.";
    this.winifredRound3RespondToEdwin = "So did he...";
    this.winifredRound3RespondToMonika = "I can't remember the context but that man is literally mad, it's impossible to talk with him without getting furious.";
    this.elenoreRound3 = "I know that Mother and Father almost always slept in separate bedrooms; it’s kind of strange that she visited him at all last night since it’s no secret they’ve never gotten along.";  
    this.elenoreRound3RespondToMortiz = "It’s absurd he says that! I have always loved them more than anything else in life!";
    this.mortizRound3 = "Elenore has never gotten along with her parents, and I’m pretty sure that she only came to this reunion because she’s worried about her inheritance.";
    this.monikaRound3 = "Winifred and Edwin had a conversation earlier in the night. They both looked furious about something.";
    this.uncleEdwinRound3 = "Winifred knew where the keys to the safe were kept.";
    this.uncleEdwinRound3RespondToMonika = "I don't remember what that was about but that b!tch sure frustrates me...";
    this.sebastienRound3 = "I wear size 13 shoes—much larger than the muddy boots that the killer wore; ergo, it couldn’t have been me!";

    let sadedeGel = false;
    let tokens = [];
    let respond = false;
    let responding = false;
    let currentOptionArray;
    let currentOptionPerson;
    this.round = 1;
    if(localStorage.getItem("autosave") == "4"){
      this.round = 2; tokens.length = 6;
    }
    else if(localStorage.getItem("autosave") == "5"){
      this.round = 3; tokens.length = 11;
    }
    this.questionedRound1Winifred =  this.questionedRound1Elenore = this.questionedRound1Mortiz = this.questionedRound1Monika = this.questionedRound1UncleEdwin = this.questionedRound1Sebastien = this.questionedRound2Winifred =  this.questionedRound2Elenore = this.questionedRound2Mortiz = this.questionedRound2Monika = this.questionedRound2UncleEdwin = this.questionedRound2Sebastien = this.questionedRound3Winifred =  this.questionedRound3Elenore = this.questionedRound3Mortiz = this.questionedRound3Monika = this.questionedRound3UncleEdwin = this.questionedRound3Sebastien = false; 
    this.optionsVisible = false;
    this.sound.play("dancesAndDames", {loop: true, volume: 1.5});
    this.room = this.add.tileSprite(0,0,1280,720,"interrogation").setOrigin(0).setScale(.625);

    this.winifred = this.add.sprite(460,300,"winifred").setScale(.2);
    this.winifred.alpha = 0;
    this.elenore = this.add.sprite(460, 300, "elenore").setScale(.2);
    this.elenore.alpha = 0;
    this.mortiz = this.add.sprite(460, 300, "mortiz").setScale(.2);
    this.mortiz.alpha = 0;
    this.mortiz.flipX = true;
    this.monika = this.add.sprite(460, 300, "monika").setScale(.2);
    this.monika.alpha = 0;
    this.uncleEdwin = this.add.sprite(460, 300, "uncleEdwin").setScale(.2);
    this.uncleEdwin.alpha = 0;
    this.sebastien = this.add.sprite(460, 300, "sebastien").setScale(.2);
    this.sebastien.alpha = 0;

    this.nameTagWinifred = this.add.text(5,225, "Winifred", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    this.nameTagElenore = this.add.text(125,225, "Elenore", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    this.nameTagMortiz = this.add.text(250,225, "Mortiz", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    this.nameTagMonika = this.add.text(365,225, "Monika", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    this.nameTagUncleEdwin = this.add.text(520,225, "Uncle Edwin", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    this.nameTagSebastien = this.add.text(660,225, "Sebastien", {fontFamily: "noir"}).setOrigin(0).setVisible(false);
    
    this.whiteTextGroup = [this.winifredRound1, this.winifredRound2, this.winifredRound3, this.winifredRound3RespondToElenore, this.winifredRound3RespondToEdwin, this.winifredRound3RespondToMonika, this.mortizRound1, this.mortizRound2,this.mortizRound3, this.mortizRound1RespondToMonika, this.sebastienRound1, this.sebastienRound2, this.sebastienRound3, this.sebastienRound1RespondToMortiz, this.sebastienRound1RespondToEdwin, this.sebastienRound2RespondToWinifred, this.sebastienRound2RespondToMonika];

    this.optionWinifred = this.add.sprite(5,300, "winifred").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionWinifred.on("pointerover", () => {this.optionWinifred.y = 250; this.nameTagWinifred.setVisible(true); this.sound.play("swosh")});
    this.optionWinifred.on("pointerout", () => {this.nameTagWinifred.setVisible(false); this.optionWinifred.y = 300});
    this.optionWinifred.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.winifred.alpha += .025;
          if (this.winifred.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.winifred.scale += .01;
          this.winifred.x -= 4;
          this.winifred.y -= 2;
          if (this.winifred.scale > .5){
            this.comeCloser.paused = true;
            let rand = (Math.floor(Math.random()*2)) + 1;
            this.winifred.setTexture("winifred"+rand);
            if (this.round == 1){
              this.textTyper(this.winifredRound1);
              this.questionedRound1Winifred = true;
            }
            else if (this.round == 2){
              this.textTyper(this.winifredRound2);
              this.questionedRound2Winifred = true;
            }
            else{
              this.textTyper(this.winifredRound3);
              this.questionedRound3Winifred = true;
            }
          }
        }, loop: true, paused: true
      });
      
      let options = [];
      if (this.round == 3){
        if (this.questionedRound3Elenore == true)
          options.push("Elenore told that you sleep in seperate bedrooms.");
        if (this.questionedRound3UncleEdwin == true)
          options.push("Edwin told me you knew where the keys were kept.");
        if (this.questionedRound3Monika == true)
          options.push("Monika told me she saw you arguing on something with Edwin.");
      };

      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "winifred");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.optionElenore = this.add.sprite(125,300, "elenore").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionElenore.on("pointerover", () => {this.optionElenore.y = 250; this.sound.play("swosh"); this.nameTagElenore.setVisible(true)});
    this.optionElenore.on("pointerout", () => {this.optionElenore.y = 300; this.nameTagElenore.setVisible(false)});
    this.optionElenore.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.elenore.alpha += .025;
          if (this.elenore.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.elenore.scale += .01;
          this.elenore.x -= 4;
          this.elenore.y -= 2;
          if (this.elenore.scale > .5){
            this.comeCloser.paused = true;
            this.elenore.setTexture("elenore1");
            if (this.round == 1){
              this.textTyper(this.elenoreRound1);
              this.questionedRound1Elenore = true;
            }
            else if (this.round == 2){
              this.textTyper(this.elenoreRound2);
              this.questionedRound2Elenore = true;
            }
            else{
              this.textTyper(this.elenoreRound3);
              this.questionedRound3Elenore = true;
            }
          }
        }, loop: true, paused: true
      });

      let options = [];
      if (this.round == 2){
        if (this.questionedRound2Mortiz == true)
          options.push("Mortiz told that the boots found in the crime scene were small sized, probably belong to a woman.");
      };
      if (this.round == 3){
        if (this.questionedRound3Mortiz == true)
          options.push("Mortiz told me that you don't get along very good with your parents.");
      };
      
      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "elenore");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.optionMortiz = this.add.sprite(250,300, "mortiz").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionMortiz.on("pointerover", () => {this.optionMortiz.y = 250; this.sound.play("swosh"); this.nameTagMortiz.setVisible(true)});
    this.optionMortiz.on("pointerout", () => {this.optionMortiz.y = 300; this.nameTagMortiz.setVisible(false)});
    this.optionMortiz.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.mortiz.alpha += .025;
          if (this.mortiz.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.mortiz.scale += .01;
          this.mortiz.x -= 4;
          this.mortiz.y -= 2;
          if (this.mortiz.scale > .5){
            this.comeCloser.paused = true;
            let rand = (Math.floor(Math.random()*2)) + 1;
            this.mortiz.setTexture("mortiz" + rand);
            if (this.round == 1){
              this.textTyper(this.mortizRound1);
              this.questionedRound1Mortiz = true;
            }
            else if (this.round == 2){
              this.textTyper(this.mortizRound2);
              this.questionedRound2Mortiz = true;
            }
            else{
              this.textTyper(this.mortizRound3);
              this.questionedRound3Mortiz = true;
            }
          }
        }, loop: true, paused: true
      });

      let options = [];
      if (this.round == 1){
        if (this.questionedRound1Monika == true)
          options.push("Monika told me that your job's a hassle and it was unexpected for you attended this gathering.");
      };

      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "mortiz");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.optionMonika = this.add.sprite(350,300, "monika").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionMonika.on("pointerover", () => {this.optionMonika.y = 250; this.sound.play("swosh"); this.nameTagMonika.setVisible(true)});
    this.optionMonika.on("pointerout", () => {this.optionMonika.y = 300; this.nameTagMonika.setVisible(false)});
    this.optionMonika.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.monika.alpha += .025;
          if (this.monika.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.monika.scale += .01;
          this.monika.x -= 4;
          this.monika.y -= 2;
          if (this.monika.scale > .5){
            this.comeCloser.paused = true;
            this.monika.setTexture("monika1");
            if (this.round == 1){
              this.textTyper(this.monikaRound1);
              this.questionedRound1Monika = true;
            }
            else if (this.round == 2){
              this.textTyper(this.monikaRound2);
              this.questionedRound2Monika = true;
            }
            else{
              this.textTyper(this.monikaRound3);
              this.questionedRound3Monika = true;
            }
          }
        }, loop: true, paused: true
      });

      let options = [];
      if (this.round == 2){
        if (this.questionedRound2Elenore == true)
          options.push("Elenore told me she came here with her own car.");
      };

      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "monika");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.optionUncleEdwin = this.add.sprite(500,300, "uncleEdwin").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionUncleEdwin.on("pointerover", () => {this.optionUncleEdwin.y = 250; this.sound.play("swosh"); this.nameTagUncleEdwin.setVisible(true)});
    this.optionUncleEdwin.on("pointerout", () => {this.optionUncleEdwin.y = 300; this.nameTagUncleEdwin.setVisible(false)});
    this.optionUncleEdwin.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.uncleEdwin.alpha += .025;
          if (this.uncleEdwin.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.uncleEdwin.scale += .01;
          this.uncleEdwin.x -= 4;
          this.uncleEdwin.y -= 2;
          if (this.uncleEdwin.scale > .5){
            this.comeCloser.paused = true;
            this.uncleEdwin.setTexture("uncleEdwin1");
            if (this.round == 1){
              this.textTyper(this.uncleEdwinRound1);
              this.questionedRound1UncleEdwin = true;
            }
            else if (this.round == 2){
              this.textTyper(this.uncleEdwinRound2);
              this.questionedRound2UncleEdwin = true;
            }
            else{
              this.textTyper(this.uncleEdwinRound3);
              this.questionedRound3UncleEdwin = true;
            }
          }
        }, loop: true, paused: true
      });
      let options = [];
      if (this.round == 1){
        if (this.questionedRound1Winifred == true)
          options.push("Winifred told that she saw you wandering around late that night.");
        if (this.questionedRound1Elenore == true)
          options.push("Elenore told me she heard you had killed a man in a bar fight before. Is there any truth to it?");
        if (this.questionedRound1Sebastien == true)
          options.push("Sebastien told me he heard you talking with Malakai about his will.");
      };
      if (this.round == 2){
        if (this.questionedRound2Sebastien == true)
          options.push("Sebastien told me you knew were the keys were.");
      };
      if (this.round == 3){
        if (this.questionedRound3Monika == true)
          options.push("Monika told me she saw you arguing on something with Edwin.");
      }

      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "uncleEdwin");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.optionSebastien = this.add.sprite(650,300, "sebastien").setOrigin(0).setScale(.5).setVisible(false).setInteractive().setDepth(1.6);
    this.optionSebastien.on("pointerover", () => {this.optionSebastien.y = 250; this.sound.play("swosh"); this.nameTagSebastien.setVisible(true)});
    this.optionSebastien.on("pointerout", () => {this.optionSebastien.y = 300; this.nameTagSebastien.setVisible(false)});
    this.optionSebastien.on("pointerdown", () => {
      respond = false;
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = false;
      this.sound.play("door", {volume:.5});
      this.appear = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.sebastien.alpha += .025;
          if (this.sebastien.alpha >= 1){
            this.appear.paused = true;
            this.comeCloser.paused = false;
            this.sound.play("steps");
          }
        }, loop: true
      });
      this.comeCloser = this.time.addEvent({
        delay: 25,
        callback:() =>{
          this.sebastien.scale += .01;
          this.sebastien.x -= 4;
          this.sebastien.y -= 2;
          if (this.sebastien.scale > .5){
            this.comeCloser.paused = true;
            this.sebastien.setTexture("sebastien1");
            if (this.round == 1){
              this.textTyper(this.sebastienRound1);
              this.questionedRound1Sebastien = true;
            }
            else if (this.round == 2){
              this.textTyper(this.sebastienRound2);
              this.questionedRound2Sebastien = true;
            }
            else{
              this.textTyper(this.sebastienRound3);
              this.questionedRound3Sebastien = true;
            }
          }
        }, loop: true, paused: true
      });

      let options = [];
      if (this.round == 1){
        if (this.questionedRound1Mortiz == true)
          options.push("Mortiz told that Malakai abused you from time to time.");
        if (this.questionedRound1UncleEdwin == true)
          options.push("Edwin told me you knew where the keys were kept.");
      };
      if (this.round == 2){
        if (this.questionedRound2Winifred == true)
          options.push("Winifred told that you looked angry when Malakai disciplined you about polishing the silver.");
        if (this.questionedRound2Monika == true)
          options.push("Monika told me she saw you wandering the halls late that night.");
      };

      this.optionsVisibleCheck = this.time.addEvent({
        delay: 250,
        callback:() =>{
          if(this.optionsVisible == true){
            this.showOptions(options, "sebastien");
            this.optionsVisibleCheck.paused = true;
          }
        }, loop: true
      })
    });

    this.callSuspect = this.add.text(340,400,"Call Suspect", {fontFamily:"Noir"}).setInteractive().setDepth(1.6);
    this.callSuspect.on("pointerdown", () => {
      this.callSuspect.setVisible(false);
      this.optionWinifred.visible = this.optionElenore.visible = this.optionMortiz.visible = this.optionMonika.visible = this.optionUncleEdwin.visible = this.optionSebastien.visible = true;
    });
 
    var optionVars = [];
    let terminator = this.physics.add.sprite(0,0).setOrigin(0).setScale(25).setInteractive().setDepth(1.5);
    let terminatorDestroy = false;
      terminator.on("pointerdown", () => {
        if (terminatorDestroy == true){
          this.time.addEvent({delay: 250, callback:()=>{
          this.callSuspect.setVisible(true);
          this.winifred.alpha = this.elenore.alpha = this.mortiz.alpha = this.monika.alpha = this.uncleEdwin.alpha = this.sebastien.alpha = 0;
          this.winifred.x = this.elenore.x = this.mortiz.x = this.monika.x = this.uncleEdwin.x = this.sebastien.x = 460;
          this.winifred.y = this.elenore.y = this.mortiz.y = this.monika.y = this.uncleEdwin.y = this.sebastien.y = 300;
          this.winifred.scale = this.elenore.scale = this.mortiz.scale = this.monika.scale = this.uncleEdwin.scale = this.sebastien.scale = .2;
          this.winifred.setTexture("winifred"); this.elenore.setTexture("elenore"); this.mortiz.setTexture("mortiz"); this.monika.setTexture("monika"); this.uncleEdwin.setTexture("uncleEdwin"); this.sebastien.setTexture("sebastien");
          writing.setText("");
          for (i=0; i<optionVars.length; i++){
              let code = "optionVars["+i+"].setVisible(false)";
              eval(code);
          }
          terminatorDestroy = false;
          if(this.round == 1 && tokens.length == 6){
            localStorage.setItem("autosave", "4");
            this.optionsVisible = false;
            respond = false;
            this.round++;
            this.callSuspect.setVisible(false);
            this.desmond = this.add.sprite(400,300,"desmond1").setScale(.8);
            this.desmond.alpha = 0;
            this.sound.play("door", {volume:.5});
            this.time.addEvent({delay: 50, callback: ()=>{this.desmond.alpha += 0.05},repeat:20});
            this.time.addEvent({delay: 5000, callback: ()=>{this.desmondFadeOut.paused = false; this.optionsVisible = false}});
            let z = 2;
            this.time.addEvent({
              delay: 750,
              callback:() =>{
                let codeDesmond = "this.desmond.setTexture('desmond"+z+"')";
                eval(codeDesmond);
                if (z == 2)
                  z--;
                else
                  z++
              }, repeat: 5
            });
            this.textTyper("Breaking news, agent " + name + ", I found these muddy boots in the frontyard near the house, they probably belong to the murderer.");
            this.desmondFadeOut=this.time.addEvent({delay: 50, callback: ()=>{this.desmond.alpha -= 0.05},repeat:20, paused: true});
          }
          else if(this.round == 2 && tokens.length == 11){
            localStorage.setItem("autosave", "5");
            this.optionsVisible = false;
            respond = false;
            this.round++;
            this.callSuspect.setVisible(false);
            this.desmond = this.add.sprite(400,300,"desmond1").setScale(.8);
            this.desmond.alpha = 0;
            this.sound.play("door", {volume:.5});
            this.time.addEvent({delay: 50, callback: ()=>{this.desmond.alpha += 0.05},repeat:20});
            this.time.addEvent({delay: 5000, callback: ()=>{this.desmondFadeOut.paused = false; this.optionsVisible = false}});
            let z = 2;
            this.time.addEvent({
              delay: 750,
              callback:() =>{
                let codeDesmond = "this.desmond.setTexture('desmond"+z+"')";
                eval(codeDesmond);
                if (z == 2)
                  z--;
                else
                  z++
              }, repeat: 5
            });
            this.textTyper("Agent " + name + ", You might want to sit down cause I got huge news! We found Malakai Stoute's Last Will and Testament. Turns out he left the entire stoute fortune, to neiher of his children, nor his wife, nor his brother but to his butler Sebastien Seward!");
            this.desmondFadeOut=this.time.addEvent({delay: 50, callback: ()=>{this.desmond.alpha -= 0.05},repeat:20, paused: true});
          }
          else if(this.round == 3 && tokens.length == 16)
            this.scene.start("guessing");
          }})}
        else{
          sadedeGel = true;
          this.time.addEvent({
            delay: 100,
            callback:() =>{
              sadedeGel = false;
            }
          })
        }
      }); 
      
    let writing = this.add.text(0, 300, "", {fontFamily: "Noir", fontSize: "13px", color: "black"}).setInteractive().setDepth(2);
    this.textTyper = function(text){
      if (this.whiteTextGroup.includes(text))
        writing.setColor("white")
      else
        writing.setColor("brown");
      i = j = 0;
      let k = 1;
      let termination = false;
      var lines = (text.length/60);
      typing.play();

      let content = "";
      this.typing = this.time.addEvent({
        delay: 30,
        callback:() =>{
          content += text.charAt(i);
          if(j>=60 && text.charAt(i) == " "){
            content += "\n";
            j = 0;
          }
          writing.setText(content);
          i++;
          j++;
        }, loop: true
      }) 
     
      let milis = text.length * 30;
      this.sadetTime = this.time.addEvent({
        delay: milis,
        callback:() =>{
          this.typing.paused = true;
          typing.stop();
          terminatorDestroy = true;
          if (respond == false)
            this.optionsVisible = true
          else{
            responding = false;
            this.showOptions(currentOptionArray, currentOptionPerson);
          }
          this.sadet.paused = true;
        }
      });

      this.sadet = this.time.addEvent({
        delay: 50,
        callback:() =>{
          if (sadedeGel == true){
            this.typing.paused = true;
            this.sadetTime.paused = true;
            sadedeGel == false;
            typing.stop();
            terminatorDestroy = true;
            if (respond == false)
              this.optionsVisible = true
            else{
              responding = false;
              this.showOptions(currentOptionArray, currentOptionPerson);
            }
            this.sadet.paused = true;
            i = j = 0;
            content = "";
            for(i = 0; i<text.length; i++){
              content += text.charAt(i);
              if(j>=60 && text.charAt(i) == " "){
                content += "\n";
                j = 0;
              }
              writing.setText(content);
              j++;
            }
          };
        }, loop: true
      })
    };
    
    this.showOptions = function(array, person){
      this.optionsVisible = false;
      for (i=0; i<array.length; i++){
        currentOptionArray = array;
        currentOptionPerson = person;
        let option = this.add.text(0, 390+(15*i), array[i], {fontFamily: 'Noir', fontSize: '11px', color: 'white'}).setDepth(2).setInteractive();
        if (this.whiteTextGroup.includes(eval("this."+person+"Round1")))
          option.setColor("white")
        else
          option.setColor("brown");
        optionVars.push(option);
        option.on("pointerdown", () => {
          if (responding == false){
            responding = true;
            for (i=0; i<optionVars.length; i++){
              let code = "optionVars["+i+"].setVisible(false)";
              eval(code);
              writing.setText("");
            };
            option.setVisible(true);
            let lastChar = option.text.indexOf(" ");
            let respondTo = option.text.substring(0,lastChar);
            writing.setText("");
            respond = true;
            terminatorDestroy = false;
            let code = "this.textTyper(this."+person+"Round"+this.round+"RespondTo"+respondTo+")";
            if (tokens.includes(code) == false)
              tokens.push(code);
            eval(code);
            if (code == "this.textTyper(this.mortizRound1RespondToMonika)"){
              let k = 1;
              this.time.addEvent({
                delay: 333,
                callback: () => {
                  this.sound.play("swosh");
                  let textureChange = "this.mortiz.setTexture('mortiz"+k+"')";
                  eval(textureChange);
                  if (k==1)
                    k++;
                  else
                    k--;
                }, repeat: 4
              });
            }
          }
        })
      }
    };
  }
}

