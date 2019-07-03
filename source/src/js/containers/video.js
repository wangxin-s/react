/*
*
* 视频播放
*
*
* */
import React from 'react';
import {Player} from 'video-react';
require('video-react/dist/video-react.css');
class Video extends React.Component{

    clickFun(){
        this.props.history.push('/Index');
    }

    render(){
        return (
            <div>
                <h3>react视屏播放插件--11</h3>
                <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
            </div>
        )
    }
}
export default Video;