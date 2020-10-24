import {
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit'

import rootReducer, { initialState, Store } from './reducer'

const middlewares: Middleware[] = []

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const store = configureStore<Store>({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...middlewares, ...customizedMiddleware] as [Middleware],
  devTools: true,
})

export { store, Store }
