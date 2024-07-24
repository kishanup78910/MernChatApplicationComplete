import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.user.authUser); // Check if state is accessible

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        dispatch(setAuthUser(res.data));
        console.log('Dispatched setAuthUser:', res.data); // Log the dispatched action
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err.response ? err.response.data : err.message); // More detailed error logging
    }
    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <div className='min-w-96 m-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-center text-gray-300'>Login</h1>
        <form onSubmit={onSubmitHandler}>
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
          <p className='text-center my-2'>Don't have an account?
            <Link className='mx-2' to="/signup">SignUp</Link>
          </p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-4 border-state-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;