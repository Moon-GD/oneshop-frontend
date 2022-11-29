import "../css/Admin.css"
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function Admin() {
  // Toggle Function
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // Go Main
  let navigate = useNavigate();
  function adminGoHome() {
    navigate("/")
  }
  
  // Fade In Effect
  useEffect(() => {
    let adminMain = document.querySelector("#adminMain")
    adminMain.style.opacity = 0
    for(let i = 1;i<=100;i++) {
      setTimeout(() => {
        adminMain.style.opacity = 0.01 * i
      }, 10 * i)
    }
  }, [])

  return (
    <div id="adminMain">
      <div>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">News 등록</AccordionHeader>
            <AccordionBody accordionId="1">
              <h3 className="admin-h3">새로운 뉴스를 등록하는 공간입니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/news/save"
                method="POST"
                enctype="multipart/form-data"
              >
                <label for="news_title">title :&nbsp;</label>
                <input id="news_title" name="title"></input>
                <label for="news_content">content :&nbsp;</label>
                <input id="news_content" name="content"></input>
                <br></br>
                <label for="news_image">imageFIle :&nbsp;</label>
                <input
                  id="news_image"
                  type="file"
                  multiple="multiple"
                  name="imageFile"
                ></input>
                <button className="btn_admin_submit" type="submit">
                  news 등록
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">News 조회</AccordionHeader>
            <AccordionBody accordionId="2">
              <h3 className="admin-h3">현재까지 등록된 News를 확인합니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/news"
                method="GET"
                enctype="multipart/form-data"
              >
                <button className="btn_admin_submit" type="submit">
                  news 조회
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">News 정보 변경</AccordionHeader>
            <AccordionBody accordionId="3">
              <h3 className="admin-h3">기존 News 정보를 변경합니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/news/modify/0"
                method="POST"
                enctype="multipart/form-data"
              >
                <label for="news_title_put">회원 이름 :&nbsp;</label>
                <input id="news_title_put" name="title"></input>
                <label for="news_id_put">회원 아이디 :&nbsp;</label>
                <input id="news_id_put" name="content"></input>
                <br></br>
                <label for="news_image_put">imageFIle :&nbsp;</label>
                <input
                  id="news_image_put"
                  type="file"
                  multiple="multiple"
                  name="imageFile"
                ></input>
                <button className="btn_admin_submit" type="submit">
                  News 정보 변경
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Works 등록</AccordionHeader>
            <AccordionBody accordionId="4">
              <h3 className="admin-h3">새로운 작품을 등록합니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/work/save"
                method="POST"
                enctype="multipart/form-data"
              >
                <label for="work_title">작품 제목 :&nbsp;</label>
                <input id="work_title" name="title"></input>
                <label for="news_author">작가 이름 :&nbsp;</label>
                <input id="news_author" name="author"></input>
                <label for="news_description">설명 :&nbsp;</label>
                <input id="news_description" name="description"></input>
                <br></br>
                <label for="news_image">imageFIles :&nbsp;</label>
                <input
                  id="news_image"
                  type="file"
                  multiple="multiple"
                  name="imageFiles"
                ></input>
                <button className="btn_admin_submit" type="submit">
                  works 등록
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">Works 조회</AccordionHeader>
            <AccordionBody accordionId="5">
              <h3 className="admin-h3">지금까지 등록된 작품을 조회합니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/work"
                method="GET"
                enctype="multipart/form-data"
              >
                <button className="btn_admin_submit" type="submit">
                  작품 조회
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">Shop 등록</AccordionHeader>
            <AccordionBody accordionId="6">
              <h3 className="admin-h3">새로운 상품을 등록합니다.</h3>
              <form
                action="http://3.36.122.123:8080/api/items/register"
                method="POST"
                enctype="multipart/form-data"
              >
                <label for="item_name">상품 이름 :&nbsp;</label>
                <input id="item_name" name="itemName"></input>
                <label for="item_price">상품 가격 :&nbsp;</label>
                <input id="item_price" name="price"></input>
                <label for="item_quantity">상품 수량 :&nbsp;</label>
                <input id="item_quantity" name="stockQuantity"></input>
                <label for="item_artist">상품 작가 :&nbsp;</label>
                <input id="item_artist" name="artist"></input>
                <label for="item_description">상품 설명 :&nbsp;</label>
                <input id="item_description" name="description"></input>
                <label for="item_series">상품 카테고리 :&nbsp;</label>
                <input id="item_series" name="itemSeries"></input>
                <br></br>
                <label for="item_image">imageFIles :&nbsp;</label>
                <input
                  id="item_image"
                  type="file"
                  multiple="multiple"
                  name="images"
                ></input>
                <button className="btn_admin_submit" type="submit">
                  shops 등록
                </button>
              </form>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      <button
        className="btn_admin_submit"
        id="btn_admin_go_home"
        onClick={() => {
          adminGoHome();
        }}
      >
        홈 이동
      </button>
    </div>
  );
}