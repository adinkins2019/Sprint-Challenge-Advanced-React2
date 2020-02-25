import React from 'react';
const Country = ({name, group, wins,
    draws, losses, games, points, 
    goals_for, goals_against,
    goalDiff}) => {
  
      return (
        <div>
          <p>Country: {name}</p>
          <p>Group: {group}</p>
          <p>Wins: {wins}</p>
          <p>Draws: {draws}</p>
          <p>Losses: {losses}</p>
          <p>Games Played: {games}</p>
          <p>Points Made: {points}</p>
          <p>Goals Made: {goals_for}</p>
          <p>Goals Allowed: {goals_against}</p>
          <p>Goal Differential {goalDiff}</p>
        </div>
      )
  
    }
  
    export default Country;