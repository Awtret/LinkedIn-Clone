import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import "./widgets.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle) =>(
        <div className="widgets_article">
                <div className="widgets_articleleft">
                <FiberManualRecordIcon/>
                </div>
                <div className="widgets_articleright">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                    </div>

                </div>
                
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
               
                <InfoIcon/>

            </div>
           
            {newsArticle("Corona Virus New Updates","top news-999")}
            {newsArticle("Tesla Hits New Height","top news-999")}
            {newsArticle("Bitcoin Breaks All Time Records","top news-999")}
            {newsArticle("Floods In Uttrakhand","top news-999")}
            {newsArticle("React is the best Language","top news-999")}
            
        </div>
    );
}

export default Widgets
