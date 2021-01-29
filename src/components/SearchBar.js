import React from "react";

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value })
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        // TODO: make sure to add callback function from parent file.
    };

    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <lebel>Video Search</lebel>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    };
};

export default SearchBar;