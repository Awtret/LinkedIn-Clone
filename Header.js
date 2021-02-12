import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./header.css";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Headeroption from "./Headeroption" ;

function Header() {
    return (
        <div className="headers">
        <div className="header">
            
            <div className="header_left">
                <img src={process.env.PUBLIC_URL + "linkedin_img.jpg"} alt="linkedin" className="image"  />
            
                 <div className="search">
                 <div className="icon">   
                <SearchIcon />
                </div>
                <input type="text"  placeholder="Search"/>
                 </div>
                 </div>
            <div className="header_right">
                <Headeroption Icon={HomeIcon} title="home" />
                <Headeroption Icon={SupervisorAccountIcon } title="my network" />
                <Headeroption Icon={BusinessCenterIcon } title="jobs" />
                <Headeroption Icon={MessageIcon} title="messaging" />
                <Headeroption Icon={NotificationsIcon} title="notification" />
                
            </div>
            
        </div >
    

        </div>
    )
}

export default Header ;
