import { createStore } from "redux";
import { ContactDataReducer } from "./reducers/Reducer";

const store = createStore(ContactDataReducer);
export default store;
