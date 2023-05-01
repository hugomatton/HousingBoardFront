import React, { useState } from "react";
import FormStudent from "./Form/FormStudent";
import FormOwner from "./Form/FormOwner";
import FormAdmin from "./Form/FormAdmin";
import NavbarRole from "./NavabarRole/NavbarRole";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../image/logo_transparent.png";

const SignupLogin = () => {
  const [choice, setChoice] = useState("student");

  return (
    <div>
      <Container>
        <div className="text-center">
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="Housing Board logo"
            />
          </div>
          <h1
            style={{ display: "inline-block", verticalAlign: "middle" }}
            className="text-center p-3 my-0 text-primary"
          >
            EUC Housing Board
          </h1>
        </div>
        <NavbarRole setChoice={setChoice}></NavbarRole>
        {choice === "student" && <FormStudent></FormStudent>}
        {choice === "owner" && <FormOwner></FormOwner>}
        {choice === "admin" && <FormAdmin></FormAdmin>}
      </Container>
    </div>
  );
};

export default SignupLogin;
