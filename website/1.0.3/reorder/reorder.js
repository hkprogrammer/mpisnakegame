/*$('.STOP')[0].focus();
document.getElementById("1").addEventListener(keypress, check);
function check(){
    alert("d");
}*/

//var avg = new Array(10.22, 9.91, 6.21, 8.99, 9.16);

//var resul = new Array(9.22, 8.23, 7.99, 6.95, 9.90, 9.93, 10.34, 12.58);//36
//var x,y,z;
//reorder(resul);

console.log("tets")
function reorder(results){
	var l = 0 ;
	var count = 0;
	for(i=0;i<=results.length;i++){
		//console.log(i);
		for(s=i;s<results.length;s++){
			x = results[i];
			y = results[s];
			z = 0;
			if(results[i]>results[s]){
				results[i] = y;
				results[s] = x;
			}
			//console.log(results[s]);


			l++;
			//console.log(results[i-s]);
		}

	}


		
	var format = "";

	for(i=0;i<results.length;i++){
		if(i == results.length - 1){
			format += " " + results[i];
			break;
		}
		format += " " + results[i] + ",";
	}

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