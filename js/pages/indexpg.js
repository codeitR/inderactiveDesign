
const result = document.getElementById("displayMovies");
const baseURL = "https://api.noroff.dev/api/v1/";
const endpoint = "square-eyes";

const displayMovies = async () => {
  const data = await fetch(baseURL + endpoint + `/${id}`)
    .then((res) => res.json())
    .catch((err) => displayError(err));

  return (result.innerHTML = `
   
            <img class="movie-list-item-img" src="${data.image}" alt="" />
            <span class="movie-list-item-title">${data.title}</span>
            <p class="movie-list-item-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button class="movie-list-item-button">Watch</button>
          
      
  `
  )
}
