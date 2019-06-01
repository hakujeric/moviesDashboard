//Add our code

// // Submit Button handler
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input value from the form
//   var genre_select = d3.select("#genreInput").node().value;
//   console.log(genre);

//   // clear the input value
//   d3.select("#genreInput").node().value = "";

//   // Build the plot with the selected genre
//   buildPlot(genre_plot);
// }

// function buildPlot(genre_plot) {

  // splitting ratings
  d3.csv("../raw/joined_data.csv").then(function(data) {
      var i;
      for (i=0; i<data.length; i++) {
        var rating = data[i].ratings.split("'").join('"');
        var rating_list = JSON.parse(rating);
        console.log(rating_list);
      }


    // splitting genres and getting dates 
      var j;
      for (j=0; j<data.length; j++) {
        var genres = data[j].genres.split("'").join('"');
        console.log(genres);
        var genres_list = JSON.parse(genres);
        console.log(genres_list);
      }

      var date;
      for (x=0; x<data.length; x++) {
        var dates = data[x].release_date;
        console.log(dates);
      }


    });


  //creating line chart
  // var trace1 = {
  //   x: x_values,
  //   y: y_values,
  //   type: "line"
  // };

  // var data = [trace1];

  // var layout = {
  //   title: "line chart",
  // };

  // Plotly.newPlot("plot", data, layout);

  // Add event listener for submit button
// d3.select("#submit").on("click", handleSubmit);}