// imports :

import { createSlice } from '@reduxjs/toolkit';

// creating 'sensorData' interface with typed properties :

export interface registerData {

  userLastName: string,
  userFirstName: string,
  department: string,
  graduationYear: string,
  schoolName: string,
  address: string,
  degree: string
}

// defining sensorData interface initial state :

const initialState: registerData = {

  userLastName: '', 
  userFirstName: '',
  department: '',
  graduationYear: '',
  schoolName: '',
  address: '',
  degree: ''
};

// creating 'sensorDataSlice' slice/reducer to update and store sensor data values :

export const registerDataSlice = createSlice({

  name: 'register_data',
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {

    updateRegisterData: (state, action) => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
      const { 
          
        userLastName, 
        userFirstName, 
        department,  
        graduationYear,
        schoolName,
        address,
        degree
      
      } = action.payload;
    
      state.userLastName = userLastName;

      state.userFirstName = userFirstName;

      state.department = department;

      state.graduationYear = graduationYear;

      state.schoolName = schoolName;

      state.address = address;

      state.degree = degree;
    },
  },
  
});

export const { updateRegisterData } = registerDataSlice.actions;

export default registerDataSlice.reducer;