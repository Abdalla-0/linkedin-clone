import { Col, Container, Nav, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { actionLoginByGooglePopup } from "@store/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Interface = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const loginWithGooglePopup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(actionLoginByGooglePopup()).unwrap(); // إذا كان unwrap موجودًا
      toast.success("Logged in successfully! 🎉");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message || "Login failed. Please try again.");
    }
  };
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
              <button
                className={`${styles.btnGoogle}`}
                onClick={(e) => loginWithGooglePopup(e)}
              >
                <img src="/images/google.svg" alt="Google Icon" />
                Sign in with Google
              </button>
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
