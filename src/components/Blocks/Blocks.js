import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Block } from 'components';
import './Blocks.css';

const INITIAL_LOAD = 42;
const LOAD_MORE = 40;

class Blocks extends Component {

  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    showAliveOnly: PropTypes.bool.isRequired,
    sortByPopularity: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { numberOfPeopleToShow: INITIAL_LOAD }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
      &&
      this.state.numberOfPeopleToShow < this.props.people.length) {
        this.setState({ numberOfPeopleToShow: this.state.numberOfPeopleToShow + LOAD_MORE })
    }
  }

  render() {
    return (
      <div className="Blocks">
        {
          this.props.people
            .sort((a, b) => this.props.sortByPopularity
                ? b.popularity - a.popularity
                : a.sortOrder - b.sortOrder
            )
            .filter(person => this.props.showAliveOnly ? person.isAlive : true)
            .slice(0, this.state.numberOfPeopleToShow)
            .map((person, i) => {
              return <Block
                key={i} 
                name={person.name}
                title={person.title}
                culture={person.culture}
                dateOfBirth={person.dateOfBirth}
                popularity={person.popularity}
                isAlive={person.isAlive}
              />
            })
        }
      </div>
    );
  }
}

export default Blocks;