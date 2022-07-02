import React from 'react';
import Title from './Todo/Title';
import InputBar from './Todo/InputBar';
import ListDescription from './Todo/ListDescription';
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="whiteBox">
      <div className="content">
        <Title />
        <InputBar />
        <ListDescription />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
