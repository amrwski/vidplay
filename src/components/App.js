import React from "react"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import { yt } from "../api/yt"

class App extends React.Component {
  state = { vids: [], selectedVideo: null }

  // pulls up a default search when the component first loads
  componentDidMount() {
    this.onSearchSubmit("you suck at cooking")
  }

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
    this.setState({ vids: response.data.items, selectedVideo: response.data.items[0] })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  // numberOfVids = () => {
  //   return this.state.vids.length === 0 ? (
  //     <div></div>
  //   ) : (
  //     <label className="ui label">I found {this.state.vids.length} videos</label>
  //   )
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* {this.numberOfVids()} */}
              <VideoList vids={this.state.vids} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
