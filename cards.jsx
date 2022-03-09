import React from "react";
import '/index2.css';

function Card(props){
    console.log(props);
    return(
      <React.StrictMode>
  
  
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt="tcs" className='card__img'/>
          <div className='card__info'>
            <span className='card__category'> {props.title} </span>
            <h3 className='card__title'> {props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Apply now</button>
              </a>
            </div>
          </div>
          </div>
      
  
          
      
    </React.StrictMode>
    )
  }

  export default Card;