import '../css/ShopBasket.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom/client';

export default function ShopBasket () {
  let [counts, setCounts] = useState([1, 3]);
  let [prices, setPrices] = useState([5000, 10000]);
  let [shippings, setShippings] = useState([2000, 1000]);

  let [sum, setSum] = useState(0);
  let [itemsSum, setItemsSum] = useState(0);
  let [shipSum, setShippingSum] = useState(0);

  function updateFinalRow() {
    if (shippings.length === 0) {
      setShippingSum(0)
      setItemsSum(0)
      setSum([0])

      updateFinalRow()

      return ;
    }
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
  }

  // Execute After Page Loaded
  useEffect(() => {
    updateFinalRow();
  }, []);

  let navigate = useNavigate();

  let goHome = () => {
    navigate("../");
  };

  let goShop = () => {
    navigate("../shop");
  };

  // Close Button Function
  let deleteRow = (event) => {
    let basketRows = document.querySelectorAll('.basket-row');
    let parentDom = event.currentTarget.parentNode;

    for(let i = 0;i<basketRows.length;i++) {
      if(basketRows[i] === parentDom) {
        let copyCounts = counts
        let copyPrices = prices
        let copyShippings = shippings

        // delete corresponding items
        copyCounts.splice(i, 1)
        copyPrices.splice(i, 1)
        copyShippings.splice(i, 1)

        // set State
        setCounts(copyCounts)
        console.log(counts)
        setPrices(copyPrices)
        setShippings(copyShippings)

        // update final row
        updateFinalRow();

        // delete corresponging row
        parentDom.remove();

        break
      }
    }

    parentDom.remove();
  };

  // Minus items Count
  let minusCounts = (event) => {
    let All_H4 = document.querySelectorAll("h4.counts");
    let curCount = event.currentTarget.nextSibling.textContent;
    curCount = Number(curCount);

    // 개수가 1 이하인 경우
    if (curCount <= 1) {
      return;
    } else {
      let parentDom = event.currentTarget.parentNode;
      let i;
      for (i = 0; i < All_H4.length; i++) {
        if (All_H4[i] === parentDom) {
          event.currentTarget.nextSibling.textContent = curCount - 1;
          let copyCount = counts;
          setCounts(copyCount);
          copyCount[i] = curCount - 1;
          updateFinalRow();
          break;
        }
      }
    }
  };

  // Plus items Count
  let plusCounts = (event) => {
    let All_H4 = document.querySelectorAll("h4.counts");
    let curCount = event.currentTarget.previousSibling.previousSibling.textContent
    console.log(curCount)
    curCount = Number(curCount);
    console.log(curCount, 'count')
    // 개수가 10 이상인 경우
    if (curCount >= 10) {
      return;
    } else {
      let parentDom = event.currentTarget.parentNode;
      let i;
      for (i = 0; i < All_H4.length; i++) {
        if (All_H4[i] === parentDom) {
          event.currentTarget.previousSibling.previousSibling.textContent = curCount + 1;
          let copyCount = counts;
          setCounts(copyCount);
          copyCount[i] = curCount + 1;
          updateFinalRow();

          break;
        }
      }
    }
  };

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
          <h4 className="counts">
            <button
              className="countButton"
              onClick={(event) => minusCounts(event)}
            >
              <div>-</div>
            </button>
            {counts[0]}개
            <button className="countButton" onClick={(event) =>  plusCounts(event)}>
              +
            </button>
          </h4>
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
          <h4 className="counts">
            <button
              className="countButton"
              onClick={(event) => minusCounts(event)}
            >
              -
            </button>
            {counts[1]}개<button className="countButton" onClick={(event) => {plusCounts(event)}}>+</button>
          </h4>
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