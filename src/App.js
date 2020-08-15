import React from 'react';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import Count from './components/Count';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <Filter />
      <TodoList />
      <AddTask />
      <Count />
    </div>
  );
}

export default App;
