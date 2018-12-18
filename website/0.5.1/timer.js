var sec,Min,hr;
sec = 0;
Min = 0;
hr = 0;
Min = "0" + Min;
hr = "0" + hr;
var format;
var timer = setInterval(count,1000);

function count(){

	sec++;

	if(sec >= 60){
		sec = checkNum(0);
		Min++;
		Min = checkNum(Min);

	}

	if(Min >= 60){
		Min = checkNum(0);
		hr++;
		hr = checkNum(hr);
	}
	else if(hr >= 60){
		alert("OverTime");

	}
	sec = checkNum(sec);
	

	format = (hr + ":" +  Min + ":" + sec);
	
	document.getElementById("timer").innerHTML = format;

	// else if(format == NaN){
	// 	document.getElementById("timer").innerHTMl = "Error";


	// }





}


function checkNum(num){
	parseInt(num);

	if(num > 0){
		if(num < 10){

			num = "0" + num;

		}
	}
   
	parseInt(num);
	return num;

}

function resetTimer(){

	sec = 0;
	Min = 0;
	hr = 0;
	Min = "0" + Min;
	hr = "0" + hr;
	sec = "0" + sec;
	format = (hr + ":" +  Min + ":" + sec);
	
	document.getElementById("timer").innerHTML = format;
	clearInterval(timer);
	timer = setInterval(count,1000);



}