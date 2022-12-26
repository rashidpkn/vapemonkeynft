import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roadMap : false
}

const util = createSlice({
  name: 'utilSlice',
  initialState,
  reducers: {
    setRoadMap(state,action){
        state.roadMap = action.payload
    }
  }
});

export const {setRoadMap} = util.actions

export default util.reducer