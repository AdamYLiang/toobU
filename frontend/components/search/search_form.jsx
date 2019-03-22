import React from 'react';

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm({
            search: this.state,
        });
    }

    render() {
        return (
        <>
            <form>
                <input className="search-bar-input" type="text" placeholder="Search" />
                <button className="search-bar-icon"><i className="fas fa-search"></i></button>
            </form>
        </>
        )
    }
}

export default SearchForm;