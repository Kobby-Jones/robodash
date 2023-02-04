import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = () => {
    const CardArray = robots.map((item, i) => {
        return (
            <Card
                key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
    })
    return (
      <div className="container ms-10 text-center">
        <div className="row">{CardArray}</div>
      </div>
    );
}
export default CardList;