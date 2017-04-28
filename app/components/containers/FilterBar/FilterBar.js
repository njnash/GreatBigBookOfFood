import React from 'react';
import styles from './Filterbar.css';
import { Filter } from '../../views';

class Filterbar extends React.Component {
  render() {
    const { filterProps } = this.props;
    return (
      <div>
        { filterProps.map((filter) => {
          return (
            <div className='filter'>
              <Filter
                property={filter.property}
                options={filter.options}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

Filterbar.propTypes = {
  filterProps: React.PropTypes.array.isRequired
};

export default Filterbar;
