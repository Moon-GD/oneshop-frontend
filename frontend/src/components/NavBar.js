import { Nav, NavItem, NavLink } from 'reactstrap'
<<<<<<< HEAD
import { Link, Outlet } from 'react-router-dom'
import '../css/NavBar.css'
=======
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import '../css/NavBar.css'
import About from '../pages/About'
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1

function NavBar() {
    // true : 자식 요소 렌더링 중
    // flase : 자식 요소 안 보이는 상태
    let newsFlag = false,
        worksFlag = false,
        shopFlag = false

    // 나중에 백엔드에서 받아올 정보 저장할 배열
    let newsChild = [2022, 2023, 2024]
    let worksChild = ['LEE-JOON-TAE', 'KIM-HYEON-JHO', 'JANG-HYEOK-JUN']
    let shopChild = ['series 1 (2022)', 'series 2 (2022)']

    // 자식 추가하는 함수
    function clickCategory(key) {
        let copyList = ''
        let flag = ''

        if (key === 'news') {
            copyList = newsChild
            newsFlag = !newsFlag
            flag = newsFlag
        } else if (key === 'shop') {
            copyList = shopChild
            shopFlag = !shopFlag
            flag = shopFlag
        } else if (key === 'works') {
            copyList = worksChild
            worksFlag = !worksFlag
            flag = worksFlag
        }

        if (flag) {
            const parentElement = document.querySelector('#' + key)
            for (let i = 0; i <= copyList.length; i++) {
                const element = document.createElement('span')
                element.className = 'childs'
                element.textContent = copyList[i]
                parentElement.appendChild(element)
            }
        } else {
            const parentElement = document.querySelector('#' + key)
            while (parentElement.firstChild) {
                parentElement.removeChild(parentElement.firstChild)
            }
        }
    }

    // 로그인 페이지 가는 함수
    function goLogin() {
<<<<<<< HEAD
        let navbarLogin = document.querySelector('#navbar__login')
        if (navbarLogin.textContent === 'logout') {
            // 사용자 정보 안 보이게 처리
            let userInfo = document.querySelector('#userinfo-area')
            userInfo.style.opacity = 0
            userInfo.style.display = 'none'

            // navbar 글자 login으로 변경
            navbarLogin.textContent = 'login'

            return
        }

        // blur 효과
        let blurDiv = document.querySelector('.blur')
        let navBar = document.querySelector('#navbar')
        navBar.style.opacity = 0.2
        blurDiv.style.display = 'block'

        // 광고판 애니메이션
        let adFrame = document.querySelector('.ad')
        adFrame.style.cssText = `margin-top: 3vh; z-index:3; position:relative;
    margin-left:2vw; width: 90%; height: 80%; background-color:#E4E4E4;
    transform:translateY(10vh) translateX(-10vw);
    transition-duration:1s;
    box-shadow: 0.6vh -0.3vh 5px #7c7c7c;`

        // 로그인 폼 천천히 등장
        setTimeout(() => {
            let loginForm = document.querySelector('#login')
            let closeButton = document.querySelector('.close-button')
            closeButton.style.display = 'block'
            loginForm.style.display = 'block'

            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    loginForm.style.opacity = i * 0.01
                }, i * 10)
            }
        }, 200)
    }

    return (
        <div id='navbar'>
            <Nav vertical className='left'>
                <NavItem>
                    <NavLink href='#' className='nav__link' onClick={goLogin}>
                        <h3 id='navbar__login'>login</h3>
=======
        let adFrame = document.querySelector('.ad')
        adFrame.style.cssText = `margin-top: 10vh;
  width: 90%;
  height: 60%;
  background-color:#E4E4E4;
  transform:translateY(10vh) translateX(-10vw);
  transition-duration:1s;
  box-shadow: 0.6vh -0.3vh 5px #7c7c7c;`
    }

    return (
        <>
            <Nav vertical className='left'>
                <NavItem>
                    <NavLink href='#' className='nav__link' onClick={goLogin}>
                        <h3>login</h3>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#' className='nav__link'>
                        <Link to='/about' className='nav__link'>
                            <h3>about</h3>
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href='#'
                        className='nav__link'
                        onClick={() => {
                            clickCategory('news')
                        }}
                    >
<<<<<<< HEAD
                        <Link to='/news' className='nav__link'>
                            <h3>news</h3>
                            <div id='news'></div>
                        </Link>
=======
                        <h3>news</h3>
                        <div id='news'></div>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href='#'
                        className='nav__link'
                        onClick={() => {
                            clickCategory('works')
                        }}
                    >
<<<<<<< HEAD
                      <Link to='/work' className='nav__link'>
                        <h3>works</h3>
                        <div id='works'></div>
                        </Link>
=======
                        <h3>works</h3>
                        <div id='works'></div>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href='#'
                        className='nav__link'
                        onClick={() => {
                            clickCategory('shop')
                        }}
                    >
<<<<<<< HEAD
                        <Link to='/shop' className='nav__link'>
                            <h3>shop</h3>
                            <div id='shop'></div>
                        </Link>
=======
                        <h3>shop</h3>
                        <div id='shop'></div>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#' className='nav__link'>
                        <h3>c/s</h3>
                    </NavLink>
                </NavItem>
                <Outlet></Outlet>
            </Nav>
<<<<<<< HEAD
        </div>
=======
        </>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
    )
}

export default NavBar
