import React from 'react';
import styles from './SlideOut.css';

class SlideOut extends React.Component {

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  render() {
    const { filterProps, children } = this.props;
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={()=>{this.closeNav()}}>&times;</a>
          {children}
        </div>
        <div className='filter_button'>
          <span className='blah' onClick={()=>{this.openNav()}}>o</span>
        </div>
      </div>
    );
  }
}

SlideOut.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default SlideOut;
