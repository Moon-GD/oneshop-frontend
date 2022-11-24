import '../css/ShopDescription.css'
import { useNavigate } from 'react-router-dom';

function ShopDescription() {
  let naviagte = useNavigate();
  let goHome = () => {
    naviagte('../');
  }

  return (
    <div className="descriptionShop">
      <div className="descriptionShop_text" onClick={() => {
        goHome();
      }}>
        <h2>ED<span>papershop</span></h2><br></br>
        <span>original paper series</span><br></br>
        <span>collaborat products</span><br></br>
        <h2><span>businiess contact</span></h2>
      </div>
    </div>
  );
}

export default ShopDescription;