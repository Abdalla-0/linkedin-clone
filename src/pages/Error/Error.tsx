import LottieHandler from "@components/common/FeedBack/LottieHandler/LottieHandler";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <LottieHandler type="error404" />
      <span className="d-flex align-items-center gap-1">
        How about going back to
        <Link to="/" replace={true} className="btn btn-primary btn-sm">
          safety?
        </Link>
      </span>
    </Container>
  );
};

export default Error;
