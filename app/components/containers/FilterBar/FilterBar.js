import React from 'react';
import styles from './Filterbar.css';
import { Filter, SlideOut } from '../../views';

class Filterbar extends React.Component {
  render() {
    const { filterProps } = this.props;
    return (
      <div>
        <SlideOut
          children={
            <div className='filterbar'>
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
          }
        />
      </div>
    );
  }
}

Filterbar.propTypes = {
  filterProps: React.PropTypes.array.isRequired,
  open: React.PropTypes.bool
};

export default Filterbar;
