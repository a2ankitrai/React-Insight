import React, {Component} from 'react';

import ReactDOM from 'react-dom';

const taskList = ['Learn React Details', 'Create a simple working WebApp', 'Implement Oauth2 ', 'Implement NoteShelf client'];

//Creating classes that extends Component and reusing them

class List extends Component {

  render() {
    return (<ol>
      {taskList.map((task, key) => <li key={key}>{task}</li>)}
    </ol>);
  }
}

class CustomList extends Component {

  render() {
    return (<ol>
      {this.props.tasks.map((task, key) => <li key={key}>{task}</li>)}
    </ol>);
  }
}

class Title extends Component {

  render() {
    return (<h1>{this.props.name}</h1>);
  }
}

class Main extends Component {
  render() {
    return (<div >
      <Title name="My To-Do List"/>

      <List/>

      <CustomList tasks={["Todo", "Todo", "Tododododo", "Tododododoooooo"]}/>

    </div>);
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
