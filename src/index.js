import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyA_TivH8mDB4K7dOyrG_D9_yJwxUpnvTeM';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        YTSearch({ key : API_KEY, term : 'ps4 repair'}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0] 
            });
            //this.setState({ videos : videos});  - this is same

        });
        
    }
    render() {
        return (
        <div>
        <div>Enter your Youtube Search here:</div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
           onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
           videos={this.state.videos}/>
        </div>   
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
