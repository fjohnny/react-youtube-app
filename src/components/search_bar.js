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
        <div>
          <input   //this is called "controlled" input - the state is setting the value of the input
            value={this.state.term}
            onChange={event => this.setState({ term : event.target.value})} />
        </div>  
        );
    }
  
}

export default SearchBar;