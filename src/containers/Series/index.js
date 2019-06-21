import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
  state = {
    series: []
  }
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=vikings')
     .then(response => response.json())
     .then(json => this.setState({ series: json}))
  }
  render() {
    return (
     <div>
       Series episodes: {this.state.series.length}
       <SeriesList List = {this.state.series}/>
     </div>

    )
  }
}
export default Series;