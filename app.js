//create an array of objects (images and their attributes)
let images = [
    { src: "./Assets/art 1.jpg", alt: "What", id:1 },
    { src: "./Assets/art 2.jpg", alt: "What", id:2 },
    { src: "./Assets/art 3.jpg", alt: "What", id:3 },
    { src: "./Assets/art 4.jpg", alt: "What", id:4 },
    { src: "./Assets/Benten.jpg", alt: "What", id:5 },
  ];

// # select the thubnail container to display the little images
let thumbContainer = document.getElementById("thumbnail-container");
console.log(thumbContainer)

// # dom elements
let largeImageContainer = document.getElementById("pic-container")
console.log(largeImageContainer)


//!stretch goal (completely optional): carousel or arrow keys
//global variable to store the current img index for the big image
//let currentIndex = 0;

//select the DOM elements that contain our images with a document method
//select the thumbnail-container
//select the large-image-container

//function to create my thumbnail images --> action
function createThumbnails(thumbContainer) {
    //a loop to create multiple images --> forEach /for loop
    images.forEach((thumbnail, index) => {
      //a document method that creates a DOM element (img)
      let img = document.createElement("img");
      console.log(img);
      //assign a value to the img attributes (eg. img.src = "value")
      img.src = images[index].src;
      img.alt = images[index].alt;
      img.width = images[index].width;
      img.height = images[index].height;
      //(optional) assign a class name to the img element (.className property)
      img.classList.add("thumb-image");
      //append the new elements to the DOM using a document method
      thumbContainer.appendChild(img)

      img.addEventListener("click", function() {
        // largeImageContainer.createElement("img");
        
      })
      
      //thumbnail.addEventListener("click", function (){
      //when the user clicks on the image, we are going to call the function that creates the large image
      // })
    });
    // createLargeImage(thumbnail[index]);
}
  createThumbnails(thumbContainer)
  // createThumbnails(argument --> images)
  
  function createLargeImage(createThumbnails) {
    //problem -->  the images appear one after the other (innerHTML = "")
    //create an image element
    let bigImg = document.createElement("img");
    //(optional) add a classname
    bigImg.classList.add("big-picture");
    //set the src value
    bigImg.src = images[0].src;
    //set the alt value
    bigImg.alt = images[0].alt;
    //append the large image to the DOM
    largeImageContainer.appendChild(bigImg);
    console.log(bigImg)
    //add an event listener for each image

      };


    createLargeImage()



















