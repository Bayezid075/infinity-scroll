const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");
let photoArray = [];

// function for display photo, create anchor an link element by dom

function displayPhoto() {
  photoArray.forEach((photo) => {
    // create <a> element dom
    const A_item = document.createElement("a");
    A_item.setAttribute("href", photo.links.html);
    A_item.setAttribute("target", "_blank");
    //create <img> Element by dom
    const Img_item = document.createElement("img");
    Img_item.setAttribute("src", photo.urls.regular);
    Img_item.setAttribute("alt", photo.alt_description);
    Img_item.setAttribute("title", photo.alt_description);
    // put all item into img container
  });
}

// fetching data
const count = 10;
const apiKey = "MF4EAcCLFoRgk_8FI3KED_L6aeytxem-eNOtlMvz768";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
console.log(photoArray);
// get randome photo from unsplash
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();

    displayPhoto();
  } catch (error) {
    console.log(error);
  }
}

getRandomPhoto();
