import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ReviewPages from './components/ReviewPages/ReviewPages';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<ReviewPages/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs'element={<Blogs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*'element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
