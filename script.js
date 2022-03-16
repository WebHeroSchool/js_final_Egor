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


		
function chooseLevel(item){
     header.style.display = "none";

     for(let i = 0; i < item; i++) {
        let card = elemCard.children[0].cloneNode(true);
           elemCards.appendChild(card);
       }
      const elemInner = document.querySelectorAll(".container__card-inner");
        addAnimation(elemInner);
         reloadGame(elemInner);

}

function addBug(min,max){
     let bug = document.querySelectorAll(".container__card-face-back");

      number = random(min,max);
      let bugCard = bug[number];
      bugCard.classList.add("bug");
}

choise.addEventListener("click", function() {

    let number;
    const countSimple = 3;
    const countMedium = 6;
    const countComplicated = 10;

    if(level[0].classList.contains("start")) {

       chooseLevel(countSimple);

           elemCards.classList.add("easy");

             addBug(1,3);

    } else if(level[1].classList.contains("start")) {

       chooseLevel(countMedium);

           elemCards.classList.add("norm");

             addBug(1,6);

    } else if(level[2].classList.contains("start")) {

       chooseLevel(countComplicated);

          elemCards.classList.add("hard");

           addBug(1,10);

    } else {

       alert("Choose a level");

        }
});


