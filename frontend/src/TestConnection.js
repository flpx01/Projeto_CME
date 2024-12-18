import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/test/')
            .then(response => setMessage(response.data.message))
            .catch(error => setMessage("Error connecting to Backend!"));
    }, []);

    return <div>{message}</div>;
};

export default TestConnection;
