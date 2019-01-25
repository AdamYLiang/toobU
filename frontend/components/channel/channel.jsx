import React from 'react';

class Channel extends React.Component {

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId)
            .then((promise) => this.props.fetchUser(promise.channel.userId));
    }
    
    componentDidUpdate(oldProps) {
        if(oldProps.match.params.channelId != this.props.channelId) {
            this.props.fetchChannel(this.props.channelId)
                .then((promise) => this.props.fetchUser(promise.channel.userId));
        }
    }

    render () {
        const { owner, channel, channelId } = this.props;
        return (
            <>
                <div className="channel-show-header">
                    <h2>{owner.username}</h2>
                    <h2>{owner.email}</h2>
                    <h2>{channel.name}</h2>
                    <h2>{channel.description}</h2>
                </div>
            </>
        )
    }
}

export default Channel;