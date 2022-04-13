import './App.css';
import Home from "./Components/Home"
import Java from "./Components/Java"
import Python from "./Components/Python"
import JavaScript from "./Components/JavaScript"
import NotFound from './Components/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Javalevel1" element={<Java start="0" stop="10" count="80"/>}/>
          <Route path="/Javalevel2" element={<Java start="10" stop="20" count="60"/>}/>
          <Route path="/Pythonlevel1" element={<Python start="0" stop="10" count="80"/>}/>
          <Route path="/Pythonlevel2" element={<Python  start="10" stop="20" count="60"/>}/>
          <Route path="/JavaScriptlevel1" element={<JavaScript start="0" stop="10" count="80"/>}/>
          <Route path="/JavaScriptlevel2" element={<JavaScript start="10" stop="20" count="70"/>}/>          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
