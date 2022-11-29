import '../css/ShopItems.css'
import { useState, useEffect } from 'react'
import ModalShop from './ModalShop';
import Backdrop from './Backdrop';

function ShopItems(props) {
  useEffect(() => {
    let explainBox = document.querySelector("#item-explain-area");
    let explainTitle = document.querySelector("#item-title");
    let explainText = document.querySelector("#item-explain");
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
     item.addEventListener('mouseover', () => {
      explainBox.style.display = 'block'
      explainTitle.textContent = item.childNodes[1].textContent
      explainText.textContent = item.childNodes[2].textContent
     })
     item.addEventListener('mouseleave', () => {
      explainBox.style.display = "none";
     })
    })

  }, []);

  const [modlaIsOpen, setModalIsOpen] = useState(false)
  const [modalAddress, setAddress] = useState('')

  function deleteHandler(address) {
      setAddress(address)
      setModalIsOpen(true)
  }

  function getImageValue(string){
    return "http://3.36.122.123:8080/api/image/" + string
  }

  function closeModalHandler() {
      setModalIsOpen(false)
  }  

    return (
      <div className="containerShop">
        <div className="items">
          {props.items.map(item => (
            <div className="item">
              <div className="image" onClick={()=>{deleteHandler(getImageValue(item.images[0]))}}>
                <img
                  src={getImageValue(item.images[0])}
                  alt="작품"
                  className="item-image"
                />
              </div>
              <h2>{item.itemName}</h2>
              <h3>{item.description}</h3>
            </div>
          ))}
        </div>
        {modlaIsOpen && <Backdrop onClose={closeModalHandler} />}
        {modlaIsOpen && (
          <ModalShop
            address = {modalAddress}
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
