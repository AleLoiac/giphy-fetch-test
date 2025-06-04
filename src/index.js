import "./modern-normalize.css";
import "./styles.css";

const newGifBtn = document.querySelector(".new-gif-btn");
const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector("input");
const img = document.querySelector("img");
let currentTerm = "shiba";

async function fetchGif(subject) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=SPo3JCK4o2TrwOEWd89phqwnPcyZpJtg&s=${subject}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    const responseData = await response.json();

    if (!responseData.data || !responseData.data.images) {
      alert("No gif found");
      return;
    }

    img.src = responseData.data.images.original.url;
  } catch (err) {
    console.log(err);
  }
}

newGifBtn.addEventListener("click", () => {
  fetchGif(currentTerm);
});
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = input.value;
  currentTerm = inputValue;
  fetchGif(inputValue);
});

fetchGif(currentTerm);
