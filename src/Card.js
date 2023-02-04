import React from 'react';

import './Card.css'
const Card = (props) => {
        return (
          <div className="col-lg-3 ms-0">
            <div className="card my-2 bg-info mx-0 ">
              <img
                alt="robots"
                src={`https://robohash.org/${props.id}`}
                className="card-img top"
              />
              <div className="text-center pt-2">
                <h4 className="card-title fw-bolder">{props.name}</h4>
              </div>
              <div className="text-center pb-2">
                <p className="card-text">{props.email}</p>
              </div>
            </div>
          </div>
        );
} 

    
        
    

 
export default Card;


