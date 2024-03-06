import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
export const ProtectedRoute = ({ children }: Props) => {
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
