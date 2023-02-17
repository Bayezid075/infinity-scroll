// fetching data
const count = 10;
const apiKey = "MF4EAcCLFoRgk_8FI3KED_L6aeytxem-eNOtlMvz768";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// get randome photo from unsplash
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getRandomPhoto();
