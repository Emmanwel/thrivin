import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  updatePersonalInformation,
  userLoginReducer,
} from "../reducer/reducer";
// import {
//   userListReducer,

// } from "../reducers/userReducers";
// import {
//   addBookReducer,

//   returnBookReducer,
// } from "../reducers/bookReducers";
// import {
//   studentListReducer,

// } from "../reducers/studentReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  allDetails: updatePersonalInformation,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const intialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
