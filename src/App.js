// import logo from './logo.svg';
import './App.css';
import './component/Header';
import HomePage from './component/HomePage';
// import Nav from './component/Nav';
import Home from './component/Home';
import Header from './component/Header';
import Footor from './component/Footor';

function App() {
  return (
   <>
   <Header/>
   <HomePage/>
   {/* <Nav/> */}
   <Header/>
   <Home/>
   <Footor/>
   </>
  );
}

export default App;
