import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { Header } from './Components/Header';

function App() {
  return (
    <div >
      <header>
        <Header/>
        <Main  className="App"/>
      </header>
    </div>
  );
}

export default App;
