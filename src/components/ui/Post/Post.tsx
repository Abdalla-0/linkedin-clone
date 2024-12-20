import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { actionGetPosts } from "@store/posts/postsSlice";
import Loading from "@components/common/FeedBack/Loading/Loading";
import styles from "./style.module.css";
import ModalDeletePost from "@components/common/Modals/ModalDeletePost/ModalDeletePost";

const Post = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  const [postId, setPostId] = useState("");

  // modal delete states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const deleteHandler = (id: string) => {
    setShow(true);
    setPostId(id);
  };

  useEffect(() => {
    dispatch(actionGetPosts());
  }, [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className={`${styles.cardPost}`}>
            <div className={`${styles.cardStart}`}>
              <div className={`${styles.userInfo}`}>
                <img
                  className={`${styles.img}`}
                  src={
                    post?.user?.photoURL
                      ? post?.user?.photoURL
                      : "/images/user.svg"
                  }
                  alt="Profile"
                />
                <div className="d-flex flex-column gap-1">
                  <h6>{post.user?.displayName}</h6>
                  <span className={`${styles.time}`}>
                    {new Date(post.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className={`${styles.actions}`}>
                <button onClick={() => deleteHandler(post.id)}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>

            <div className={styles.cardMiddle}>
              <p className="mb-2">{post.text}</p>
              {post.imageURL && (
                <img className="img-fluid" src={post.imageURL} alt="Post" />
              )}
              {post.videoURL && (
                <ReactPlayer width="100%" url={post.videoURL} />
              )}
            </div>

            <div className={styles.cardEnd}>
              <button className={styles.btnAction}>
                <span className={`${styles.btnTitle}`}>Like</span>
                <img src="images/like-icon.svg" alt="Like" />
              </button>
              <button className={styles.btnAction}>
                <span className={`${styles.btnTitle}`}>Comment</span>
                <img src="images/comment-icon.svg" alt="Comment" />
              </button>
              <button className={styles.btnAction}>
                <span className={`${styles.btnTitle}`}>Share</span>
                <img src="images/share-icon.svg" alt="Share" />
              </button>
              <button className={styles.btnAction}>
                <span className={`${styles.btnTitle}`}>Send</span>
                <img src="images/send-icon.svg" alt="Send" />
              </button>
            </div>
            <ModalDeletePost
              show={show}
              handleClose={handleClose}
              postId={postId}
            />
          </div>
        ))
      ) : (
        <p>There are no posts</p>
      )}
    </Loading>
  );
};

export default Post;
