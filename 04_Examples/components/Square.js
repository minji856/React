import React from 'react';
import "./Square.css";

/* props로 받을 때
const Square = (props) => {
    return (
      <button className="square" 
      onClick={()=>props.onClick()}>{props.value}</button>
    )
}
*/

const Square = ({onClick, value}) => {
    return (
      <button className="square" onClick={onClick}>{value}</button>
    )
}

export default Square;