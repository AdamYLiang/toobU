import React from 'react';
import { creationDate } from '../../util/date_util';

class ChannelAbout extends React.Component {
    render() {
        const { owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                <div className="channel-about-content">
                    <div className="channel-about-description">
                        <h2 className="channel-about-description-header">Description</h2>
                        <h2>{channel.name}</h2>
                        <h2>{channel.description}</h2>
                    </div>
                    <div className="channel-about-stats">
                        <h2 className="channel-about-stats-header">Stats</h2>
                        <h1>Joined {creationDate(owner.createdAt)}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelAbout;