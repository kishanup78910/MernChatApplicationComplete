import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessage = () => {
    const { selectedUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://mernchatapplicationcomplete.onrender.com/api/v1/message/${selectedUser._id}`);
                console.log(res.data);
                dispatch(setMessages(res.data|| [])); 
            } catch (err) {
                console.log('Error fetching messages:', err);
                dispatch(setMessages([]));  
            }
        };

        fetchMessages();
    }, [selectedUser, dispatch]);  
};

export default useGetMessage;
