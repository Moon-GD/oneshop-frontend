import '../css/ShopItems.css'
import { useState, useEffect } from 'react'
import ModalShop from './ModalShop';
import Backdrop from './Backdrop';

function ShopItems() {
  useEffect(() => {
    let explainBox = document.querySelector("#item-explain-area");
    let explainTitle = document.querySelector("#item-title");
    let explainText = document.querySelector("#item-explain");
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
     item.addEventListener('mouseover', () => {
      explainBox.style.display = 'block'
      explainTitle.textContent = item.childNodes[1].textContent
     })
     item.addEventListener('mouseleave', () => {
      explainBox.style.display = "none";
     })
    })

  }, []);

  const [modlaIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
      setModalIsOpen(true)
  }

  function closeModalHandler() {
      setModalIsOpen(false)
  }  

    return (
      <div className="containerShop">
        <div className="items">
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img
                src={require("../images/10.jpg")}
                alt="작품"
                className="item-image"
              />
            </div>
            <h2>효창동 김옥희씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img
                src={require("../images/7.jpg")}
                alt="작품"
                className="item-image"
              />
            </div>
            <h2>신월동 박근철씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img
                src={require("../images/1.jpg")}
                alt="작품"
                className="item-image"
              />
            </div>
            <h2>화장동 문경덕씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img
                src={require("../images/1.jpg")}
                alt="작품"
                className="item-image"
              />
            </div>
            <h2>효창동 김옥희씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img
                src={require("../images/1.jpg")}
                alt="작품"
                className="item-image"
              />
            </div>
            <h2>효창동 김옥희씨</h2>
          </div>
        </div>
        {modlaIsOpen && <Backdrop onClose={closeModalHandler} />}
        {modlaIsOpen && (
          <ModalShop
            onCancel={closeModalHandler}
            onConfirm={closeModalHandler}
          />
        )}
        <div id="item-explain-area">
          <h2 id="item-title">title</h2>
          <h4 id="item-explain">explain</h4>
        </div>
      </div>
    );
}

export default ShopItems
