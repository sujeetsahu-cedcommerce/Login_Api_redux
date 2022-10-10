// import logo from "./logo.svg";
import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
import Login from "./Login";
import store from "./Store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
