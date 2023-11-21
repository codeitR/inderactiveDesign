

const host = "https://api.noroff.dev"
const endpoint = "/api/v1/square-eyes"
const apiUrl = host + endpoint;


export async function getMovies(){
    const response = await fetch(apiUrl)
    const movies = await response.json();
    return movies;
}

export function renderMovie(movieData){
    const movieElement = document.createElement("a")
    movieElement.href = "/movie"

    // movieElement.innerText = movieData.title;

    const img = document.createElement("img") 
    img.src = movieData.image;
    img.alt = movieData.title;

    movieElement.append(img)

    document.body.append(movieElement)
}

export async function renderMovies(listOfMovies){
    listOfMovies.forEach(renderMovie)

}

export async function moviesPage(){
    const movies = await getMovies()
    renderMovies(movies)
}