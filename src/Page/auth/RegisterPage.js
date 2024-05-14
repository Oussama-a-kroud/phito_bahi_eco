import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Trendy Pants and Shoes"
            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
          />
        </Col>
        <Col sm="6" className="d-flex flex-column ">
          <label className="mx-auto title-login"> creer un compte </label>
          <input
            placeholder="nom d'utilisateur "
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            placeholder="email"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <button className="btn-login mx-auto mt-4">creer un conpte</button>
          <label className="mx-auto my-4">
             vous avez un compte {" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                cliquer ici 
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
