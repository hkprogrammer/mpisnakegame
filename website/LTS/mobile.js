
function up(){

	//console.log("up");
	//keyCode = UP_ARROW;
	
	s.yspeed = -1 * blocksize;
	s.xspeed = 0;
	
	
}

function down(){
	//console.log('down');
	//keyCode = DOWN_ARROW;
	s.yspeed = 1 * blocksize;
    s.xspeed = 0;
}
function left(){
	s.xspeed = -1 * blocksize;
    s.yspeed = 0;
}
function right(){
	//console.log('right');
	//keyCode = RIGHT_ARROW;
	s.xspeed = 1 * blocksize;
    s.yspeed = 0;

}





function checkmobile(){
	if($(document).width() <= 720){
		return true;
	}
	else{
		return false;
	}
}
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
if(detectmob() == true){
	document.getElementById('Controls').style.visibility  = "visible";
	
}	
else if(detectmob() == false){
	document.getElementById('Controls').style.visibility  = "hidden";
}
window.addEventListener("resize", function(){
   	
	//for weblink only
	if(detectmob() == true){
		document.getElementById('Controls').style.visibility  = "visible";
		
	}	
	else if(detectmob() == false){
		document.getElementById('Controls').style.visibility  = "hidden";
	}
	

	

});
