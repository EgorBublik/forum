import axios from 'axios';

export const getAll = async () => {
    const res = await axios.get(`http://localhost:3005/questions/`);
    return res.data;
};

