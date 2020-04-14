import React from "react"
import "./VideoItem.css"

const VideoItem = ({ vid }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={vid.snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
