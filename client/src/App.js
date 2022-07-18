import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import ScrollToTop from "./ScrollToTop";

import './App.css';

const App = ()=>{
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
