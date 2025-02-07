
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // TODO: Implement actual registration logic
    toast.success("Registration successful!");
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
          <h1 className="text-2xl font-semibold text-gray-900">Welcome to InstaPrint!</h1>
          <p className="text-gray-500">Create your account</p>
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
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full px-4 py-2"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            Register Now
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Login now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
