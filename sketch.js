var PLAY = 1;
var END = 0;
var gameState = "start"

var bgImg;
var edges;
var blank;

//Hulk 
var hulk;
var hulkStanding, hulkStandingLeft;
var hulkWalking, hulkWalkingLeft;
var hulkSmash, hulkSmashLeft;
var hulkPunch, hulkPunchLeft;
var hulkJump, hulkJumpLeft;

var evilCraig, evilCraigIdle, evilCraigRunning, evilCraigPunchStomp, evilCraigStomp, evilCraigDie;
var zombie, zombie_1, zombie_2, zombie_3, zombie_4, zombieBike;

var bin, binImg;


//IronMan
var ironMan, ironManImg;
var ironManFireBeam, ironManFireBeamImg;
var ironManMissile, ironManMissileImg;
var ironManShooting;

var airPollution, airPollutionImg;
var cleanAir, cleanAirImg;
var pollutionBullets, pollutionBulletsImg;
var boom;

var dragon, dragonAni;
var dragonBeam, dragonBeamAni;

var earthSaved, earthSavedImg;
var ironManDone, ironManDoneImg;


//Aquaman
var aquaman, aquamanImg,  aquamanImgLeft;
var aquamanJumpAttackAni, aquamanJumpAttackLeftAni;
var tridentSpinBlockAni, tridentSpinBlockLeftAni;
var trident, tridentAni, tridentLeftAni;
var tridentStrikeAni, tridentStrikeLeftAni;
var whaleAttack, whaleAttackAni,  whaleAttackLeftAni;
var aquamanSwimmingAni, aquamanSwimmingLeftAni;

var sharkGarbage, sharkGarbageAni;
var dolphin1, dolphin2, dolphin1Ani, dolphin2Ani;

var godzilla, godzillaAni;
var atomicBlast, atomicBlastAni;

//Ground
var ground;

//Buttons
var hulkButton;
var hulkGO;
var hulkBg;
var hulkGoBack, hulkGoBackImg;

var ironManButton;
var ironManGO;
var ironManBg;
var ironManGoBack, ironManGoBackImg;

var aquamanButton;
var aquamanGO;
var aquamanBg;
var aquamanGoBack, aquamanGoBackImg;

//HPs of every hero
var hulkHp = 10;
var ironManHp = 100;
var aquamanHp = 100;

//HealthKits of every hero
var health, healthImg;

//HPs of every boss
var hulkBossHp = 1000;
var ironManBossHp = 1000;
var aquamanBossHp = 1000;

//Groups
var ironManFireBeamGroup, ironManMissileGroup;
var cleanAirGroup, airPollutionGroup; 
var dragonBeamGroup;

var zombieGroup;
var healthGroup;

var sharkGarbageGroup, dolphin1Group, dolphin2Group;
var tridentGroup, tridentLeftGroup;
var atomicBlastGroup;

// Creating frames for every stage to spawn bosses at times only!
var hulkFrame = 0;
var ironFrame = 0;
var aquaFrame = 0;

function preload(){

  bgImg = loadImage("bg/bg.jpg");

  hulkGoBackImg = loadImage("buttonImg/goBack.png");
  ironManGoBackImg = loadImage("buttonImg/goBack.png");
  aquamanGoBackImg = loadImage("buttonImg/goBack.png");

  healthImg = loadImage("health.png");


  //HEROES
  //HULK
  //hulkSmash = loadAnimation("landPollution/hulkSmash1.png","landPollution/hulkSmash2.png","landPollution/hulkSmash3.png",
  //"landPollution/hulkSmash4.png","landPollution/hulkSmash5.png");
  

  hulkStanding = loadAnimation("landPollution/hulkWalking5.png");

  hulkWalking = loadAnimation("landPollution/hulkWalking1.png", "landPollution/hulkWalking2.png", "landPollution/hulkWalking3.png",
  "landPollution/hulkWalking4.png", "landPollution/hulkWalking5.png", "landPollution/hulkWalking6.png","landPollution/hulkWalking7.png");

  hulkPunch = loadAnimation("landPollution/hulkPunch1.png", "landPollution/hulkPunch2.png", 
  "landPollution/hulkPunch3.png", "landPollution/hulkPunch4.png");

  //hulkSmash = loadImg("landPollution/4s2Y.gif");
  
  hulkBg = loadImage("bg/hulkBg_2.jpg");

  //trash
  binImg = loadImage("landPollution/trashBin.png");

   //IronMan
  ironManImg = loadAnimation("airPollution/IronManFlying.png");
  ironManShooting = loadAnimation("airPollution/IronManShooting.png");
  ironManFireBeamImg = loadImage("airPollution/FIRE BEAM.png");
  ironManMissileImg = loadImage("airPollution/IRONMAN MISSILE.png");

  earthSavedImg = loadImage("airPollution/earthSaved.png");
  ironManDoneImg = loadImage("airPollution/ironManDone.png");

  ironManBg = loadImage("bg/ironManBg_1.jpg");

  dragonAni = loadAnimation("airPollution/dragon_1.png", "airPollution/dragon_2.png", 
  "airPollution/dragon_3.png", "airPollution/dragon_4.png", "airPollution/dragon_5.png", 
  "airPollution/dragon_6.png", "airPollution/dragon_7.png");

  dragonBeamAni = loadAnimation("airPollution/dragonBeam.png");

  // IronMan Opponents
  airPollutionImg = loadImage("airPollution/AIR_POLLUTION_1.png");
  cleanAirImg = loadImage("airPollution/CLEAN_AIR.png");
  boom = loadAnimation("airPollution/BOOM.png");


  //Aquaman
  aquamanAni = loadAnimation("waterPollution/aquamanStanding.png");

  tridentAni = loadAnimation("waterPollution/tridentStrikeTrident-4.png");
 
  tridentStrikeAni = loadAnimation("waterPollution/tridentStrike_1.png", "waterPollution/tridentStrike_1 - 2.png", 
  "waterPollution/tridentStrike_2.png","waterPollution/tridentStrike_2_1.png",  "waterPollution/tridentStrike_3.png", "waterPollution/tridentStrike_5.png");
   
   aquamanSwimmingAni = loadAnimation("waterPollution/Swimming_1.png", "waterPollution/Swimming_2.png", "waterPollution/Swimming_3.png", "waterPollution/Swimming_4.png",
   "waterPollution/Swimming_5.png", "waterPollution/Swimming_6.png", "waterPollution/Swimming_7.png", "waterPollution/Swimming_8.png");

   tridentSpinBlockAni = loadAnimation("waterPollution/tridentSpin_1.png", "waterPollution/tridentSpin_2.png", "waterPollution/tridentSpin_3.png"
   , "waterPollution/tridentSpin_4.png", "waterPollution/tridentSpin_5.png", "waterPollution/tridentSpin_6.png"
   , "waterPollution/tridentSpin_7.png", "waterPollution/tridentSpin_8.png", "waterPollution/tridentSpin_9.png");


  aquamanBg = loadImage("bg/aquamanBg_1.jpg");


  //EVIL
  //HULK EVIL
  evilCraigIdle = loadImage('landPollution/Evil/craigMullins-idle.png', "landPollution/Evil/craigMullins-idle_2.png");

  evilCraigRunning = loadAnimation("landPollution/Evil/craigMullins-running0.png", "landPollution/Evil/craigMullins-running1.png", "landPollution/Evil/craigMullins-running2.png",
   "landPollution/Evil/craigMullins-running4.png", "landPollution/Evil/craigMullins-running5.png", "landPollution/Evil/craigMullins-running6.png", "landPollution/Evil/craigMullins-running7.png");

   evilCraigPunchStomp = loadAnimation("landPollution/Evil/craigMullins-punchStomp_1.png", "landPollution/Evil/craigMullins-punchStomp_2.png", "landPollution/Evil/craigMullins-punchStomp_3.png",
   "landPollution/Evil/craigMullins-punchStomp_4.png", "landPollution/Evil/craigMullins-punchStomp_5.png", "landPollution/Evil/craigMullins-punchStomp_6.png",);

   evilCraigStomp = loadAnimation("landPollution/Evil/craigMullins-stompStomp_1.png", "landPollution/Evil/craigMullins-stompStomp_2.png", "landPollution/Evil/craigMullins-stompStomp_3.png",
   "landPollution/Evil/craigMullins-stompStomp_4.png", "landPollution/Evil/craigMullins-stompStomp_5.png", "landPollution/Evil/craigMullins-stompStomp_6.png",);

   evilCraigDie = loadAnimation("landPollution/Evil/craigMullins-death01.png", "landPollution/Evil/craigMullins-death02.png", 
   "landPollution/Evil/craigMullins-death03.png", "landPollution/Evil/craigMullins-death04.png", "landPollution/Evil/craigMullins-death05.png", 
   "landPollution/Evil/craigMullins-death06.png", );


  zombie_1 = loadAnimation("landPollution/Evil/zombie1_running_1.png", "landPollution/Evil/zombie1_running_2.png", 
  "landPollution/Evil/zombie1_running_3.png", "landPollution/Evil/zombie1_running_4.png", "landPollution/Evil/zombie1_running_5.png", 
  "landPollution/Evil/zombie1_running_6.png");

  zombie_2 = loadAnimation("landPollution/Evil/zombie2_running_1.png", "landPollution/Evil/zombie2_running_2.png",
  "landPollution/Evil/zombie2_running_3.png");

  zombie_3 = loadAnimation("landPollution/Evil/zombie3_running_1.png", "landPollution/Evil/zombie3_running_2.png", 
  "landPollution/Evil/zombie3_running_3.png", "landPollution/Evil/zombie3_running_4.png", "landPollution/Evil/zombie3_running_5.png", 
  "landPollution/Evil/zombie3_running_6.png", );

  zombie_4 = loadAnimation("landPollution/Evil/zombie4_running.png");

  zombieBike = loadAnimation("landPollution/Evil/zombieMotorBike.png");

  //AQUAMAN EVIL
  sharkGarbageAni = loadAnimation("waterPollution/Evil/shark_1.png", "waterPollution/Evil/shark_2.png", 
  "waterPollution/Evil/shark_3.png", "waterPollution/Evil/shark_4.png", "waterPollution/Evil/shark_5.png");

  dolphin1Ani = loadImage("waterPollution/dolphinH.png");
  dolphin2Ani = loadImage("waterPollution/dolphinParty.png");

  godzillaAni = loadAnimation("waterPollution/Evil/godzilla_1.png", "waterPollution/Evil/godzilla_2.png", 
  "waterPollution/Evil/godzilla_3.png", "waterPollution/Evil/godzilla_4.png", 
  "waterPollution/Evil/godzilla_5.png", "waterPollution/Evil/godzilla_6.png", 
  "waterPollution/Evil/godzilla_7.png", "waterPollution/Evil/godzilla_8.png");

  atomicBlastAni = loadAnimation("waterPollution/Evil/godzillaAtomicBlast_1.png", "waterPollution/Evil/godzillaAtomicBlast_2.png", 
  "waterPollution/Evil/godzillaAtomicBlast_3.png", "waterPollution/Evil/godzillaAtomicBlast_4.png", 
  "waterPollution/Evil/godzillaAtomicBlast_5.png", "waterPollution/Evil/godzillaAtomicBlast_6.png", 
  "waterPollution/Evil/godzillaAtomicBlast_7.png", "waterPollution/Evil/godzillaAtomicBlast_8.png", 
  "waterPollution/Evil/godzillaAtomicBlast_9.png", "waterPollution/Evil/godzillaAtomicBlast_10.png", 
  "waterPollution/Evil/godzillaAtomicBlast_11.png");


  }
function setup() {
  createCanvas(1536,720);

  // creating Groups
  airPollutionGroup = new Group();
  cleanAirGroup = new Group();
  ironManFireBeamGroup = new Group();
  ironManMissileGroup = new Group();
  zombieGroup = new Group();
  healthGroup = new Group();
  dragonBeamGroup = new Group();
  sharkGarbageGroup = new Group();
  dolphin1Group = new Group();
  dolphin2Group = new Group();
  tridentGroup = new Group();
  atomicBlastGroup = new Group();

  // Hero buttons (using buttons)
  hulkButton = createImg('landPollution/hulkButton.png');
  ironManButton = createImg('airPollution/ironManButton1.jpg');
  aquamanButton = createImg('waterPollution/aquamanButton.jpg');

  //GO BACK buttons (using sprites)
  hulkGoBack = createSprite(1450, 650, 60, 20);
  hulkGoBack.addImage(hulkGoBackImg);
  hulkGoBack.scale = 0.2;
  hulkGoBack.visible = false;

  ironManGoBack = createSprite(1450, 650, 60, 20);
  ironManGoBack.addImage(ironManGoBackImg);
  ironManGoBack.scale = 0.2;
  ironManGoBack.visible = false;

  aquamanGoBack = createSprite(1450, 650, 60, 20);
  aquamanGoBack.addImage(aquamanGoBackImg);
  aquamanGoBack.scale = 0.2;
  aquamanGoBack.visible = false;

  //Story Buttons
  //ironManGO = createButton("GO");
  //ironManGO.hide();

  //aquamanGO = createButton("GO");
  //aquamanGO.hide();
  
  // Ground
  ground = createSprite(900, 610, 2000, 20);
  ground.visible = false;

  //Hulk[
  hulk = createSprite(400, 200, 50, 50);
  hulk.scale = 0.4;
  hulk.visible = false;
  //hulk.debug =true;

  hulk.addAnimation("hulk", hulkStanding);
  hulk.addAnimation("hulkWalk", hulkWalking);
  hulk.addAnimation("hulkPunching", hulkPunch);
  //hulk.addAnimation("hulkSmash", hulkSmash);

  //bin
  bin = createSprite(800, 500, 50, 50);
  bin.addImage(binImg);
  bin.scale = 0.2;
  bin.visible = false;

  //hulkEvil
  evilCraig = createSprite(900, 100, 20, 20);
  evilCraig.scale = 0.5;
  evilCraig.visible = false;

  evilCraig.addAnimation("evilCraigIdling", evilCraigIdle);
  evilCraig.addAnimation("evilCraigStomping", evilCraigStomp);
  evilCraig.addAnimation("evilCraigPunching", evilCraigPunchStomp);
  evilCraig.addAnimation("evilCraigRun", evilCraigRunning);
  //Hulk]

  
  //IronMan[
  ironMan = createSprite(500, 300, 30, 50);
  ironMan.visible = false;
  ironMan.scale = 0.8;
  ironMan.addAnimation("ironman",ironManImg);
  ironMan.addAnimation("ironmanShoot",ironManShooting);

  earthSaved = createSprite(1300, 380, 50, 50);
  earthSaved.addImage(earthSavedImg);
  earthSaved.visible = false;
  earthSaved.scale = 1;

  ironManDone = createSprite(200, 600, 50, 50);
  ironManDone.addImage(ironManDoneImg);
  ironManDone.scale = 0.7;
  ironManDone.visible = false;

  //ironManEvil
  dragon = createSprite(1300, 50, 50, 50);
  dragon.addAnimation("dragonStand", dragonAni);
  dragon.scale = 0.6;
  dragon.visible = false;
  //dragon.debug = true;
  dragon.setCollider("rectangle", -80, 0, 400, 500);
  //IronMan]


  //Aquaman[
  aquaman = createSprite(400, 400, 50, 50);
  aquaman.visible = false;
  aquaman.scale = 0.6;

  aquaman.addAnimation("aquamanStanding", aquamanAni);
  aquaman.addAnimation("aquamanSwimming", aquamanSwimmingAni);
  aquaman.addAnimation("tridentStriking", tridentStrikeAni);
  aquaman.addAnimation("tridentSpinning", tridentSpinBlockAni);
  

  //aquamanEvil
  godzilla = createSprite(1300, 50, 50, 50);
  godzilla.addAnimation("godzillaStand", godzillaAni);
  godzilla.scale = 0.8;
  godzilla.visible = false;
  //Aquaman]


  //HPs
  hulkHp = 100;
  ironManHp = 100;
  aquamanHp = 100;

  hulkBossHp = 100;
  ironManBossHp = 1000;
  aquamanBossHp = 100;

  gameState = "start";
  edges = createEdgeSprites();
  }

function draw() {
  background(bgImg); 
  drawSprites();
  
  if(gameState === "start"){
    
  //Position and styling of the buttons
  ironManButton.position(300, 300);
  ironManButton.style('width', '250px');
  ironManButton.style('height', '180px');
  
  hulkButton.position(600, 300);
  hulkButton.style('width', '250px');
  hulkButton.style('height', '180px');

  aquamanButton.position(900, 300);
  aquamanButton.style('width', '250px');
  aquamanButton.style('height', '180px');

  
  //ironManGO.position(800, 600);
  //ironManGO.style('width', '50px');
  //IronManGO.style('height', '70px');

  //aquamanGO.position(800, 600);
  //aquamanGO.style('width', '50px');
  //aquamanGO.style('height', '70px');



  //HULK ANIMATION
  hulkButton.mousePressed(function(){
  gameState = "hulkStartInitial"



      hulkButton.hide();
      ironManButton.hide();
      aquamanButton.hide();
  })
  

  ironManButton.mousePressed(function(){
    gameState = 'ironManStartInitial';
    
    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.hide();
  })
 
  aquamanButton.mousePressed(function(){
    gameState = "aquamanStartInitial"

  hulkButton.hide();
  ironManButton.hide();
  aquamanButton.hide();

})

}
  if(gameState === "hulkStartInitial"){
    hulkGOText();
  }

  if(gameState === "ironManStartInitial"){
    ironManGOText();
  }

  if(gameState === "aquamanStartInitial"){
    aquamanGOText();
  }



if(gameState==='hulkPlay'){
  background(hulkBg);
  hulkFrame = hulkFrame + 1;

  hulk.visible = true;
  hulkGoBack.visible = true;
  //hulkGO.visible = false;
  //evilCraig.visible = true;
  
  textSize(25);
  fill("white");
  text("Hp: " + hulkHp, 100, 100);

  //evilCraig.debug = true;
  evilCraig.setCollider("rectangle", 0, -50, 330, 450);
  
  //hulk.debug = true;
  

  if(mousePressedOver(hulkGoBack)){
    hulkRestart();
  }
  

  hulk.velocityY = hulk.velocityY + 0.6;
  hulk.collide(ground);

  bin.velocityY = bin.velocityY + 0.3;
  bin.collide(ground);

  evilCraig.velocityY = evilCraig.velocityY + 0.9;
  evilCraig.collide(ground);
  
  //hulk.collide(evilCraig);

  rands = Math.round(random(1, 3));
  if(frameCount%90 === 0){
    switch(rands){
      case 1: evilCraig.changeAnimation("evilCraigIdling", evilCraigIdle);
      break;
      case 2: evilCraig.changeAnimation("evilCraigPunching", evilCraigPunchStomp); 
      break;
      case 3: evilCraig.changeAnimation("evilCraigStomping", evilCraigStomp);
      break;
      default: break;
    }

  }


  ran = Math.round(random(1, 5));
  if(frameCount%10 === 0){
    //zombie.velocityX = 8;

    switch(ran){
      case 1: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombie_1",zombie_1);
              zombie.velocityX = -8;
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 2: zombie = createSprite(1300, 500, 50, 50);
              zombie.addAnimation("zombie_2", zombie_2);
              zombie.velocityX = -8;          
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 3: zombie = createSprite(1300, 500, 50, 50);
              zombie.addAnimation("zombie_3", zombie_3);
              zombie.velocityX = -8;                        
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 4: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombie_4", zombie_4);
              zombie.velocityX = -8;     
              zombie.scale = 0.3;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 5: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombieBiking", zombieBike);
              zombie.velocityX = -8;             
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      default:break;
    }
    zombieGroup.add(zombie);
  }
    spawnHealth();

    if(hulk.isTouching(healthGroup)){
      hulkHp = hulkHp = 100;
      healthGroup.destroyEach();
    }
  

  //HULK [
//Going Right
 if(keyDown(RIGHT_ARROW)){
    hulk.velocityX = 3;
    hulk.changeAnimation("hulkWalk", hulkWalking);

  }else{
   hulk.velocityX = 0;
   hulk.changeAnimation("hulk", hulkStanding); 
   hulk.scale = 0.4;
  }

  //Going Left
  if(keyDown(LEFT_ARROW)){
    hulk.velocityX = - 3;
    hulk.changeAnimation("hulkWalkLeft", hulkWalkingLeft);
  }

  //Punching Right
  if(keyDown("w")){
    hulk.changeAnimation("hulkPunching", hulkPunch);
    hulk.scale = 0.7;
  }

  //Punching Left
  if(keyDown("q")){
    hulk.changeAnimation("hulkPunchingLeft", hulkPunchLeft);
    hulk.scale = 0.7;
  }

  //Smashing Right

  if(keyDown("d")){
    //image(hulkSmash, hulk.x -100, hulk.y);
    //hulk.scale = 0.5;
    hulkSmash = createImg("landPollution/4s2Y.gif");
    hulkSmash.position(hulk.x - 150, hulk.y -100);
    hulk.visible = false;  
    
    //hulkSmash.resize(100, 150);
  
  }
  
  if(keyWentUp("d")){
    clear();

  }

  //MISSION REMOVE GIF
  
  //Smashing Left
  if(keyDown("a")){
    hulk.changeAnimation("hulkSmashLeft", hulkSmashLeft);
    hulk.scale = 0.5;
  }

  //Jumping
  if(keyDown("space") && hulk.y >= 470){
    hulk.velocityY = -15;
  }
  

  //TOUCH ATTACK

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("w") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("q") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("d") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("a") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (zombieGroup.get(i).isTouching(hulk)) {
        hulkHp = hulkHp - 1;
    }

  }

  
// Displaying of the Boss
  if(hulkFrame >= 300){
    zombieGroup.visible = false;
    evilCraig.visible = true;

    zombieGroup.destroyEach();
    zombieGroup.setVelocityXEach(0);

    textSize(25);
    text("Hp: " + hulkBossHp, 1000, 100);

    if(keyDown("w") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

    if(evilCraig.isTouching(hulk)){
      hulkHp = hulkHp -1;
    }

    if(keyDown("q") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

    if(keyDown("d") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

    if(keyDown("a") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

  }

  if(hulkBossHp <= 0){
    evilCraig.visible = false;

    textSize(40);
    fill("green");
    stroke("white");
    text("Press and hold 'T'", 700, 200);

    if(keyDown("t")){
      bin.visible = true;
      background(0);

      textSize(50);
      fill("green");
      stroke("white");
      strokeWeight(5);
      text("YOU WIN!", 650, 300);

      textSize(30);
      fill("green");
      stroke("white");
      strokeWeight(5);
      text("You have saved the Earth from dangerous waste materials!", 400, 350);
      text("Well Done!", 700, 400);
      text("Press on 'Go Back' button to go back to the main screen", 400, 450);
    }

    /*
    if(hulkHp <= 0){
      hulk.velocityX = 0;
      hulk.velocityY = 0;
      
      textSize(50);
      fill("red");
      stroke("blue");
      strokeWeight(2);
      text("YOU LOSE!", 500, 200);
      text("Press on 'Go Back' button to go back to the main screen", 400, 450);
    }
*/
  }

}

//IRONMAN ANIMATION

if(gameState === "ironManStart"){


}

if(gameState === "ironManStartInitial"){
ironManGOText();
}

  if(gameState === "ironManPlay"){
    background(ironManBg);
    ironFrame = ironFrame + 1;

    ironMan.visible = true;
    ironManGoBack.visible = true;
    //ironMan.debug = true;
    ironMan.setCollider("rectangle", 130, 0, 270, 100);

    if(mousePressedOver(ironManGoBack)){
      ironManRestart();
    }


  textSize(25);
  fill("white");
  text("Hp: "+ ironManHp, 100, 100);


  rand = Math.round(random(1,2));
  switch (rand) {
    case 1:spawnPollution();
      break;
    case 2:spawnCleanAir();
      break;
  }

      if(frameCount%90===0){
        airPollutionGroup.velocityX = airPollutionGroup.velocityX - 5;
      }
      //console.log(frameCount);
       

  //Going Left
  if(keyDown(LEFT_ARROW)){
    ironMan.velocityX = -10;
  }

  if(keyWentUp(LEFT_ARROW)){
    ironMan.velocityX = 0
  }


  //Going Right
  if(keyDown(RIGHT_ARROW)){
    ironMan.velocityX = 10;
  }

  if(keyWentUp(RIGHT_ARROW)){
    ironMan.velocityX = 0
  }

  //Going Up
  if(keyDown(UP_ARROW)){
    ironMan.velocityY = -10;
  }

  if(keyWentUp(UP_ARROW)){
    ironMan.velocityY = 0
  }

  //Going Down
  if(keyDown(DOWN_ARROW)){
    ironMan.velocityY = 10;
  }

  if(keyWentUp(DOWN_ARROW)){
    ironMan.velocityY = 0
  }

  //For Shooting Beam
  if(keyWentDown("w")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManFireBeam = createSprite(ironMan.x + 160, ironMan.y - 8);
    ironManFireBeam.scale = 0.2;
    ironManFireBeam.addImage(ironManFireBeamImg);
    ironManFireBeam.velocityX = ironManFireBeam.velocityX + 10;
    ironManFireBeamGroup.add(ironManFireBeam);
  }

  if(keyWentUp("w")){
    ironMan.changeAnimation("ironman",ironManImg);
    ironMan.scale = 0.8;
  }

  //For Shooting Missile
  if(keyWentDown("q")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManMissile = createSprite(ironMan.x + 150, ironMan.y);
    ironManMissile.scale = 0.3;
    ironManMissile.addImage(ironManMissileImg);
    ironManMissile.velocityX = ironManMissile.velocityX + 10;
    ironManMissileGroup.add(ironManMissile);
  }

  if(keyWentUp("q")){
    ironMan.changeAnimation("ironman",ironManImg);
    ironMan.scale = 0.8;
  }


    //TOUCH ATTACK

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironManFireBeamGroup)) {
        airPollutionGroup.get(i).destroy();
        ironManFireBeamGroup.destroyEach();
    }

  }

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironManMissileGroup)) {
        airPollutionGroup.get(i).destroy();
        ironManMissileGroup.destroyEach();
    }

  }

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironMan)) {
      airPollutionGroup.get(i).destroy();
      ironManHp = ironManHp -5;
    }

  }

  for (var i =0; i < cleanAirGroup.length; i++) {
    if (cleanAirGroup.get(i).isTouching(ironMan)) {
        cleanAirGroup.get(i).destroy();
        ironManHp = ironManHp + 10;
    }

  }

  // Displaying of the Boss
  if(ironFrame >= 200){
    airPollutionGroup.visible = false;
    dragon.visible = true;

    airPollutionGroup.destroyEach();
    airPollutionGroup.setVelocityXEach(0);

    spawnDragonBeam();

    textSize(25);
    text("Hp: " + ironManBossHp, 1000, 100);

    //console.log(dragon.y);

    if(dragon.y <= 50){
      dragon.velocityY = 5;
    }

    if(dragon.y >= 680){
      dragon.velocityY = -5;
    }

    for (var i =0; i < ironManFireBeamGroup.length; i++) {
      if (ironManFireBeamGroup.get(i).isTouching(dragon)) {
        ironManFireBeamGroup.get(i).destroy();
          ironManBossHp = ironManBossHp - 5;
      }
  
    }

    for (var i =0; i < dragonBeamGroup.length; i++) {
      if (dragonBeamGroup.get(i).isTouching(ironMan)) {
        dragonBeamGroup.get(i).destroy();
          ironManHp = ironManHp - 20;
      }
  
    }

    for (var i =0; i < ironManMissileGroup.length; i++) {
      if (ironManMissileGroup.get(i).isTouching(dragon)) {
          ironManMissileGroup.get(i).destroy();
          ironManBossHp = ironManBossHp - 5;
      }
  
    }
  }


  if(ironManBossHp <= 0){
    dragon.destroy();
    dragonBeamGroup.destroyEach();
    cleanAirGroup.destroyEach();
    ironManFireBeamGroup.destroyEach();
    ironManMissileGroup.destroyEach();

    earthSaved.visible = true;
    ironMan.visible = false;
    ironManDone.visible = true;

      textSize(40);
      fill("orange");
      stroke("white");
      strokeWeight(3);
      text("YOU WIN!", 570, 250);

      textSize(25);
      fill("orange");
      stroke("white");
      strokeWeight(3);
      text("You have saved the Earth from intoxicating pollution which cause Global Warming!", 250, 300);
      text("And various Respiratory Problems!", 450, 350);
      text("Great Job!", 630, 400);
      text("Press on 'Go Back' button to complete other challenges", 370, 450);

  }

/*
    if(ironManHp <= 50){
     gameState = "ironManEnd"
    }

    
    if(gameState === "ironManEnd"){
      background(ironManBg);
      ironMan.velocityX = 0;
      ironMan.velocityY = 0;
      airPollutionGroup.setVelocityXEach(0);
      cleanAirGroup.setVelocityXEach(0);

      dragon.visible = false;
      dragon.velocityY = 0;
      dragonBeamGroup.setVelocityXEach(0);

      ironMan.visible = 0;

      airPollutionGroup.setLifetimeEach(-1);
      cleanAirGroup.setLifetimeEach(-1);
      dragonBeamGroup.setLifetimeEach(-1);

      textSize(30);
      fill("red");
      stroke("yellow");
      text("GAME OVER", 600, 300);
      text("Click on 'go back' button to restart", 500, 400);

    }
    */
    
    console.log(ironFrame);
    
  }

// AQUAMAN ANIMATION

 
if(gameState === "aquamanPlay"){
  background(aquamanBg);
  aquaFrame = aquaFrame + 1;

  aquaman.visible =true;
  aquamanGoBack.visible = true;
  //whaleAttack.collide(edges[2]);

  textSize(25);
  fill("white");
  text("Hp: "+ aquamanHp, 100, 100);
  
  //aquaman.velocityY = aquaman.velocityY + 0.6;

  if(mousePressedOver(aquamanGoBack)){
    aquamanRestart();
  }

  rand = Math.round(random(1, 3));
  switch (rand) {
    case 1:spawnShark();
      break;
    case 2:spawnDolphin1();
      break;
    case 3:spawnDolphin2();
    break;
    default:break;
  }


  //Going Right
  //Animation changes
if(keyDown(RIGHT_ARROW)){
  aquaman.changeAnimation("aquamanSwimming",aquamanSwimmingAni);
  aquaman.velocityX = 7;
}

//Animation changes back to normal
if(keyWentUp(RIGHT_ARROW)){
aquaman.changeAnimation("aquamanStanding", aquamanAni);
aquaman.velocityX = 0;
}

//Going Left
//Animation Changes
if(keyDown(LEFT_ARROW)){
  aquaman.changeAnimation("aquamanSwimming",aquamanSwimmingAni);
  aquaman.velocityX = -7;
}

//Changes Back to normal
if(keyWentUp(LEFT_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityX = 0;
  }

//Going Up
if(keyDown(UP_ARROW)){
  aquaman.velocityY = -7;
 }

 //Back to normal
 if(keyWentUp(UP_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityY = 0;
  }

//Going Down
if(keyDown(DOWN_ARROW)){
  aquaman.velocityY = 7;
}

//Back to normal
if(keyWentUp(DOWN_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityY = 0;
  }

//For striking with trident
//Animation changes to a throwing trident animation
if(keyWentDown("d")){
  aquaman.changeAnimation("tridentStriking", tridentStrikeAni);

  trident = createSprite(aquaman.x + 160, aquaman.y - 8);
  trident.scale = 1;
  trident.addAnimation("trident", tridentAni);
  trident.velocityX = trident.velocityX + 10;
  tridentGroup.add(trident);
}

//Changes back to normal
if(keyWentUp("d")){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  }

  if(keyWentDown("s")){
    
  }

 //TOUCH ATTACK

 for (var i =0; i < sharkGarbageGroup.length; i++) {
  if (sharkGarbageGroup.get(i).isTouching(tridentGroup)) {
      sharkGarbageGroup.get(i).destroy();
      tridentGroup.destroyEach();
  }

}

for (var i =0; i < sharkGarbageGroup.length; i++) {
  if (sharkGarbageGroup.get(i).isTouching(aquaman)) {
    sharkGarbageGroup.get(i).destroy();
    aquamanHp = aquamanHp -5;
  }

}

for (var i =0; i < dolphin1Group.length; i++) {
  if (dolphin1Group.get(i).isTouching(aquaman)) {
      dolphin1Group.get(i).destroy();
      aquamanHp = aquamanHp + 10;
  }
}


// Displaying of the Boss
if(aquaFrame >= 100){
  sharkGarbageGroup.visible = false;
  godzilla.visible = true;

  sharkGarbageGroup.destroyEach();
  sharkGarbageGroup.setVelocityXEach(0);

  spawnAtomicBlast();

  textSize(25);
  text("Hp: " + aquamanBossHp, 1000, 100);

  //console.log(dragon.y);

  if(godzilla.y <= 50){
    godzilla.velocityY = 5;
  }

  if(godzilla.y >= 680){
    godzilla.velocityY = -5;
  }

  for (var i =0; i < tridentGroup.length; i++) {
    if (tridentGroup.get(i).isTouching(godzilla)) {
      tridentGroup.get(i).destroy();
        aquamanBossHp = aquamanBossHp - 5;
    }

  }
  
  for (var i =0; i < atomicBlastGroup.length; i++) {
    if (atomicBlastGroup.get(i).isTouching(aquaman)) {
      atomicBlastGroup.get(i).destroy();
        aquamanHp = aquamanHp - 10;
    }

  }
}

if(aquamanBossHp <= 0){

  aquaman.destroy();
  godzilla.destroy();

  tridentGroup.destroyEach();
  sharkGarbageGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();
  atomicBlastGroup.destroyEach();
  


  
  textSize(40);
  fill("orange");
  stroke("white");
  strokeWeight(3);
  text("YOU WIN!", 570, 250);

  textSize(25);
  fill("orange");
  stroke("white");
  strokeWeight(3);
  text("You have saved the Earth from intoxicating pollution which cause Global Warming!", 250, 300);
  text("And various Respiratory Problems!", 450, 350);
  text("Great Job!", 630, 400);
  text("Press on 'Go Back' button to complete other challenges", 370, 450);

}





  }  

  //console.log(frameCount);
  drawSprites();
}

//Hulk spawnHealth
function spawnHealth(){
  if(frameCount%130 === 0){
    health = createSprite(random(100, 800), -20, 30, 30);
    health.addImage(healthImg);
    health.scale = 0.4;
    health.velocityY = 5;
    health.lifetime = 500;
    healthGroup.add(health);
  }
}



// IronMan Enemy
function spawnPollution(){
  if(frameCount%20===0){
    airPollution = createSprite(random(1600,1650), random(50,700), 20, 20);
      airPollution.addImage(airPollutionImg);
      //airPollution.debug = true;
      airPollution.setCollider("rectangle", 0, 0, 400, 200);
      airPollution.velocityX = airPollution.velocityX - 15;
      airPollution.scale = 0.6;
      airPollution.lifetime = 400;
      airPollutionGroup.add(airPollution);
      
    }
}

//IronMan Reviver
function spawnCleanAir(){
  if(frameCount%200===0 && ironManHp <= 75){
    cleanAir = createSprite(random(1600,1650), random(10,730), 20, 20);
      cleanAir.addImage(cleanAirImg);
      // cleanAir.debug =true;
       cleanAir.setCollider("rectangle", 0, 0, 300, 200);
       cleanAir.velocityX = cleanAir.velocityX - 10;
       cleanAirGroup.add(cleanAir);
       cleanAir.scale = 0.6;
       cleanAir.lifetime = 400;
  }
}


//Dragon Flame
function spawnDragonBeam(){
  if(frameCount%35 === 0){
    dragonBeam = createSprite(dragon.x -120, dragon.y - 5, 50, 50);
    dragonBeam.addAnimation("dragonFire", dragonBeamAni);
    dragonBeam.scale = 0.3;
    dragonBeam.velocityX= - 10;
    //dragonBeam.debug = true;
    dragonBeam.setCollider("circle", -120, 20, 150);
    dragonBeamGroup.add(dragonBeam);
    dragonBeam.lifetime = 400;
  }
}


//Aquaman Enemy
function spawnShark(){
  if(frameCount%50 === 0){
  sharkGarbage = createSprite(random(1700, 1750), random(30, 700));
  sharkGarbage.addAnimation("sharkGarbageDash", sharkGarbageAni);
  sharkGarbage.debug = true;
  sharkGarbage.velocityX = -15;
  sharkGarbage.scale = 0.6;
  sharkGarbageGroup.add(sharkGarbage);
  sharkGarbage.lifetime = 400;
  }
}

//Aquaman Reviver 1
function spawnDolphin1(){
  if(frameCount%200 === 0){
  dolphin1 = createSprite(random(1700, 1750), random(30, 700));
  dolphin1.addImage(dolphin1Ani);
  dolphin1.debug = true;
  dolphin1.setCollider("rectangle", 0, 30, 400, 130);
  dolphin1.velocityX = -10;
  dolphin1Group.add(dolphin1);
  dolphin1.lifetime = 400;
}
}

//Aquaman Reviver 2
function spawnDolphin2(){
  if(frameCount%200 === 0 && aquamanHp <= 85){
  dolphin2 = createSprite(random(1700, 1750), random(30, 700));
  dolphin2.addImage(dolphin2Ani);
  dolphin2.debug = true;
  dolphin2.velocityX = -10;
  dolphin2Group.add(dolphin2);
  dolphin2.lifetime = 400;
}
}

//Aquaman Boss Attack
function spawnAtomicBlast(){
  if(aquaFrame%31 ===0){
    atomicBlast = createSprite(godzilla.x - 110, godzilla.y - 130, 30, 30);
    atomicBlast.addAnimation("godzillaBlasting", atomicBlastAni);
    atomicBlast.scale = 0.2;
    atomicBlast.debug = true;
    atomicBlast.setCollider("rectangle",0,20, atomicBlast.width, 170);
    atomicBlast.velocityX = -10;
    atomicBlastGroup.add(atomicBlast);
    atomicBlast.lifetime = 400;
}
}


// For displaying text before the game starts [
function hulkGOText(){
  background("skyblue");
  //gameState = "hulkPlay";

hulkGO = createSprite(900, 600, 100, 50);
hulkGO.shapeColor = "violet";

textSize(20);
fill("black");
text("GO", 900, 600);

textSize(25);
fill("red");
stroke("yellow");
strokeWeight(5);
text("Hulk wants to make the Earth a better place by placing a trash bin,", 400, 100);
text("But some deadly garbages are blocking the path!!", 500, 150);
text("Help Hulk to destroy them and save the Earth from Land Pollution!", 400, 200);
text("Use 'w' to punch them", 600, 250);
text("Use 'd' for HULK SMASH!", 600, 300);
text("Press Space for Hulk Jump", 600, 350);
text("Arrow Keys for movement", 600, 400);

textSize(70);
fill("red");
stroke("yellow");
strokeWeight(5);
text("All The Best", 550, 500);

if(mousePressedOver(hulkGO)){
  hulkGO.visible = false;
  gameState = "hulkPlay"

}
}

function ironManGOText(){
  background("green");
  //gameState = "hulkPlay";

ironManGO = createSprite(900, 600, 100, 50);
ironManGO.shapeColor = "violet";

textSize(20);
text("GO", 900, 600);

textSize(30);
fill("yellow");
stroke("red");
strokeWeight(3);
text("It was a Bright Sunny day, when everyone suddenly started coughing", 300, 100);
text("It is the Pollugon! And he is polluting the Atmosphere with his army!!", 350, 150);
text("But don't worry! Iron Man is gonna save the day!", 450, 200);
text("Use 'w' to shoot Fire Beam", 600, 250);
text("Use 'q' to shoot Missiles", 600, 300);
text("Arrow Keys for movement", 600, 350);

textSize(70);
fill("yellow");
stroke("red");
strokeWeight(5);
text("All The Best", 600, 500);

if(mousePressedOver(ironManGO)){
  ironManGO.visible = false;
  gameState = "ironManPlay"

}
}

function aquamanGOText(){
  background("yellow");
  //gameState = "hulkPlay";

aquamanGO = createSprite(900, 600, 100, 50);
aquamanGO.shapeColor = "green";

textSize(20);
text("GO", 900, 600);

textSize(25);
fill("green");
stroke("skyblue");
strokeWeight(5);
text("Hulk wants to make the Earth a better place by placing a trash bin,", 200, 100);
text("But some deadly garbages are blocking the path!!", 400, 150);
text("Help Hulk to destroy them and save the Earth from Land Pollution!", 300, 200);
text("Use 'w' to punch them", 400, 250);
text("Use 'd' for HULK SMASH!", 400, 300);
text("Press Space for Hulk Jump", 400, 350);
text("Arrow Keys for movement", 400, 400);

textSize(70);
fill("green");
stroke("skyblue");
strokeWeight(5);
text("All The Best", 550, 500);

if(mousePressedOver(aquamanGO)){
  aquamanGO.visible = false;
  gameState = "aquamanPlay"

}
}

//]


//For restarting from hulk
function hulkRestart(){
  gameState = "start"
  hulk.destroy();
  zombieGroup.destroyEach();
  evilCraig.destroy();
  bin.destroy();
  healthGroup.destroyEach();
  
  ironManButton.show();
  aquamanButton.show();
  hulkButton.show();

  if(keyDown("t") || hulkBossHp <= 0){
    ironManButton.show();
    aquamanButton.show();
  }
}


//For restarting from ironMan
function ironManRestart(){
  gameState = "start"

  ironMan.destroy();
  ironManFireBeamGroup.destroyEach();
  ironManMissileGroup.destroyEach();
  dragon.destroy();
  dragonBeamGroup.destroyEach();
  ironManDone.visible = false;
  earthSaved.visible = false;
  airPollutionGroup.destroyEach();
  cleanAirGroup.destroyEach();

  hulkButton.show();
  ironManButton.show();
  aquamanButton.show();

  if(ironManBossHp <= 0){
    hulkButton.show();
    aquamanButton.show();
  }
}


//For restarting from aquaman
function aquamanRestart(){
  gameState = "start"
  
  aquaman.destroy();
  sharkGarbageGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();
  tridentGroup.destroyEach();

  hulkButton.show();
  ironManButton.show();
  aquamanButton.show();

  if(aquamanBossHp <= 0){
    hulkButton.show();
    ironManButton.show();
  }
}





