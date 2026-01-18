import { motion } from "motion/react";
import useAuth from "../hooks/useAuth";

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80";

const DEFAULT_AVATAR =
  "https://i.ibb.co/2M7rtLk/default-avatar.png";

const Profile = () => {
  const { user } = useAuth();

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
          src={DEFAULT_COVER}
          alt="Cover"
          className="h-full w-full object-cover"
        />

        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-15 transform -translate-x-1/2">
          <img
            src={user?.photoURL || DEFAULT_AVATAR}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
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
      </div>
    </motion.div>
  );
};

export default Profile;
