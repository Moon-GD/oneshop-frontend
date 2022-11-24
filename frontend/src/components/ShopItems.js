import '../css/ShopItems.css'
import { useState } from 'react'
import ModalShop from './ModalShop';
import Backdrop from './Backdrop';


function ShopItems() {
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
              <img src={require("../images/10.jpg")} alt="작품" />
            </div>
            <h2>효창동 김옥희씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img src={require("../images/7.jpg")} alt="작품" />
            </div>
            <h2>신월동 박근철씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img src={require("../images/1.jpg")} alt="작품" />
            </div>
            <h2>화장동 문경덕씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img src={require("../images/1.jpg")} alt="작품" />
            </div>
            <h2>효창동 김옥희씨</h2>
          </div>
          <div className="item">
            <div className="image" onClick={deleteHandler}>
              <img src={require("../images/1.jpg")} alt="작품" />
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
      </div>
    );
}

export default ShopItems
