import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState  = { 
  name: '',
  surname: '',
  topic: ''

 }
const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    resetForm: (state) => initialState
  }
});

export const { setName, setSurname, setTopic, resetForm } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
