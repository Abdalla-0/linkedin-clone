import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import styles from "./style.module.css";
const SidebarEnd = () => {
  return (
    <div className="d-none d-lg-block">
      <Card style={{ marginBlockEnd: "8px" }}>
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Add to your feed
            <img className="ms-auto" src="images/feed-icon.svg" alt="" />
          </Card.Title>
          <div className="d-flex align-items-center gap-2 mb-3">
            <button className={`${styles.hashBtn}`}>#</button>
            <div className="d-flex flex-column align-items-center">
              #Linkedin
              <Button variant="outline-dark">Follow</Button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <button className={`${styles.hashBtn}`}>#</button>
            <div className="d-flex flex-column align-items-center">
              #Video
              <Button variant="outline-dark">Follow</Button>
            </div>
          </div>
          <Card.Link
            href="#"
            className="d-flex align-items-center gap-1 text-primary"
          >
            View all recomndations
            <FontAwesomeIcon icon={faRightLong} className="mt-1" />
          </Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <img className="img-fluid" src="images/banner-image.jpg" alt="" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SidebarEnd;
