const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner_img = document.querySelector(".banner-img");
const arrow_left = document.querySelector(".arrow_left");
console.log(arrow_left);
const arrow_right = document.querySelector(".arrow_right");
console.log(arrow_right);
const banner_text = document.querySelector(".banner_text");
const dot = document.querySelectorAll(".dot");

let positionimg = 0;

arrow_left.addEventListener("click", ()=>{
	console.log("boutton gauche");
	positionimg = positionimg - 1;
	if(positionimg<0){
		positionimg=slides.length -1;
	}
	for(let i=0; i<dot.length;i++){
		dot[i].classList.remove("dot_selected");
	}
	banner_img.src = "./assets/images/slideshow/" + slides[positionimg].image;
	banner_text.innerHTML = slides[positionimg].tagLine;
	dot[positionimg].classList.add("dot_selected");
});

arrow_right.addEventListener("click", ()=>{
	console.log("boutton droit");
	positionimg = positionimg +1;
	if(positionimg >slides.length -1){
		positionimg= 0;
	}
	for(let i=0; i<dot.length;i++){
		dot[i].classList.remove("dot_selected");
	}
	banner_img.src = "./assets/images/slideshow/" + slides[positionimg].image;
	banner_text.innerHTML = slides[positionimg].tagLine;
	dot[positionimg].classList.add("dot_selected");
});