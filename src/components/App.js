import React from "react"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import { yt } from "../api/yt"

class App extends React.Component {
  state = { vids: [], selectedVideo: "" }

  onSearchSubmit = async (term) => {
    const response = await yt.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.REACT_APP_API_KEY,
      },
    })
    this.setState({ vids: response.data.items })
    console.log(this.state.vids)
  }

  onVideoSelect = () => {}

  numberOfVids = () => {
    return this.state.vids.length === 0 ? (
      true
    ) : (
      <label className="ui label">I found {this.state.vids.length} videos</label>
    )
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.numberOfVids()}
        <VideoList vids={this.state.vids} />
      </div>
    )
  }
}

export default App
