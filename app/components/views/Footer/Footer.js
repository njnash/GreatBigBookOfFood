import React from 'react';
import styles from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        {this.props.footer}
      </div>
    );
  }
}

Footer.propTypes = {
  footer: React.PropTypes.string.isRequired
};

export default Footer;
