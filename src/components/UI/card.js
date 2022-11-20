import React from 'react';
import './card.css';

// function Card({className,children}){
//   const classes = 'card ' + className;

//   return <div className={classes}>
//    {children}
//   </div>;
// }

function Card(props){
  const classes = 'card ' + props.className;

  return <div className={classes}>
   {props.children}
  </div>;
}
export default Card;