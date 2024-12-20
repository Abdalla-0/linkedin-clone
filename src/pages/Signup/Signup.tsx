import BtnLoginWithGoogle from "@components/ui/BtnLoginWithGoogle/BtnLoginWithGoogle";
import { actionRegister } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hook";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type TInputState = {
  email: string;
  password: string;
  confirmPassword: string;
};
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState<TInputState>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const userSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      toast.error("Confirm password does not match your password");
      return;
    }
    dispatch(actionRegister({ email: input.email, password: input.password }))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
        setInput({ email: "", password: "", confirmPassword: "" });
        navigate("/login", { replace: true });
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
        <h1 className="h3 text-center py-3">
          Make the most of your professional life
        </h1>
        <Card
          style={{ width: "100%", maxWidth: "400px", marginInline: "auto" }}
        >
          <Card.Body>
            <Form
              onSubmit={userSignup}
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Password"
                  value={input.confirmPassword}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Agree & Join
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
              Already on LinkedIn?{" "}
              <Link to={"/login"} className="text-primary">
                Sign in
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Signup;
