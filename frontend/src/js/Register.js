import '../css/Register.css';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

function Register() {
  function registerPopOut() {
    let loginForm = document.querySelector("#login");
    let registerForm = document.querySelector("#register");

    registerForm.style.display = "none";
    registerForm.style.opacity = 0;
    loginForm.style.display = "block";
    for(let i = 0;i<100;i++) {
      setTimeout(() => {
        loginForm.style.opacity = 0.01 * i;
      }, i * 10)
    }    
  }

  return (
    <section id="register">
      <h1 className="register-title">CREATE ACOUNT</h1>
      <Form>
        <FormGroup>
          <Label for="formName">Name</Label>
          <Input
            id="formName"
            name="Name"
            placeholder="Full Name"
            type="String"
          />
        </FormGroup>
        <FormGroup>
          <Label for="formID">UserID</Label>
          <Input
            id="formID"
            name="ID"
            placeholder="ID to use"
            type="ID"
            minLength={5}
          />
        </FormGroup>
        <FormGroup>
          <Label for="formPassword">Password</Label>
          <Input
            id="formPassword"
            name="password"
            placeholder="password"
            type="password"
            minLength={5}
          />
        </FormGroup>
        <FormGroup>
          <Label for="formEmail">E-mail</Label>
          <Input id="formEmail" name="email" placeholder="Email" type="email" />
        </FormGroup>
      </Form>
      <Button className="button-register" onClick={registerPopOut}>CREATE</Button>
    </section>
  );
}

export default Register;