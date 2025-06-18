import React from 'react'
import './Sidebar.css'
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
 import sports from "../../assets/sports.png"
 import jack from '../../assets/jack.png'
 import tom from '../../assets/tom.png'
 import simon from '../../assets/simon.png'
function Sider({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category===0?"active" : ""}`} onClick={()=>setCategory(0)} >
          <img src={home} alt="" />
          <p>Home</p>
          </div>
          <div className={`side-link ${category===20?"active" : ""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category===17?"active" : ""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        
      </div>
      <hr />
      <div className="subsribed-list">
        <h3>Subscribed</h3>
      <div className="side-link">
          <img src={simon} alt="" />
          <p>Mr beast</p>
        </div>  <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>  <div className="side-link">
          <img src={tom} alt="" />
          <p>just Debug</p>
        </div>
      </div>
      
    </div>
  )
}
export default Sider
