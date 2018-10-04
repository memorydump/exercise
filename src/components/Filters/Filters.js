import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';
import cn from 'classnames';
import './Filters.css';

class Filters extends Component {
  static propTypes = {
    showAliveOnly: PropTypes.bool.isRequired,
    sortByPopularity: PropTypes.bool.isRequired,
  
    showAliveOnlyHandler: PropTypes.func.isRequired,
    sortByPopularityHandler: PropTypes.func.isRequired,
    showGenderDemographicsHandler: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="Filters">
      <label>Filters & Controls</label>
        <ButtonToolbar>
          <Button 
            className={cn({ active: this.props.showAliveOnly })}
            onClick={this.props.showAliveOnlyHandler}
          >Show alive only</Button>
          <Button 
            className={cn({ active: this.props.sortByPopularity })}
            onClick={this.props.sortByPopularityHandler}
          >Sort by popularity in Desc order</Button>
          <Button onClick={this.props.showGenderDemographicsHandler}>Show gender demographics</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Filters;