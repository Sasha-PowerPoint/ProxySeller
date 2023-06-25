import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { networkApi } from './service'

export const store = configureStore({
  reducer: {
    [networkApi.reducerPath]: networkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(networkApi.middleware),
})

setupListeners(store.dispatch)