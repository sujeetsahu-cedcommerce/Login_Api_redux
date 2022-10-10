import { USERNAME, PASSWORD, CUSTOMERNAME } from "../Types";

export const uName1 = (data) => {
  // alert(data);
  return {
    type: USERNAME,
    payload: data,
  };
};

export const cName1 = (data) => {
  // alert(data);
  return {
    type: CUSTOMERNAME,
    payload: data,
  };
};

export const password = (data) => {
  return {
    type: PASSWORD,
    payload: data,
  };
};
