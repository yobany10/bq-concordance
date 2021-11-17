import { createSlice } from '@reduxjs/toolkit'

export const divisionSlice = createSlice({
    name: 'division',
    initialState: { value: 'isExperienced'},
    reducers: {
        // updateDivision is one of our actions
        updateDivision: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateDivision } = divisionSlice.actions

export default divisionSlice.reducer