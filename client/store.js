import { legacy_createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// make your root reducer in /reducers/index.js
// import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = legacy_createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// )

// export default store
