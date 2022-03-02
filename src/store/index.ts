import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
// import saga from './sagas'

import {
  persistStore, persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'main', //if willing to persist main
  storage: storage,
}
// Clear redux persist storage
const rootReducer = (state: any, action: any) => {
  if (action.type === 'main/clearData') {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem('persist:root')
    state = {}
  }
  return reducer(state, action)
}

const pReducer = persistReducer(persistConfig, rootReducer)

const devMode = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({
  thunk: true,
  serializableCheck: {
    // Ignore these action types
    // ignoredActions: ['user/'],
    // Ignore these field paths in all actions
    // ignoredPaths: ['user.socket', 'register']
  }
}), sagaMiddleware] // Add Saga middleware

const store = configureStore({
  reducer: pReducer,
  devTools: devMode,
  middleware
})
// sagaMiddleware.run(saga)  uncomment to add saga

const persistor = persistStore(store)

export { persistor, store }
