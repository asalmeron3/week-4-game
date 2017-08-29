$(document).ready(function(){
	// //set global variables to keep track of the wins, losses, the total score, the goal/random # we have to reach, and the values of the crystals (these will be stored in an array )
	// var cryVals = [];
	var goal = 0;
	var wins = 0;
	var losses = 0;
	var totScore = 0;


	function results(){
		document.querySelector(".theScores").innerHTML = "<h3> Wins: " + wins + "</h3>" + "<h3> Losses: " + losses + "</h3>";
	}
	results();
	function message(mess){
		document.querySelector(".msg").innerHTML = mess ;
	}
	function theDom(where, tag, what){
		document.querySelector(where).innerHTML = "<" +tag + ">" + what + "</" + tag +">";
	}

	$(".crystal").on("click", function(){

		if(totScore ==0 ){
			//if the score is 0 (game has ended or just beginning) AND the crystals don't have values, we want to first generate those values and then leave them alone until the game/round ends
			for (i = 1; i<5; i++){
				butName = "#button-"+i;
				var now = Math.ceil(Math.random()*12);
				$(butName).val(now);

			}
			
			//this condition must also generate a new goal/# to guess or if the goal <19
			while (goal<19){
				goal = Math.ceil(Math.random()*120);

			}
			theDom(".theRandomNum", "h1", goal);
			
			totScore += Number($(this).val());
			theDom(".yourScore", "h1", totScore);
			message("");
		}

		else{
			//when the players total score is less than the goal, the the button clicks add to the total score
			totScore += Number($(this).val());
			theDom(".theRandomNum", "h1", goal);
			theDom(".yourScore", "h1", totScore);

			if (totScore ==goal){
				theDom(".yourScore", "h4", "<strong>You Win!!</strong> Press a crystal to play again.");
				totScore = 0;
				goal = 0;
				wins++;
				results();
			}
			else if (totScore>goal){
				theDom(".yourScore", "h4", "<strong>You lose.</strong> Press a crystal to play again.");

				totScore = 0;
				goal = 0;
				losses++;
				results();

			}
		}


	});//closing .crystalOnClick

});