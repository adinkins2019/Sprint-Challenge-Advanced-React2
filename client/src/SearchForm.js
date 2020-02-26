import React from 'react'

const SearchForm = ({players}) => {

    return (
        <form>
            <select>
                players.map(player => (
                    console.log(player);
                ))
            </select>
        </form>
    )
}