import { Form, FormGroup, Label, Input, Button, CloseButton } from "reactstrap";
import '../css/Login.css';

function Login() {
  function goBack() {
    let adFrame = document.querySelector(".ad");
    let loginForm = document.querySelector('#login');
    loginForm.style.opacity = 0;
    loginForm.style.display = 'none';
    setTimeout(() => {
      adFrame.style.cssText = `margin-top: 30vh; width: 90%;
      height: 35%; background-color:#E4E4E4;
      transform:rotateX(-10deg) rotateY(-30deg) rotateZ(4deg);
      box-shadow: 0.6vh -0.3vh 5px #7c7c7c; transition:1s`;
    }, 0)
  }

  return (
    <div id="login">
      <div className='close-button' onClick={goBack}>
        <CloseButton />
      </div>
      <h1 className="login-title">Login</h1>
      <Form className="login-form">
        <FormGroup>
          <Label for="exampleID">ID</Label>
          <Input id="exampleID" name="email" placeholder="아이디" type="ID" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
        </FormGroup>
      </Form>
      <div className="button-area">
        <Button className="login-btn">Login</Button>
        <Button className="login-btn">Register</Button>
      </div>
    </div>
  );
}

export default Login;