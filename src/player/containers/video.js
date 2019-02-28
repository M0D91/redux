import React, {Component} from 'react';
import Layout from '../components/video';

class Video extends Component {
    componentWillReceiveProps(nextProps){
        // console.log('nextProps:', nextProps);
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay();
        }
    }

    togglePlay(){
        if(this.props.pause){
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    setRef = (element) => {
        this.video = element;
    }

    render() {
        // const {
        //     handleLoadedMetadata
        // } = this.props;

        return (
            <Layout 
                src={this.props.src}
                autoplay={this.props.autoplay}
                setRef={this.setRef}
                metaData={this.props.metaData}
                currentTime={this.props.currentTime}
                seeking = {this.props.seeking}
                seeked = {this.props.seeked}
            />
        )
    }
}


export default Video;