import React from 'react';
import SearchResultItem from './search_result_item';

class SearchResults extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos({
            search: this.props.search,
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search){
            this.props.fetchVideos({
                search: this.props.location.search.slice(14)
            });
        }
    }

    render(){
        const { videos, users, channels } = this.props;
        const videoList = videos.length > 0 ? 
                        videos.map((video, idx) => {
                            let author = users[channels[video.channelId].userId] || {};
                            return (
                                <div key={idx} className="single-search">
                                    <SearchResultItem
                                    video={video}
                                    author={author} />
                                </div>
                            )
                        }) : "";
        return(
            <div className="search-results-list">
                <div className="search-results-list-interior">
                    {videoList}
                </div>
            </div>
        );
    }
}

export default SearchResults;
