import './App.css';
import { Header, Main, Navbar } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="grid m-auto mt-10 justify-center w-[96%] h-full wrapper">
        <Header />
        <Main />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
