
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, FileText, MapPin, PrinterIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 animate-fadeIn">
            Print Documents Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with local print shops, upload your documents, and get high-quality prints delivered or ready for pickup.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button asChild size="lg">
              <Link to="/auth/login">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/auth/register">Register Shop</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Upload</h3>
            <p className="text-gray-600">
              Upload your documents in various formats including PDF, DOCX, and images
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Nearby Shops</h3>
            <p className="text-gray-600">
              Locate the nearest print shops and compare their services and prices
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PrinterIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Track Orders</h3>
            <p className="text-gray-600">
              Monitor your print orders in real-time and get notifications on status updates
            </p>
          </div>
        </div>

        {/* Print Shop Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Are you a print shop owner?</h2>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Join Our Network</h3>
              <p className="text-gray-600 mb-6">
                Register your print shop, manage orders efficiently, and grow your business with our platform.
              </p>
              <Button asChild>
                <Link to="/auth/register">Register Your Shop</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
