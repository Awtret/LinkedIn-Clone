import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"

import"./appbody.css"

function App() {
  return (
    <>
    <div>
      <Header/>
      
    </div>
    <div className="appbody">
        <Sidebar/>
        <Feed/>
        <Widgets />

    </div>
    </>
  )
}

export default App ;


