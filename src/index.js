import "./styles.css";

const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=SPo3JCK4o2TrwOEWd89phqwnPcyZpJtg&s=shiba",
  {
    mode: "cors",
  },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
