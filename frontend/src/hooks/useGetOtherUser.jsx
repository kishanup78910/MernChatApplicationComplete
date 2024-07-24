import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUser = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('https://mernchatapplicationcomplete.onrender.com/api/v1/user/');
                console.log(res.data); // Ensure this logs the correct data
                dispatch(setOtherUsers(res.data));
            } catch (err) {
                console.log(err);
            }
        }
        fetchOtherUsers();
    }, [dispatch]);
};

export default useGetOtherUser;
