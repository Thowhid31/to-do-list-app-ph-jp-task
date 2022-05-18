
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<RequireAuth>
          <Header></Header>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
