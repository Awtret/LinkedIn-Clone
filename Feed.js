import React,{useState,useEffect} from "react"
import "./feed.css" ;
import CreateIcon from '@material-ui/icons/Create';
import Inputoption from "./Inputoption";
import Post from "./Post"
import { db } from "./firebase";

function Feed() {
    
  
   

    
    return (
        <div className="feed">
            <div className="feed_inputcontainer">
                <div className="feed_input">
                    <CreateIcon />
                    
                        <input type="text" placeholder="Type Here"   />
                        <button type="submit" >Send</button>
                        
                </div>
                <div className="feed_inputoption">
                    <Inputoption/>
                </div>
            </div>

           
                <Post
                 name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />

                <Post 
                name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post 
                name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post   
                name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post
                 name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post
                 name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post
                 name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            
            <Post
                 name="Akshat Jhalani"
                decription="this is a test"
                message="it worked" />
            

            
        </div>
    )
}

export default Feed ;
