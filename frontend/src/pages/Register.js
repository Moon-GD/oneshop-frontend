import '../css/Register.css';
import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

function Register() {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const [Email, setEmail] = useState('');

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onIDChange(e) {
    setID(e.target.value);
  }

  function onPWChange(e) {
    setPW(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function registerPopOut() {
      const info = {
        name: name,
        userId: ID,
        password: PW,
        email: Email,
      }

    fetch("http://3.36.122.123:8080/api/member/signup", {
      method: "POST", 
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    }).then((message) => console.log(message)
    );

    let loginForm = document.querySelector("#login");
    let registerForm = document.querySelector("#register");

    registerForm.style.display = "none";
    registerForm.style.opacity = 0;
    loginForm.style.display = "block";
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        loginForm.style.opacity = 0.01 * i;
      }, i * 10);
    }
  }

  return (
    <section id="register">
      <h1 className="register-title">CREATE ACOUNT</h1>
      <Form>
        <FormGroup>
          <Label for="formName">Name</Label>
          <Input
            onChange={onNameChange}
            id="formName"
            name="Name"
            placeholder="Full Name"
            type="String"
          />
        </FormGroup>
        <FormGroup>
          <Label for="formID">UserID</Label>
          <Input
            onChange={onIDChange}
            id="formID"
            name="ID"
            placeholder="ID to use"
            type="ID"
          />
        </FormGroup>
        <FormGroup>
          <Label for="formPassword">Password</Label>
          <Input
            onChange={onPWChange}
            id="formPassword"
            name="password"
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="formEmail">E-mail</Label>
          <Input
            onChange={onEmailChange}
            id="formEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>
      </Form>
      <Button className="button-register" onClick={registerPopOut}>
        CREATE
      </Button>
    </section>
  );
}

export default Register;