import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Userloggedin from './pages/userloggedin';
import Admin from "./pages/Admin";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/dummy-chat" exact element={<Main />} />
        <Route path="/userloggedin" element={<Userloggedin /> }/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
