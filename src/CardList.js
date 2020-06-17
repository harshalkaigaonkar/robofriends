import React from 'react';
import Card from './Card';
// import Siblings from './Siblings';

const CardList = ({ Siblings }) => {
    return(
        <div>
         { 
             Siblings.map((user,i) => {
                 return (
                     <Card 
                     key ={i}
                     id={Siblings[i].id} 
                     username={Siblings[i].username} 
                     email={Siblings[i].email}
                     />
                 )
             })  
         }
        </div>
    );
}
export default CardList;