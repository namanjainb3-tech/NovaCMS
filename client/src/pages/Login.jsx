import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../services/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      setLoading(true);
      setError("");
  
      const data = await googleLogin(
        credentialResponse.credential
      );
  
      login(data.token);
  
      navigate("/");
  
    } catch (err) {
  
      setError(
        err.response?.data?.message ||
        "Google login failed."
      );
  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md radius-theme-lg border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-xl"
      >
        <h1 className="text-3xl font-bold text-white">
          Welcome
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Sign in to access your dashboard.
        </p>

        <div className="mt-8">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError("Google login failed.")}
            theme="filled_black"
            shape="pill"
            size="large"
            width="100%"
          />

        {error && (
          <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}
        </div>
      </motion.div>
    </div>
  );
}
