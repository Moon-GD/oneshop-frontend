import '../css/common.css';
import UserInfo from '../components/UserInfo';
import ShopDescription from '../components/ShopDescription';
import ShopItems from '../components/ShopItems';

function Shop() {
  return (
    <section className="main">
      <UserInfo></UserInfo>
      <ShopDescription></ShopDescription>
      <ShopItems></ShopItems>
    </section>
  );
}

export default Shop;