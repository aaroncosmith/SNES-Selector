import React from 'react';

const SingleGame = ({game, index}) => {
    return (
            <div>
                    <p>{game.id}</p>
                    <p>{game.name}</p>
                    <p>{game.rating}</p>
                    <p>Release date: {game.released} </p>
                    <p>Genre: {game.genre}</p>
                    <img src={game.background_image} alt="Game Screenshot"></img>
            </div>
        
    )
}

export default SingleGame;