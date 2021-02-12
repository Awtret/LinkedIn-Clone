import { Avatar } from '@material-ui/core'
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./post.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description,message,photourl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                    <div className="post_info">
                        <h2>{name}</h2>
                        <p> {description}</p>
                    </div>
                    <div className="post_body">
                        <p>{message}</p>
                        </div>                
            <div className="post_button">
                <div className="post_icon">
                    <ThumbUpIcon />
                    </div>
                    <p> like</p>
                    <div className="post_icon">
                    <ChatBubbleOutlineIcon />
                    </div>
                    <p> subscribe</p>
                    
                    <div className="post_icon">
                    <ShareIcon/>
                    </div>
                    <p> share</p>
                    <div className="post_icon">
                    <SendIcon/>
                    </div>
                    <p>send</p>

            </div>
            
            </div>
            
        </div>
    )
}
 export default Post
