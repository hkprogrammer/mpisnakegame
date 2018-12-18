/*$('.STOP')[0].focus();
document.getElementById("1").addEventListener(keypress, check);
function check(){
    alert("d");
}*/

//var avg = new Array(10.22, 9.91, 6.21, 8.99, 9.16);

// var resul = new Array(1,0,2,1,19,4,11,0,12,3,0);//36
// //var x,y,z;
// reorder(resul);
function test(x){

	console.log(x);
}
function reorder(results){
	var l = 0 ;
	var count = 0;
	for(i=0;i<=results.length;i++){
		//console.log(i);
		for(var r = i;r<results.length;r++){
			x = results[i];
			y = results[r];
			z = 0;
			if(results[i]>results[r]){
				results[i] = y;
				results[r] = x;
			}
			//console.log(results[s]);


			l++;
			//console.log(results[i-s]);
		}

	}


		
	var format = [];

	for(i=0;i<results.length;i++){
		format.push(results[i]);
	}
	//console.log(results);
	return format;

	//document.getElementById("output").innerHTML = format;

	//Math permutation
	/*function permutation(x){

		var l = 0;
		for(i=0;i<x;i++){
			for(var s=0;s<i;s++){
			
				l++;
			}
		}
		return l;
	}*/
}