import axios from 'axios'

const API_URL = '/api/cigars/'

//Create new cigar

const createCigar = async (cigarData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`  
        }
    }
    const response = await axios.post(API_URL, cigarData, config)

    return response.data
}

//Get Cigars inventory
const getCigars = async ( token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`  
        }
    }
    const response = await axios.get(API_URL,  config)

    return response.data
}

const cigarService = {
    createCigar,
    getCigars
}
export default cigarService