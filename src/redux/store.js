import { configureStore } from '@reduxjs/toolkit'
import util from './slice/util';

const store = configureStore({
  reducer: {
    util
  },
})

export  default store;