

function fruit() {
    this.speed = 0;
    this.width = 20;
    this.height = 20;
    
    this.x = Math.floor(Rand(5)) * (blocksize * 2) + blocksize;
    this.y = Math.floor(Rand(5)) * (blocksize * 2) + blocksize;
    console.log(this.x + " " + this.y);
    this.update = function () {
            
        rect(this.x, this.y, this.width, this.height);
       
    }
    this.reposition = function () {

    
        this.x = Math.floor(Rand(10)) * (blocksize * 2) + blocksize;
        this.y = Math.floor(Rand(10)) * (blocksize * 2) + blocksize;

    }
}


function Snake() {

    this.speed = 0;
    this.width = 20;
    this.height = 20;
    this.x = 0;
    this.y = 0;
    this.xspeed = 1 * blocksize;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.update = function () {

        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, this.width, this.height);
            

        }
        points = this.total;
        rect(this.x, this.y, this.width, this.height);
       


   }
   this.move = function () {
       if (this.total === this.tail.length) {
           for (var i = 0; i < this.tail.length - 1; i++) {
               this.tail[i] = this.tail[i +1];

           }
       }
       
       this.tail[this.total - 1] = createVector(this.x, this.y);
       this.x += this.xspeed;
       this.y += this.yspeed;
       

   }

}

var blocksize = 20;
var s = new Snake();
var f = new fruit();
var spositionx = [];
var spositiony = [];
function setup() {
    var width = 1440;
    var height = 600;
    createCanvas(width, height);
    frameRate(10);
    s.y = blocksize;
    s.x = blocksize;
    s.xspeed = 1 * blocksize;
    s.yspeed = 0;
    

    


}



function draw() {

    background(50);
    
   
    s.update();
    s.move();
    
    f.update();
    
    if (f.x == s.x && f.y == s.y) {

        s.total++;
        f.reposition();

    }
    //avoid touching border

  

    if (s.x >= width - (s.width) ){
        
        s.xspeed = 0;
        s.yspeed = 0;
        
        gameOver(true);
        console.log("You Died");
        
    }
    if (s.x <= 0) {
        
        s.xspeed = 0;
        s.yspeed = 0;
        gameOver(true);
    }
    if (s.y >= height - s.height) {
       
        s.xspeed = 0;
        s.yspeed = 0;
        gameOver(true);
    }
    if (s.y <= 0) {
      
        s.xspeed = 0;
        s.yspeed = 0;
        gameOver(true);
    }

    spositionx.push(s.x);
    spositiony.push(s.y);

    if (spositionx.length >= 100) {

        spositionx.shift();
    }
    if (spositiony.length >= 100) {

        spositiony.shift();
    }
    document.getElementById("pos").innerHTML = ("X: " + spositionx[spositionx.length - 1] + "<br> " + "Y: " + spositiony[spositiony.length - 1] );
    console.log(spositionx[spositionx.length-1] + " " + spositiony[spositiony.length - 1]);


    /* if (s.x >= width - (s.width/2)) {
        s.xspeed = Rand(7);
        s.yspeed = Rand(7);
        s.xspeed = s.xspeed * -1;
        
       
    }
    if (s.x <= 0) {
        //s.xspeed = s.xspeed * -1;
        s.xspeed = Rand(7);
        s.yspeed = Rand(7);
    }
    if (s.y >= height - (s.height / 2)) {
        s.xspeed = Rand(7);
        s.yspeed = Rand(7);
        s.yspeed = s.yspeed * -1;

    }
    if (s.y <= 0) {
        //s.yspeed = s.yspeed * -1;
        s.xspeed = Rand(7);
        s.yspeed = Rand(7);
    }*/
}

function gameOver(x) {
    s.total = 0;
    s.tail = [];
    if (x == true) {
        s.x = blocksize;
        s.y = blocksize;
        s.xspeed = 1 * blocksize;
        s.yspeed = 0;
       
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {

       
        s.xspeed = -1 * blocksize;
        s.yspeed = 0;
        
       
       
    }
    else if (keyCode === RIGHT_ARROW) {
     
        s.xspeed = 1 * blocksize;
        s.yspeed = 0;
    }
    else if (keyCode === UP_ARROW) {
       
        s.yspeed = -1 * blocksize;
        s.xspeed = 0;
    }
    else if (keyCode === DOWN_ARROW) {
        
        s.yspeed = 1 * blocksize;
        s.xspeed = 0;
    }
   
}

function mouseClicked() {
    s.total++;

}





    function Rand(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }