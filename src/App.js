import React from 'react';
import { Switch, Router, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Layout, Footer } from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>

      </div>
      <div className='footer'>

      </div>
      
    </div>
  )
};

export default App;
