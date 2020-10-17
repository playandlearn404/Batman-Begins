var walkingman;

class Man{
    constructor(){
        walkingman=createSprite(50,520,30,70 ) ;
        walkingman.addAnimation("walking",manwalk);
        walkingman.scale = 0.5;
    }

    display(){
       camera.x = walkingman.x + 100;
    }
}