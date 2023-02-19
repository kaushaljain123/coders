import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import UserDashboard from './screens/UserDashboard';
import Student from './screens/Students';
import AddStudent from './screens/AddStudent';
import Files from './screens/Files';

const App = () => {

  const data = JSON.parse(localStorage.getItem('userInfo'))
  console.log(data);
  const login = data && data.token ? true : false
  return (
    <Router>
      {login ? (
        <>
          <Header />
          <Route path='/dashboard' component={UserDashboard} exact />
          <Route path='/' component={UserDashboard} exact />
          <Route path='/students' component={Student} exact />
          <Route path='/add-students' component={AddStudent} exact />
          <Route path='/files' component={Files} exact />
        </>
      ) : (
        <>
          <Route path='/' component={LoginScreen} exact />
        </>
      )}
    </Router>
  );
}

export default App;
