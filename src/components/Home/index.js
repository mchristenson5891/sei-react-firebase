import React, { Component, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'


console.log(process.env)
class Home extends Component {

  state = {
    movie: [],
    page: 1,
    search: ''
  }

  async componentDidMount() {
    // this.getMovies()
  }

  onChange = (e) => {
    this.setState( {[e.target.name] : e.target.value} )
  }

  getMovies = async (e) => {

    const movies = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${this.state.page}`)).json()
    this.setState({ movies: [...this.state.movies, ...movies.results] })
  }

  getOneMovie = async (e) => {
    e.preventDefault()
    const movie = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)).json()
    this.setState({movie: movie.results})
  }

  updateCount = () => {
    this.setState({ page: this.state.page + 1}, () => this.getMovies())
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <img src={this.props.authUser.image} />
        <form onSubmit={this.getOneMovie}>
          <input name='search' type='text' onChange={this.onChange}/>
          <button type='submit'>submit</button>
        </form>
        {
          this.state.movie.map((m,i) => <div key={i}>{m.original_title}</div>)
        }
      </div>
    )
  }
}

export default withFirebase(withRouter(Home))