import { React, Component } from 'react';
import { withRouter  } from 'react-router-dom';

 class Login extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.directRegister = this.directRegister.bind(this);
        this.directHome = this.directHome.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.id;
        
        console.log(name);
        this.setState({[name]: value});
    }

    directRegister = () => {
        let path = '/register';
        this.props.history.push(path);
    }

    directHome = (e) => {
        // need to add logic
        e.preventDefault();
        let path = '/home';
        this.props.history.push(path);
        

        const loginInfo = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(loginInfo);
    }
    
    render() {
        return(
            <div>
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" onSubmit={this.directHome}>
                                        <h3 className="text-center text-primary">Login</h3>
                                        <div className="form-group">
                                            <label for="username" className="text-primary">Username:</label>
                                            <input type="text" placeholder="Username" name="username" id="username" 
                                            className="form-control" onChange={this.handleChange}  value={this.state.username}/>
                                        </div>
                                        <div className="form-group">
                                             <label for="password" className="text-primary">Password:</label>
                                             <input type="password" placeholder="Password" name="password" id="password" 
                                             className="form-control" onChange={this.handleChange} value={this.state.password}/>
                                        </div>
                                        <div className="form-group">
                                            <div className="loginButtonContainer" role="group">
                                                <button type="submit" name="submit" className="btn btn-primary btn-lg loginBtn">Login</button>
                                                <button type="submit" name="registerButton"
                                                className="btn btn-lg btn-success registerBtn">Register Account</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
    
}

export default withRouter(Login);
