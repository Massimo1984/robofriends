//import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      }).then(users => {
        return this.setState({ robots: users });
      })

  }


  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value }) // settiamo il campo che viene variato nella ricerca della barra ricerca

  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); // filtriamo la ricerca della barra
    });
    if (!robots.length) {
      return (<h1 className='tc f1'>Loading</h1>)
    } else {
      return (
        <div className='tc'>
          <h1 className="tc f1"> RoboFriends</h1>

          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
