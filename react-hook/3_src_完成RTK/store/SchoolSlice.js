import { createSlice } from "@reduxjs/toolkit"
const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: '花果山第一小学',
    address: "花果山水帘洞"
  },
  reducers: {
    setName (state, action) {
      state.name = action.payload
    },
    setAddress (state, action) {
      state.address = action.payload
    }

  }
})

export const { setName, setAddress } = schoolSlice.actions
// console.log(setName)
export default schoolSlice.reducer