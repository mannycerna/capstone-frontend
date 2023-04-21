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

const cigarService = {
    createCigar
}
export default cigarService