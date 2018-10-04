import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _ from 'lodash';

const SEAN_BEAN_REFERENCE = 'No more fields';

class Block extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isMale: PropTypes.number,
    culture: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.oneOfType([
                  PropTypes.number,
                  PropTypes.string
                ]).isRequired
  }

  fields = [
    { label: 'Name', name: 'name', visible: true },
    { label: 'Title', name: 'title', visible: false },
    { label: 'Sex', name: 'isMale', visible: false },
    { label: 'Culture', name: 'culture', visible: false },
    { label: 'DOB', name: 'dateOfBirth', visible: false }
  ];

  constructor(props) {
    super(props)
    this.state = { showHiddenFields: false }
    this.randomColor = `#${Math.random().toString(16).slice(2, 8)}`;
  }

  onClickHandler() {
    this.setState({ showHiddenFields: !this.state.showHiddenFields});
  }

  render() {
    const displayedFields = this.fields
      .filter((field) => (this.state.showHiddenFields || field.visible) && (this.props[field.name] || _.isInteger(this.props[field.name])))
      .map((field, i) => <li key={i}><span>{field.label}: </span>{this.props[field.name]}</li>);

    const seanBeanReference = this.state.showHiddenFields && displayedFields.length === 1 ? SEAN_BEAN_REFERENCE : ''
    
      return (
      <div 
        className={cn('Block', { expanded: this.state.showHiddenFields })} 
        onClick={this.onClickHandler.bind(this)}
        style={{ backgroundColor: this.randomColor }}>
        <ul>
          { displayedFields }
          { seanBeanReference }
        </ul>
      </div>
    );
  }
}

export default Block;