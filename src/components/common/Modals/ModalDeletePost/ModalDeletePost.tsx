import { useAppDispatch } from "@store/hook";
import { actionDeletePosts } from "@store/posts/postsSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type TModalDeletePostProps = {
  show: boolean;
  handleClose: () => void;
  postId: string;
};

function ModalDeletePost({ show, handleClose, postId }: TModalDeletePostProps) {
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(actionDeletePosts(postId));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeletePost;
