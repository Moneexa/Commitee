import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './shared/header'
import CommitteeList from './shared/CommitteeList'
import {CommitteeAttendance} from './shared/CommitteeAttendance'
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />

      <CommitteeList>
        <Router>

          <Link to="/committeeAtt">
            <h4 component={Link} to="/committeeList" className="m-0 Comitteee_name">CommitteeName</h4>
          </Link>
          <Switch>

            <Route exact path="/committeeAtt">
              <CommitteeAttendance />
            </Route>
          </Switch>
        </Router>
      </CommitteeList>
    </div>
  );
}

export default App;
