import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          {this.props.header}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  header: React.PropTypes.string.isRequired
};

export default Header;
