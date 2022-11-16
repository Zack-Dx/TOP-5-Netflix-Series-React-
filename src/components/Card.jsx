import React from "react";
import Images from "./Images";
import Anchor from "./Anchor";
export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc} />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h1 className="card_title">{props.title}</h1>
         <Anchor href ={props.href}/>
        
            
          </div>
        </div>
      </div>
    </>
  );
}
