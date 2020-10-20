import axios from 'axios';

export const getAll = async () => {
    const res = await axios.get(process.env.REACT_APP_URL_BACK+'questions');
    return res.data;
};

export const postAll = async (info) => {
    const res = await axios.post(process.env.REACT_APP_URL_BACK+'questions', info);
    return res.data;
}

export const deleteAll = async (ide) => {
    const res = await axios.delete(process.env.REACT_APP_URL_BACK+'questions', {data: ide});
    return res.data;
}
