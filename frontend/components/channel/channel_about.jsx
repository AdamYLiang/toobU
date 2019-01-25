import React from 'react';

class ChannelAbout extends React.Component {
    render() {
        const { owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                {owner.username}
                {owner.email}
                {channel.name}
            </div>
        );
    }
}

export default ChannelAbout;