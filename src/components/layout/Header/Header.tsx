import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderStart from "./HeaderStart/HeaderStart";
import { Container } from "react-bootstrap";
// import styles from "./style.module.css";

const Header = () => {
  return (
    <header className="py-2 bg-white">
      <Container>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <HeaderStart />
          <HeaderEnd />
        </div>
      </Container>
    </header>
  );
};

export default Header;
