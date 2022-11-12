import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

type ProtectedRouteProps = {
  children: ReactElement
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />
  }
  return children;
};
