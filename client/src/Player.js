import React from 'react'

const Player = ({name, country, searches}) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>{country}</p>
            <p>{searches}</p>
        </div>
    )
}

export default Player