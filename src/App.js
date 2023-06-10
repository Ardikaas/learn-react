import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  const navTit = "Ardikaas";
  const clicked = () => {
    return alert("tertekan :')")
  }
  const footnote = () => {
    return (
      <div>
        <h3>Cobain gasih</h3>
        <i>ya kali ga work</i>
        <marquee>running text</marquee>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navTit={navTit}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test 123 
        </p>
        <Button clicked={clicked}/>
        <Footer footnote={footnote}/>
      </header>
    </div>
  );
}

export default App;
