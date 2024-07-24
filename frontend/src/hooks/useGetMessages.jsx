import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useGetMessage = () => {
    const { selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        const fetchMessages = async () => {
            if (!selectedUser?._id) {
                console.log('User ID is not available');
                return;
            }

            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:5000/api/v1/message/${selectedUser._id}`);
                console.log(res.data);
            } catch (err) {
                console.log('Error fetching messages:', err);
            }
        };

        fetchMessages();
    }, [selectedUser?._id]);
};

export default useGetMessage;
