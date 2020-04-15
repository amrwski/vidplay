import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({ vids, onVideoSelect }) => {
  const renderedList = vids.map((vid) => (
    <VideoItem key={vid.id.videoId} vid={vid} onVideoSelect={onVideoSelect} />
  ))
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList

// argument in  VideoList() is destructured from`props.vids` to just `vids`
