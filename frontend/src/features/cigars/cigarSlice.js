import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cigarService from './cigarService'

const initialState = {
    cigars: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


//Create a cigar
export const createCigar = createAsyncThunk('cigars/create', 
async (cigarData, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await cigarService.createCigar(cigarData, token) 
    }
       catch(error){
        
            const message = 
                (error.response && 
                 error.response.data && 
                 error.response.data.message) || 
                 error.message || 
                 error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

//Get cigar inventory
export const getCigars = createAsyncThunk('cigars/getAll', async (_, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await cigarService.getCigars(token) 
    }
    catch(error) {
        const message = 
                (error.response && 
                 error.response.data && 
                 error.response.data.message) || 
                 error.message || 
                 error.toString()
            return thunkAPI.rejectWithValue(message)
     }
}) 

//Delete  a cigar
export const deleteCigar = createAsyncThunk('cigars/delete', 
async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await cigarService.deleteCigar(id, token) 
    }
       catch(error){
        
            const message = 
                (error.response && 
                 error.response.data && 
                 error.response.data.message) || 
                 error.message || 
                 error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})


export const cigarSlice = createSlice({
    name: 'cigar',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createCigar.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createCigar.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cigars.push(action.payload)
        })
        .addCase(createCigar.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getCigars.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCigars.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cigars = action.payload
        })
        .addCase(getCigars.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteCigar.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteCigar.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cigars = state.cigars.filter((cigar) => cigar._id !== action.payload.id)
        })
        .addCase(deleteCigar.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = cigarSlice.actions
export default cigarSlice.reducer