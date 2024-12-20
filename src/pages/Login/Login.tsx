import BtnLoginWithGoogle from "@components/ui/BtnLoginWithGoogle/BtnLoginWithGoogle";
import { actionLogin } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hook";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type TInputState = {
  email: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState<TInputState>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const userLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actionLogin({ email: input.email, password: input.password }))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        setInput({ email: "", password: "" });
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <>
      <Container className="py-3">
        <div>
          <img
            className="img-fluid"
            src="/images/logo.png"
            alt=""
            style={{ maxWidth: "135px" }}
          />
        </div>
        <Card
          style={{ width: "100%", maxWidth: "400px", marginInline: "auto" }}
        >
          <Card.Body>
            <Card.Title className="mb-3">
              <h1 className="h3">Sign in</h1>
              <span className="fs-6 fw-normal">
                Stay updated on your professional world.
              </span>
            </Card.Title>
            <Form
              onSubmit={userLogin}
              style={{
                maxWidth: "700px",
                marginInline: "auto",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={input.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Sign in
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted text-center position-relative bg-white pt-3">
            <span
              className="position-absolute start-50 px-2"
              style={{ top: "-14px", backgroundColor: "white" }}
            >
              or
            </span>
            <BtnLoginWithGoogle height="40px" />
            <div className="py-2 mt-3">
              New to LinkedIn?{" "}
              <Link to={"/signup"} className="text-primary">
                Join now
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Login;
