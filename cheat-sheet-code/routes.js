
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from 'src/components/home/home.jsx';

function App() {
  return (
    <div className="App">
<Router>        
  <Routes>                  
    <Route path="/" element={<home />} />          
  </Routes>
</Router> 
    </div>
  );
}

export default App;
