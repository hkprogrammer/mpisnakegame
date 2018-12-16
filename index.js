var path = 'score.json';
var express = require("express");
var fs = require('fs')
var app = express();
var server = app.listen(process.env.PORT || 5000,listening);
var data = fs.readFileSync(path);
var score = JSON.parse(data);
var player_score = score;


// function loadGame(){
//     console.log(JSON.stringify(score));
// }




function listening(request,response){

	console.log("Listening");

}






app.use(express.static("website/LTS"));
app.get('/add/:name/:score', addScore);
app.get('/check', check);
function check(resquest, response){

	response.send(score);

}

function addScore(request, response){

	var data = request.params;
	var name = data.name;
	var score = Number(data.score);
	if(!player_score[name]){
		player_score[name] = score;
		var reply = {
			"name" : data.name,
			"score" : data.score,
			"Message" : "Success"
		}
		console.log(player_score);
		var new_data = JSON.stringify(player_score, null, 2);
		fs.writeFile(path, new_data, finished);
		function finished(err){
			console.log("finished");

		}
		
	}
	else if(player_score[name]){
		console.log("Name being taken");
		var reply = {
			"name" : data.name,
			"score" : data.score,
			"Message" : "Unsuccess"
		}
		//var new_data = JSON.stringify(player_score, null, 2);
		//fs.writeFile(path, new_data, finished);
		
		


	}
	
	response.send(reply);


}