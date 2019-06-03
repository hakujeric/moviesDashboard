import React from 'react';
import Header from './components/Header.js';
import SearchResult from './components/SearchResult';

class App extends React.Component{
    constructor(props){
        super(props)
        this.updateSearchValue = this.updateSearchValue.bind(this)
        this.state={
            searchValue:"",
        }
    }
    updateSearchValue(e){
        this.setState({
            searchValue: e.target.value
        })
    }

    render(){
        return(
        <div>
            <Header searchUpdate={this.updateSearchValue}/>
            <SearchResult searchValue={this.state.searchValue}/>
        </div>
        )
    }
}

export default App;