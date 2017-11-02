var gamePlay = {
	mode : 1,
	life : 10,
	score : 0,
	try : 10,
	tips : 5,
	randomCharacter : "",
	charToGuess : "",
	charLeft : ""
}
var character = new Array();
var userGuessed = new Array();
var initialLife = gamePlay.life;
var initialTry = gamePlay.try;

backgroundAudio = new Audio("assets/audio/cinco_de_chocobo.mp3");
chocoboWark = new Audio("assets/audio/chocobo_wark.mp3");
backgroundAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
//backgroundAudio.play();	


document.getElementById("navAudio").addEventListener("click", pauseAudio);

function pauseAudio(){
	if(document.getElementById("navAudio").classList.contains('play')){
		document.getElementById("navAudio").classList.add('mute');
		document.getElementById("navAudio").classList.remove('play');
		document.getElementById("audio_on").style.display = "none";
		document.getElementById("audio_mute").style.display = "inline";
		/*document.getElementsByClassName("glyphicon-volume-down").addClass("hide");
		document.getElementsByClassName("glyphicon-volume-off").addClass("hide");*/
		backgroundAudio.pause();
		backgroundAudio.currentTime = 0;
	}else if(document.getElementById("navAudio").classList.contains('mute')){
		document.getElementById("navAudio").classList.add('play');
		document.getElementById("navAudio").classList.remove('mute');
		document.getElementById("audio_on").style.display = "inline";
		document.getElementById("audio_mute").style.display = "none";
		/*document.getElementsByClassName("glyphicon-volume-off").addClass("hide");
		document.getElementsByClassName("glyphicon-volume-down").addClass("hide");*/
		backgroundAudio.play();	
	}
}

function useTips(character, characterToGuess){
	console.log("use tips");
	console.log("character = " + character + ", character to guess = " + characterToGuess);
	if(gamePlay.tips >0){
		gamePlay.tips--;	
		document.querySelector("#lblTips").innerHTML = gamePlay.tips;
		var randomChar = "";
		var randomChar = character.charAt(Math.floor(Math.random() * character.length));
		//if letters already exist, look for another letter
		while(characterToGuess.indexOf(randomChar) > -1){
			randomChar = character.charAt(Math.floor(Math.random() * character.length));
		}
		console.log("random Char : " + randomChar);
		for(var i =0; i < characterToGuess.length; i++){

			if(character[i].indexOf(randomChar)){
				characterToGuess[character.indexOf(randomChar)] = randomChar;
			}
		}
		document.querySelector("#wordToGuess").innerHTML = characterToGuess.join(" ");
	}else{
		document.getElementById("msg-center").style.display = "block";
		document.getElementById("msg-center").innerHTML =  "You are out of tips. ";
	}
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

function easyMode(){
	console.log("set to easy mode");
	gamePlay.mode = 0;
	gamePlay.try = 20;
	gamePlay.score = 0;
	console.log("set try to " + gamePlay.try);
	document.getElementById("easy").classList.add('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.remove('active');
	storeCharacterInArray()
	startGame(character);
}

function mediumMode(){
	console.log("set to medium mode");
	gamePlay.mode = 1;
	gamePlay.try = 15;
	gamePlay.score = 0;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.add('active');
	document.getElementById("hard").classList.remove('active');
	storeCharacterInArray()
	startGame(character);
}

function hardMode(){
	console.log("set to hard mode");
	gamePlay.mode = 2;
	gamePlay.try = 10;
	gamePlay.score = 0;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.add('active');
	storeCharacterInArray()
	startGame(character);
}
		
function startGame(char){
	if(char.length >= 0){
		//chocoboWark.play();
		gamePlay.randomCharacter = char[Math.floor(Math.random() * char.length)];
		logCharacter("Gameplay character: " + gamePlay.randomCharacter.name);
		var index = char.indexOf(gamePlay.randomCharacter);
		if(index > -1){
			console.log("remove " + gamePlay.randomCharacter.name + " from array" );
			console.log(char);
			char.splice(index,1);
		}
		gamePlay.charToGuess = createNewGuessChar(gamePlay.randomCharacter.name.length);
		console.log(gamePlay.charToGuess);
		gamePlay.charLeft = gamePlay.charToGuess.length;
		gamePlay.try = initialTry;
		userGuessed = [];
		$("#msg-center").hide()
		$("#msg-center").text = ""
		document.getElementById("imgCharHead").src = gamePlay.randomCharacter.img;
		document.querySelector("#lblTries").innerHTML = gamePlay.try;
		document.querySelector("#lblTips").innerHTML = gamePlay.tips;
		document.querySelector("#lblLife").innerHTML = gamePlay.life;
		document.querySelector("#lblScore").innerHTML = gamePlay.score;
		document.querySelector("#lblGuessed").innerHTML = "[ ]";
		document.querySelector("#wordToGuess").innerHTML = gamePlay.charToGuess.join(" ") ;
		document.getElementById("divCharInfo").style.display = "none";
	}
}
function gameOver(){
	if(character == 0 ){
	document.querySelector(".wrapper").classList.add("wrapper-hide");
	document.querySelector(".cover").classList.remove("cover-hide");
	}
}

function storeCharacterInArray(){
	character = [];
	character.push(char1);
	character.push(char2);
	character.push(char3);
	character.push(char4);
	character.push(char5);
	character.push(char6);
	character.push(char7);
	character.push(char8);
}

//NOTES: 337 pixel background 



//Create characters here.
var char1 = {
	name: "tifa",
	fullname: "Tifa Lockhart",
	game: "Final Fantasy 7",
	bio: "Tifa Lockhart is a playable character in Final Fantasy VII, and the deuteragonist of Final Fantasy VII: Advent Children. In Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-, she plays a supportive role. Tifa is Cloud Strife's childhood friend, but lost contact with him years ago. When she meets him again, she convinces him to join the resistance group she is a member of, AVALANCHE, to fight Shinra Electric Power Company. Tifa supports Cloud as his comrade and helps him fight his nemesis Sephiroth, bearing the same hatred for him as Cloud does due to the destruction of their hometown.",
	img: "assets/images/tifa.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k70IWHiXl18" frameborder="0" allowfullscreen></iframe>',
	wiki: 'http://finalfantasy.wikia.com/wiki/Tifa_Lockhart',
	gif: "assets/images/tifa.gif"

}
var char2 = {
	name: "sephiroth",
	fullname: "Sephiroth",
	game: "Final Fantasy 7",
	bio: "Sephiroth is the main antagonist of Final Fantasy VII, and one of the major antagonists in its extended universe. Before his fall from grace, Sephiroth was one of the most lauded success stories of the Shinra Electric Power Company's SOLDIER program. A great warrior idolized by the public and infantrymen alike for his strength and discipline in combat, Sephiroth's many successes in the field of battle during the conflicts surrounding the Shinra Electric Power Company's bid for global domination led to his status as a celebrity war hero and the poster boy for both the Shinra Military and the company's SOLDIER program. In spin-off appearances, Sephiroth is depicted as Cloud Strife's archenemy, and is seen as a symbol of Cloud's troubled past that haunts his life.",
	img: "assets/images/sephiroth.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-rkY4s7xf4" frameborder="0" allowfullscreen></iframe>',
	wiki: 'http://finalfantasy.wikia.com/wiki/Sephiroth_(Final_Fantasy_VII)',
	gif: "assets/images/sephiroth.gif"
}
var char3 = {
	name: "cloud",
	fullname: "Cloud Strife",
	game: "Final Fantasy 7",
	bio: "Cloud Strife is the main protagonist in Final Fantasy VII and Final Fantasy VII: Advent Children, and also appears in the spin-off games of the Compilation of Final Fantasy VII, including Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-, as a supporting character. He is to be the main character again for Final Fantasy VII Remake. An arrogant and proud swordsman at first, Cloud introduces himself as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. He later discovers the truth about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame, developing compassion for the world and people he fights to protect.", 
	img: "assets/images/cloud.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rQam5uoWxFE" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Cloud_Strife",
	gif: "assets/images/cloud2.gif"

}
var char4 = {
	name: "barret",
	fullname: "Barret Wallace",
	game: "Final Fantasy 7",
	bio: "Barret Wallace is a playable character in Final Fantasy VII. He is the leader of an eco-terrorist group AVALANCHE, trying to prevent Shinra Electric Power Company from using Mako, the planet of Gaia's life source, as a form of energy. His seemingly benevolent cause of fighting for the Planet is a cover for his personal vendetta and anger, which he later must come to terms with. Despite his brash and sometimes violent attitude, Barret has a good heart, and is torn between fighting and caring for his daughter Marlene.", 
	img: "assets/images/barret.png",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iE6Q7HNaIZE" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Barret_Wallace",
	gif: "assets/images/barret.gif"

}
var char5 = {
	name: "aerith",
	fullname: "Aerith Gainsborough",
	game: "Final Fantasy 7",
	bio: "Aerith Gainsborough, alternately known with the first name Aeris, and other times with the surname Gainborough, or Gainsbourg, is a playable character in Final Fantasy VII and a major character in the Compilation of Final Fantasy VII; appearing in Final Fantasy VII: Advent Children, Crisis Core -Final Fantasy VII- and Before Crisis -Final Fantasy VII-. She is the last of the Cetra, an ancient race with powerful magical abilities, and so the Shinra Electric Power Company hunts her throughout her life, seeking to exploit her powers.", 
	img: "assets/images/aeris.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gwk6PVdgugw" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Aerith_Gainsborough",
	gif: "assets/images/aerith.gif"

}
var char6 = {
	name: "red",
	fullname: "Nanaki Red XIII",
	game: "Final Fantasy 7",
	bio: "Red XIII, real name Nanaki, is a red lion or wolf-like beast and one of the playable characters in Final Fantasy VII, who also appears in other entries to the Compilation of Final Fantasy VII. Red XIII is the name he received as a specimen designation while held captive and experimented upon by Professor Hojo, and remains the name he is called by the party and in battle in Final Fantasy VII. Although he is 48 years old, he is developmentally equivalent to a 15- or 16-year-old human by his long-lived species' standards. He fights alongside Cloud Strife and his allies to fulfill his duty to the Planet to defend it as a warrior.", 
	img: "assets/images/redxiii.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MkldOH9wuww" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://http://finalfantasy.wikia.com/wiki/Red_XIII",
	gif: "assets/images/redxiii.gif"

}

var char6 = {
	name: "sith",
	fullname: "Cait Sith",
	game: "Final Fantasy 7",
	bio: "Cait Sith is a playable character in Final Fantasy VII and Dirge of Cerberus -Final Fantasy VII-, also appearing in Crisis Core -Final Fantasy VII- as a summon, and in a small role in Before Crisis -Final Fantasy VII- and Final Fantasy VII: Advent Children. He is a cat riding a giant stuffed toy moogle, initially working as a fortune-teller in the Gold Saucer.", 
	img: "assets/images/sith.png",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/heSfjBgv6e8" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Cait_Sith_(Final_Fantasy_VII)",
	gif: "assets/images/sith.gif"

}

var char7 = {
	name: "yuffie",
	fullname: "Yuffie Kisaragi",
	game: "Final Fantasy 7",
	bio: "Yuffie Kisaragi is an optional playable character in Final Fantasy VII. She is a Ninja and a Thief, wielding a large shuriken. As a rebellious and cocky tomboy, Yuffie desires to restore her homeland Wutai to the glorious nation it was before being conquered by the Shinra Electric Power Company. Despite her obnoxious personality, Yuffie is friendly, helpful, optimistic and willingly helps the party in their battles.Yuffie is a Materia hunter who can be found in various forests on the Planet after the events at the Mythril Mine. As one of the optional characters, Yuffie has almost no impact on the game's main storyline, but there are some changes made to various scenes in the story if she is recruited by the player.", 
	img: "assets/images/yuffie.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AQLgTYya0b4" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Yuffie_Kisaragi",
	gif: "assets/images/yuffie.gif"

}

var char8 = {
	name: "vincent",
	fullname: "Vincent Valentine",
	game: "Final Fantasy 7",
	bio: "Vincent Valentine is an optional playable character in Final Fantasy VII, and the main protagonist of Dirge of Cerberus -Final Fantasy VII-. A former Turk with a mysterious past, Vincent's secrets tie him directly to several of the Compilation of Final Fantasy VII's main antagonists.Vincent wields handguns in battle and his Limit Breaks cause him to shapeshift as a result of the experiments Professor Hojo performed on him. Since his introduction, Vincent has become one of the most popular characters in the Compilation of Final Fantasy VII.", 
	img: "assets/images/vincent.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EEvZzDRYpzk" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Vincent_Valentine",
	gif: "assets/images/vincent.gif"

}



logGamePlay(gamePlay);
//Push each character into the array. 
storeCharacterInArray()

console.log(gamePlay.mode);
console.log(gamePlay.life);
console.log(gamePlay.score);

logCharacter(character);
console.log(character.length);
var matchLost = false;
startGame(character);


if(gamePlay.life > 0) {
	document.getElementById("hypTips").addEventListener("click", function(){
		useTips(gamePlay.randomCharacter.name, gamePlay.charToGuess);	
	},false);
	document.onkeyup = function(event) {
		document.getElementById("imgWalkingChocobo").classList.remove('chocobo-hide');
		document.getElementById("imgSleepingChocobo").classList.add('chocobo-hide');
		document.getElementById("imgSleepingChocobo").classList.remove('slidedown');
		
		matchLost = false;
		var userGuess = event.key.toLowerCase();
		if(gamePlay.try >0 || (gamePlay.try ==0 && userGuess == "y") || (gamePlay.try == 0 && userGuess == "n")) {
			if(document.getElementById("navAudio").classList.contains('play')){
					document.getElementById("sndButton").play();
			}
			if(gamePlay.try == 0){
				matchLost = true;
				console.log("gameplay life is 0");
				document.querySelector("#lblLife").innerHTML = gamePlay.life;
				document.getElementById("msg-center").style.display = "block";
				document.getElementById("msg-center").innerHTML = "Le chocobo went down the cliff into water.. <br /> Press 'y' to continue, 'n' to quit.  (y/n)";
				if(event.key === "y"){
					startGame(character);

				}else if(event.key === "n"){
					console.log("Thank you for playing!");
				}
			}else 
			if(matchLost == false){

				console.log("here");

				//if the letter appears in randomCharacter's name, and not in userGuessed
				if(gamePlay.randomCharacter.name.indexOf(userGuess) > -1 && userGuessed.indexOf(userGuess) == -1){
					if(document.getElementById("navAudio").classList.contains('play')){
						chocoboWark.play();
					}
					
					for(var i = 0; i< gamePlay.randomCharacter.name.length; i++){
						if(gamePlay.randomCharacter.name[i] === userGuess){
							gamePlay.charToGuess[i] = userGuess;
						}
					}
					var charLeftHolder = 0;
					for(var i = 0; i< gamePlay.charToGuess.length; i++){
						if(gamePlay.charToGuess[i] == "_"){
							charLeftHolder++;
						}
						gamePlay.charLeft = charLeftHolder;
					}

					document.querySelector("#wordToGuess").innerHTML = gamePlay.charToGuess.join(" ");
					console.log(gamePlay.charToGuess);
					console.log("Character(s) left: " + gamePlay.charLeft);
				}
			
				if(userGuessed.indexOf(userGuess) == -1 && gamePlay.randomCharacter.name.indexOf(userGuess) == -1){
				gamePlay.try--;
				var percentageTry = (initialLife-gamePlay.try)/initialLife *310;
				$(".walking-chocobo").attr("style", "transform: translate(-" + percentageTry + "px ,0 ); -webkit-transition: all 2s ease-in-out;");
				if(gamePlay.try == 0){
					document.getElementById("imgWalkingChocobo").classList.add('chocobo-hide');
					document.getElementById("imgSleepingChocobo").classList.remove('chocobo-hide');
					document.getElementById("imgSleepingChocobo").classList.add('slidedown');
					$(".walking-chocobo").attr("style", "transform: translate(0px ,0 ); -webkit-transition: all 2s ease-in-out;");
				}
		        userGuessed.push(userGuess);	
		        document.querySelector("#lblTries").innerHTML = gamePlay.try;
				document.querySelector("#lblLife").innerHTML = gamePlay.life;
				document.querySelector("#lblGuessed").innerHTML = "[ " + userGuessed.join(", ") + " ]";
				}
				if(gamePlay.try > 0){
					console.log("Entered words: " + userGuessed);
					if(gamePlay.charLeft == 0){
						console.log("why twice");
						console.log("You win!")
						document.getElementById("divCharInfo").style.display = "block";
						document.getElementById("imgChar").src = gamePlay.randomCharacter.img;
						document.querySelector("#lblName").innerHTML = gamePlay.randomCharacter.fullname;
						document.querySelector("#lblMore").innerHTML = gamePlay.randomCharacter.bio;
						document.querySelector("#lblFrom").innerHTML = gamePlay.randomCharacter.game;
						document.getElementById("pClips").innerHTML = gamePlay.randomCharacter.clip;
						document.getElementById("imgChar").src = gamePlay.randomCharacter.gif;
						document.querySelector("#lblWiki").innerHTML = gamePlay.randomCharacter.wiki;

						console.log(gamePlay.randomCharacter.bio);
						console.log(gamePlay.randomCharacter.game);
						logGamePlay(gamePlay);
						document.getElementById("msg-center").style.display = "block";
						document.getElementById("msg-center").fadeIn;
						document.getElementById("msg-center").innerHTML =  "Press 'y' to continue, 'n' to quit.  (y/n)";
						document.getElementById("msg-center").fadeIn;
						console.log("Play again? (y/n)");
						gameOver();
						if(gamePlay.charLeft ==0 && (event.key === "y")){
							gamePlay.score ++;
							matchLost=false;
							document.querySelector("#lblScore").innerHTML = gamePlay.score;
							document.getElementById("imgWalkingChocobo").classList.remove('chocobo-hide');
							document.getElementById("imgSleepingChocobo").classList.add('chocobo-hide');
							document.getElementById("imgSleepingChocobo").classList.remove('slidedown');
							$(".walking-chocobo").attr("style", "transform: translate(0px ,0 ); -webkit-transition: all 2s ease-in-out;");
							startGame(character);
							document.getElementById("msg-center").fadeOut
						}else if(gamePlay.charLeft ==0 && (event.key === "n")){
							gamePlay.score ++;
							matchLost=false;
							document.querySelector("#lblScore").innerHTML = gamePlay.score;
							console.log("Thank you for playing!");
						}
					}
				}
				else if(gamePlay.try == 0 && matchLost == false){
					console.log("gameplay try is 0");
					gamePlay.life--;
					document.querySelector("#lblLife").innerHTML = gamePlay.life;
					document.getElementById("msg-center").style.display = "block";
					document.getElementById("msg-center").fadeIn
					document.getElementById("msg-center").innerHTML = "Le chocobo went down the cliff into water.. <br />Press 'y' to continue, 'n' to quit.  (y/n)";
					gameOver();
					if(event.key === "y"){
						document.getElementById("imgWalkingChocobo").classList.remove('chocobo-hide');
						document.getElementById("imgSleepingChocobo").classList.add('chocobo-hide');
						document.getElementById("imgSleepingChocobo").classList.remove('slidedown');
						$(".walking-chocobo").attr("style", "transform: translate(0px ,0 ); -webkit-transition: all 2s ease-in-out;");
						document.getElementById("msg-center").fadeOut;
						startGame(character);

					}else if(event.key === "n"){
						console.log("Thank you for playing!");12
					}
				}
			}
			
		}	
	}
}