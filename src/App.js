
import './App.css';
import { Route, Routes } from "react-router-dom";

import UserRoutes from './routes/UserRoutes';
function App() {
  return (
    <div className='App'>
       <Routes>
    <Route exact="exact" path="/*" element={<UserRoutes />}/>
  

</Routes>

    </div>
   
  );
}

export default App;
