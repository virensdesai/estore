import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
      <SideNav/>
    </div>  
  )
};

export default App;