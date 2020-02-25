import React, {Component} from 'react';
import axios from 'axios';
import Player from './Player'
import Country from './Country'

const api = "http://localhost:5000/api/players";

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: [],
      countries: []
    }
  }
  componentDidMount(){
    axios
      .get(api)
      .then(response => {
        console.log(response);
        this.setState({players: response.data})
      })
      .catch(err => console.log(err))
    
     axios
     .get("https://worldcup.sfg.io/teams/results")
     .then(response => {
       console.log(response.data);
       this.setState({countries: response.data})
     } )
  }
  render() {
    return(
      <div>
        <header>
          <h1>Country Results</h1>
          {this.state.countries.map(country =>(
            <Country key={country.id}
                name={country.country}
                group = {country.group_letter}
                wins = {country.wins}
                draws = {country.draws}
                losses = {country.losses}
                points = {country.points}
                games = {country.games}
                goals_for = {country.goals_for}
                goals_against = {country.goals_against}
                goalDiff = {country.goal_differential}
                />

          ))}
          <h1>World Cup Players</h1>
        </header>
        <main>
          {/*<CountryTable />*/}

          {this.state.players.map(player => (
            <Player
             key={player.id}
             name={player.name}
             country={player.country}
             searches={player.searches} />
          ))}
        </main>
        <footer>
          <div>copyright &copy;2020. All Rights Reserved</div>
        </footer>
      </div>
    );
  }
}

export default App;
