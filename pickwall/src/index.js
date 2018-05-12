import React from 'react';

import ReactDOM from 'react-dom';

const taskList = ['Learn React Details','Create a simple working WebApp','Implement Oauth2 ', 'Implement NoteShelf client'];

const element = React.createElement('ol',null,
      taskList.map((task,index) => React.createElement('li',{key: index},task))
    );

ReactDOM.render(element, document.getElementById('root'));
