

document.getElementById("input1").addEventListener('keypress', type);
document.getElementById("input2").addEventListener('keypress', type);
document.getElementById("input3").addEventListener('keypress', type);
document.getElementById("input4").addEventListener('keypress', type);
document.getElementById("input5").addEventListener('keypress', type);

function type(){
	//constraits
	var in1 = document.getElementById("input1").value;
	var in2 = document.getElementById("input2").value;
	var in3 = document.getElementById("input3").value;
	var in4 = document.getElementById("input4").value;
	var in5 = document.getElementById("input5").value;
	
	
	console.log(in1);
	console.log(in2);
	console.log(in3);
	console.log(in4);
	console.log(in5);


}