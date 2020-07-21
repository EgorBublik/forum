import axios from 'axios';

export const getAll = async () => {
    const res = await axios.get(process.env.REACT_APP_URL_BACK);
    return res.data;
};
