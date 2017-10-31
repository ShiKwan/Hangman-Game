var gamePlay = {
	mode : 1,
	life : 5,
	score : 0,
	randomCharacter : "",
	charToGuess : "",
	charLeft : ""
}
var character = new Array();
var userGuessed = new Array();

backgroundAudio = new Audio("assets/audio/cinco_de_chocobo.mp3");
chocoboWark = new Audio("assets/audio/chocobo_wark.mp3");
backgroundAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
backgroundAudio.play();	


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
	gamePlay.mode = 0;
	document.getElementById("easy").classList.add('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.remove('active');
	startGame(character);
}

function mediumMode(){
	gamePlay.mode = 0;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.add('active');
	document.getElementById("hard").classList.remove('active');
	startGame(character);
}

function hardMode(){
	gamePlay.mode = 0;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.add('active');
	startGame(character);
}
		
function startGame(char){
	chocoboWark.play();
	gamePlay.randomCharacter = char[Math.floor(Math.random() * char.length)];
	logCharacter(gamePlay.randomCharacter);
	gamePlay.charToGuess = createNewGuessChar(gamePlay.randomCharacter.name.length);
	console.log(gamePlay.charToGuess);
	gamePlay.charLeft = gamePlay.charToGuess.length;
	userGuessed = [];
	document.getElementById("imgCharHead").src = gamePlay.randomCharacter.img;
	document.querySelector("#lblLife").innerHTML = gamePlay.life;
	document.querySelector("#lblScore").innerHTML = gamePlay.score;
	document.querySelector("#lblGuessed").innerHTML = "[ ]";
	document.querySelector("#wordToGuess").innerHTML = gamePlay.charToGuess.join(" ") ;
	document.getElementById("divCharInfo").style.display = "none";
}

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
	var userGuess = event.key.toLowerCase();
		if(document.getElementById("navAudio").classList.contains('play')){
				document.getElementById("sndButton").play();
		}
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
		document.getElementById("sndButton").play();
		userGuessed.push(userGuess);	
		document.querySelector("#lblGuessed").innerHTML = "[ " + userGuessed.join(", ") + " ]";
		}
		console.log("Entered words: " + userGuessed);
		if(gamePlay.charLeft == 0){
			gamePlay.score ++;
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
			console.log("Play again? (y/n)");
		}
		if(gamePlay.charLeft ==0 && (event.key === "y")){
			startGame(character);
		}else if(gamePlay.charLeft ==0 && (event.key === "n")){
			console.log("Thank you for playing!");
		}
	
}
