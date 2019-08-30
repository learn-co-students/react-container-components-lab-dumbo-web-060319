import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  buildQueryUrl = () => {
    return BASE_URL.concat(this.state.searchTerm)
  }

  fetchQueryUrl = () => {
    const url = this.buildQueryUrl()
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      reviews: data.results
    }))
  }

  handleInput = e => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchQueryUrl()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="search-bar" onChange={this.handleInput} />
          <input type="submit" className="search-submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
