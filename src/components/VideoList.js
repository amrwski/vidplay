import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({ vids, onVideoSelect }) => {
  const renderedList = vids.map((vid) => <VideoItem vid={vid} onVideoSelect={onVideoSelect} />)
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList

// the argument in function VideoList is destructured so that instead of `props.vids` just `vids` can be used.
