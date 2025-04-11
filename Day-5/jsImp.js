let movies = [
  {
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Andy Dufres1ne escapes from prison",
        duration: "15 mins",
      },
      {
        title: "Brooks was here",
        duration: "10 mins",
      },
    ],
  },
  {
    movieName: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Horse head in bed",
        duration: "5 mins",
      },
      {
        title: "Cannoli scene",
        duration: "3 mins",
      },
    ],
  },
  {
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Opening bank robbery",
        duration: "12 mins",
      },
      {
        title: "Why So Serious interrogation",
        duration: "8 mins",
      },
    ],
  },
  {
    movieName: "The Lord of the Rings: The Return of the King",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Ride of the Rohirrim",
        duration: "10 mins",
      },
      {
        title: "Frodo destroys the One Ring",
        duration: "7 mins",
      },
    ],
  },
];

// Problem 1:  // Find Best Scene Duration per Movie: Write a JavaScript function that iterates through each movie’s bestScenes array and finds the
// scene with the longest duration. Return an object containing the movie name and the longest scene’s duration.
//  (e.g., { movieName: “The Shawshank Redemption”, longestSceneDuration: 15 })

const res1 = {};

movies.forEach((movie) => {
  if (!res1[movie.movieName]) {
    res1[movie.movieName] = {
      movieName: movie.movieName,
      longestDuration: movie.bestScenes.reduce((acc, val) => {
        return Math.max(acc, parseInt(val.duration.split(" ")[0]));
      }, 0),
    };
  }
});
//  { movieName: “The Shawshank Redemption”, longestSceneDuration: 15 }
// console.log(res1);

// Problem 2: Average Rating with Reduce: Utilize the reduce method to calculate the average movie rating based on the provided ratings.
const avgRating = movies.reduce((acc, val) => {
  return acc + val.rating / movies.length;
}, 0);

// console.log(avgRating); // output 4.85:

// Problem: Sort Movie List: Explain how you would achieve sorting the movie list in JavaScript. You have to sort by rating (descending) and movie name (alphabetical).
const sortedData = movies.sort((a, b) => {
  // if rating isn ot same then we will sort it in rating basis
  if (a.rating !== b.rating) return b.rating - a.rating;

  // if rating are same then sort for name
  return a.movieName.localeCompare(b.movieName);
});

console.log(sortedData);
