d3.csv("/raw/movies_metadata.csv").then(function(data) {
    // console.log(data);
    var i;
    var overview_combo="";
    
    for (i=0; i<data.length; i++) {
      var overview_ = data[i].overview;
    //   console.log(overview_);
      overview_combo = overview_combo + " " + overview_
    }
    // console.log(overview_combo);
    

var ignore_list=["other","named","about","which","what","who","don’t",
"whose","That’s","that’s","Their","their","there","these","thing","those",
"through","We’re","we’re","where","would","will","before","after","After","Before",
"begins","during","former","last","himself","herself","first","takes"];

// for (i=0; i<test.length; i++) {
//     overview_append=overview_append.concat(space_).concat(test[i]);
// } 

// overview_append=overview_append.concat('"');

// overview_1 = overview_append.concat(overview_);

// console.log(overview_append);

var myConfig = {
    type: 'wordcloud',
    options: {
      text: overview_combo,
      minLength: 5,
      ignore: ignore_list,
      maxItems: 40,
      aspect: 'flow-center',
      rotate: true,
      colorType: 'palette',
      palette: ['#D32F2F','#5D4037','#1976D2','#E53935','#6D4C41','#1E88E5','#F44336','#795548','#2196F3','#EF5350','#8D6E63','#42A5F5'],
      
      style: {
        fontFamily: 'Crete Round',
        hoverState: {
          backgroundColor: '#D32F2F',
          borderRadius: 2,
          fontColor: 'white'
        },
        tooltip: {
          text: '%text: %hits',
          visible: true,
          alpha: 0.9,
          backgroundColor: '#1976D2',
          borderRadius: 2,
          borderColor: 'none',
          fontColor: 'white',
          fontFamily: 'Georgia',
          textAlpha: 1
        }
      }
    },
    
    source: {
      text: '-- from Movie Overviews 2016 & 2017',
      fontColor: '#64B5F6',
      fontSize: 10,
      fontFamily: 'Georgia',
      fontWeight: 'normal',
      marginBottom: '10%'
    }
  };
   
  zingchart.render({ 
      id: 'wordcloud', 
      data: myConfig, 
      height: 400, 
      width: '100%' 
  });

});