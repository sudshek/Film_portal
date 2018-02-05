import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const source = [
  {
    "title": "Lakin Group",
    "description": "Virtual mission-critical infrastructure",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg",
    "price": "86.91"
  },
  {
    "title": "hellooooooooo",
    "description": "Triple-buffered discrete website",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg",
    "price": "59.45"
  },
  {
    "title": "Schuster - Block",
    "description": "Down-sized encompassing time-frame",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ecommerceil/128.jpg",
    "price": "45.78"
  },
  {
    "title": "Runte - Rippin",
    "description": "helloooooooo",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/spedwig/128.jpg",
    "price": "59.90"
  },
  {
    "title": "Becker, Mitchell and Mitchell",
    "description": "Grass-roots empowering hardware",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
    "price": "67.15"
  }
]

export default class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            size='massive'
            {...this.props}
          />
        </Grid.Column>
      
      </Grid>
    )
  }
}