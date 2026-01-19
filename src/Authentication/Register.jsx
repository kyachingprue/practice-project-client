import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import useAuth from "../hooks/useAuth.jsx";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const DEFAULT_PROFILE_URL =
    "https://i.ibb.co.com/dJ23xbkn/pngtree-user-profile-avatar-png-image-10211467.png";
  
  const cover_image =
    "https://i.ibb.co.com/KpKrv8bC/studio-shot-product-images.jpg";

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUser(data.email, data.password, {
        firstName: data.firstName,
        lastName: data.lastName,
      });
      await updateUserProfile({
        displayName: `${data.firstName} ${data.lastName}`,
        photoURL: DEFAULT_PROFILE_URL,
      });

      await axiosPublic.post("/users", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        image: DEFAULT_PROFILE_URL,
        cover_image: cover_image,
        role: "buyer"
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://i.ibb.co.com/FkSjdkDR/download-1.jpg')" }}
      />

      {/* Form container */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Create New Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div className="flex flex-col md:flex-row mx-auto w-full items-center gap-4">
            {/* First Name */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName", { required: "First name is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 mx-auto w-full">
            {/* Password */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${loading ? "cursor-not-allowed" : ""
              }`}
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {loading ? "Creating Account..." : "Create New Account"}
          </button>
        </form>

        <p className="text-sm text-gray-700 text-center mt-5">
          Already have an account?{" "}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
