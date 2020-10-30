import Axios from 'axios';
import React, { Component } from 'react';


class Login extends Component {

    handleSubmit = e => {
        e.preventDefaul();

        const data = {
            email: this.email,
            password: this.password
        };

        Axios.post('http://localhost:8008/login', data)
            .then(res => {
                console.log(res)
            }).catch(
                err => {
                    console.log(err)
                }
            )
    }

    render() { 
        return ( 
            <>

                    <form onSubmit={this.handleSubmit}>
                        
                        <input 
                            placeholder="Email" 
                            onChange={event => this.email = event.target.value}
                        />
                        
                        <input 
                            placeholder="Password" 
                            onChange={event => this.password = event.target.value}
                        />

                        <button className="btn btn-primary btn-block">Login</button>

                    </form>

            </>
         );
    }
}
 
export default Login;