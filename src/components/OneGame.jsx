import React from 'react';

const OneGame = ({oneGame, index}) => {
        return (
                <div>
                        <p>Id: {oneGame.id}</p>
                        <p>{oneGame.name}</p>
                        <p>Rating: {oneGame.rating}</p>
                        <p>Release date: {oneGame.released} </p>
                        <p>Genre: {oneGame.genre}</p>
                        <img src={oneGame.background_image} alt="Game Screenshot"></img>
                </div>
        
        )
}

export default OneGame;