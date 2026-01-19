import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // your auth hook
  const location = useLocation();

  // Default loading state (for auth check)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a small delay to show loading
    // Or wait until user is defined (null = not logged in, object = logged in)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5s default loading

    return () => clearTimeout(timer);
  }, [user]);

  // Show loading animation
  if (loading) {
    return <Loading />;
  }

  // Redirect if user not logged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render protected page
  return children;
};

export default PrivateRoute;
