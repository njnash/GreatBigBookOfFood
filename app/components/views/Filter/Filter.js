import React from 'react';
import styles from './Filter.css';

class Filter extends React.Component {
  render() {
    const { property, options } = this.props;

    return (
      <div>
        <div className='property_header'>
          {property}
        </div>
        <div className='styled-select'>
          <select name={property + '_options'} >
            { options.map((option) => {
              return (
                <option value={option}>{option}</option>
              );})
            }
          </select>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  property: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired
};

export default Filter;
