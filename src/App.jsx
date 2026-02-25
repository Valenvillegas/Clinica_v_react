
import { Routes, Route } from 'react-router-dom'
import LoginFormScreen from './Screens/LoginFormScreens/LoginFormScreen'
import CrearUsuarioFormScreens from './Screens/CrearUsuarioFormScreens/CrearUsuarioFormScreens'
import HomeScreens from './Screens/HomeScreens/HomeScreens'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginFormScreen />} />
      <Route path="/register" element={<CrearUsuarioFormScreens />} />
      <Route path='/home' element={<HomeScreens />} />
    </Routes>
  )
}

export default App
