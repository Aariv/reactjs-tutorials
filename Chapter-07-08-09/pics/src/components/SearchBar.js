import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitGet(this.state.term);
    }

    // There are 3 ways to solve 'this' problem and binding.....

    /**
     * Solution 1
     * 
     * Using constructor
     * 
     * constructor() {
     *  this.onFormSubmit = this.onFormSubmit.bind(this);
     * }
     */

    /**
     * Solution 2
     * 
     * ArrowFunction
     * onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    }
     * 
     */

    /**
     * Solution 3
     * 
     *  <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
     */

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event) => this.setState({ term: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;