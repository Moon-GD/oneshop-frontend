import '../css/ShopBasket.css'

export default function ShopBasket () {
  return (
    <div class="main">
      <section class="basketList">
        <h1>
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
          <img src={require("../images/1.jpg")} class="basket-item-info"></img>
          <h4>1개</h4>
          <h4 basket-item-price>20,000원</h4>
          <h4>3,000원</h4>
        </div>
        <div class="basket-row">
          <img src={require("../images/10.jpg")} class="basket-item-info"></img>
          <h4>2개</h4>
          <h4>2,000원</h4>
          <h4>5,000원</h4>
        </div>
        <div class="calc-row">
          <span>총 금액 : 22,000원</span>
          <span>배송비 : 5,000원</span>
          <span>주문 금액 : 27,000원</span>
        </div>
      </section>
    </div>
  );
}