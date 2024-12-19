import { useAppSelector } from "@store/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { user } = useAppSelector((state) => state.auth);
  if (!user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default ProtectedRoutes;
