
import {  Routes ,Route } from 'react-router-dom'
import './App.css'

import User from './components/UserAdmin'
import LayoutAdmin from './components/layouts/layoutadmin'

function App() {
  return <div>
      <Routes>
    <Route path='/' element={<LayoutAdmin/>} />
    <Route path='/username' element={<User/>} />
      </Routes>
      </div>
  
}

export default App;
