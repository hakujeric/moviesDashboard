import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root:{
        margin: theme.spacing.unit * 5
    }
})

class OutputCell extends React.Component{
    render(){
        return(
            <Paper className={this.props.classes.root}>
                    {this.props.singleMovie.title} <br/>
                    {this.props.singleMovie.overview}
            </Paper>
        )
    }
}

export default withStyles(styles)(OutputCell)