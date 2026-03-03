
import { Routes, Route } from 'react-router-dom'
import LoginFormScreen from './Screens/LoginFormScreens/LoginFormScreen'
import CrearUsuarioFormScreens from './Screens/CrearUsuarioFormScreens/CrearUsuarioFormScreens'
import HomeScreens from './Screens/HomeScreens/HomeScreens'
import CrearHistoriaFormScreens from './Screens/CrearHistoriaFormScreens/CrearHistoriaFormScreens'


function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginFormScreen />} />
      <Route path="/register" element={<CrearUsuarioFormScreens />} />
      <Route path='/home' element={<HomeScreens />} />
      <Route path='/crear' element={<CrearHistoriaFormScreens />}/> 
    </Routes>
  )
}

export default App
