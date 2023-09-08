import './App.scss';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Container from './container';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="*" element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
