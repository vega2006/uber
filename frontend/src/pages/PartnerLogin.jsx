import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const partnerLogin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [partnerData,setpartnerData] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        setpartnerData({
            email:email,
            password:password
        }); 
        setEmail('');
        setPassword('');   
        
    }
  return (
    <div>
        <div className="mt-8">
            <img className="w-12 ml-8 " src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>

        </div>
        <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            className="border w-full bg-[#E1E1E1] mb-7 text-lg px-4 py-2 rounded placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="border-2 w-full bg-[#E1E1E1] mb-7 text-lg px-4 py-2 rounded placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
          <button className="text-white border-2 w-full bg-black text-lg px-4 py-2 rounded">
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center">Not yet a partner?  <Link to='/partner-signup' className="text-blue-600">Join us here</Link></p>
        </div>
      </div>
      <div className="-translate-y-8">
        <Link to="/login" className="flex justify-center items-center w-full bg-[#FF9567] text-lg px-4 py-2 rounded">
          Sign in as User
        </Link>
      </div>
    </div>
    </div>
  );
};

export default partnerLogin;
