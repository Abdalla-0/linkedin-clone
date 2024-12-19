import { actionLogin } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hook";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const userLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actionLogin({ email, password }));
  };
  return (
    <Container style={{ maxWidth: "700px" }}>
      <Form onSubmit={userLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
