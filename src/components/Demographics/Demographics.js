import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js'
import './Demographics.css';

ReactChartkick.addAdapter(Chart);

class Demographics extends Component {

  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  }

  render() {
    const data = this.props.entries.reduce((a, entry) => {
      if (entry.isMale) {
        a[0][1] = a[0][1] + 1;
      } else {
        a[1][1] = a[1][1] + 1;
      }
      return a;
    }, [['Male', 0], ['Female', 0]]);
    return (
      <div className="Demographics">
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body> 
          <PieChart data={data} />
          </Modal.Body>
        </Modal>  
      </div>
    );
  }
}

export default Demographics;
