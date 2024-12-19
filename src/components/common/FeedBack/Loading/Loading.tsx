import { TLoading } from "@types";
import HomeSkeleton from "../Skeletons/HomeSkeleton/HomeSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

const skeletonTypes = {
  home: HomeSkeleton,
};

type TLoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonTypes;
};

const Loading = ({loading, error, children, type = "home" }: TLoadingProps) => {
    const SkeletonComponent = skeletonTypes[type];
    if (loading === "pending") {
        return <SkeletonComponent/>;
    }
    if (loading === "failed") {
        return <LottieHandler type="error" message={error as string} />;
    }
    return children;
};

export default Loading;
