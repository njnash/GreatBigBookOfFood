import React from 'react';
import { Header, Footer } from '../../views';
import { FilterBar } from '../../containers';
import styles from './Home.css';

class Home extends React.Component {
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
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Key Ingredient',
        options: ['four', 'five', 'six']
      },
      {
        property: 'Last',
        options: ['four', 'five', 'six']
      }
    ];

    return (
      <div className='root'>
        <Header
          header={'Audrey\'s Great Big Book of Food'}
        />
        <div className='content'>
          <div className='filterbar'>
            <FilterBar
              filterProps={filterProps}
            />
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
