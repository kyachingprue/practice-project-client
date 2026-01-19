import { motion } from "motion/react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: profileData = {}, isLoading, isError } = useQuery({
    queryKey: ['profile', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${user?.email}`);
      // Since server returns array, pick first element
      return res.data[0] || {};
    }
  })


  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <p> Errror profile data...</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-20"
    >
      {/* Cover Image */}
      <div className="relative h-96 w-full px-12">
        <img
          src={profileData?.cover_image}
          alt="Cover"
          className="h-full w-full object-cover"
        />

        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-15 transform -translate-x-1/2">
          <img
            src={user?.photoURL || profileData?.image}
            alt="User Avatar"
            className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {user?.displayName || "Anonymous User"}
        </h1>

        <p className="text-gray-500 mt-1">
          {user?.email || "No email available"}
        </p>
        <p className="text-sky-700 text-xl py-2">
          {profileData?.role}
        </p>
      </div>
    </motion.div>
  );
};

export default Profile;
