import React, { useState } from 'react'
import './Home.css'
import Sider from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Video from '../Video/Video'
function Home({sidebar}) {
  const [category,setCategory] = useState(0)
  return (
    <>
      <Sider sidebar = {sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar ? "" : "large-container"} `}>
      <Feed category={category}/>
      <Video />
     

      </div>
   
    </>
  )
}

export default Home
