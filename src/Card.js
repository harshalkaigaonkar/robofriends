import React from 'react';

const Card = (props) => {
    // destructuring
    const { username , email , id } = props;
    return(
        <div className = 'tc bg-light-green br3 pa4 ma2 grow bw2 shadow-5 dib'>
          <img src= {`https://robohash.org/${id}`} alt='my picture' />
          <div>
              <h2>{username}</h2>
              <p>{email}</p>
          </div>
        </div>
    );
}

export default Card ;