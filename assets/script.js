const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let Bulletpoint = document.querySelectorAll(".dot");
const elementimage = document.querySelector(".banner-img");
const elementp = document.querySelector("#banner p");

let index = 0;

function majImageTexteSlide() {
  elementimage.src = `assets/images/slideshow/${slides[index].image}`;
  elementp.innerHTML = slides[index].tagLine;
}

function majBulletPoint() {
  slides.forEach((slide, boucleIndex) => {
    if (index === boucleIndex) {
      Bulletpoint[boucleIndex].classList.add("dot_selected");
    } else {
      Bulletpoint[boucleIndex].classList.remove("dot_selected");
    }
  });
}

function creerDots() {
  const dotsContainer = document.querySelector(".dots");
  dotsContainer.innerHTML = ""; // On vide le contenu existant 

  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    // Si c'est le premier dot, on lui ajoute la classe 'dot_selected'
    if (index === 0) {
      dot.classList.add("dot_selected");
    }

    // Ajout du dot au conteneur
    dotsContainer.appendChild(dot);
  });

  // Mise à jour de la variable Bulletpoint pour cibler les nouveaux dots créés
  Bulletpoint = document.querySelectorAll(".dot");
}

function eventArrowLeft() {
  arrowLeft.addEventListener("click", function () {
    if (index > 0) {
      index--;
      majImageTexteSlide();
      majBulletPoint();
      console.log("Retour au" + index);
    } else {
      index = slides.length - 1;
      majImageTexteSlide();
      majBulletPoint();
      console.log("Flèche gauche cliqué" + index);
    }
  });
}

function eventArrowRight() {
arrowRight.addEventListener("click", function () {
  if (index < slides.length - 1) {
    index++;
    majImageTexteSlide();
    majBulletPoint();
    console.log("Flèche droite cliqué" + index);
  }
  else {
    index = 0;
    majImageTexteSlide();
    majBulletPoint();
    console.log("Retour à" + index);
  }
});
}

creerDots();
majImageTexteSlide();
majBulletPoint();
eventArrowLeft();
eventArrowRight();

