import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import PartnerLogin from './pages/PartnerLogin'
import PartnerSignUp from './pages/PartnerSignUp'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="signup" element={<UserSignUp/>}/>
        <Route path ="/partner-login" element={<PartnerLogin/>}/>
        <Route path ="/partner-signup" element={<PartnerSignUp/>}/>

      </Routes>
    </div>
  ) 
}

export default App