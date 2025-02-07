
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-2">
          <img
            src="/lovable-uploads/4f40b49f-47bb-4642-9d43-ae338ead4964.png"
            alt="InstaPrint Logo"
            className="w-24 h-24 mx-auto"
          />
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back!</h1>
          <p className="text-gray-500">Sign in to continue to InstaPrint</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-2"
              required
            />
          </div>
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            Log In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => toast.info("Google Sign In coming soon!")}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </Button>

        <p className="text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/auth/register"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Register now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
