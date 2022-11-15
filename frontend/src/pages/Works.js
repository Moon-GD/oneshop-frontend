import '../css/common.css';
import UserInfo from '../components/UserInfo';
import WorkDescription from './../components/WorkDescription';
import WorkContent from '../components/WorkContent';


function Shop() {
  return (
    <section className="main">
      <UserInfo></UserInfo>
      <WorkDescription></WorkDescription>
      <WorkContent></WorkContent>
    </section>
  );
}

export default Shop;