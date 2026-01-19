import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import useAuth from "../hooks/useAuth.jsx";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Attempt login
      await loginUser(data.email, data.password);

      // Only if login successful
      toast.success("Login successful!");
      navigate("/"); // Redirect home
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Please register or signup your account");
      } else if (error.code === "auth/wrong-password") {
        setError("password", { type: "manual", message: "Incorrect password" });
      } else if (error.code === "auth/invalid-email") {
        setError("email", { type: "manual", message: "Invalid email" });
      } else {
        toast.error("Please register your account !");
      }
    } finally {
      setLoading(false); // Stop loading in all cases
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://i.ibb.co.com/FkSjdkDR/download-1.jpg')" }}
      />

      {/* Form container */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8 sm:p-12 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
            <p className="text-sm text-right mt-1 text-purple-600 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${loading ? "cursor-not-allowed" : ""
              }`}
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-gray-700 text-center mt-5">
          Don’t have an account?{" "}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
