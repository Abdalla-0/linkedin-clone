import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css"
const HeaderStart = () => {
  return (
    <div className={`${styles.headerStart}`}>
      <Link to={"/"}>
        <img src="/images/linkedin.png" alt="" />
      </Link>
      <div className={`position-relative w-100`}>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2 ps-4 bg-light" />
        <span className={`d-flex ${styles.searchIcon}`}><img src="/images/search-icon.svg" alt="search icon" /></span>
      </div>
    </div>
  );
};

export default HeaderStart;
