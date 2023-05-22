import './App.css';
import { Header, Main, Navbar } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="absolute inset-0 grid m-auto justify-center w-[96%] h-[96vh] wrapper">
        <Header />
        <Main />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
