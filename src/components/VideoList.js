import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

function VideoList({ videos, onVideoSelect }) {
  const listOfVideos = videos.map((video, id) => {
    return <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />;
  });

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;
