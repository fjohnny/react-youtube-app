import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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

        this.videoSearch('ps4 repair');

        }

    videoSearch(term) {
        YTSearch({ key : API_KEY, term : term}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0] 
            });
            //this.setState({ videos : videos});  - this is same
    })};


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>   
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
