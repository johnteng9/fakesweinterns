import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Login.jsx'
import Enrollment from './enrollment';


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      {/* <Login /> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/enrollment" element={<Enrollment />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
