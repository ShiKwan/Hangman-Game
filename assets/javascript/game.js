	<script type="text/JavaScript">

		var gamePlay = {
			mode : 0,
			life : 5,
			score : 0,
			randomCharacter : "",
			charToGuess : "",
			charLeft : ""
		}

		var character = new Array();

		//Create characters here.
		var char1 = {
			name: "tifa",
			game: "Final Fantasy 7",
			bio: "Woot!"
		}
		var char2 = {
			name: "sephiroth",
			game: "Final Fantasy 7",
			bio: "Super villain"
		}
		var char3 = {
			name: "cloud",
			game: "Final Fantasy 7",
			bio: "Main character"	
		}

		//log gameplay information
		function logGamePlay(gamePlay) {
			console.log("GamePlay Log : " , gamePlay);
		}

		//log character information
		function logCharacter(char){
			console.log(" Character Log :", char);
		}

		// create underscore "_" on the word to guess
		function createNewGuessChar(charLength){
		var charToGuess = new Array();
		for(var i = 0; i< charLength; i++){
			charToGuess[i] = "_";
		}
		return charToGuess;
		}
		function logArrayElements(element, index, array) {
			console.log('a[' + index + '] = ' + element);
		}
		
		var userGuessed = new Array();

		function startGame(char){
			gamePlay.randomCharacter = char[Math.floor(Math.random() * char.length)];
			logCharacter(gamePlay.randomCharacter);
			gamePlay.charToGuess = createNewGuessChar(gamePlay.randomCharacter.name.length);
			console.log(gamePlay.charToGuess);
			gamePlay.charLeft = gamePlay.charToGuess.length;
			userGuessed = [""];
			document.querySelector("#guessedWord").innerHTML = gamePlay.charToGuess.join(" ") ;
		}


		logGamePlay(gamePlay);
		//Push each character into the array. 
		character.push(char1);
		character.push(char2);
		character.push(char3);

		console.log(gamePlay.mode);
		console.log(gamePlay.life);
		console.log(gamePlay.score);

		logCharacter(character);
		console.log(character.length);

		startGame(character);

		
		document.onkeyup = function(event) {
			var userGuess = event.key;
				
				//if the letter appears in randomCharacter's name, and not in userGuessed
				if(gamePlay.randomCharacter.name.indexOf(userGuess) > -1 && userGuessed.indexOf(userGuess) == -1){
					for(var i = 0; i< gamePlay.randomCharacter.name.length; i++){
						if(gamePlay.randomCharacter.name[i] === userGuess){
							gamePlay.charToGuess[i] = userGuess;
							gamePlay.charLeft--;
						}
					}
					document.querySelector("#guessedWord").innerHTML = gamePlay.charToGuess.join(" ");
					if(userGuessed.indexOf(userGuess) == -1){
						console.log("pushed " + userGuess + " into array");

					}
					console.log(gamePlay.charToGuess);
					console.log(gamePlay.charLeft);
				}
				userGuessed.push(userGuess);	
				console.log("Entered words: " + userGuessed);
				if(gamePlay.charLeft == 0){
					gamePlay.score ++;
					console.log("You win!")
					console.log(gamePlay.randomCharacter.bio);
					console.log(gamePlay.randomCharacter.game);
					logGamePlay(gamePlay);
					console.log("Play again? (Y/N)");
				}
				if(gamePlay.charLeft ==0 && (event.key === "Y" || event.key === "y")){
					startGame(character);
				}else if(gamePlay.charLeft ==0 && (event.key === "N" || event.key === "n")){
					console.log("Thank you for playing!");
				}
			
		}
		/* NOTE: Test the randomness
		for(var i =0; i< 20; i++){
			var randomCharacter = character[Math.floor(Math.random() *character.length)];
			console.log(randomCharacter.name);
		}
		*/
	</script>