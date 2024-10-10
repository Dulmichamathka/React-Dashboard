import ContentTop from "../../component/ContentMain/ContentTop/ContentTop";
import "./Content.css";
import ContentMain from "../../component/ContentMain/ContentMain"
import React from 'react'
import Cards from "../../component/Cards/Cards";

const Content = () => {
  return (
    <div className="main-content">
       <ContentTop/>
       <ContentMain/>
      
       
    </div>
  )
}

export default Content