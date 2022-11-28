function askTvSeries() {
let Title = prompt("Title of your favourite show :");
let Year = prompt("Production year of it :");
let Cast = prompt("Names of the cast members :");

//Creating a object
    let TvSeries = {
        title: Title,
        year: Year,
        cast: Cast
    }
console.log(TvSeries);
}
askTvSeries();