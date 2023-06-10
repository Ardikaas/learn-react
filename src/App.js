import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test 123 
        </p>
        <Button/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
