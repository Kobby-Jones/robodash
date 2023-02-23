import React, {Component} from 'react';
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends Component {
  state = {  } 
  render() { 
    return (
         <div>
        <h1 className='text-uppercase header text-center'>Robofriends</h1>
        <SearchBox/>
        <CardList robots={robots} />
      </div>
    );
  }
}
 
export default App;
