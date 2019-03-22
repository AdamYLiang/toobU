import React from 'react';

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchVideos(this.state)
            .then(() => this.setState({
                search: "",
            }));
    }

    render() {
        return (
        <>
            <form>
                <input 
                    className="search-bar-input" 
                    type="text" 
                    value={this.state.search} 
                    onChange={this.update('search')}
                    placeholder="Search" />
                <button onClick={this.handleSubmit} className="search-bar-icon">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </>
        )
    }
}

export default SearchForm;