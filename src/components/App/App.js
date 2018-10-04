import React, { Component } from 'react';
import { Blocks, Filters, Demographics } from 'components';
import characters from 'characters.json';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    const people = 
      _.shuffle(characters)
      .map((person, i) => {
        person.sortOrder = i;
        return person;
      });
    this.state = { 
      people,
      showAliveOnly: false, 
      sortByPopularity: false, 
      showGenderDemographics: false }

      // bind here for a performance gain
      this.showAliveOnlyHandler = this.showAliveOnlyHandler.bind(this);
      this.sortByPopularityHandler = this.sortByPopularityHandler.bind(this);
      this.showGenderDemographicsHandler = this.showGenderDemographicsHandler.bind(this);
  }

  showAliveOnlyHandler() {
    this.setState({ showAliveOnly: !this.state.showAliveOnly });
  }

  sortByPopularityHandler() {
    this.setState({ sortByPopularity: !this.state.sortByPopularity });
  }

  showGenderDemographicsHandler() {
    this.setState({ showGenderDemographics: !this.state.showGenderDemographics })
  }

  render() {
    return (
      <div className="App">
        <Filters 
          showAliveOnlyHandler={this.showAliveOnlyHandler}
          sortByPopularityHandler={this.sortByPopularityHandler}
          showGenderDemographicsHandler={this.showGenderDemographicsHandler}
          showAliveOnly={this.state.showAliveOnly}
          sortByPopularity={this.state.sortByPopularity}
        />
        <Blocks 
          people={this.state.people}
          showAliveOnly={this.state.showAliveOnly}
          sortByPopularity={this.state.sortByPopularity}
        />
        <Demographics
          show={this.state.showGenderDemographics}
          handleClose={this.showGenderDemographicsHandler}
          entries={this.state.people}
        />
      </div>
    );
  }
}

export default App;
