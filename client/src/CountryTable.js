import useFetch from "./useFetch"
import React from 'react';
import Country from './Country'

const api = "https://worldcup.sfg.io/teams/results"
const CountryTable = () => {
    const data = useFetch(api);
    return(
        <table>
            
        <thead>
          <tr>
          <th>Country</th>
          <th>Group Letter</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Games Played</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
          <th>Goal Differential</th>
          </tr>
        </thead>
        <tbody>
        {data.map(country => (
          <Country key={country.id}
             name={country.name}
             group ={country.group_letter}
             wins={country.wins}
             draws={country.draws}
             losses={country.losses}
             games = {country.games_played}
             points = {country.points}
             goals_for = {country.goals_for}
             goals_against = {country.goals_against}
             goalDiff = {country.goal_differential}
          />
        ))}
        </tbody>
      </table>
        
    )
}

export default CountryTable;