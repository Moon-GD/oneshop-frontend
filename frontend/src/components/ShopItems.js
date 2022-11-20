import '../css/ShopItems.css'


function ShopItems() {
    return (
      <div className="containerShop">
        <div className="items">
          <div className="item">
            <div className="image">
              <img src={require("../images/10.jpg")} alt="작품" />
            </div>
            <h2>21000원</h2>
          </div>
          <div className="item">
            <div className="image">
              <img src={require("../images/7.jpg")} alt="작품" />
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={require("../images/1.jpg")} alt="작품" />
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={require("../images/1.jpg")} alt="작품" />
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={require("../images/1.jpg")} alt="작품" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShopItems
