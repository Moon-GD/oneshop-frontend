import './css/reset.css';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from 'reactstrap';
import MainFrame from './js/MainFrame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './js/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route index exact path="/" element={<MainFrame></MainFrame>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
