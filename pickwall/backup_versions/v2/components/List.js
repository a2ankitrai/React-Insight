import React,{Component} from 'react';

const taskList = ['Learn React Details','Create a simple working WebApp','Implement Oauth2 ', 'Implement NoteShelf client'];

class List extends Component {

    render(){
      return (
        <ol>
            { taskList.map((task,key) => <li key={key}>{task}</li>)}
        </ol>
      );
    }
}

export default List
