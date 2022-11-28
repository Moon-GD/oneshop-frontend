import '../css/Register.css';
import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';

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

      if(name === '' || ID === '' || PW === '' || Email === '') {
        return
      }

    fetch("http://3.36.122.123:8080/api/member/signup", {
      method: "POST", 
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      // 성공한 경우
      if(res.status === 200) {
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
      // 실패한 경우
      else {
        let registerAlert = document.querySelector("#register-alert");
        registerAlert.style.display = 'block'

        for(let i = 1;i<=100;i++) {
          setTimeout(() => {
            registerAlert.style.opacity = 0.01 * i;
          }, i * 2.5)
        }

        for (let i = 100; i >= 1; i--) {
          setTimeout(() => {
            registerAlert.style.opacity = 0.01 * i;
            if(i === 1) {
              registerAlert.style.opacity = 0;
              registerAlert.style.display = "none";
            }
          }, (100 - i) * 5 + 2250);
        }

        let IDForm = document.querySelector("#formID");
        IDForm.value = '';
        IDForm.focus();
      }
    })
  }

  return (
    <>
      <section id="register">
        <Alert color="warning" id="register-alert">
          이미 존재하거나 올바르지 않은 계정입니다.
        </Alert>
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
        <Button
          className="button-register"
          id="btn_register"
          onClick={registerPopOut}
        >
          CREATE
        </Button>
      </section>
    </>
  );
}

export default Register;