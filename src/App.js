import logo from './logo.svg';
import './App.css';
import Button from './component/button';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test 123 
        </p>
        <Button/>
      </header>
    </div>
  );
}

export default App;
