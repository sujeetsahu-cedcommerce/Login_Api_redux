import { Button, Card, Heading, Page, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cName, cName1, uName, uName1 } from "./Actions/Action";

const Login = (props) => {
  const [CustomerName, setCustomerName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeCustomerName = useCallback(
    (newValue) => setCustomerName(newValue),
    []
  );
  const handleChangeUserName = useCallback(
    (newValue) => setUserName(newValue),
    []
  );

  const handleChangePassword = useCallback(
    (newValue) => setPassword(newValue),
    []
  );

  let url = new URL("https://fbapi.sellernext.com/user/login");
  let item = { username: UserName, password: Password };
  for (let i in item) {
    url.searchParams.append(i, item[i]);
  }

  const login = async () => {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA",
      },
      //   body: JSON.stringify(item),
    });

    let result = await response.json();
    console.log(result.message);
    if (result.success) {
      props.uName(UserName);
      props.cName(CustomerName);
      navigate("/dashboard");
    } else alert("Entered wrong credential");
  };
  console.log(props.user_name);
  console.log(props.customer_name);
  sessionStorage.setItem("userName", props.user_name);
  sessionStorage.setItem("customerName", props.customer_name);
  return (
    <Page>
      <Heading>Login Form</Heading>
      <Card>
        <TextField
          label="Customer Name"
          value={CustomerName}
          onChange={handleChangeCustomerName}
          autoComplete="off"
        />
        <br></br>
        <TextField
          label="User Name"
          value={UserName}
          onChange={handleChangeUserName}
          autoComplete="off"
        />
        <br></br>
        <TextField
          label="Password"
          value={Password}
          onChange={handleChangePassword}
          autoComplete="off"
        />
        <br></br>
        <Button primary onClick={login}>
          Login
        </Button>
      </Card>
    </Page>
  );
};

const mapStateToProps = (state) => {
  console.log("called mapStateToProps", state.user_name);
  return {
    user_name: state.user_name,
    customer_name: state.customer_name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uName: (e) => dispatch(uName1(e)),
    cName: (e) => dispatch(cName1(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
