// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authslice';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export  {store};

// // store.js
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/user/authslice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// // import {thunk} from 'redux-thunk';
// // const store = configureStore({
// //   reducer: {
// //     auth: authReducer,
// //   },
// // })


// // export default store;
// const rootReducer = combineReducers({
//   reducer: authReducer
// })
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// // export const store = configureStore({
// //   reducer: persistedReducer,
// //   // devTools: process.env.NODE_ENV !== 'production',
// //   // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
// //   //   serializableCheck: false,
// //   // })
// //   // reducer: rootReducer,
// //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// // })

// export const store = configureStore({
//   reducer:persistedReducer,
// })

// export const persistor = persistStore(store)