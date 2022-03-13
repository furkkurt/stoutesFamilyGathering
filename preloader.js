var hallStart = true;
class preloader extends Phaser.Scene {
  constructor() {
    super("boot");
  };
  preload(){
    this.add.text(325,200,"Loading",{fontFamily: "noir", fontSize: "20px"});
    this.dot1 = this.add.text(440,200,".",{fontFamily: "noir", fontSize: "20px"}).setVisible(false);
    this.dot2 = this.add.text(450,200,".",{fontFamily: "noir", fontSize: "20px"}).setVisible(false);
    this.dot3 = this.add.text(460,200,".",{fontFamily: "noir", fontSize: "20px"}).setVisible(false);
    this.load.audio("covertAffair", "assets/covertAffair.mp3");
    this.load.audio("thunder", "assets/thunder.mp3");
    this.load.audio("typing", "assets/typing.mp3");
    this.load.audio("rain", "assets/rain.mp3");
    this.load.audio("car", "assets/car.mp3");
    this.load.image("mansion", "assets/mansion.png");
    this.load.atlas("thunder", "assets/lightning.png", "assets/lightning.json");
    this.load.image("wall", "assets/greyWall.png");
		this.load.image("mountedSwordfish", "assets/mounted_swordfish.png");
    this.load.image("chief", "assets/chief.png");
    this.load.image("file", "assets/file.png");
    this.load.image("tabletop", "assets/tabletop.png");
    this.load.image("malakai", "assets/malakai.png");
    this.load.image("winifred", "assets/winifred.png");
    this.load.image("winifred1", "assets/winifred1.png");
    this.load.image("winifred2", "assets/winifred2.png");
    this.load.image("elenore", "assets/elenore.png");
    this.load.image("elenore1", "assets/elenore1.png");
    this.load.image("mortiz", "assets/mortiz.png");
    this.load.image("mortiz1", "assets/mortiz1.png");
    this.load.image("mortiz2", "assets/mortiz2.png");
    this.load.image("monika", "assets/monika.png");
    this.load.image("monika1", "assets/monika1.png");
    this.load.image("uncleEdwin", "assets/uncleEdwin.png");
    this.load.image("uncleEdwin1", "assets/uncleEdwin1.png");
    this.load.image("sebastien", "assets/sebastien.png");
    this.load.image("sebastien1", "assets/sebastien1.png");
    this.load.audio("turnpage", "assets/turnpage.mp3");
    this.load.atlas("car", "assets/car.png", "assets/car.json");
		this.load.atlas("rain", "assets/rain.png", "assets/rain.json");
		this.load.image("road", "assets/road.png");
    this.load.image("cityWires", "assets/sCityCarsFar.png");
    this.load.image("citySky", "assets/sCitySky.png");
    this.load.image("cityFar", "assets/sCityFar.png");
    this.load.image("cityMid", "assets/sCityMid.png");
    this.load.image("cityClose", "assets/sCityClose.png");
    this.load.audio("nightOnTheDocks", "assets/nightOnTheDocks.mp3");
    this.load.image("yard", "assets/yard.png");
    this.load.image("yard1", "assets/yard1.png");
    this.load.image("yard2", "assets/yard2.png");
    this.load.audio("door", "assets/door.mp3");
    this.load.image("hall", "assets/hallway.png");
    this.load.audio("iKnewAGUY", "assets/iKnewAGUY.mp3");
    this.load.image("stairs", "assets/stairs.png");
    this.load.audio("steps", "assets/steps.mp3");
    this.load.image("bedroom", "assets/bedroom.png");
    this.load.image("kitchen", "assets/kitchen.png");
    this.load.image("rooftop", "assets/rooftop.png");
    this.load.image("bathroom", "assets/bathroom.png");
    this.load.image("bathroom1", "assets/bathroom1.png");
    this.load.image("basement", "assets/basement.png");
    this.load.image("picture", "assets/familyPhoto.png");
    this.load.image("safe", "assets/safe.png");
    this.load.image("key", "assets/basementKey.png");
    this.load.audio("doorTry", "assets/doorTry.mp3");
    this.load.audio("doorUnlock", "assets/doorUnlock.mp3");
    this.load.image("note", "assets/note.png");
    this.load.audio("swosh", "assets/swosh.mp3");
    this.load.audio("pour", "assets/pour.mp3");
		this.load.atlas("pouringWater", "assets/pour.png", "assets/pour.json");
    this.load.audio("splash", "assets/splash.mp3");
    this.load.image("d4", "assets/d4.png");
    this.load.image("d6", "assets/d6.png");
    this.load.image("d8", "assets/d8.png");
    this.load.image("d10", "assets/d10.png");
    this.load.image("d12", "assets/d12.png");
    this.load.image("d20", "assets/d20.png");
    this.load.image("toolbox", "assets/toolbox.png");
    this.load.image("boxopen", "assets/boxopen.png");
    this.load.image("boxclose", "assets/boxclose.png");
    this.load.image("drawer", "assets/drawer.png");
    this.load.image("carKey", "assets/carKey.png");
    this.load.audio("boxOpen", "assets/boxOpen.mp3");
    this.load.audio("boxClose", "assets/boxClose.mp3");
    this.load.image("bell", "assets/bell.png");
    this.load.audio("switch", "assets/switch.mp3");
    this.load.audio("bellRing", "assets/bellRing.mp3");
    this.load.image("tea", "assets/tea.png");
    this.load.image("cupoftea", "assets/cupoftea.png");
    this.load.image("cup", "assets/cup.png");
    this.load.image("matchBox", "assets/matchBox.png");
    this.load.image("woods", "assets/woods.png");
    this.load.atlas("match", "assets/match.png", "assets/match.json");
    this.load.atlas("fire", "assets/fire.png", "assets/fire.json");
    this.load.image("teapot", "assets/teapot.png");
    this.load.image("teaBag", "assets/teabag.png");
    this.load.audio("fire", "assets/fire.mp3");
    this.load.audio("boiling", "assets/boil.mp3");
    this.load.audio("woodPick", "assets/woodPick.mp3");
    this.load.audio("woodDrop", "assets/woodDrop.mp3");
    this.load.audio("match", "assets/match.mp3");
    this.load.audio("dancesAndDames", "assets/dancesAndDames.mp3");
    this.load.image("interrogation", "assets/interrogation.png");
    this.load.image("desmond1", "assets/desmond1.png");
    this.load.image("desmond2", "assets/desmond2.png");
    this.load.image("desmond3", "assets/desmond3.png");
    this.load.image("desmond4", "assets/desmond4.png");
    this.load.atlas("carBlue", "assets/carBlue.png", "assets/carBlue.json"); 
    this.load.atlas("carDark", "assets/carDark.png", "assets/carDark.json"); 
    this.load.atlas("carGreen", "assets/carGreen.png", "assets/carGreen.json"); 
    this.load.atlas("carPink", "assets/carPink.png", "assets/carPink.json"); 
    this.load.atlas("idle", "assets/idle.png", "assets/idle.json");
    this.load.atlas("wield", "assets/wield.png", "assets/wield.json");
    this.load.atlas("shoot", "assets/shoot.png", "assets/shoot.json");
    this.load.atlas("reload", "assets/reload.png", "assets/reload.json");
    this.load.image("street", "assets/street.png");
    this.load.image("bars", "assets/bars.png");
    this.load.image("cell", "assets/cell.png");
    this.load.audio("shot", "assets/shoot.mp3");
    this.load.audio("reload", "assets/reload.mp3");
    let i = 1
    this.time.addEvent({
      delay: 200,
      callback: () => {
        if (i == 1){
          this.dot1.setVisible(true);
          i++;
        }
        else if (i == 2){
          this.dot2.setVisible(true);
          i++;
        }
        else if (i == 3){
          this.dot3.setVisible(true);
          i++
        }
        else{
          this.dot1.setVisible(false);
          this.dot2.setVisible(false);
          this.dot3.setVisible(false);
          i = 1;
        }
      }, loop: true
    });
  };
	create(){
    this.anims.create({
      key: "idle",
      frameRate: 4.5,
      frames: [{key: "idle", frame: "idle1.png"}, {key: "idle", frame: "idle2.png"}, {key: "idle", frame: "idle3.png"}, {key: "idle", frame: "idle4.png"}, {key: "idle", frame: "idle5.png"}, {key: "idle", frame: "idle6.png"}, {key: "idle", frame: "idle7.png"}, {key: "idle", frame: "idle8.png"}, {key: "idle", frame: "idle9.png"}, {key: "idle", frame: "idle10.png"}, {key: "idle", frame: "idle11.png"}, {key: "idle", frame: "idle12.png"}, {key: "idle", frame: "idle13.png"}, {key: "idle", frame: "idle14.png"}, {key: "idle", frame: "idle15.png"}, {key: "idle", frame: "idle16.png"}, {key: "idle", frame: "idle17.png"}, {key: "idle", frame: "idle18.png"}],
      repeat: -1
    });
    this.anims.create({
      key: "wield",
      frameRate: 7.5,
      frames: [{key: "wield", frame: "wield1.png"}, {key: "wield", frame: "wield2.png"}, {key: "wield", frame: "wield3.png"}, {key: "wield", frame: "wield4.png"}, {key: "wield", frame: "wield5.png"}, {key: "wield", frame: "wield6.png"}, {key: "wield", frame: "wield7.png"}, {key: "wield", frame: "wield8.png"}, {key: "wield", frame: "wield9.png"}, {key: "wield", frame: "wield10.png"}],
    });
    this.anims.create({
      key: "shoot",
      frameRate: 12,
      frames: [{key: "shoot", frame: "fire1.png"}, {key: "shoot", frame: "fire2.png"}, {key: "shoot", frame: "fire3.png"}, {key: "shoot", frame: "fire4.png"}, {key: "shoot", frame: "fire5.png"}, {key: "shoot", frame: "fire6.png"}, {key: "shoot", frame: "fire7.png"}, {key: "shoot", frame: "fire8.png"}, {key: "shoot", frame: "fire9.png"}, {key: "shoot", frame: "fire10.png"}, {key: "shoot", frame: "fire11.png"}, {key: "shoot", frame: "fire12.png"}],
    });
    this.anims.create({
      key: "reload",
      frameRate: 9,
      frames: [{key: "reload", frame: "reload1.png"}, {key: "reload", frame: "reload2.png"}, {key: "reload", frame: "reload3.png"}, {key: "reload", frame: "reload4.png"}, {key: "reload", frame: "reload5.png"}, {key: "reload", frame: "reload6.png"}, {key: "reload", frame: "reload7.png"}, {key: "reload", frame: "reload8.png"}, {key: "reload", frame: "reload9.png"}, {key: "reload", frame: "reload10.png"}, {key: "reload", frame: "reload11.png"}, {key: "reload", frame: "reload12.png"}, {key: "reload", frame: "reload13.png"}, {key: "reload", frame: "reload14.png"}, {key: "reload", frame: "reload15.png"}, {key: "reload", frame: "reload16.png"}, {key: "reload", frame: "reload17.png"}, {key: "reload", frame: "reload18.png"}], 
    });
    this.anims.create({
      key: "lightning",
      frameRate: 5,
      frames: [{key: "thunder", frame: "1"}, {key: "thunder", frame: "2"}, {key: "thunder", frame: "3"}, {key: "thunder", frame: "4"}, {key: "thunder", frame: "5"}],
      repeat: -1
    });
    this.anims.create({
      key: "car",
      frameRate: 4,
      frames: [{key: "car", frame: "1"}, {key: "car", frame: "2"}],
      repeat: -1
    });
    this.anims.create({
      key: "carGreen",
      frameRate: 6,
      frames: [{key: "carGreen", frame: "1"}, {key: "carGreen", frame: "2"}],
      repeat: -1
    });
    this.anims.create({
      key: "carBlue",
      frameRate: 1.5,
      frames: [{key: "carBlue", frame: "1"}, {key: "carBlue", frame: "2"}],
      repeat: -1
    });
    this.anims.create({
      key: "carDark",
      frameRate: 1.5,
      frames: [{key: "carDark", frame: "1"}, {key: "carDark", frame: "2"}],
      repeat: -1
    });
    this.anims.create({
      key: "carPink",
      frameRate: 1.5,
      frames: [{key: "carPink", frame: "1"}, {key: "carPink", frame: "2"}],
      repeat: -1
    });
    this.anims.create({
      key: "rain",
      frameRate: 16,
      frames:[{key: "rain", frame: "1"},{key: "rain", frame: "2"},{key: "rain", frame: "3"},{key: "rain", frame: "4"},{key: "rain", frame: "5"},{key: "rain", frame: "6"},{key: "rain", frame: "7"},{key: "rain", frame: "8"},{key: "rain", frame: "9"},{key: "rain", frame: "10"},{key: "rain", frame: "11"},{key: "rain", frame: "12"},{key: "rain", frame: "13"},{key: "rain", frame: "14"},{key: "rain", frame: "15"},{key: "rain", frame: "16"}],
      repeat: -1
    });
    this.anims.create({
      key: "pour",
      frameRate: 3,
      frames:[{key: "pouringWater", frame: "1"},{key: "pouringWater", frame: "2"}, {key: "pouringWater", frame: "3"}],
      repeat: -1
    });
    this.anims.create({
      key: "match",
      frameRate: 16,
      frames: [{key: "match", frame: "1"},{key: "match", frame: "2"},{key: "match", frame: "3"},{key: "match", frame: "4"},{key: "match", frame: "5"},{key: "match", frame: "6"},{key: "match", frame: "7"},{key: "match", frame: "8"}],
      repeat: -1
    });
    this.anims.create({
      key: "fire",
      frameRate: 8,
      frames: [{key: "fire", frame: "1"}, {key: "fire", frame: "2"}, {key: "fire", frame: "3"}, {key: "fire", frame: "4"}, {key: "fire", frame: "5"}, {key: "fire", frame: "6"}, {key: "fire", frame: "7"}, {key: "fire", frame: "8"}, {key: "fire", frame: "9"}, {key: "fire", frame: "10"}, {key: "fire", frame: "11"}, {key: "fire", frame: "12"}, {key: "fire", frame: "13"}, ],
      repeat: -1 
    })
    if(localStorage.getItem("autosave") == "1")
      this.scene.start("enterance");
    else if(localStorage.getItem("autosave") == "2")
      this.scene.start("hallway");
    else if((localStorage.getItem("autosave") == "3") || (localStorage.getItem("autosave") == "4") || (localStorage.getItem("autosave") == "5"))
      this.scene.start("interrogation");
    else if(localStorage.getItem("autosave") == "6")
      this.scene.start("guessing");
    else if(localStorage.getItem("autosave") == "7")
      this.scene.start("chase");
    else if(localStorage.getItem("autosave") == "8")
      this.scene.start("shooter");
    else if(localStorage.getItem("autosave") == "9")
      this.scene.start("end");
    else
      this.scene.start("intro");
	}
}
