import React,{Component} from 'react';
import List from './List';
import Title from './Title';
import CustomList from './CustomList';

class Main extends Component {
    render() {
      return (
        <div >
          <Title name="My To-Do List"/>

          <List/>

          <CustomList tasks={["Todo","Todo","Tododododo","Tododododoooooo"]}/>

        </div>
      );
    }
}

export default Main
