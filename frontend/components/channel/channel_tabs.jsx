import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabId: 0, contents: { 0: "HomePage", 1: "VideosPage", 2: "AboutPage" }};
    }

    changeTab(idx) {
        debugger
        this.setState({ tabId: idx });
    }

    render () {
        const { owner, channel } = this.props;
        const tabHeader = ["Home", "Videos", "About"];
        const tabs = tabHeader.map((header, idx) => {
            return (<p className="channel-tabs" onClick={this.changeTab.bind(this, idx)} key={idx}>{header}</p>)
        })

        return (
            <>
                <section className="channel-tabs-section">
                    <div className="tab-headers">
                        {tabs}
                    </div>
                    <div className="tab-content">
                        {this.state.contents[this.state.tabId]}
                    </div>
                </section>
            </>
        );
    }
}

export default Tabs;