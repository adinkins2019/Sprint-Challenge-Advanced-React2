import React from 'react';
import {Card, Flag}  from 'semantic-ui-react'

const Country = ({name, group, wins,
    draws, losses, games, points, 
    goals_for, goals_against,
    goalDiff}) => {
  
      return (
        <Card>
          <Card.Content>
          <Card.Header>{name} <Flag name={name.toLowerCase()}/></Card.Header>
          <Card.Meta>Group: {group}</Card.Meta>
          <Card.Description>
            <p>Wins: {wins}</p>
            <p>Draws: {draws}</p>
            <p>Losses: {losses}</p>
            <p>Games Played: {games}</p>
            <p>Points Made: {points}</p>
            <p>Goals Made: {goals_for}</p>
            <p>Goals Allowed: {goals_against}</p>
            <p>Goal Differential {goalDiff}</p>
          </Card.Description>
          </Card.Content>
        </Card>
      )
  
    }
  
    export default Country;