import {Nav, NavItem, NavLink} from 'reactstrap';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import '../css/NavBar.css';
import About from './About';

function NavBar() {
  // true : 자식 요소 렌더링 중
  // flase : 자식 요소 안 보이는 상태
  let newsFlag = false, worksFlag = false, shopFlag = false

  // 나중에 백엔드에서 받아올 정보 저장할 배열
  let newsChild = [2022, 2023, 2024]
  let worksChild = [
    'LEE-JOON-TAE', 'KIM-HYEON-JHO', 'JANG-HYEOK-JUN'
  ]
  let shopChild = ["series 1 (2022)", "series 2 (2022)"];

  // 자식 추가하는 함수
  function clickCategory(key) {
    let copyList = ''
    let flag = ''

    if(key === 'news') {
      copyList = newsChild
      newsFlag = !newsFlag;
      flag = newsFlag;
    }
    else if(key === 'shop') {
      copyList = shopChild;
      shopFlag = !shopFlag;
      flag = shopFlag;
    }
    else if(key === 'works') {
      copyList = worksChild;
      worksFlag = !worksFlag;
      flag = worksFlag;
    }

    if (flag) {
      const parentElement = document.querySelector("#" + key);
      for (let i = 0; i <= copyList.length; i++) {
        const element = document.createElement("span");
        element.className = "childs";
        element.textContent = copyList[i];
        parentElement.appendChild(element);
      }
    } 
    else {
      const parentElement = document.querySelector("#" + key);
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
      }
    }
  }

  return (
    <>
      <Nav vertical className="left">
        <NavItem>
          <NavLink href="#" className="nav__link">
            <h3>login</h3>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="nav__link">
            <Link to="/about" className="nav__link">
              <h3>about</h3>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="nav__link" onClick={() => { clickCategory("news");}}>
            <h3>news</h3>
            <div id="news"></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className="nav__link"
            onClick={() => {
              clickCategory("works");
            }}
          >
            <h3>works</h3>
            <div id="works"></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className="nav__link"
            onClick={() => {
              clickCategory("shop");
            }}
          >
            <h3>shop</h3>
            <div id="shop"></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="nav__link">
            <h3>c/s</h3>
          </NavLink>
        </NavItem>
        <Outlet></Outlet>
      </Nav>
    </>
  );
}

export default NavBar;