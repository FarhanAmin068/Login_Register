// import { useState } from 'react'

import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import Test from './Test'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>  
       
      </Routes>
      </BrowserRouter>

      
      
 
    </div>
  )
}

export default App
