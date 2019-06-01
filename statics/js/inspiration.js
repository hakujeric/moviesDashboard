//Add our code
// splitting ratings
d3.csv("../raw/joined_data.csv").then(function(data) {
    // console.log(data);
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
      var genres_list = JSON.parse(genres);
      console.log(genres_list);
    }

    var date;
    for (i=0; i<data.length; i++) {
      var dates = data[i].release_date;
      console.log(dates);
    }


  });


  // creating line chart
  // var trace1 = {
  //   x: dates,
  //   y: rating_list[0],
  //   type: "line"
  // };

  // var data = [trace1];

  // var layout = {
  //   title: "line chart",
  // };

  // Plotly.newPlot("plot", data, layout);

  // Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);