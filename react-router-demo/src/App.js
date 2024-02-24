
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Contact from './components/Contact';
import User from './components/User';
import OldBook from './components/Oldbook';
import NewBook from './components/NewBook';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>

      <ul>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <ul>
        <li><Link to='/contact-us'>Contact</Link></li>
      </ul>

      <ul>
        <li><Link to='/user/1'>User 1</Link></li>
      </ul>
      <ul>
        <li><Link to='/user/2'>User 2</Link></li>
      </ul>
      <ul>
        <li><Link to='/books/old_books'>OldBooks</Link></li>
      </ul>
         <ul>
        <li><Link to='/books/new_books'>NewBooks</Link></li>
      </ul>
      <ul>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact-us' element={<Contact/>}/>
        <Route  path='/user/:id' element={<User/>}/>
        <Route path='books'>
        <Route  path='old_books' element={<OldBook/>}/>
        <Route  path='new_books' element={<NewBook/>}/>

        </Route>

        <Route  path='/login' element={<Login/>}/>
        <Route  path='/dashboard' element={<DashBoard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
