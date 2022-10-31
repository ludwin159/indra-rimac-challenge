import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BuildPlan from './pages/BuildPlan';

import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/build-plan' element={<div>
          <Header bgColor='Header__white' />
          <BuildPlan />
        </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
