var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Variables declaration
var uniqueGenres = [];
var metadata = [];
var largeData = [];
var moviedata = {};
// Import Data
var file = "/raw/joined_data_v1.csv";
// Function is called and passes csv data
d3.csv(file).then(successHandle, errorHandle);

function selectMonth(date) {
    var month = date.split("/",1);
    return month;
    // var dt = new Date(date.production_date);
    // // var dtm = dt.getMonth();
    // var month = new Array();
    // month[0] = "January";
    // month[1] = "February";
    // month[2] = "March";
    // month[3] = "April";
    // month[4] = "May";
    // month[5] = "June";
    // month[6] = "July";
    // month[7] = "August";
    // month[8] = "September";
    // month[9] = "October";
    // month[10] = "November";
    // month[11] = "December";
    // console.log(month[dt.getMonth()])
    // return  month[dt.getMonth()];
     
  }

// If error exist it will be only visible in console
function errorHandle(err) {
    throw err;
  }

// Load succefully data from data.csv
function successHandle(Data){
    console.log(Data);
//   if (err) throw err;
    Data.forEach(function(data) {
        // metadata.push(data.title);
        // metadata.push(data.vote_average_perc);
        // console.log(data.genres1);
        // largeData.push(data.title);
        // moviedata[title] = data.title;
        // moviedata[date] = data.release_date;
        
        if (data.genres1 != ""){
            metadata.push(data.genres1);
            moviedata = {
                "title":data.title,
                // "date":Date.parse(data.release_date),
                "date":data.release_date,
                "vote_average": data.vote_average,
                "genre":data.genres1};
            largeData.push(moviedata);
        }
        if (data.genres2 != ""){
            metadata.push(data.genres2);
            moviedata = {
                "title":data.title,
                "date":data.release_date,
                "vote_average": data.vote_average,
                "genre":data.genres2};
            largeData.push(moviedata);
        }
        if (data.genres3 != ""){
            metadata.push(data.genres3);
            moviedata = {
                "title":data.title,
                "date":data.release_date,
                "vote_average": data.vote_average,
                "genre":data.genres3};
            largeData.push(moviedata);
        }
        if (data.genres4 != ""){
            metadata.push(data.genres4);
            moviedata = {
                "title":data.title,
                "date":data.release_date,
                "vote_average": data.vote_average,
                "genre":data.genres4};
            largeData.push(moviedata);
        }
        if (data.genres5 != ""){
            metadata.push(data.genres5);
            moviedata = {
                "title":data.title,
                "date":data.release_date,
                "vote_average": data.vote_average,
                "genre":data.genres5};
            largeData.push(moviedata);
        }
        // metadata.push(data.genre2);
        // metadata.push(data.genre3);
        // metadata.push(data.genre4);
        // metadata.push(data.genre5);
    
    });
    // console.log(largeData);
    var uniqueGenres = Array.from(new Set(metadata))
    // console.log(uniqueGenres);
    var selector = d3.select("#selDataset");
    uniqueGenres.forEach((genre) =>{
        selector
            .append("option")
            .text(genre)
            .property("value", genre);
    });
    var selectedValue = d3.select("#selDataset").node().value;
    console.log(selectedValue);
    // d3.select("#selDataset").node().value;
    buildCharts(selectedValue);
}
function optionChanged(newGenre) {
    // Fetch new data each time a new genre is selected
    buildCharts(newGenre);
}
function buildCharts(newGenre){
    // var d = Date;
    var myArray = [];
    var x_values = [];
    var y_values = [];
    var dates = [];


    myArray = largeData.filter(largeData => largeData.genre === newGenre);
    console.log(typeof myArray[0].date);
    myArray.forEach(function(element){
        console.log(element.vote_average);
        // element.date = parseInt(selectMonth(element.date));
        console.log(element.date);
        x_values.push(element.date);
        y_values.push(element.vote_average);

    });
    console.log(x_values);
    console.log(y_values)
    var trace1 = {
        x: x_values,
        y: y_values,
        name: 'Movie Average vote by release date',
        type: 'scatter'
        // mode = 'lines',
        // name = 'lines'
                    
    };
                
    var data = [trace1];
              
    var layout = {
        xaxis: { title: "Date"},
        yaxis: { title: "Vote average"}
        };
              
    Plotly.newPlot('chart', data, layout);

    // myArray.date = String(myArray.date);
    // console.log(typeof myArray.date);
    // console.log(myArray.date);
    // var dates=[];
    // dates = [...myArray.date];
    // console.log(dates);
    // myArray.date = dates.map(function(date){
    //     return selectMonth(date)
    // });
    // console.log(myArray.date);
    // x_values = selectMonth(myArray.date);
    // console.log(x_values);
    // const y_values = largeData.filter(largeData => largeData.vote_average === "Empire");
    // largeData.forEach(function(data){
    //     if (data.genre===newGenre){
    //         // d =  new Date(data.date);
    //         // console.log(selectMonth(data.date));
    //         var x_values = selectMonth(data.date);
    //         var y_values = data.vote_average;
    //         var trace1 = {

    //             x: x_values,
    //             y: y_values
    //             // mode = 'lines',
    //             // name = 'lines'
                
    //           };
            
    //           var data = [trace1];
          
    //           var layout = {
    //             xaxis: { title: "Months"},
    //           };
          
    //           Plotly.newPlot('chart', data, layout);
    //     }
    //     // Object.entries(data).forEach(([key, value]) => {
    //         // metadataPanel.append("h6").text(`${key}: ${value}`);
    //         // console.log(key);
    //         // console.log(value);
          
    //     //   });
    // });
}

// function init() {
//     var selector = d3.select("#selDataset");
//     uniqueGenres.forEach((genre) =>{
//         selector
//         .append("option")
//         .text(genre)
//         .property("value", genre);
//     });


//     sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
// }

// Initialize the dashboard
// init();