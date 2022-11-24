import '../css/ShopBasket.css'
import { useNavigate } from 'react-router-dom';

export default function ShopBasket () {
  let navigate = useNavigate();

  let goHome = () => {
    navigate("../");
  }

  let goShop = () => {
    navigate("../shop");
  }

  return (
    <div class="main">
      <section class="basketList">
        <h1
          id="shopBasket-logo"
          onClick={() => {
            goHome();
          }}
        >
          ED<span>papershop</span>
        </h1>
        <hr></hr>
        <h2>장바구니</h2>
        <div id="first-row">
          <h4>상품 정보</h4>
          <h4>상품 개수</h4>
          <h4>상품 금액</h4>
          <h4>배송비</h4>
        </div>
        <div class="basket-row">
          <img
            src={require("../images/1.jpg")}
            class="basket-item-info"
            alt="상품 이미지"
          ></img>
          <h4>1개</h4>
          <h4 basket-item-price>20,000원</h4>
          <h4>3,000원</h4>
          <span class="close">&times;</span>
        </div>
        <div class="basket-row">
          <img
            src={require("../images/10.jpg")}
            class="basket-item-info"
            alt="상품 이미지"
          ></img>
          <h4>2개</h4>
          <h4>2,000원</h4>
          <h4>5,000원</h4>
          <span class="close">&times;</span>
        </div>
        <div class="calc-row">
          <span>총 금액 : 22,000원</span>
          <span>배송비 : 8,000원</span>
          <span>주문 금액 : 30,000원</span>
        </div>
        <div class="button-row">
          <button
            id="btn-go-shop"
            onClick={() => {
              goShop();
            }}
          >
            쇼핑하기
          </button>
          <button id="btn-go-purchase">구매하기</button>
        </div>
      </section>
    </div>
  );
}