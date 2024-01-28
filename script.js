document.addEventListener("DOMContentLoaded", function () {
  const moviesContainer = document.getElementById("movies-container");

  async function fecthmovies() {
    try {
      const res = await fetch("http://localhost:3000/movies");
      const movies = await res.json();

      displayMovies(movies);
    } catch (error) {
      console.log("Erro ao buscar filmes: ", error.message);
    }
  }

  function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("col");

      movieCard.innerHTML = `
        <div class="card" style="height: 226px;">
            <div class="card-body p-0">
                <h5 class="card-title m-0 p-1">${movie.title}</h5>
                <small class="p-1">${movie.category_name}</small>
                <p class="card-text mt-2 p-1">${movie.description}</p>
                <small class="card-text mt-2 p-1">${
                  movie.category_description
                }</small>
                <div class="card-footer text-muted text-end">${
                  movie.realease_date ?? "01/01/2024"
                }</div>
            </div>
        </div> 
      `;

      moviesContainer.appendChild(movieCard);
    });
  }

  fecthmovies();
});
