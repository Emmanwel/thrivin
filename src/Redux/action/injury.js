import axios from "axios";
import {
  ACCIDENT_DATE,
  ACCIDENT_STATE,
  CALCULATE,
  DRIVER_OR_PASSENGER,
  INJURY_UPDATE_REQUEST,
  UPDATE_AGE,
  UPDATE_GENDER,
} from "../../Constant/InjuryConstant";

const url = "https://api.injuryvalues-stg.resultier.dev/case/calculate";
export const updatePersonalInfo =
  (gender, age) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_GENDER,
        payload: gender,
      });
      dispatch({
        type: UPDATE_AGE,
        payload: age,
      });
    } catch (error) {}
  };

export const updateDates =
  (accidentState, accidentDate) => async (dispatch, getState) => {
    try {
      // console.log(state, date);
      dispatch({
        type: ACCIDENT_STATE,
        payload: accidentState,
      });
      dispatch({
        type: ACCIDENT_DATE,
        payload: accidentDate,
      });
    } catch (error) {}
  };

export const driverOrPassanger = (status) => async (dispatch, getState) => {
  try {
    // console.log(state, date);
    dispatch({
      type: DRIVER_OR_PASSENGER,
      payload: status,
    });
  } catch (error) {}
};

export const calculate = () => async (dispatch, getState) => {
  let { allDetails } = getState();
  try {
    let body = {
      personalInformation: {
        age: `${allDetails.personalInformation.age}`,
        gender: `${allDetails.personalInformation.gender}`,
      },
      dates: {
        accidentState: `${allDetails.date.accidentState}`,
        accidentDate: `${allDetails.date.accidentDate}`,
      },
      passengerOrDriver: `${allDetails.passengerOrDriver}`,
      vehicle: {
        type: null,
        damage: null,
      },
      driver: {
        fault: null,
        drugs: null,
        assistance: {
          moven: null,
          method: null,
          firstSeek: null,
        },
      },
      scars: {
        selected: null,
        value: null,
      },
      injuries: {
        head: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            medicationDuration: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        back: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            massageTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        neck: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            massageTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        arms: {
          selected: false,
          value: null,
          testType: null,
        },
        shoulder: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        wrist: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        legs: {
          selected: false,
          value: null,
        },
        hearing: {
          selected: false,
          value: null,
        },
        knee: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        vision: {
          selected: false,
          value: null,
        },
        hip: {
          selected: false,
          value: null,
          testType: null,
          treatment: {
            physicalTherapy: null,
            injections: null,
            surgery: {
              apply: null,
              surgeryCost: null,
            },
          },
        },
        death: {
          selected: false,
          value: null,
        },
      },
      lostWages: {
        lose: null,
        estimated: null,
      },
    };
    let auth = localStorage.getItem("userInfo");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU2NTk2NTc4fQ.PorQjJvwNFOAOqgL76zf-6ZyspisjVYpV92ViUPK3OI`,
      },
    };
    const { data } = await axios.post(`${url}`, body, config);
    dispatch({
      type: CALCULATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
