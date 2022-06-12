// imports :

import { configureStore } from '@reduxjs/toolkit';

// slicers/reducers imports :

import registerDataSlice from '../features/data_storage/register/registerDataSlice';

// redux store :

const Store = configureStore({

    reducer: {
  
      // Define a top-level state field named `todos`, handled by `todosReducer`.

      // reducer for register data :

      registerData: registerDataSlice,
    },
})     

// Defining types for store :

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof Store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof Store.dispatch

// exports :
  
export default Store;