import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCQq-BD1xZqwbbGcDT5S2--kog6uwLTY2Y",
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.handleSubmit("Youtube API");
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <h1 style={{ fontSize: "50px" }}>Youtube Clone</h1>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
