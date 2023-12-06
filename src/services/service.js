import axios from "axios"

const URL = 'http://localhost:4000/forms'

const createForm = async(body) => {
    console.log(body, 'Object body');
    const { data } = await axios.post(`${URL}`, body);
    return data;
}

const getFormByID = async(id) => {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
}


export const service = {
    createForm,
    getFormByID
}