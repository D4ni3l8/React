import { animals } from "./animals"; // importing the animals data object from animals.js
// importing React and createRoot
import React from "react";
import { createRoot } from "react-dom/client";

// get the reference to the HTML element with id 'app'

const container = document.getElementById("app");
const root = createRoot(container); // creating a react root for rendering
const title = "";

// jsx for the background image
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

// function to display a random fact about each animal when an animal is clicked
function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length); // pick random index for the fun fact
  const fun_fact = animals[animal].facts[index];
  const p = document.getElementById('fact')
  p.innerHTML = fun_fact; // Find the <p> element where the fact will be displayed

}

// array to hold the images of the animals
const images = []
for (const animal in animals) { // loop through each animal in the animals object
  const image = ( // create an image for each animal
    <img 
      onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      />
  );
  images.push(image); // adding the image to the images array
}

const animalFacts = 
  (
    <div>
      <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1> { /* setting default title if title variable is empty */}
      <p id='fact'></p> { /* paragraph to display fun fact */}
      {background}
      <div className="animals">{images}</div>
    </div>
  );

root.render(animalFacts); // rendering the app to the page
