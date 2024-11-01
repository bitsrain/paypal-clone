import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProfile } from "../actions/auth_actions";
import { selectProfileDue } from "../reducers/auth_reducer";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoaded = useSelector((state) => state.auth.isLoaded);
  const isProfileDue = useSelector(selectProfileDue);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isProfileDue) {
      dispatch(loadProfile());
    }
  }, [isProfileDue]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
 
  return (
    <Outlet />
  );
};

export default ProtectedRoute;
