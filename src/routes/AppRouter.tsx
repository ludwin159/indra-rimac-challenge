import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomRoute from './CustomRoute';
import { BuildPlan, Login, Thanks } from '../pages'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<CustomRoute header='Header__neutrals'><Login/></CustomRoute>}/>

        <Route
          path='/build-plan'
          element={<CustomRoute><BuildPlan /></CustomRoute>}/>

        <Route
          path='/thanks'
          element={<CustomRoute><Thanks /></CustomRoute>}/>
          
      </Routes>
    </BrowserRouter>
  )
}


export default AppRouter