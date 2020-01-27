
// Create random numbers needed for dice
let randomNumber1 = Math.floor(Math.random() * 5 + 1);
let randomNumber2 = Math.floor(Math.random() * 5 + 1 );

// Select images from HTML to change
let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

// Create variable with full path of images with new random number
let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

// Set attributes to new random generated image
image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

// get header so we can change later
let header = document.querySelector("h1");

// Display correct header depending on score
if(randomNumber1 > randomNumber2){
  header.innerHTML = "🚩 Player one wins!!";

} else if(randomNumber2 > randomNumber1){
  header.innerHTML = "Player two wins!! 🚩";
  
} else {
  header.innerHTML = "🚩 Draw! 🚩";
}
