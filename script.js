let elemEasy = document.querySelectorAll('.levelEasy__card-inner');
let elemNorm = document.querySelectorAll('.levelNorm__card-inner');
let elemHard = document.querySelectorAll('.levelHard__card-inner');


function addAnimation(elem) {
	elem.forEach(levelItem => {
	levelItem.addEventListener("click", function() {
 if(levelItem.classList.contains('flip')) {
  levelItem.classList.remove('flip');
 } else {
 levelItem.classList.add('flip');
 }
});
});
}

addAnimation(elemEasy);
addAnimation(elemNorm);
addAnimation(elemHard);

let random =  function(elem) {
	let random = elem[Math.floor(Math.random() * elem.length)];
	return random;
}

let randomEasy = random(elemEasy);
let randomNorm = random(elemNorm);
let randomHard = random(elemHard);

function addWinOrLose(level,random) {
	level.forEach(loseItem => {
	loseItem.classList.add('lose');
	if(loseItem.classList.contains('lose')) {
		random.classList.remove('lose');
		random.classList.add('win');	
	}
});
}

addWinOrLose(elemEasy,randomEasy);
addWinOrLose(elemNorm,randomNorm);
addWinOrLose(elemHard,randomHard);


let level = document.querySelectorAll('.header-level_item');
let header = document.querySelector(".header");
let choise = document.querySelector(".header__button");

level.forEach(levelItem => {
	levelItem.addEventListener("click", function() {
		for(let i = 0; i < level.length; i++){
			level[i].classList.remove('start');
		}
		levelItem.classList.toggle("start");
	});
});


choise.addEventListener("click", function() {	
let box = document.querySelector(".levelEasy");
let box2 = document.querySelector(".levelNorm");
let box3 = document.querySelector(".levelHard");

	if(level[0].classList.contains("start")) {
		box.style.display = "flex";
		box.style.justifyContent ="center";
		header.style.display = "none";
	} else if(level[1].classList.contains("start")) {
		box2.style.display = "flex";
		header.style.display = "none";
	} else if(level[2].classList.contains("start")) {
		box3.style.display = "flex";
		header.style.display = "none";
	} else {
		alert('Choose a level');
			}
});




let reloadGame = function (elem) {
		elem.forEach(elemItem => {
			elemItem.addEventListener("click", function() {
		if(elemItem.classList.contains('lose')) {
			setTimeout( function() {
			if(confirm("You lose! Press OK to reload!")) {
				setTimeout( function() {
			window.location.reload();
		}, 500);}
				else {
		  setTimeout( function() {
			window.location.reload();
		}, 500);
				}
		}, 500);}
			else {
	    setTimeout( function(){
			alert("You WON");
		}, 500);
		setTimeout( function() {
			window.location.reload();
		}, 500);}
			});
});
	};
reloadGame(elemEasy);
reloadGame(elemNorm);
reloadGame(elemHard);