import { Form, FormGroup, Label, Input, Button, CloseButton } from 'reactstrap'
import Register from './Register'
import '../css/Login.css'
import { Alert } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login() {
    let [ID, setID] = useState('')
    let [PW, setPW] = useState('')
    let flag = false
    const navigate = useNavigate()

    function loginIDChange(e) {
        setID(e.target.value)
    }

    function loginPWChange(e) {
        setPW(e.target.value)
    }

    // AD Frame 닫아주는 함수
    function goBack() {
        // blur 제거
        let navBar = document.querySelector('#navbar')
        let blurDiv = document.querySelector('.blur')
        navBar.style.opacity = 1
        blurDiv.style.display = 'none'

        // 로그인 폼 제거
        let loginForm = document.querySelector('#login')
        loginForm.style.opacity = 0
        loginForm.style.display = 'none'

        // 회원가입 폼 제거
        let registerForm = document.querySelector('#register')
        registerForm.opacity = 0
        registerForm.style.display = 'none'

        // X 표시 제거
        let closeButton = document.querySelector('.close-button')
        closeButton.style.display = 'none'

        // 광고판 원래대로
        let adFrame = document.querySelector('.ad')
        setTimeout(() => {
            adFrame.style.cssText = `margin-top: 30vh; width: 90%;
      height: 35%; background-color:#E4E4E4;
      transform:rotateX(-10deg) rotateY(-30deg) rotateZ(4deg);
      box-shadow: 0.6vh -0.3vh 5px #7c7c7c; transition:1s`
        }, 0)
    }

    // 로그인 Form 안 보이게 처리하고,
    // 회원가입 Form 띄워주는 함수
    function registerPop() {
        let loginForm = document.querySelector('#login')
        let registerForm = document.querySelector('#register')

        loginForm.style.opacity = 0
        loginForm.style.display = 'none'
        registerForm.style.display = 'block'

        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                registerForm.style.opacity = i * 0.01
            }, i * 10)
        }
    }

    // 사용자 로그인 처리 함수
    function doLogin() {
        const info = {
            userId: ID,
            password: PW,
        }

        fetch("http://3.36.122.123:8080/api/login", {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "unsafe_url",
        })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log("성공");
              let navbar_login = document.querySelector("#navbar__login");
              navbar_login.textContent = "logout";
              goBack();
            }
            // 로그인 실패 하는 경우
            else {
              if (flag) {
                return;
              }

              flag = true;

              console.log("실패");
              let loginModal = document.querySelector("#loginModal");
              loginModal.style.display = "block";
              for (let i = 1; i <= 100; i++) {
                setTimeout(() => {
                  loginModal.style.opacity = 1 - 0.01 * i;
                }, 10 * i);
              }

              setTimeout(() => {
                loginModal.style.display = "none";
                flag = false;
              }, 1200);

              return;
            }
            return response.json();
          })
          .then((loginInfo) => {
            console.log(loginInfo);
            if (loginInfo) {
              let userInfo = document.querySelector("#userinfo-area");
              userInfo.textContent = loginInfo.name + " 회원님 반갑습니다.";
              userInfo.style.display = "block";

              // 관리자 계정
              if (
                loginInfo.name === "이준태" &&
                loginInfo.userId === "__admin__"
              ) {
                // 관리자 페이지로 가는 버튼 생성 후 삽입
                let btnAdmin = document.createElement("button");
                btnAdmin.className = "btnBasket";
                btnAdmin.addEventListener("click", () => {
                  navigate("./admin");
                });
                btnAdmin.textContent = "관리자";
                userInfo.appendChild(btnAdmin);

                // 페이드인 효과
                for (let i = 0; i < 100; i++) {
                  setTimeout(() => {
                    userInfo.style.opacity = 0.01 * i;
                  }, i * 10);
                }
              } else {
                // 장바구니로 가는 버튼 생성 후 삽입
                let btnBasket = document.createElement("button");
                btnBasket.className = "btnBasket";
                btnBasket.addEventListener("click", () => {
                  navigate("./shopBasket");
                });
                btnBasket.textContent = "장바구니";
                userInfo.appendChild(btnBasket);

                // 페이드인 효과
                for (let i = 0; i < 100; i++) {
                  setTimeout(() => {
                    userInfo.style.opacity = 0.01 * i;
                  }, i * 10);
                }
              }
            }
          });
    }

    return (
        <>
            <div id='login'>
                <Alert color='warning' id='loginModal'>
                    <Alert color='light' id='nestedModal'>
                        로그인에 실패하였습니다.
                    </Alert>
                </Alert>
                <h1 className='login-title'>Login</h1>
                <Form className='login-form'>
                    <FormGroup>
                        <Label for='exampleID'>ID</Label>
                        <Input
                            onChange={loginIDChange}
                            id='exampleID'
                            name='email'
                            placeholder='아이디'
                            type='ID'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='examplePassword'>Password</Label>
                        <Input
                            onChange={loginPWChange}
                            id='examplePassword'
                            name='password'
                            placeholder='비밀번호'
                            type='password'
                        />
                    </FormGroup>
                </Form>
                <div className='button-area'>
                    <Button className='login-btn' onClick={doLogin}>
                        Login
                    </Button>
                    <Button className='login-btn' onClick={registerPop}>
                        Register
                    </Button>
                </div>
            </div>
            <Register></Register>
            <div className='close-button' onClick={goBack}>
                <CloseButton />
            </div>
        </>
    )
}

export default Login
