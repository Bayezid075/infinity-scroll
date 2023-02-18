const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");
let photoArray = [];
let ready = false;
let photoLoadded = 0;
let totalImages = 0;

// image loading checking function
function imgLoaded() {
  photoLoadded = 0;
  photoLoadded++;
  photoLoadded;
  if (photoLoadded === totalImages) {
    ready = true;
    loader.hidden = true;
    "ready =", ready;
  }
}

// function for display photo, create anchor an link element by dom

function displayPhoto() {
  photoArray.forEach((photo) => {
    totalImages = photoArray.length;
    "total images", totalImages;
    // create <a> element dom
    const A_item = document.createElement("a");
    A_item.setAttribute("href", photo.links.html);
    A_item.setAttribute("target", "_blank");
    //create <img> Element by dom
    const Img_item = document.createElement("img");
    Img_item.setAttribute("src", photo.urls.regular);
    Img_item.setAttribute("alt", photo.alt_description);
    Img_item.setAttribute("title", photo.alt_description);
    // loading animation adding
    Img_item.addEventListener("load", imgLoaded);

    // put all item into img container
    A_item.appendChild(Img_item);
    imgContainer.appendChild(A_item);
  });
}

// fetching data
const count = 10;
const apiKey = "MF4EAcCLFoRgk_8FI3KED_L6aeytxem-eNOtlMvz768";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// get randome photo from unsplash
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();

    displayPhoto();
  } catch (error) {
    error;
  }
}
// if reached bottom of the page , load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getRandomPhoto();
  }
});

getRandomPhoto();
