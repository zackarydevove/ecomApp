import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Support from './pages/Support/Support';
import Profile from './pages/Login/Profile';
import Soon from './pages/Soon/Soon';
import Cancel from './pages/Stripe_redirection/Cancel';
import Success from './pages/Stripe_redirection/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/support' element={<Support />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/soon' element={<Soon />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
