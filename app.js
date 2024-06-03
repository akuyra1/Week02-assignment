//create an array of objects (images and their attributes)
let images = [
  { src: "./Assets/art 1.jpg", alt: "Painting of a woman with blue hair and eyes, in a white dress with feathers and stars on it, purple background theme", id:1,},
  { src: "./Assets/art 2.jpg", alt: "Painting of a woman with 2 white dowes, one on her hand, one on her shoulder", id:2 },
  { src: "./Assets/art 3.jpg", alt: "Painting of a mystical woman with red hair and antlers coming out of her head, red long hair wrapped around the antlers.", id:3 },
  { src: "./Assets/art 4.jpg", alt: "Painting of a women with white hair and red cheeks, love hearts painted all around the image, pink background theme", id:4 },
  { src: "./Assets/Benten.jpg", alt: "Painting of an Asian woman playing a violin looking instrument, wearing a kimono", id:5 },
];


// # select the thubnail container to display the little images
let thumbContainer = document.getElementById("thumbnail-container");
console.log(thumbContainer)

// target DOM element where big image will be displayed
let largeImageContainer = document.getElementById("pic-container")
console.log(largeImageContainer)


//!stretch goal (completely optional): carousel or arrow keys
//global variable to store the current img index for the big image
let currentIndex = 0;
// console.log(currentIndex)

//create thumbnails and first large picture
createThumbnails()
createLargeImage(createThumbnails)

//assign both next/previous image variables from the DOM tags
const nextImage = document.getElementById("right-arrow");
const prevImage = document.getElementById("left-arrow");

//function to create my thumbnail images --> action
function createThumbnails() {
  //a loop to create multiple images --> forEach /for loop
  images.forEach((thumbnail, index) => {
    //a document method that creates a DOM element (img)
    var img = document.createElement("img");
    console.log(img);
    //assign a value to the img attributes (eg. img.src = "value")
    img.src = images[index].src;
    img.alt = images[index].alt;
    //(optional) assign a class name to the img element (.className property)
    img.classList.add("thumb-image");
    //append the new elements to the DOM using a document method
    thumbContainer.appendChild(img)
  });
}

// Function to display the large image
function createLargeImage() {
  // Clear the previous image
  largeImageContainer.innerHTML = "";
  // Create and display the new large image
  let bigImg = document.createElement("img");
  bigImg.classList.add("big-picture");
  bigImg.src = images[currentIndex].src;
  bigImg.alt = images[currentIndex].alt;
  largeImageContainer.appendChild(bigImg);
};

//create event listeners for both the next image and previous image buttons
nextImage.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    createLargeImage();    
});

prevImage.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    createLargeImage();
});















