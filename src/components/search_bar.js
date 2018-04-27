import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'ps4 repair' };
    }

    render() {
        return (
        <div className="search-bar">
          <input   //this is called "controlled" input - the state is setting the value of the input
            style={{"width": "65%"}}
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>  
        );
    }
  
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;