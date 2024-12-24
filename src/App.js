import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainBoard from './pages/MainBoard/MainBoard';
// import whiteKing from './assets/chess pieces/wking.png';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" exact element={<Home />} /> */}
        <Route path="/calculator" element={<MainBoard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
