
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
