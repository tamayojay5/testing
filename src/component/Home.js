import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>

            <h1>Home</h1>
            <Link to='/login' >Login</Link>
            <Link to='/register'>Register</Link>
            </>
         );
    }
}
 
export default Home;