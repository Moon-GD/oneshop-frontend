import './css/reset.css';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from 'reactstrap';
import MainFrame from './components/MainFrame';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import UserInfo from './components/UserInfo';
import Shop from './pages/Shop'
import News from './pages/News';
import Works from './pages/Works'
import CollectPicture from './pages/CollectPicture';

=======
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/work' element={<Works></Works>}></Route>
        <Route path='/collectPicture' element={<CollectPicture></CollectPicture>}></Route>
        <Route index exact path="/" element={<MainFrame></MainFrame>}></Route>
      </Routes>
      <UserInfo></UserInfo>
    </BrowserRouter>
  );
}

export default App;
