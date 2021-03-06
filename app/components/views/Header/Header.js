import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        {this.props.header}
      </div>
    );
  }
}

Header.propTypes = {
  header: React.PropTypes.string.isRequired
};

export default Header;
