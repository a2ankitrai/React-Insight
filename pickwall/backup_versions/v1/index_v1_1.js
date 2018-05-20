import React, {Component} from 'react';

import ReactDOM from 'react-dom';

const taskList = ['Learn React Details','Create a simple working WebApp','Implement Oauth2 ', 'Implement NoteShelf client'];

const element = React.createElement('ol',null,
      taskList.map((task,index) => React.createElement('li',{key: index},task))
    );

ReactDOM.render(element, document.getElementById('root'));

// through jsx

// Way 1
const elements2 = <ol>
          <li> {taskList[0]}</li>
          <li> {taskList[1]}</li>
          <li> {taskList[2]}</li>
    </ol>

 ReactDOM.render(elements2, document.getElementById('root'));

// Way 2
const elements3 =
              <div>
                <h1>To Do List</h1>
                <ol>
                    { taskList.map((task,key) => <li key={key}>{task}</li>)}
                </ol>
              </div>
ReactDOM.render(elements3, document.getElementById('root'));
