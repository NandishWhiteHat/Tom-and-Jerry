var bgImg,mosue;
var catimg1, mouseimg1, catimg2, mouseimg2, cat4, mouse4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    cat4 = loadImage("images/cat4.png");
    mouse4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(100,600);
    mouse.addAnimation("mouseTeasing", mouse4);
    mouse.changeAnimation("mouseTeasing");
    mouse.scale = 0.1;
    mouse.debug = true;
    
    cat = createSprite(900,600);
    cat.addAnimation("catRunning", catimg1)
    cat.changeAnimation("catRunning")
    cat.scale = 0.2;
    cat.debug = true;
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.y < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseTeasing", mouseimg1);
        mouse.changeAnimation("mouseTeasing");

        cat.addAnimation("catRunning", cat4)
        cat.changeAnimation("catRunning")
        cat.velocityX=0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catRunning", catimg2)
        cat.changeAnimation("catRunning")
        cat.frameDelay = 25;
        cat.velocityX = -3;
    }


}
