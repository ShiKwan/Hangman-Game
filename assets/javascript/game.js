var gamePlay = {
	mode : 1,
	life : 10,
	score : 0,
	try : 15,
	tips : 5,
	randomCharacter : "",
	charToGuess : "",
	charLeft : ""
}
var character = new Array();
var userGuessed = new Array();
var initialLife = gamePlay.life;
var initialTry = gamePlay.try;
var forceGameOver = false;



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

var char9 = {
	name: "squall",
	fullname: "Squall Leonhart",
	game: "Final Fantasy 8",
	bio: "The taciturn and reluctant hero. A lone wolf, he is known as a fearsome warrior in training, specializing in the rare gunblade. Though aloof and seemingly detached, he grows to appreciate his friends and love Rinoa, evolving into a model leader for his peers. His tagline is '...Whatever'.", 
	img: "assets/images/squall.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MoyEBlNafnQ" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Squall_Leonhart",
	gif: ""

}
var char10 = {
	name: "rinoa",
	fullname: "Rinoa Heartilly",
	game: "Final Fantasy 8",
	bio: "A beautiful and spirited young woman who abandoned a privileged lifestyle to join a resistance movement. Owns a faithful pet dog, Angelo.", 
	img: "assets/images/rinoa.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xZZIX781NmA" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Rinoa_Heartilly",
	gif: ""

}
var char11 = {
	name: "zell",
	fullname: "Zell Dincht",
	game: "Final Fantasy 8",
	bio: "A Balamb Garden student with unsurpassed martial arts skill who has a passion for hot dogs. In spite of his loud-mouthed attitude, Zell strives to be a model cadet.", 
	img: "assets/images/zell.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jWrAZhemws4" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Zell_Dincht",
	gif: ""

}
var char12 = {
	name: "selphie",
	fullname: "Selphie Tilmitt",
	game: "Final Fantasy 8",
	bio: "A spunky young woman with a carefree spirit. Transferred from Trabia Garden, she tends to overcompensate her sad past with a happy disposition.", 
	img: "assets/images/selphie.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wat6pTvSxlQ" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Selphie_Tilmitt",
	gif: ""

}

var char13 = {
	name: "quistis",
	fullname: "Quistis Trepe",
	game: "Final Fantasy 8",
	bio: "A top-notch member of SeeD who serves as Squall's instructor. Though beautiful and popular, she is insecure. She overcomes this through her caring for Squall and her friends.", 
	img: "assets/images/quistis.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GE4IoKF0zKk" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Quistis_Trepe",
	gif: ""

}

var char14 = {
	name: "irvine",
	fullname: "Irvine Kinneas",
	game: "Final Fantasy 8",
	bio: "An expert gunman and consummate ladies' man. Despite his facade, Irvine is determined, caring and sensitive man, and the only one who knows the hidden connection between all the members of the group.", 
	img: "assets/images/irvine.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hToyKXDDJlc" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Irvine_Kinneas",
	gif: ""

}

var char15 = {
	name: "seifer",
	fullname: "Seifer Almasy",
	game: "Final Fantasy 8",
	bio: "Squall's rival in Garden and a fellow gunblade-wielder. His dream is to become a sorceress's knight as per fabled legends.", 
	img: "assets/images/seifer.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MoyEBlNafnQ" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Seifer_Almasy",
	gif: ""

}

var char16 = {
	name: "laguna",
	fullname: "Laguna Loire",
	game: "Final Fantasy 8",
	bio: "A passionate man whose 'pen is truly mightier than the sword'. Despite disliking violence, he takes up arms in the face of injustice or when his loved ones are in peril.", 
	img: "assets/images/laguna.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wMtqLprlqno" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Laguna_Loire",
	gif: ""

}

var char17 = {
	name: "kiros",
	fullname: "Kiros Seagill",
	game: "Final Fantasy 8",
	bio: "A Galbadian soldier who wields katals in battle. An intellectual and cool person, he is Laguna's best friend and the voice of reason within the group of friends.", 
	img: "assets/images/kiros.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Kiros_Seagill",
	gif: ""

}

var char18 = {
	name: "ward",
	fullname: "Ward Zabac",
	game: "Final Fantasy 8",
	bio: "A Galbadian soldier who wields a harpoon. Though intimidating at first glance, he is a caring individual and a most loyal friend to Laguna.", 
	img: "assets/images/ward.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Ward_Zabac",
	gif: ""
}

var char19 = {
	name: "edea",
	fullname: "Edea Kramer",
	game: "Final Fantasy 8",
	bio: "A mysterious sorceress who surfaces as Galbadia's ally.", 
	img: "assets/images/edea.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YbgJwCtsaAM" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Edea_Kramer",
	gif: ""

}

var char20 = {
	name: "zidane",
	fullname: "Zidane Tribal",
	game: "Final Fantasy IX",
	bio: "Zidane wields daggers as his primary weapons, and possesses Thief abilities such as Steal, Flee, Bandit, and Master Thief. He can also Sacrifice himself, and his Dyne Trance abilities further resemble Ninjutsu spell incantations associated with Ninjas.", 
	img: "assets/images/zidane.png",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C0vLOBFJpXI" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Zidane_Tribal",
	gif: ""

}

var char21 = {
	name: "vivi",
	fullname: "Vivi Ornitier",
	game: "Final Fantasy IX",
	bio: "Vivi is a Black Mage, wielding staves with access to a host of damaging and enfeebling Black Magic, and the Trance ability Double Black, which lets him dualcast Black Magic.", 
	img: "assets/images/vivi.jpg",
	clip: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xAuYSAGQxuA" frameborder="0" allowfullscreen></iframe>',
	wiki: "http://finalfantasy.wikia.com/wiki/Vivi_Ornitier",
	gif: ""

}

var char22 = {
	name: "dagger",
	fullname: "Garnet Til Alexandros XVII",
	game: "Final Fantasy IX",
	bio: "Dagger excels as a White Mage in the early game, but later gains access to a greater amount of eidolons than her Summoner counterpart, Eiko. Dagger's Trance strengthens her eidolons.", 
	img: "assets/images/dagger.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Garnet_Til_Alexandros_XVII/Gameplay",
	gif: ""

}

var char23 = {
	name: "steiner",
	fullname: "Adelbert Steiner",
	game: "Final Fantasy IX",
	bio: "Steiner is a Knight, and uses two-handed knight swords. He has the Dark Knight ability Darkside and incorporates elemental Black Magic into his Sword Magic attacks, like a Mystic Knight. He uses powerful offensive sword arts, and his Trance adds a heavy damage multiplier to his physical attacks.", 
	img: "assets/images/steiner.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Adelbert_Steiner",
	gif: ""

}

var char24 = {
	name: "freya",
	fullname: "Freya Crescent",
	game: "Final Fantasy IX",
	bio: "Freya wields spears and uses abilities such as Jump and Lancet, trademarks of the Dragoon job. Her Trance and exclusive ability High Jump further enhance Jump.", 
	img: "assets/images/freya.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Freya_Crescent",
	gif: ""

}

var char25 = {
	name: "quina",
	fullname: "Quina Quen",
	game: "Final Fantasy IX",
	bio: "Quina is a Blue Mage, learning Blue Magic by devouring monsters. Quina is the only character with access to the Thief ability Millionaire.", 
	img: "assets/images/quina.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Quina_Quen",
	gif: ""

}

var char26 = {
	name: "amarant",
	fullname: "Amarant Coral",
	game: "Final Fantasy IX",
	bio: "Amarant has a high HP stat, uses hand-to-hand claw weapons that teach him the Counter ability, and possesses Chakra and Aura techniques—trademarks of the Monk job. He can throw weapons like a Ninja, and use the Spare Change ability of Samurai. Unique abilities Power Up and Power Throw enhance Chakra and Throw skills, respectively.", 
	img: "assets/images/amarant.jpg",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Amarant_Coral/Gameplay",
	gif: ""

}

var char27 = {
	name: "beatrix",
	fullname: "Beatrix",
	game: "Final Fantasy IX",
	bio: "Beatrix uses most of the same offensive sword arts as Steiner except Darkside. Instead, she has access to many of the strongest White Magic spells, aligning her with the Paladin job.", 
	img: "assets/images/beatrix.png",
	clip: 'N/A',
	wiki: "http://finalfantasy.wikia.com/wiki/Beatrix/Gameplay",
	gif: ""

}


scoreAudio = new Audio("assets/audio/score.wav");
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
		backgroundAudio.pause();
		backgroundAudio.currentTime = 0;
	}else if(document.getElementById("navAudio").classList.contains('mute')){
		document.getElementById("navAudio").classList.add('play');
		document.getElementById("navAudio").classList.remove('mute');
		document.getElementById("audio_on").style.display = "inline";
		document.getElementById("audio_mute").style.display = "none";
		backgroundAudio.play();	
	}
}

function useTips(character, characterToGuess){

	if(gamePlay.tips >0){
		gamePlay.tips--;	
		document.querySelector("#lblTips").innerHTML = gamePlay.tips;
		var randomChar = "";
		var randomChar = character.charAt(Math.floor(Math.random() * character.length));
		//if letters already exist, look for another letter
		while(characterToGuess.indexOf(randomChar) > -1){
			randomChar = character.charAt(Math.floor(Math.random() * character.length));
		}
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


function easyMode(){
	console.log("set to easy mode");
	gamePlay.mode = 0;
	gamePlay.try = initialTry = 20;
	gamePlay.score = 0;
	gamePlay.life = initialLife = 10;
	gamePlay.tips = 10;
	document.querySelector("#lblTries").innerHTML = gamePlay.try;
	document.querySelector("#lblLife").innerHTML = gamePlay.life;
	document.querySelector("#lblTips").innerHTML = gamePlay.tips;
	document.getElementById("easy").classList.add('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.remove('active');
	storeCharacterInArray()
	startGame(character);
}

function mediumMode(){
	console.log("set to medium mode");
	gamePlay.mode = 1;
	gamePlay.try = initialTry = 12;
	gamePlay.life = initialLife = 10;
	gamePlay.score = 0;
	gamePlay.tips = 5;
	document.querySelector("#lblTries").innerHTML = gamePlay.try;
	document.querySelector("#lblLife").innerHTML = gamePlay.life;
	document.querySelector("#lblTips").innerHTML = gamePlay.tips;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.add('active');
	document.getElementById("hard").classList.remove('active');
	storeCharacterInArray()
	startGame(character);
}

function hardMode(){
	console.log("set to fast pace mode");
	gamePlay.mode = 2;
	gamePlay.try = initialTry = 10;
	gamePlay.life = initialLife = 10;
	gamePlay.score = 0;
	gamePlay.tips = 5;
	document.querySelector(".bit-background-container").style.display = "none";
	document.querySelector("#lblTries").innerHTML = gamePlay.try;
	document.querySelector("#lblLife").innerHTML = gamePlay.life;
	document.querySelector("#lblTips").innerHTML = gamePlay.tips;
	document.getElementById("easy").classList.remove('active');
	document.getElementById("med").classList.remove('active');
	document.getElementById("hard").classList.add('active');
	storeCharacterInArray()
	startGame(character);
}
		
function startGame(char){
	forceGameOver = false;
	document.querySelector(".wrapper").classList.remove("wrapper-hide");
	document.querySelector(".cover").classList.add("cover-hide");
	if(character.length > 0){
		//chocoboWark.play();
		gamePlay.randomCharacter = char[Math.floor(Math.random() * char.length)];
		logCharacter( gamePlay.randomCharacter.name);
		var index = char.indexOf(gamePlay.randomCharacter);
		if(index > -1){
			char.splice(index,1);
		}
		gamePlay.charToGuess = createNewGuessChar(gamePlay.randomCharacter.name.length);
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
		document.getElementById("msg-center").style.display = "none";
	}else{
		gameOver();
	}
}
function gameOver(){
	
	if(gamePlay.life == 0){
		document.querySelector(".wrapper").classList.add("wrapper-hide");
		document.querySelector(".lose-cover").classList.remove("cover-hide");
	}
	else if(character == 0 || forceGameOver == true ){
		document.querySelector("#lblScore").innerHTML = gamePlay.score+1;
		scoreAudio.play;
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
	character.push(char9);
	character.push(char10);
	character.push(char11);
	character.push(char12);
	character.push(char13);
	character.push(char14);
	character.push(char15);
	character.push(char16);
	character.push(char17);
	character.push(char18);
	character.push(char19);
	character.push(char20);
	character.push(char21);
	character.push(char22);
	character.push(char23);
	character.push(char24);
	character.push(char25);
	character.push(char26);
	character.push(char27);
}


logGamePlay(gamePlay);
//Push each character into the array. 
storeCharacterInArray()

var matchLost = false;
startGame(character);

	
	
	document.getElementById("hypTips").addEventListener("click", function(){
		useTips(gamePlay.randomCharacter.name, gamePlay.charToGuess);	
	},false);
	if(gamePlay.life == 0){
		forceGameOver = true;
	}

	document.onkeyup = function(event) {
		if(gamePlay.life > 0) {
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
				document.querySelector("#lblLife").innerHTML = gamePlay.life;
				document.getElementById("msg-center").style.display = "block";
				document.getElementById("msg-center").innerHTML = "Le chocobo went down the cliff into water.. <br /> Press 'y' to continue, 'n' to quit.  (y/n)";
				if(event.key === "y"){
					startGame(character);

				}else if(event.key === "n"){
					forceGameOver=true
					gameOver();
				}
			}else 
			if(matchLost == false){


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
					if(gamePlay.charLeft == 0){
						if(gamePlay.mode ==2){
							gamePlay.score++;
							scoreAudio.play;
							matchLost = false;
							document.querySelector("#lblScore").innerHTML = gamePlay.score;
							startGame(character);
							document.getElementById("msg-center").fadeOut
						}else{

						document.getElementById("divCharInfo").style.display = "block";
						document.getElementById("imgChar").src = gamePlay.randomCharacter.img;
						document.querySelector("#lblName").innerHTML = gamePlay.randomCharacter.fullname;
						document.querySelector("#lblMore").innerHTML = gamePlay.randomCharacter.bio;
						document.querySelector("#lblFrom").innerHTML = gamePlay.randomCharacter.game;
						document.getElementById("pClips").innerHTML = gamePlay.randomCharacter.clip;
						document.getElementById("imgChar").src = gamePlay.randomCharacter.gif;
						document.querySelector("#lblWiki").innerHTML = gamePlay.randomCharacter.wiki;
						logGamePlay(gamePlay);
						document.getElementById("msg-center").style.display = "block";
						document.getElementById("msg-center").classList.add('alert-success');
						document.getElementById("msg-center").classList.remove('alert-danger');
						document.getElementById("msg-center").fadeIn;
						document.getElementById("msg-center").innerHTML =  "Press 'y' to continue, 'n' to quit.  (y/n)";
						document.getElementById("msg-center").fadeIn;
						gameOver();
						if(gamePlay.charLeft ==0 && (event.key === "y")){
							gamePlay.score ++;
							scoreAudio.play;
							matchLost=false;
							document.querySelector("#lblScore").innerHTML = gamePlay.score;
							document.getElementById("imgWalkingChocobo").classList.remove('chocobo-hide');
							document.getElementById("imgSleepingChocobo").classList.add('chocobo-hide');
							document.getElementById("imgSleepingChocobo").classList.remove('slidedown');
							$(".walking-chocobo").attr("style", "transform: translate(0px ,0 ); -webkit-transition: all 2s ease-in-out;");
							startGame(character);
							document.getElementById("msg-center").fadeOut
						}else if(gamePlay.charLeft ==0 && (event.key === "n")){
							forceGameOver = true
							gamePlay.score ++;
							matchLost=false;
							gameOver();
							document.querySelector("#lblScore").innerHTML = gamePlay.score;
						}
					}
				}
				}
				else if(gamePlay.try == 0 && matchLost == false){
					if(gamePlay.mode == 2){
						gamePlay.life--;
						document.querySelector("#lblLife").innerHTML = gamePlay.life;
						startGame(character);
					}else{
						gamePlay.life--;
						document.querySelector("#lblLife").innerHTML = gamePlay.life;
						document.getElementById("divCharInfo").style.display = "block";
						document.getElementById("imgChar").src = gamePlay.randomCharacter.img;
						document.querySelector("#lblName").innerHTML = gamePlay.randomCharacter.fullname;
						document.querySelector("#lblMore").innerHTML = gamePlay.randomCharacter.bio;
						document.querySelector("#lblFrom").innerHTML = gamePlay.randomCharacter.game;
						document.getElementById("pClips").innerHTML = gamePlay.randomCharacter.clip;
						document.getElementById("imgChar").src = gamePlay.randomCharacter.gif;
						document.querySelector("#lblWiki").innerHTML = gamePlay.randomCharacter.wiki;

						document.getElementById("msg-center").style.display = "block";
						document.getElementById("msg-center").classList.remove('alert-warning');
						document.getElementById("msg-center").classList.add('alert-danger');
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
							forceGameOver = true;
							gameOver();
						}
					}
				}
			}
			
		}	
	}
	else
	{
	gameOver();
	}
}