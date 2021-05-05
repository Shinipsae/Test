import React, { Component } from 'react';
import { Link } from 'react-router-dom' //****
import { GoogleLogin } from 'react-google-login';
import { Container,Row,Col } from 'react-bootstrap';
import './SignInUp.css';


const clientId = "600385616873-9ibcau1rto6jhqmrk8he88hh9tslhhj0.apps.googleusercontent.com"

class Login extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        name: '',
        provider: '',
    }
}
// Google Login
responseGoogle = (res) => {
    console.log(res)
}

// Login Fail
responseFail = (err) => {
    console.error(err);
}
    render(){ 
  return (
    <div className="body"> 
    <center>
    <Container fluid>
  <Row>
    <Col className="row1"><div className="input">
           <center>
         <h4 className="text1"> LOGIN </h4>
         <GoogleLogin
         className="googleLogin"
                    clientId={clientId}
                    buttonText="Google 로그인"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
                <h6>or your account</h6>
       <input type="id" id="inputid" className="form-control" placeholder="ID" name="id" style={{marginBottom:20}} onChange={this.handleChange}/>
       <input type="password" id="inputPhone" className="form-control" placeholder="비밀번호" name="phone" style={{marginBottom:20}} onChange={this.handleChange}/>
       {/* <Link to="./SignUp">  */}
     <button className="btn btn-lg btn-block" type="button" style={{backgroundColor:"#fffadd", color:"#102f57"}} onClick={this.handleOnClick}> 로그인 </button>
    {/* </Link> */}
    <h6 className="signup">no have account?</h6>
    </center></div>
</Col>
   <Col className="row2"><center>
   <button className="btn btn-lg btn-block" type="button" className="signupBtn" style={{backgroundColor:"#102f57", color:"#fffadd"}} onClick={this.handleOnClick}> 회원가입 </button>
   </center></Col>
  </Row>
</Container></center></div>
 );
}
}

export default Login;