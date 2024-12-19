import { useState } from "react";
import { Button, Collapse, Form, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./style.module.css";
import ReactPlayer from "react-player";
import { actionAddPosts, actionGetPosts } from "@store/posts/postsSlice";
import { toast } from "react-toastify";

const AddPost = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [uploadItemsData, setUploadItemsData] = useState<{
    videoLink: string;
    postData: string;
  }>({
    videoLink: "",
    postData: "",
  });

  const [openAsset, setOpenAsset] = useState<{ [key: string]: boolean }>({
    image: false,
    video: false,
  });

  const [imgSrc, setImgSrc] = useState<string | null>("")

  const uploadItemsDataHandler = (type: string, value: string = "") => {
    setUploadItemsData((prev) => ({
      ...prev,
      [type]: value,
    }));
    setOpenAsset((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const uploadImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (!file) {
      alert("No file selected.");
      return;
    }
  
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
  
    const selectedImage = new FileReader();
    selectedImage.readAsDataURL(file);
    selectedImage.onload = () => {
      const selectedImageSource = selectedImage.result as string;
      setImgSrc(selectedImageSource);
    };
  };

  const resetModalHandler = () => {
    setUploadItemsData({ videoLink: "", postData: "" });
    setOpenAsset({ image: false, video: false });
    handleClose();
    setImgSrc("");
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const post = {
      photo: imgSrc,
      video: uploadItemsData.videoLink,
      user: user,
      postContent: uploadItemsData.postData,
      timestamp: null,
    };

    resetModalHandler();
    dispatch(actionAddPosts(post))
    dispatch(actionGetPosts())
      .unwrap()
      .then(() => {
        toast.success("Post added successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Modal show={show} onHide={resetModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className={`${styles.userPhoto}`}>
            <img
              className="img-fluid"
              src={user?.photoURL || "/images/user.svg"}
              alt="User"
            />
          </span>
          <h6>{user?.displayName}</h6>
        </div>
        <Form.Control
          className="border-0"
          as="textarea"
          autoFocus={true}
          rows={3}
          placeholder="What do you want to talk about?"
          value={uploadItemsData.postData}
          onChange={(e) => uploadItemsDataHandler("postData", e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer className="justify-content-start">
        <Collapse in={openAsset.image}>
          <div id="assetImage" className="m-0 w-100 text-center">
            <div className="mb-3">
              <label className=" mb-2" htmlFor="post-image" role="button">
                Select an image to share
              </label>
              <input
                id="post-image"
                className="d-none"
                type="file"
                accept="image/*"
                onChange={uploadImageHandler}
              />
              {imgSrc && (
                <img className="img-fluid" src={imgSrc} alt="Uploaded" />
              )}
            </div>
          </div>
        </Collapse>
        <Collapse in={openAsset.video}>
          <div id="assetVideo" className="w-100 my-0">
            <div className="pb-2">
              <Form.Control
                type="text"
                placeholder="Type your video URL here"
                value={uploadItemsData.videoLink}
                onChange={(e) =>
                  uploadItemsDataHandler("videoLink", e.target.value)
                }
              />
              {uploadItemsData.videoLink && (
                <ReactPlayer width={"100%"} url={uploadItemsData.videoLink} />
              )}
            </div>
          </div>
        </Collapse>
        <div className="d-flex align-items-center gap-3 w-100">
          <button
            onClick={() => uploadItemsDataHandler("image")}
            aria-expanded={openAsset.image}
            aria-controls="assetImage"
            disabled={openAsset.video}
          >
            <img src="/images/photo-icon.svg" alt="Upload Image" />
          </button>
          <button
            onClick={() => uploadItemsDataHandler("video")}
            aria-expanded={openAsset.video}
            aria-controls="assetVideo"
            disabled={openAsset.image}
          >
            <img src="/images/video-icon.svg" alt="Upload Video" />
          </button>
          <Button
            className="ms-auto px-4"
            variant="secondary"
            disabled={!uploadItemsData.postData && !imgSrc && !uploadItemsData.videoLink}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPost;
