import React from 'react'

import { Avatar } from '@material-ui/core'

import "./sidebar.css"
function Sidebar() {

    const recentitem =(topic) =>(
        <div classname="section3">
            {topic}
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src={process.env.PUBLIC_URL + "background.jpeg"} alt="linkedin"/>
                <Avatar className="sidebar_avatar"/>
                <h2> Akshat Jhalani</h2>
                <h4> Bits- Pilani </h4>

            </div>
            <div>
                <div className="section1">
                <p>Who viewed you </p>
                <p> 100</p>
                </div>
                <div className="section1">
                <p> viewes on post</p>
                <p> 263</p>
                </div>
            </div>
            <div className="section2">
                     <h2> Recent </h2>
</div>
                     {recentitem ('#reactjs')}
                     {recentitem ('#programming')}
                     {recentitem ('#development')}
                     {recentitem ('#frontend')}


            

        </div>
    )
}

export default Sidebar
