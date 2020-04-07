import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './shared/header'
import CommitteeList from './shared/CommitteeList'

function App() {
  return (
    <div className="App">
      <Header />
       <CommitteeList /> 
    </div>
  );
}

export default App;
