import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import { robots } from '../robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  componentDidMount() {
    this.setState({ robots: robots })
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render () {
    const { robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(filteredRobots);
  return (
    <div className="tc">
      <h1 className="f1">Robo FriendsList</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
  }
}

export default App;