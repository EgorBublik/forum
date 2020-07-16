import axios from 'axios';

export const getAll = async () => {
    const res = await axios.get(`http://0.0.0.0:3005/questions/`);
    return res.data;
};

