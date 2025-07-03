const movies = [
  { title: "Peter Rabbit", year: 2018, rating: 6.5, genre: "Animation, Comedy", tag: "New Add", image: "images/1200x675mf.jpg.png" },
  { title: "And Then I Go", year: 2017, rating: 6.8, genre: "Drama", tag: "Favorite", image: "images/1200x675mf.jpg.png" },
  { title: "Annihilation", year: 2018, rating: 6.9, genre: "Sci-Fi, Thriller", tag: "New Add", image: "images/1200x675mf.jpg.png" },
  { title: "Goofy Movie", year: 2000, rating: 6.4, genre: "Animation, Family", tag: "Classic", image: "images/1200x675mf.jpg.png" },
  { title: "New York Doll", year: 2005, rating: 7.9, genre: "Documentary", tag: "New Add", image: "images/1200x675mf.jpg.png" },
  { title: "Magical Christmas", year: 2001, rating: 7.2, genre: "Animation", tag: "New Add", image: "images/1200x675mf.jpg.png" },
  { title: "The Meg", year: 2018, rating: 5.7, genre: "Action, Horror", tag: "New", image: "images/1200x675mf.jpg.png" },
  { title: "Tomb Raider", year: 2018, rating: 6.3, genre: "Action, Adventure", tag: "New", image: "images/1200x675mf.jpg.png" },
  { title: "Black Panther", year: 2018, rating: 7.3, genre: "Action, Sci-Fi", tag: "Popular", image: "images/1200x675mf.jpg.png" },
  { title: "A Wrinkle in Time", year: 2018, rating: 4.2, genre: "Adventure, Family", tag: "New Add", image: "images/1200x675mf.jpg.png" },
  { title: "Love, Simon", year: 2018, rating: 7.5, genre: "Drama, Romance", tag: "Favorite", image: "images/1200x675mf.jpg.png" },
  { title: "Pacific Rim Uprising", year: 2018, rating: 5.6, genre: "Action, Sci-Fi", tag: "New", image: "images/1200x675mf.jpg.png" },
  { title: "Isle of Dogs", year: 2018, rating: 8.0, genre: "Animation, Adventure", tag: "Top Rated", image: "images/1200x675mf.jpg.png" },
  { title: "Ready Player One", year: 2018, rating: 7.5, genre: "Action, Adventure", tag: "New", image: "images/1200x675mf.jpg.png" },
  { title: "Sherlock Gnomes", year: 2018, rating: 4.7, genre: "Animation, Comedy", tag: "New Add", image: "images/1200x675mf.jpg.png" }
];

function displayMovies(list) {
  const grid = document.getElementById("movieGrid");
  grid.innerHTML = "";
  list.forEach(movie => {
    grid.innerHTML += `
      <div class="movie-card">
        <img src="${movie.image}" alt="${movie.title}">
        <div class="title">${movie.title}</div>
        <div class="genre">${movie.genre}</div>
        <div class="meta">${movie.year} • Rating: ${movie.rating}</div>
        <div class="tag">${movie.tag}</div>
      </div>
    `;
  });
}

function searchMovies() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;

  let filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchValue)
  );

  if (sortBy === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "name-desc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortBy === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "year-desc") {
    filtered.sort((a, b) => b.year - a.year);
  }

  displayMovies(filtered);
}

displayMovies(movies);
