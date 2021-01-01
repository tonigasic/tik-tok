import React from 'react'
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar() {
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon/>
                <p>300</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon/>
                <p>300</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon/>
                <p>300</p>
            </div>
        </div>
    );
}

export default VideoSidebar;
