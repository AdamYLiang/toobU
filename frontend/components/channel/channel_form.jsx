import React from 'react';

class ChannelForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitForm(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    cancelSubmission() {
        this.props.history.push(`/`);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    render() {
        return (
            <div className="create-channel-background">
                <div className="create-channel-overlay-form">
                    <h2>Create Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Name"/>
                        </label>
                        <label>
                            <textarea
                                type="text"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Name" />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={this.cancelSubmission.bind(this)}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default ChannelForm;