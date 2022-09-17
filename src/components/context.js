import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "Imagine Dragons" ,album_name: "Believer"} },
      { track: { track_name: "One Direction",album_name: "What makes you beautiful" } },
      { track: { track_name: "Justin Beiber",album_name: "Intentions" } },
      { track: { track_name: "Ed Sheeran",album_name: "Perfect" } },
      { track: { track_name: "The Vamps",album_name: "Somebody to You" } },
      { track: { track_name: "Billie Elish",album_name: "Happier than ever" } },
      { track: { track_name: "Taylor Swift",album_name: "August" } },
      { track: { track_name: "Selena Gomez",album_name: "Calm down" } },
      { track: { track_name: "Imagine Dragons",album_name: "Bones" } },
   
    
      
    ],
    heading: "Top 10 Tracks",
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
