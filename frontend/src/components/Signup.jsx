import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    ConfirmPassword: "",
    gender: ""
  });

  const navigate = useNavigate();

  const handleCheckBox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/register', user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message)
      console.log(err.response ? err.response.data : err.message); // More detailed error logging
    }
    setUser({
      fullName: "",
      userName: "",
      password: "",
      ConfirmPassword: "",
      gender: ""
    });
  };

  return (
    <div className='min-w-96 m-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className='text-base label-text-full'>Full Name</span>
            </label>
            <input
              id="fullName"
              className='w-full input input-bordered h-10'
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              placeholder='Enter full name'
            />
          </div>
          <div>
            <label htmlFor="userName" className="label p-2">
              <span className='text-base label-text-full'>UserName</span>
            </label>
            <input
              id="userName"
              className='w-full input input-bordered h-10'
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              type="text"
              placeholder='Username'
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className='text-base label-text-full'>Password</span>
            </label>
            <input
              id="password"
              className='w-full input input-bordered h-10'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder='Password'
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className='text-base label-text-full'>Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              className='w-full input input-bordered h-10'
              value={user.ConfirmPassword}
              onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
              type="password"
              placeholder='Confirm password'
            />
          </div>
          <div className='flex items-center my-4'>
            <div className="flex items-center">
              <p>Male</p>
              <input
                checked={user.gender === "male"}
                onChange={() => handleCheckBox("male")}
                type="checkbox"
                className="checkbox mx-4"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                checked={user.gender === "female"}
                onChange={() => handleCheckBox("female")}
                type="checkbox"
                className="checkbox mx-4"
              />
            </div>
          </div>
          <p className='text-center'>
            Already have an account?
            <Link className='mx-2' to="/login">Login</Link>
          </p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-4 border-state-700'>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;