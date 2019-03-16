import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import './login.css';

const LoginComponent = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);


  return (<div class="container">
    <div>
      <div class="header">
          <legend>Internal Sign In</legend>
      </div>
      <div class="jumbotron" id="rcorners1">
        <h4>Please Enter your email and password</h4>
        <form id="rcorners2" class="form-horizontal" >
          <div class="form-group">
            <div class="col-sm-6">
              <label>Email:</label>
              <div>
                <input class="form-control" id="email" placeholder="Enter email" type="email" 
                name="username" onChange={(e)=>{
                  setEmail(e.target.value);
                }}/>
              </div>
              {submit && !email && <div>required</div>}
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-6">
              <label>Password:</label>
              <input type="password" name="password" class="form-control" id="pwd" placeholder="Enter password" 
              onChange={(e)=>{
                setPassword(e.target.value);
                }} />
              {submit && !password && <div>required</div>}
            </div>
          </div>
          <div class="form-group">
            <div class=" col-sm-6">
              <div class="alert alert-warning">
                <strong><i class="fa fa-info-circle" aria-hidden="true"></i></strong> This site uses Cookies. By continuing
                this site you are agreeing to our <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class=" col-sm-6">
              <button type="button" class="button buttonlogin" onClick= {()=>{
                setSubmit(true);
                if(email && password) {
                  history.push('/add-client');
                }
              }}>Sign in</button>
              <a href="#">Reset Password</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>);
}

export const Login = withRouter(LoginComponent);