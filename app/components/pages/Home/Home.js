import React from 'react';
import { Header, Footer } from '../../views';
import { FilterBar } from '../../containers';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBarOpen: false
    };
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  render() {
    let filterProps = [
      {
        property: 'Course',
        options: ['one', 'two', 'three']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Type of Food',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Ethnicity/Origin',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Themes/Holidays',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Prep Method',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Difficulty',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Serving Temp',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Meals',
        options: ['four', 'five', 'six']
      }
    ];

    return (
      <div className='root'>
        <Header
          header={'Audrey\'s Great Big Book of Food'}
        />
        <div className='content'>
          <FilterBar
            filterProps={filterProps}
          />
          <div className='recipelist'>
            List
            Of
            Things
          </div>
          <div className='recipe'>
            This is where the recipe goes
          </div>
        </div>
        <Footer
          footer={'this is the footer'}
        />
      </div>
    );
  }
}

export default Home;
