function fruit() {
    this.speed = 0;
    this.width = 20;
    this.height = 20;
    
    this.x = Math.floor(Rand(35)) * (blocksize * 2) + blocksize;
    this.y = Math.floor(Rand(14)) * (blocksize * 2) + blocksize;
   
    this.update = function () {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
        
    }
    this.reposition = function () {

    
        this.x = Math.floor(Rand(35)) * (blocksize * 2) + blocksize;
        this.y = Math.floor(Rand(14)) * (blocksize * 2) + blocksize;

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
    this.death = function(){
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x,this.y,pos.x,pos.y);
            if(d < 1){
                gameOver();

            }
        }


    }
    this.update = function () {

        for (var i = 0; i < this.tail.length; i++) {
            fill(255);
            rect(this.tail[i].x, this.tail[i].y, this.width, this.height);
            

        }
        points = this.total;
        fill(255);      
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
var len = 3;
var gameOverScreen = document.getElementById("gameoverC");
var GOvertxt = document.getElementById("overSpan");
var GOverbtn = document.getElementById("overbtn");
var gameActive = true;
var frames = 10;
var key_selection = 1;
 
keyselect();
function keyselect(){
    var keyselect = prompt("WASD or Arrow", "Arrow");
    if(keyselect == "Arrow"){
        key_selection = 1;
    }
    else if(keyselect == "WASD"){
        key_selection = 2;
    }
    else{
        key_selection = 1;
    }

}
document.getElementById("invisbtn").focus();
var highscore;
var data;
var localData;

function setup() {
    
    var width = 1440;
    var height = 600;

    createCanvas(width, height);
    frameRate(frames);
    s.y = blocksize;
    s.x = blocksize;
    s.xspeed = 1 * blocksize;
    s.yspeed = 0;
    gameoverC.style.visibility = "visible";
    background(51);
    s.death();
    s.update();
     resetGame();
    GOvertxt.innerHTML = "Start Snake";
    GOverbtn.innerHTML = "Start";
    data = loadJSON('/check', getScore);
    localData = data;
}
function getScore(){
    //setting up variables
    var leaderboard = document.getElementById('leaderboard');
    //making score.js into a data key like 0,1,2,3
    var keys = Object.keys(data);
    //create empty array
    var dataArray = [];


    //insert all datas into an array line
    for(var i = 0; i < keys.length; i++){
        dataArray.push(data[keys[i]]);
    }
    //console.log(dataArray);

    //reorders the data, see reorder.js for more info
    var rdata = reorder(dataArray);
    // console.log(dataArray + "data Array"); //testing purposes


    //console.log(RData);
    //creates new empty array that will store the ordered name and score
    var newDataArray = [];

    //backup variables
    var srdata = rdata;
    var rkeys = keys;

    //reverse the array so that it will be from the highest score to the lowest
    rdata = rdata.reverse();
    for(var i = 0;i< rdata.length;i++){
        for(var n = 0; n < rdata.length;n++){

            //get the name and score of each N value
            var name = rkeys[n];
            var score = data[name];
            
            if(rdata[i] == score){
                rkeys[n] = '';
                newDataArray.push({name,score});
                break;

            }
            else{
                continue;
            }
            

        }
        console.log(rdata);

    }
    rdata = srdata;
    srdata = "";
    var format = "";
    for(var i = 0; i < newDataArray.length;i++){

       
        format += "<li>" +  newDataArray[i].name + ", " +"<b>" + newDataArray[i].score + "</b>" + "</li>";
       
       
        

    }

    // format = newDataArray[1].name;
    console.log(newDataArray);


    // console.log(Rdata);
     leaderboard.innerHTML = format;
    console.log(format);
   // reorder(keys);
    console.log(keys);
    //leaderboard.innerHTML = "";

    // for(var i = 0; i < keys.length; i++){
    //     var name = keys[i];
    //     var score = data[name]

    //     leaderboard.innerHTML += "<li>" +  name + ", " + score + "</li>";
    // }


}


var frameC = 0;
var points = 0;
var frameA = 0;
function draw() {

    frameRate(frames);
   s.update();
    if(gameActive){
        var name = document.getElementById('name');
        name.value = "";
      
        GOvertxt.innerHTML = "Game Over";
        GOverbtn.innerHTML = "Restart";
        background(51);
        s.death();
        s.update();
        s.move();
        f.update();
        if(s.total < len){
        	s.total++;

        }
        if (f.x == s.x && f.y == s.y) {

            s.total++;
            f.reposition();

        }
        //avoid touching border

        //0.6.1 11/26/18 Start
        //Purpose to check if the fruit is spawning inside the snake
        fcheckhit();
        
         
        //0.6.1 11/26/18 Finish

        if (s.x >= width){
            
            s.xspeed = 0;
            s.yspeed = 0;
            
            gameOver();
            console.log("You Died");
            
        }
        if (s.x <= 0 - 10) {
            
            s.xspeed = 0;
            s.yspeed = 0;
            gameOver();
        }
        if (s.y >= height) {
           
            s.xspeed = 0;
            s.yspeed = 0;
            gameOver();
        }
        if (s.y <= 0 - 10) {
          
            s.xspeed = 0;
            s.yspeed = 0;
            gameOver();
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
        //console.log(spositionx[spositionx.length-1] + " " + spositiony[spositiony.length - 1]);


        points = s.total - len;
       
        if(points >= 0){
        	 
            document.getElementById("points").innerHTML = points;
        }


        if(points < 70){
            if(points > 15 && points < 30){
                framesA = 2;

            }
            else if (points >= 30 && points <= 50){
                framesA = 4;

            }
            else if(points >= 50 && points <= 60){
               framesA = 6;
            }
            else if(points >= 60 && points <= 70){
                framesA = 8;

            frameRate(frames + framesA);
            }


         }
        
        else if(points >= 70){
            

            frameRate(frames + 20 + ((points-70)/5));

        }

        



    }
    else if(!gameActive){
        s.x = s.x;
        s.y = s.y;
        s.xspeed = 0;
        s.yspeed = 0;
    }


    
}
function fcheckhit(){
    var checked;
    var x=0;
    while(checked != true){
       
        for(var i = 0; i < s.tail.length; i++){
            var pos = s.tail[i];
            var d = dist(f.x,f.y,pos.x,pos.y);
            if(d < 1){
                f.reposition();
                checked = false;
                
                break;
            }
            
              

        }
        x++;
        if(x>2){
            checked = true;
            break;
        } 


    }
}

function gameOver(x) {
    gameoverC.style.visibility = "visible";

    document.getElementById("name").focus();
    $('.start')[0].focus();
    gameActive = false;
    frameRate(0);
    
    
    

    stopTimer();
}

function keyPressed() {
    //key_selection 1 is Arrow Keys
    if(key_selection == 1){
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
    //key_selection 2 is WASD
    else if(key_selection == 2){
        if (keyCode == 65) {

           
            s.xspeed = -1 * blocksize;
            s.yspeed = 0;
            
           
           
        }
        else if (keyCode == 68) {
         
            s.xspeed = 1 * blocksize;
            s.yspeed = 0;
        }
        else if (keyCode  == 87) {
           
            s.yspeed = -1 * blocksize;
            s.xspeed = 0;
        }
        else if (keyCode  == 83) {
            
            s.yspeed = 1 * blocksize;
            s.xspeed = 0;
        }
    }
   
   
}





function restart(){
    
    s.total = 0;
    s.tail = [];
    f.reposition();
    gameActive = true;
    document.getElementById("invisbtn").focus();
    //var name = prompt('Whats Your Name');
    if(name != null || name != '' || name != ' '){

        var name = document.getElementById('name');
        
        loadJSON('add/' + name.value + '/'+ points);
        name.value = "";

         
            
        data = loadJSON('/check', getScore);
        
         
    }
    else{

    }
   

    frames = 10;
    points = 0;
    gameoverC.style.visibility = "hidden";
   
    s.x = blocksize;
    s.y = blocksize;
    s.xspeed = 1 * blocksize;
    s.yspeed = 0;
       
    
    resetTimer();
    frameRate(frames);
    

}
// function checkScore(){
    
// }   
function resetGame(){

    s.total = 0;
    s.tail = [];
    f.reposition();
    gameActive = true;
    //var name = prompt('Whats Your Name');
   

    frames = 10;
    points = 0;
    gameoverC.style.visibility = "hidden";
   
    s.x = blocksize;
    s.y = blocksize;
    s.xspeed = 1 * blocksize;
    s.yspeed = 0;
       
    
    resetTimer();
    frameRate(frames);
}
function Rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}