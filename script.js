window.onload = function() {
level[0].classList.add("start");
};

const elemCard = document.querySelector('.container__card');
const elemCards = document.querySelector('.container__cards');
const level = document.querySelectorAll('.header__level-item');
const header = document.querySelector(".header");
const choise = document.querySelector(".header__button");


level.forEach(levelItem => {
	levelItem.addEventListener("click", function() {
		for(let i = 0; i < level.length; i++){
			level[i].classList.remove('start');
		}
		levelItem.classList.toggle("start");
	});
});

let random =  function(min, max) {
	return  Math.floor(Math.random() * (max - min + 1 ) + min);
};

choise.addEventListener("click", function() {	

    let number;
    const countSimple = 3;
    const countMedium = 6;
    const countComplicated = 10;

	if(level[0].classList.contains("start")) {
		
		header.style.display = "none";
		
		for(let i = 0; i < countSimple; i++) {
		let card = elemCard.children[0].cloneNode(true);
		elemCards.appendChild(card);
		}
		const elemInner = document.querySelectorAll('.container__card-inner');
		addAnimation(elemInner);
		reloadGame(elemInner);

		elemCards.classList.add("easy");

		let bug = document.querySelectorAll(".container__card-face-back");

		let number = random(1,3);
		let bugCard = bug[number];
		bugCard.classList.add("bug");

	} else if(level[1].classList.contains("start")) {
		
		header.style.display = "none";

		for(let i = 0; i < countMedium; i++) {
		let card = elemCard.children[0].cloneNode(true);
		elemCards.appendChild(card);
		}
		const elemInner = document.querySelectorAll('.container__card-inner');
		addAnimation(elemInner);
		reloadGame(elemInner);

		elemCards.classList.add("norm");

		let bug = document.querySelectorAll(".container__card-face-back");

		let number = random(1,6);
		let bugCard = bug[number];
		bugCard.classList.add("bug");

	} else if(level[2].classList.contains("start")) {
		
		header.style.display = "none";
		
		for(let i = 0; i < countComplicated; i++) {
		let card = elemCard.children[0].cloneNode(true);
		elemCards.appendChild(card);
		}
		const elemInner = document.querySelectorAll('.container__card-inner');
		addAnimation(elemInner);
		reloadGame(elemInner);

		elemCards.classList.add("hard");

		let bug = document.querySelectorAll(".container__card-face-back");

		let number = random(1,10);
		let bugCard = bug[number];
		bugCard.classList.add("bug");

	} else {
		alert('Choose a level');
			}
});

function addAnimation(elem){

	elem.forEach(elemItem => {

		elemItem.addEventListener("click", function() {
      if(elemItem.classList.contains('flip')) {
         elemItem.classList.remove('flip');
 }    else {
      elemItem.classList.add('flip');
 }
	})
});
}

let reloadGame = function (elem) {

  let playAgain = false;
		
		elem.forEach(elemItem => {
			elemItem.addEventListener("click", function() {
           if(playAgain) {
           	  elemItem.removeEventListener("click", addAnimation);
              elemItem.classList.remove('flip');
              playAgain = false;
              window.location.reload();
              setTimeout( function(){
              	elemItem.innerHTML = '';
              }, 30);
             } else {
              playAgain = true;
             }
		})
    })
	};
