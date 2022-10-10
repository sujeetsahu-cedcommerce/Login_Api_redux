import { CUSTOMERNAME, PASSWORD, USERNAME } from "../Types";

const initialState = {
  user_name: "",
  customer_name: "",
};

export const ContactDataReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        user_name: action.payload,
      };
    case CUSTOMERNAME:
      return {
        ...state,
        customer_name: action.payload,
      };
    default:
      return state;
  }
};
