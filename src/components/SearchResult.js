import React from 'react';
import Fuse from 'fuse.js';
import Paper from '@material-ui/core/paper';
import OutputCell from './OutputCell.js';

class SearchResult extends React.Component{
    constructor(props){
        super(props)
        this.generateSearchOutput = this.generateSearchOutput.bind(this)
    }
    generateSearchOutput(){
    var options = {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "title",
        ]
        };
    var list = require("../moviedata.json")
    var fuse = new Fuse(list, options);
    var result = fuse.search(this.props.searchValue);
    console.log(result)
    return result}

    render(){
        var moviesReturned = this.generateSearchOutput();
        return(
        <div>
            {moviesReturned.map(data => <OutputCell singleMovie={data}/>
            )}
        </div> 
        )
    }
}

export default SearchResult 