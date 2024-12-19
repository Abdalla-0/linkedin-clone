import ContentLoader from "react-content-loader";

const HomeSkeleton = ({ width = "100%", height = "auto" }) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 400 200"
    style={{
      width: width, 
      height: height, 
    }}
    backgroundColor="#e8e8e8"
    foregroundColor="#f5f5f5"
  >
    <circle cx="20" cy="20" r="20" />
    <rect x="50" y="10" rx="3" ry="3" width="100" height="10" />
    <rect x="50" y="30" rx="3" ry="3" width="80" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="100%" height="120" />
  </ContentLoader>
);

export default HomeSkeleton;


