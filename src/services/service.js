import axios from "axios"

const URL = ''

const createForm = async(body) => {
    const { data } = await axios.post(`${URL}`, body);
    return data;
}


export const service = {
    createForm
}