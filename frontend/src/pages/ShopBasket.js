import '../css/ShopBasket.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ShopBasket () {
  let [counts, setCounts] = useState([1, 2]);
  let [prices, setPrices] = useState([5000, 10000]);
  let [shippings, setShippings] = useState([2000, 1000])
  
  let [sum, setSum] = useState(0);
  let [itemsSum, setItemsSum] = useState(0);
  let [shipSum, setShippingSum] = useState(0);

  // Execute After Page Loaded
  useEffect(() => {
    console.log(shippings.length)
    if(shippings.length === 0) {console.log('hi'); return ;}
    let itemsPrices = 0;
    let deliveryPrices = 0;

    for (let i = 0; i < counts.length; i++) {
      itemsPrices += counts[i] * prices[i];
    }

    // 배열 길이가 0일 때도 예외처리 해주기!!
    // reduce 함수는 배열의 길이가 0이면 error
    deliveryPrices += shippings.reduce(function add(deliveryPrices, curValue) {
      return deliveryPrices + curValue;
    });

    // state 반영 (총 금액, 배송비, 주문 금액)
    setItemsSum(itemsPrices);
    setShippingSum(deliveryPrices);
    setSum(itemsPrices + deliveryPrices);
  }, [])

  let navigate = useNavigate();

  let goHome = () => {
    navigate("../");
  }

  let goShop = () => {
    navigate("../shop");
  }

  // Close Button Function
  let deleteRow = (event) => {
    let parentDom = event.currentTarget.parentNode;
    parentDom.remove();
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
          <h4>{counts[0]}개</h4>
          <h4 basket-item-price>{prices[0]}원</h4>
          <h4>{shippings[0]}원</h4>
          <span
            class="close"
            onClick={(event) => {
              deleteRow(event);
            }}
          >
            &times;
          </span>
        </div>
        <div class="basket-row">
          <img
            src={require("../images/10.jpg")}
            class="basket-item-info"
            alt="상품 이미지"
          ></img>
          <h4>{counts[1]}개</h4>
          <h4>{prices[1]}원</h4>
          <h4>{shippings[1]}원</h4>
          <span
            class="close"
            onClick={(event) => {
              deleteRow(event);
            }}
          >
            &times;
          </span>
        </div>
        <div class="calc-row">
          <span>총 금액 : {itemsSum}원</span>
          <span>배송비 : {shipSum}원</span>
          <span>주문 금액 : {sum}원</span>
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