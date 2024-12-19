import { useAppSelector } from "@store/hook";
import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./style.module.css";
import ModalAddPost from "@components/common/Modals/ModalAddPost/ModalAddPost";
import { useState } from "react";
import Post from "@components/ui/Post/Post";
const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [modalToggler, setModalToggler] = useState(false);
  const AddPostHandler = () => {
    setModalToggler(true);
  };
  const handleClose = () => setModalToggler(false);
  return (
    <div className={`${styles.pageHome}`}>
      <Card>
        <Card.Body>
          <Row className="align-items-center gx-2 mb-3">
            <Col xs={"auto"}>
              <span className={`${styles.userPhoto}`}>
                <img
                  className="img-fluid"
                  src={user?.photoURL ? user?.photoURL : "/images/user.svg"}
                  alt=""
                />
              </span>
            </Col>
            <Col>
              <Button
                variant="light"
                className="rounded-5 w-100 border text-start px-3 py-2"
                onClick={AddPostHandler}
              >
                Start a post
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btnAction}`}>
                  <span>
                    <img src="/images/photo-icon.svg" alt="" />
                  </span>
                  Photo
                </button>
              </div>
            </Col>
            <Col>
              <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btnAction}`}>
                  <span>
                    <img src="/images/video-icon.svg" alt="" />
                  </span>
                  Video
                </button>
              </div>
            </Col>
            <Col>
              <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btnAction}`}>
                  <span>
                    <img src="/images/event-icon.svg" alt="" />
                  </span>
                  Event
                </button>
              </div>
            </Col>
            <Col>
              <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btnAction}`}>
                  <span>
                    <img src="/images/article-icon.svg" alt="" />
                  </span>
                  article
                </button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Post />
      <ModalAddPost show={modalToggler} handleClose={handleClose} />
    </div>
  );
};

export default Home;
