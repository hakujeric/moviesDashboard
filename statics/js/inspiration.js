//Add our code

d3.csv("/raw/movie_scraped_data.csv").then(function(data) {
    // console.log(data);
    var i;
    for (i=0; i<data.length; i++) {
      var rating = data[i].ratings.split("'").join('"');
      var rating_list = JSON.parse(rating);
      // console.log(rating_list);
    }
    
    
  });


// d3.csv("/raw/movie_scraped_data.csv" , funtion(csv) {


// })