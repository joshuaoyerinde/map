import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirtClass from './test/class1';
import NavTest from './test2/NavTest';
import Profile from './test2/Profile';
import Login from './test2/Login';
const RouterCom = () => {
    return (
      <React.Fragment>
          <Router>
            <Routes>
              <Route  path="/test" element={<FirtClass></FirtClass>} />
              <Route  path='/navtest' element={<NavTest/>}/>
              <Route  path='/' element={<Profile/>}/>
              <Route  path='/login' element={<Login/>}></Route>
              {/* Define more routes here */}
            </Routes>
          </Router>
      </React.Fragment>
    
    );

  };


  export default RouterCom;