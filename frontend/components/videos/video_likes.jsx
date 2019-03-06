import React from 'react';

class VideoLikes extends React.Component {
    constructor(props){
        super(props);
    }

    clickButton(thumbsUp) {
        const { createVideoLike, deleteVideoLike, video} = this.props;
        if (thumbsUp) {
            createVideoLike(true, video.id);
        } else {
            createVideoLike(false, video.id);
        }
    }

    render() {
        const { numLikes, numDislikes } = this.props;
        return (
            <div className="video-likes-main-container">
                <h1>Likes: {numLikes}</h1>
                <h1>Dislikes: {numDislikes}</h1>
                <div onClick={() => this.clickButton(true)}>
                    <i className="far fa-thumbs-up"></i>
                </div>
                <div onClick={() => this.clickButton(false)}>
                    <i className="far fa-thumbs-down"></i>
                </div>
            </div>
        );
    }
}

export default VideoLikes;