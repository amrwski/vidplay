import React from "react"
import SearchBar from "./SearchBar"
import { yt, API_KEY } from "../api/yt"

class App extends React.Component {
  state = { vids: [] }

  onSearchSubmit = async (term) => {
    const response = await yt.get("/search", {
      params: { q: term, part: "snippet", type: "video", key: API_KEY },
    })
    this.setState({ vids: response.data.items })
    console.log(this.state.vids)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
