import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';


class MoviesContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            movies: []
        }
    }
    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((res)=>{
            this.setState({
                movies: res.data.feed.entry
            });
        });
    }

    render(){
        const movieList = this.state.movies.map((info,index)=>{
           return <Movie info={info} key={index}/>
        })
    return(
        <div>
            {movieList}
        </div>
    )
}
}

export default MoviesContainer;