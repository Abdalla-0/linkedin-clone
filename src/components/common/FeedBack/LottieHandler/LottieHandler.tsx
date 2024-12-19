import Lottie from "lottie-react";
import styles from "./style.module.css";
import loading from "@assets/lottieFiles/loading.json";
import error404 from "@assets/lottieFiles/error404.json";
import error from "@assets/lottieFiles/error.json";
import empty from "@assets/lottieFiles/empty.json";

const lottieFiles = {
  loading,
  error404,
  error,
  empty,
};

type TLotieProps = {
  type: keyof typeof lottieFiles;
  message?: string;
};

const LottieHandler = ({ type, message }: TLotieProps) => {
  const lottie = lottieFiles[type];
  return (
    <div className={`${styles.lottieHandlerBox}`}>
      <Lottie animationData={lottie} className={`${styles.lottieHandler}`} />
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
