import { Col, Container, Nav, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import { useEffect } from "react";
import BtnLoginWithGoogle from "@components/ui/BtnLoginWithGoogle/BtnLoginWithGoogle";
const Interface = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);
  return (
    <div id="interfacePage">
      <Container fluid>
        <Nav className={`${styles.interfacNav}`}>
          <Link to="/">
            <img src="/images/logo.png" className="logo" alt="Brand Image" />
          </Link>
          <div className="d-flex align-items-center gap-3 ms-auto">
            <Link to={"/signup"} className="text-primary">
              Join now
            </Link>
            <Link to="/login" className="btn btn-outline-primary">
              Sign in
            </Link>
          </div>
        </Nav>
      </Container>
      <Container>
        <section>
          <Row className="row-gap-5">
            <Col sm={6}>
              <h1 className={styles.heading}>
                Welcome to your profissional community
              </h1>
              <BtnLoginWithGoogle height="52px"/>
            </Col>
            <Col sm={6}>
              <img src="/images/login-hero.svg" alt="Hero Image" />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Interface;
