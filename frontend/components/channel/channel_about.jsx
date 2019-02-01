import React from 'react';
import { creationDate } from '../../util/date_util';

class ChannelAbout extends React.Component {
    render() {
        const { owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                {owner.username}
                {owner.email}
                {channel.name}
                <h1>Joined {creationDate(owner.createdAt)}</h1>
            </div>
        );
    }
}

export default ChannelAbout;