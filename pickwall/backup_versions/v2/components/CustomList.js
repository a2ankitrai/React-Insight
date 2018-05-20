import React,{Component} from 'react';

class CustomList extends Component {

    render(){
      return (
        <ol>
            { this.props.tasks.map((task,key) => <li key={key}>{task}</li>)}
        </ol>
      );
    }
}

export default CustomList
