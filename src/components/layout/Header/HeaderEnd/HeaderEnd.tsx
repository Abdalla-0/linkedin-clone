import { NavDropdown } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { actionLogout } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const HeaderEnd = () => {
  const { user } = useAppSelector((state) => state.auth);

  const dipacth = useAppDispatch();
  const navigate = useNavigate();
  const logOutHandler = async () => {
    try {
      dipacth(actionLogout()).unwrap();
      toast.success("logged out successfully")
      navigate("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <nav className={`${styles.headerEnd}`}>
      <ul className={`${styles.navList}`}>
        <li>
          <a
            href="#home"
            className={`${styles.headerNavLink} ${styles.active}`}
          >
            <img
              className={`${styles.linkIcon}`}
              src="/images/nav-home.svg"
              alt=""
            />
            <span>Home</span>
          </a>
        </li>
        <li className={`${styles.hide}`}>
          <a href="#link" className={`${styles.headerNavLink}`}>
            <img src="/images/nav-network.svg" alt="" />
            <span>My Network</span>
          </a>
        </li>
        <li>
          <a href="#link" className={styles.headerNavLink}>
            <img src="/images/nav-jobs.svg" alt="" />
            <span>Jobs</span>
          </a>
        </li>
        <li>
          <a href="#link" className={styles.headerNavLink}>
            <img src="/images/nav-messaging.svg" alt="" />
            <span>Messaging</span>
          </a>
        </li>
        <li>
          <a href="#link" className={styles.headerNavLink}>
            <img src="/images/nav-notifications.svg" alt="" />
            <span>Notifications</span>
          </a>
        </li>
        <NavDropdown
          title={
            <div className="d-flex flex-column align-items-center">
              <span className={`${styles.userIcon}`}>
                <img
                  src={user?.photoURL ? user?.photoURL : "/images/user.svg"}
                  className={`img-fluid`}
                  alt=""
                />
              </span>
              <span className="d-flex align-items-center gap-1">
                <span className={`${styles.userTitle}`}>Me</span>
                <span>
                  <img src="/images/icon-down.svg" alt="" />
                </span>
              </span>
            </div>
          }
          id="basic-nav-dropdown"
          align="end"
        >
          <NavDropdown.Item
            href="#"
            style={{ fontSize: "12px" }}
            onClick={logOutHandler}
          >
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
        <li className={`${styles.hide}`}>
          <a href="#link" className={`${styles.headerNavLink} ${styles.work}`}>
            <img src="/images/nav-work.svg" alt="" />
            <span>Work</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderEnd;
