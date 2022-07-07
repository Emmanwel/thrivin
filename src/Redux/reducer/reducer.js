import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  UPDATE_GENDER,
  UPDATE_AGE,
  ACCIDENT_DATE,
  ACCIDENT_STATE,
  CALCULATE,
  DRIVER_OR_PASSENGER,
} from "../../Constant/InjuryConstant";
const initialState = {
  personalInformation: {
    age: "",
    gender: "",
  },
  date: {
    accidentState: "",
    accidentDate: "",
  },

  passengerOrDriver: "",
  result: {
    result: {
      valueInitial: 750,
      amountInjuries: 0,
      amountScars: 0,
      amountFixPremDisc: 0,
      percentPremDisc: 10,
      amountPercentPremDisc: 75,
      resultFinal: 750,
    },
  },
};
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updatePersonalInformation = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GENDER:
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          gender: action.payload,
        },
        // personalInformation: action.payload,
      };
    case UPDATE_AGE:
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          age: action.payload,
        },
        // personalInformation: action.payload,
      };
    case ACCIDENT_DATE:
      return {
        ...state,
        date: {
          ...state.date,
          accidentDate: action.payload,
        },
        // personalInformation: action.payload,
      };
    case ACCIDENT_STATE:
      return {
        ...state,
        date: {
          ...state.date,
          accidentState: action.payload,
        },
        // personalInformation: action.payload,
      };
    case DRIVER_OR_PASSENGER:
      return {
        ...state,
        passengerOrDriver: action.payload,
        // personalInformation: action.payload,
      };
    case CALCULATE:
      return {
        ...state,
        result: action.payload,
        // personalInformation: action.payload,
      };
    default:
      return state;
  }
};
