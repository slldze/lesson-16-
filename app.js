let number = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}
let average = sum / number.length;
console.log(sum);
console.log(average);

let movies = {
  moviename: "notebook",
  genre: "romantic",
  streamingplatforms: ["Mykadri.com", "Imovie.ge", "Adjaranet.com"],
};
console.log(movies);
console.log(
  movies.moviename +
    " which is a " +
    movies.genre +
    " movie, is available on " +
    movies.streamingplatforms[0],
);
