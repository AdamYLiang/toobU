import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import VideoIndexContainer from '../videos/video_index_container';

class Home extends React.Component {

    render() {
        return (
            <div id="homepage-content">
                <h1>HOMEPAGE COMPONENT GOES HERE</h1>
                <VideoIndexContainer />
            </div>
        )
    }
}



export default Home;