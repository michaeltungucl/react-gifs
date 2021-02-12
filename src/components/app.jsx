import React, { Component } from 'react';
import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "5w4QZx27jDM8U"
    };

    this.search("love");
  }

  search = (query) => {
    //to do: api call
    giphy('JvOzMkCMODJEo0V7Gie8H2YnGxkPJPIy').search({
      q: query,
      rating: 'g',

    }, (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data
        });
    });
  }

  render() {
    const gifs = [
      { id: "xT0xeMurgifgxdummk"},
      { id: "5w4QZx27jDM8U"}
    ]

    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
