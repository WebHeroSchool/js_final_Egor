const elemCard = document.querySelector(".container__card");
const elemCards = document.querySelector(".container__cards");
const level = document.querySelectorAll(".header__level-item");
const header = document.querySelector(".header");
const choise = document.querySelector(".header__button");


function addAnimation(elem){

elem.forEach((elemItem) => {
      elemItem.addEventListener("click", function() {
      elemItem.classList.toggle("flip");
    });
});
}

function reloadGame(elem) {

  let playAgain = false;
		
		elem.forEach((elemItem) => {
			elemItem.addEventListener("click", function() {
           if(playAgain) {
               window.location.reload();
               elemCards.innerHTML="''";
               header.style.display="block";
             } else {
               playAgain = true;
             }
       });
    });
   }

level.forEach((levelItem) => {
     levelItem.addEventListener("click", function() {
        for(let i = 0; i < level.length; i++){
             level[i].classList.remove("start");
      }
      levelItem.classList.toggle("start");
   });
});
     level[0].classList.add("start");

let random =  function(min,max) {
	return  Math.floor(Math.random() * (max - min + 1) + min);
};


		
function chooseLevel(min,max){

     let number;
     
     header.style.display = "none";

     for(let i = 0; i < max; i++) {
        let card = elemCard.children[0].cloneNode(true);
           elemCards.appendChild(card);
       }
      const elemInner = document.querySelectorAll(".container__card-inner");
        addAnimation(elemInner);
          reloadGame(elemInner);
          
          if(max === 3 ){
              elemCards.classList.add("easy");
          } else if(max === 6){
              elemCards.classList.add("norm");
          } else if(max === 10) {
              elemCards.classList.add("hard");
          }
     
     let bug = document.querySelectorAll(".container__card-face-back");

      number = random(min,max);
        let bugCard = bug[number];
          bugCard.classList.add("bug");
}


choise.addEventListener("click", function() {

    if(level[0].classList.contains("start")) {

       chooseLevel(1,3);

    } else if(level[1].classList.contains("start")) {

       chooseLevel(1,6);

    } else if(level[2].classList.contains("start")) {

       chooseLevel(1,10);

    } else {

       alert("Choose a level");

        }
});


