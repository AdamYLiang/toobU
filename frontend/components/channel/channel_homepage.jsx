import React from 'react';

class ChannelHomepage extends React.Component {
    render() {
        const { owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                {owner.username}
                {channel.name}
            </div>
        );
    }
}

export default ChannelHomepage;