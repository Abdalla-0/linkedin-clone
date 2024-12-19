import { Card } from "react-bootstrap";
import styles from "./style.module.css";
import { useAppSelector } from "@store/hook";
const SidebarStart = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className={`${styles.sidebarStart}`}>
      <Card
        text={"dark"}
        className="mb-2"
      >
        <Card.Header className={`p-0 position-relative ${styles.cardStart}`}>
          <span className={`${styles.userIcon}`}>
            <img className="img-fluid" src="/images/photo.svg" alt="" />
          </span>
        </Card.Header>
        <Card.Body className={`${styles.cardEnd}`}>
          <div className={`${styles.cardItem}`}>
            <div className="py-3 text-center">
              <Card.Title>
                Welcome, {user ? user.displayName : "there!"}
              </Card.Title>
              <Card.Text>
                <a href="" className="text-primary">
                  Add a photo
                </a>
              </Card.Text>
            </div>
          </div>
          <div className={`${styles.cardItem}`}>
            <div className="d-flex align-items-center">
              <div>
                <a href="#" className="d-flex text-black-50">Connections</a>
                <a href="#" className="d-flex">Grow your network</a>
              </div>
              <span className="d-flex ms-auto"><img src="images/widget-icon.svg" alt="" /></span>
            </div>
          </div>
          <div className={`${styles.cardItem}`}>
            <div className="d-flex align-items-center gap-1">
            <a href="#" className="d-flex">My items</a>
            <span className="d-flex"><img src="images/item-icon.svg" alt="" /></span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card
        text={"dark"}
        className="mb-2"
      >
        <Card.Body className={`${styles.cardEnd} rounded-2 p-0`}>
          <div className={`${styles.cardItem}`}>
            <div className="d-flex align-items-center">
              <div>
                <a href="#" className="d-flex text-black-50">Groups</a>
                <a href="#" className="d-flex">Events</a>
                <a href="#" className="d-flex">Follows Hashtags</a>
              </div>
              <span className="d-flex ms-auto"><img src="images/plus-icon.svg" alt="" /></span>
            </div>
          </div>
          <div className={`${styles.cardItem}`}>
            <a href="#" className="text-black-50">Discover more</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SidebarStart;
