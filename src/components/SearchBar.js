import React from "react"

class SearchBar extends React.Component {
  state = { term: "" }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Search videos</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              id="search"
              placeholder="You want vids??"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
