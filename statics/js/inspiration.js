//Add our code
// splitting ratings
d3.csv("../raw/movie_scraped_data.csv").then(function(data) {
    // console.log(data);
    var i;
    for (i=0; i<data.length; i++) {
      var rating = data[i].ratings.split("'").join('"');
      var rating_list = JSON.parse(rating);
      console.log(rating_list);
    }
  });


  // splitting genres and getting dates 
  d3.csv("../raw/movies_metadata.csv").then(function(data1) {
    // console.log(data);
    var i;
    for (i=0; i<data1.length; i++) {
      var genres = data1[i].genres.split("'").join('"');
      var genres_list = JSON.parse(genres);
      console.log(genres_list);
    }

    var date;
    for (i=0; i<data1.length; i++) {
      var date = data1[i].release_date;
      console.log(date);
    }
  
  });


  // creating line chart
  // var trace1 = {
  //   x: date,
  //   y: ,
  //   type: line
  // };

  // var data = [trace1];

  // var layout = {
  //   title: "line chart",
  // };

  // Plotly.newPlot("plot", data, layout);

  // Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);