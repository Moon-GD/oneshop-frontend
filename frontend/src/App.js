import './css/reset.css';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from 'reactstrap';
import MainFrame from './components/MainFrame';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={""}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <MainFrame />
    </BrowserRouter>
  );
}

export default App;
