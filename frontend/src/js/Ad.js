import '../css/Ad.css'
import Login from './Login';
/* import imgfile from './ad.png' */
function Ad() {
  return (
    <div className="right">
      <div className="ad">
        <Login></Login>
      </div>
      <div className='blur'></div>
    </div>
  );
}

export default Ad;