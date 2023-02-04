import React from 'react';
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox'

const App = () => {
    return (
      <div>
        <h1 className='text-uppercase text-center'>Robofriends</h1>
        <SearchBox/>
        <CardList robots={robots} />
      </div>
    );
}
export default App;