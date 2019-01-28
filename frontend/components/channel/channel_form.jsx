import React from 'react';

class ChannelForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('id', this.props.match.params.channelId);
        this.props.submitForm(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    cancelSubmission() {
        this.props.formType === 'create' ? this.props.history.push(`/`) : this.props.history.push(`/channel/${this.props.match.params.channelId}`);
    }

    renderErrors() {
        return (
            <ul className="channel-errors-list">
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        this.props.clearErrors();
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    render() {
        return (
            <div className="create-channel-background">
                <div className="create-channel-overlay-form">
                    <h2 className="create-channel-form-top">Use toobU as...</h2>
                    <form onSubmit={this.handleSubmit} className="create-channel-form">


                        <div className="create-channel-form-input-header">
                            <i className="far fa-user-circle fa-4x"></i>
                            <div className="create-channel-form-inputs">
                                <label>
                                    <input 
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    placeholder="Name"/>
                                </label>
                                <label>
                                    <input
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                        placeholder="Description" />
                                </label>
                            </div>
                        </div>

                        {this.renderErrors()}

                        <div className="create-channel-form-buttons">
                            <section className="channel-cancel-button" onClick={this.cancelSubmission.bind(this)}>CANCEL</section>
                            <button 
                            className="channel-create-button" 
                            type="submit">
                            {this.props.formType === 'create' ? 'CREATE CHANNEL' : 'UPDATE CHANNEL'}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ChannelForm;