import React, { Component } from 'react';
import Axios from 'axios';

class Register extends Component {

    handleSubmit= event => {
        event.preventDefault();

        const data = {
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword,
        }
        
        Axios.post('https://localhost:8000/register', data)
            .then(res => {
                console.log(res)
            }
        ).catch(
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
                            type="email" 
                            placeholder="Email" 
                            onChange={event => this.email = event.target.value}
                        />
                        
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={event => this.password = event.target.value}
                        />
                        
                        <input 
                            type="password" 
                            placeholder="Comfirm Password" 
                            onChange={event => this.confirmPassword = event.target.value} 
                        />
                                            
                        <button className="btn btn-primary btn-block">Login</button>


                    </form>

            </>
         );
    }
}
 
export default Register;