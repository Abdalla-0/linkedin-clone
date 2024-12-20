import { actionLoginByGooglePopup } from "@store/auth/authSlice";
import styles from "./style.module.css";
import { useAppDispatch } from "@store/hook";
import { toast } from "react-toastify";
const BtnLoginWithGoogle = ({ height }: { height: string }) => {
  const dispatch = useAppDispatch();
  const loginWithGooglePopup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(actionLoginByGooglePopup()).unwrap();
      toast.success("Logged in successfully! 🎉");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message || "Login failed. Please try again.");
    }
  };
  return (
    <button
      className={`${styles.btnGoogle}`}
      onClick={(e) => loginWithGooglePopup(e)}
      style={{ height: height }}
    >
      <img src="/images/google.svg" alt="Google Icon" />
      Sign in with Google
    </button>
  );
};

export default BtnLoginWithGoogle;
